# BIHANI ビハニ website

Four-page static site adapted from the supplied Royal Kitchen codebase. No build or dependency installation is required. The original project was left untouched.

## Preview

Serve `dist` using any static HTTP server, for example:

```sh
python -m http.server 8000 --directory dist
```

Open http://localhost:8000/ . Japanese is the default; English is available through the language switcher. `dist/index.html` can also be opened directly for a local view.

## Palette

- Deep teal `#1D5A55`: tablecloths; footer, branding and buttons.
- Warm ivory `#F6F0E4`: plaster walls; content backgrounds.
- Honey gold `#C99546`: wood and lighting; details and highlights.

Darker teal and lighter ivory variants provide readable text contrast. Delivery partner logos retain their recognizable brand colors. The supplied transparent BIHANI logos are used for visual branding. Culinary edge artwork is original vector line art in the shop palette.

## Content decisions

The supplied Japanese representative message is preserved. The representative name SHARMA SOMNATH was supplied in a follow-up request; no company legal name was supplied. Only the restaurant telephone is published; the personal mobile number was removed. Conflicting holiday data is represented as a request to contact the restaurant. Revenue and submission metadata are excluded from the public site. The six supplied photos are copied without image processing. All restaurant listing, delivery and LINE destinations and the map embed use the supplied data; live service availability has not been independently checked.

## Files

`dist/index.html`, `about.html`, `stores.html`, `reservation.html`: pages. `styles.css`: retained layout. `refinements.css`: BIHANI theme. `script.js`: shared navigation, translations and accessible gallery controls. `assets/`: photographs, partner logos and vector artwork.

## October 19 refinements

White navigation with green hover feedback; square call-to-action buttons; minimal JP/EN toggle; black photo overlays; a teal gradient footer; supplied logos; culinary line art at section edges; a subtle values-section wave; matching desktop representative photo and message heights; a lighter overview table; a tighter exterior crop; five-second gallery playback with black controls and no image tint; map access guidance.

## Second design refinement

The home header is transparent with a white logo at the top and becomes white on scroll. Navigation uses a bright green hover fill with no underlines. The language toggle is a sliding segmented button. Hero arrows and the store-information kicker were removed. About and home-reservation actions use square orange buttons with white text; feature markers are bright orange. The interior photo has an arched linen-inspired frame; the representative message uses a folded-letter treatment with a branded signoff. The overview table uses a plain restaurant name. Map guidance is centered description text. The slideshow has a mounted-photo frame and culinary edge art.

## Color and attribution adjustment

Navigation hover uses bright green text and a matching glow, with a transparent background and no underline. Both orange CTAs use the lighter #E7792B. Hero overlay alpha is reduced by 20 percent, and the first values icon is yellow. The branded message signoff has been removed and replaced with the requested Representative Director title; the owner name is SHARMA SOMNATH, supplied by the owner in the follow-up request.

## Rectangular frames and station access

Interior photo framing now uses square corners and the full uncropped image, with a simple restaurant name beneath it. Both photo/slideshow explanation strips were removed; the slideshow has no footer logo. Gallery pagination uses white circular dots with 24px hit areas. Access copy gives approximately 10 minutes on foot from Hankyu Mukonoso Station (south exit) and 15 minutes from JR Tachibana Station, with the Yamate-kansen Road sign as a landmark. Sources checked October 19, 2026: https://tabelog.com/hyogo/A2803/A280304/28032118/ and https://map.yahoo.co.jp/v3/place/Sp_cchaiy3k .


## Hero punctuation alignment

The Japanese hero headline retains its final comma and full stop in half-em inline boxes, removing their trailing half-em whitespace before centering. Each ending stays with the preceding character when wrapping. English typography is unchanged.


## Larger interior photograph

The home introduction now gives the full uncropped photo a wider column in a 1320px layout. The name strip and mounted-card frame are removed. Two fine offset corner marks and a subtle shadow provide a minimal finish; mobile retains a full-width photo above the copy.


## Hero motion

The hero photograph slowly zooms from 100% to 108.5% over 24 seconds, then smoothly reverses. Only the background photograph animates; text and controls stay fixed. Reduced-motion preferences disable the effect.


## Immediate full-screen hero

The hero uses dynamic viewport height with a viewport-height fallback. Its image is preloaded, and the 24-second zoom uses linear timing with no delay so movement starts immediately on load/reload. Reduced-motion behavior remains in place.


## Scoped Japanese phrase wrapping and mobile colors

BudouX 0.10.0 generates phrase boundaries at authoring time via tools/generate_budoux.py. It applies only to the home introduction paragraph at all sizes, plus the three store-description paragraphs on mobile (760px and below). English and other areas retain their existing wrapping. Delivery service names stay intact. The mobile SNS overlay is uniform 55% black (roughly 40% less than the prior 92% black endpoint); the desktop gradient remains. The mobile hero reservation button uses lighter teal #35786E. BudouX: https://github.com/google/budoux .
