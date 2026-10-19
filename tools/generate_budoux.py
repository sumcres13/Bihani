"""Generate scoped phrase markup using the local BudouX 0.10.0 package."""
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'tools/python-packages'))
import budoux

parser = budoux.load_default_japanese_parser()
script_path = ROOT / 'dist/script.js'
html_path = ROOT / 'dist/index.html'
script = script_path.read_bytes().decode('utf-8')
document = html_path.read_bytes().decode('utf-8')
keys = ['aboutBody', 'homeQuality1Text', 'homeQuality2Text', 'homeQuality3Text']
for key in keys:
    pattern = r'("' + key + r'": )("(?:[^"\\]|\\.)*")'
    match = list(re.finditer(pattern, script))[-1]
    previous = json.loads(match.group(2))
    plain = html.unescape(re.sub(r'<[^>]+>', '', previous))
    phrases = parser.parse(plain)
    if key == 'homeQuality3Text':
        # Keep service names intact without creating one overlong phrase.
        phrases = [part for phrase in phrases for part in re.findall(r'[^・]+・?', phrase)]
    markup = '<wbr class="budoux-break">'.join(
        '<span class="budoux-phrase">' + html.escape(part) + '</span>'
        for part in phrases
    )
    assert ''.join(phrases) == plain
    script = script[:match.start(2)] + json.dumps(markup, ensure_ascii=False) + script[match.end(2):]
    paragraph = r'(<p\b[^>]*data-i18n="' + key + r'"[^>]*>)(.*?)(</p>)'
    def replace_paragraph(m):
        opening = re.sub(r' data-budoux="[^"]*"', '', m.group(1))
        scope = 'always' if key == 'aboutBody' else 'mobile'
        opening = opening[:-1] + ' data-budoux="' + scope + '">'
        return opening + markup + m.group(3)
    document, count = re.subn(paragraph, replace_paragraph, document, flags=re.S)
    assert count == 1, key
script_path.write_bytes(script.encode('utf-8'))
html_path.write_bytes(document.encode('utf-8'))
print('Generated BudouX markup for exactly four home-page paragraphs.')
