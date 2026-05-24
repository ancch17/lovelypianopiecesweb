# Lovely Piano Pieces — website

The customer-facing storefront for Lovely Piano Pieces. Visitors browse the catalog,
listen to each piece on YouTube, and buy the sheet music via Gumroad.

This is a static site — plain HTML, CSS, and JavaScript. No build step, no framework,
no server. It is designed to be hosted free on **GitHub Pages**.

## Files

| File         | Purpose                                                      |
|--------------|--------------------------------------------------------------|
| `index.html` | Homepage with hero, catalog grid, about, footer              |
| `styles.css` | All styling — elegant, minimal, warm cream palette           |
| `pieces.js`  | The catalog data. **Edit this file to add or change pieces.** |
| `app.js`     | Renders the catalog and handles the mood / level filters     |

## How to add a new piece

1. Open `pieces.js`.
2. Copy one of the existing entries and paste it as a new object in the `PIECES` array.
3. Fill in:
   - `title`        — e.g. `"Autumn Window"`
   - `mood`         — one short label (`"Reflective"`, `"Hopeful"`, `"Cinematic"`, etc.)
   - `difficulty`   — `"Beginner"`, `"Intermediate"`, or `"Advanced"`
   - `length`       — e.g. `"3:24"`
   - `price`        — display price as a string, e.g. `"$4"`
   - `description`  — one short sentence
   - `youtube`      — full URL to the piece on your YouTube channel
   - `gumroad`      — full URL to the Gumroad product page for this score
   - `coverColor`   — any CSS color for the cover background
   - `coverInitial` — the letter shown on the cover
4. Commit and push. GitHub Pages will redeploy automatically.

## Hosting on GitHub Pages

1. Push this repo to GitHub (it is already at
   `https://github.com/ancch17/lovelypianopiecesweb`).
2. On GitHub, open **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/ (root)**. Save.
5. After a minute or two the site will be live at:

   `https://ancch17.github.io/lovelypianopiecesweb/`

## Setting up Gumroad (e-commerce)

For each piece:

1. Create a Gumroad account at gumroad.com.
2. Click **New product → Digital product**.
3. Upload the PDF score, set the price, add the cover image and a short description.
4. Publish. Copy the product URL (looks like `https://gumroad.com/l/abc123`).
5. Paste it into the matching piece's `gumroad` field in `pieces.js`.

Gumroad handles payment, instant PDF delivery, re-download links, and international
tax — you don't have to build any of that.

## Local preview

This is a plain static site. To preview locally, just open `index.html` in a browser.
Or run a quick local server from the project folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Future ideas

- Per-piece detail pages with embedded YouTube player and PDF preview
- Bundle pricing (e.g. "All reflective pieces — $15")
- Newsletter signup for new releases
- Move catalog from `pieces.js` to a small CMS (Airtable / Supabase) once the catalog grows past ~30 pieces
