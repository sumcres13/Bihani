# BIHANI ビハニ

The complete four-page restaurant website, ready to serve from `dist/`. Japanese is the default; the JP/EN switch provides English. The approved site files, images, typography markup, responsive styles, gallery, and hero animation are preserved exactly.

## Deploy or preview

Publish **`dist`** as the static website directory. No compilation or runtime dependencies are required.

```sh
npm ci
npm run build
npm run dev -- --host 0.0.0.0 --port 3000
```

`npm run build` verifies the files and does not transform them. Node.js 18+ is needed only for these helper commands. Alternatively, use any static server, such as `python -m http.server 3000 --directory dist`.

See [MANUS_IMPORT.md](MANUS_IMPORT.md) for the hosting settings and a ready-to-use import prompt. Manus deployment has not been performed in this repository preparation task.

## Lossless transfer

- `dist/`: the exact finished site, including every photograph and logo.
- `SHA256SUMS.txt`: SHA-256 hashes of all 31 site files.
- `.gitattributes`: preserves exact bytes without automatic newline conversion.
- Git tag `v1.0.0`: the initial approved handoff snapshot.
- Release ZIP and its SHA-256 checksum: an additional lossless copy.

After cloning, run `npm run build` to confirm the site matches the manifest. Keep all `.html` filenames and relative asset paths.

## BudouX is preserved

BudouX 0.10.0 phrase markup is already present in the Japanese introduction and the three marked store descriptions. CSS scopes the store-description wrapping to mobile. The rest of the site's wrapping is unaffected.

The parser source, Japanese model, other package models, metadata, and license are vendored in `tools/python-packages/`. No parser request or external script is needed by visitors. To regenerate the markup, use Python 3.11+:

```sh
python tools/generate_budoux.py
```

Generated markup remains active when switching back from English to Japanese. See [third-party notices](THIRD_PARTY_NOTICES.md).

## Structure

- `dist/index.html`: home.
- `dist/about.html`: representative message and restaurant overview.
- `dist/stores.html`: store, gallery, station access, and map.
- `dist/reservation.html`: reservation and delivery links.
- `dist/styles.css`, `dist/refinements.css`, `dist/script.js`: presentation and behavior.
- `dist/assets/`: original images, logos, and vector artwork.
- `tools/`: integrity verifier, static server, and reproducible BudouX generator.
- `docs/DESIGN_NOTES.md`: implementation notes from the completed design.

Google Fonts, Google Maps, and linked restaurant/delivery/LINE services remain external, as in the original preview. Their availability is not controlled by this repository.

Local revision backups, temporary screenshots, credentials, and Python caches are excluded from Git. Public visibility is not a license grant for the restaurant photographs, logos, or site code.
