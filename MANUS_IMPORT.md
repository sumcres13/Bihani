# Import and host the existing BIHANI website

Repository: https://github.com/sumcres13/Bihani

This is an already completed static website. Use the existing files; no framework conversion, design regeneration, image recompression, or text rewriting is needed.

## Hosting settings

- Project root: repository root.
- Runtime for the supplied preview server: Node.js 18 or newer.
- Install: no dependencies are required (`npm ci` is also supported).
- Build/check: `npm run build`.
- Static publish/output directory: `dist`.
- Preview/server command if required: `npm run dev -- --host 0.0.0.0 --port 3000`.
- `PORT` and `HOST` environment variables are supported.
- Entry document: `dist/index.html`.
- Retain the other `.html` pages and all relative asset paths.

The build command verifies the site and leaves every file unchanged. A static hosting service can serve `dist` directly without Node.js or Python.

## Prompt to give Manus

> Import https://github.com/sumcres13/Bihani at tag v1.0.0. Host the existing static website from dist/. Run npm run build to verify the SHA-256 checksums. Preserve every file in dist/ exactly, including Japanese/English text, BudouX phrase markup, CSS, JavaScript, photographs, logos, animation, links, and responsive behavior. Do not regenerate or redesign it. If a preview server is required, run npm run dev -- --host 0.0.0.0 --port 3000. Verify all four pages, the JP/EN switch, gallery, hero zoom, mobile styles, and external links before publishing.

## BudouX is already included

The phrase boundaries are built into `dist/index.html` and the Japanese translations in `dist/script.js`. They work without a CDN, Python, or a parser download at runtime. BudouX 0.10.0 source, models, metadata, and Apache-2.0 license are vendored under `tools/python-packages/` for reproducibility.

Optional regeneration with Python 3.11 or newer:

```sh
python tools/generate_budoux.py
npm run build
```

Do not update `SHA256SUMS.txt` merely to hide an unexpected mismatch. Investigate a mismatch first. Intentional future edits require reviewing the change and refreshing the manifest.

## What is and is not preserved

Git and the release ZIP preserve the repository files losslessly. `.gitattributes` disables automatic newline conversion; `SHA256SUMS.txt` records every site file. The release has a separate ZIP checksum.

Google Fonts, the Google Maps embed, and the restaurant/delivery/LINE destinations remain external services, as in the approved preview. Their availability and content are outside this repository. Actual Manus hosting should be checked after import; matching source bytes alone cannot guarantee an external platform's settings or behavior.
