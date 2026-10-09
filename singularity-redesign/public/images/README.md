# Site images

To change an image, replace the file with a new one **of the same name and format**. No code changes are needed.

| File | Where it appears | Suggested size |
|---|---|---|
| `home/hero.jpg` | Home page hero, full width behind the title (the left side is darkened for text) | 2400 × 1200 or larger |
| `home/about.jpg` | Home page, "What is Singularity?" | 1600 × 1000 (16:10) |
| `home/research.jpg` | Home page, "Research at Singularity" | 1600 × 1000 (16:10) |
| `labs/<lab>.jpg` | That laboratory's card and the top of its page | 1600 × 900 (16:9) |
| `brand/logo.png` | Logo in the header and footer | White or black shape on a transparent background |

Lab file names match the lab's web address:

- `labs/prajna-kritrima.jpg`
- `labs/aanu-tattva.jpg`
- `labs/chitra-darshan.jpg`
- `labs/varahamihira.jpg`
- `labs/bhaskaracharya.jpg`
- `labs/agastya.jpg`
- `labs/navya-vigyan.jpg`

**About the logo:** the site uses only the logo's shape and recolours it (crimson in the header, white in the footer), so it must be a PNG with a transparent background. The browser-tab icon is a separate file, `src/app/icon.png`.

Images are cropped to fit their frames, so keep the main subject near the centre. In the hero, keep it on the right-hand side.

After replacing a file, run `npm run build` again so the new image is picked up.
