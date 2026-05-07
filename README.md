# Susan E. Weiner Consulting — Website

Source for **[susaneweiner.com](https://www.susaneweiner.com)** — a static HTML/CSS site for Susan E. Weiner's developmental editing and honorific awards consulting practice.

Migrated from Wix (`susaneweinerediting.com`) for performance, control, and zero hosting cost on Cloudflare Pages.

---

## Stack

| Layer    | Choice                                          | Why                                                  |
|----------|-------------------------------------------------|------------------------------------------------------|
| HTML     | Hand-written, one file per page                 | No build step, no framework, no surprises            |
| CSS      | Single stylesheet, CSS custom properties        | Tokens for colors / type / spacing live in `:root`   |
| JS       | ~30 lines, vanilla, no dependencies             | Mobile menu toggle + active-link marking only        |
| Fonts    | Google Fonts (Cormorant Garamond + Inter Tight) | Editorial serif + clean sans, no self-hosting        |
| Hosting  | Cloudflare Pages                                | Free, fast, global CDN, automatic HTTPS              |
| Source   | GitHub                                          | Pages auto-deploys on push to `main`                 |

No backend. No database. No build pipeline. Edit a file, push to `main`, it's live in ~30 seconds.

---

## Repository layout

```
susaneweiner.com/
├── index.html                       Home
├── about.html                       Bio, education, experience, publications
├── developmental-editing.html       Service: editing
├── honorific-awards.html            Service: nominations
├── projects.html                    Testimonials
├── contact.html                     Email + LinkedIn
├── 404.html                         Custom not-found page
├── css/
│   └── style.css                    All styles, design tokens at top
├── js/
│   └── main.js                      Mobile nav toggle, current-page indicator
├── images/
│   └── favicon.svg                  SW monogram favicon
├── _headers                         Cloudflare Pages: security + cache headers
├── _redirects                       301s from old Wix URLs
├── robots.txt
├── sitemap.xml
├── LICENSE                          MIT for code; content (c) Susan
├── .gitignore
└── README.md                        This file
```

---

## Local preview

Any static file server works.

**Python (already on most systems):**
```bash
cd susaneweiner.com
python3 -m http.server 8000
# open http://localhost:8000
```

**VS Code:** install the *Live Server* extension, right-click `index.html` → *Open with Live Server*.

**Node:**
```bash
npx serve .
```

> **Note on `_redirects` and `_headers`:** these are processed by Cloudflare Pages at the edge and are **not** active during local preview. They take effect on the deployed site only.

---

## Editing common things

### Update text
Open the relevant `.html` file. The structure is intentionally readable — find the heading or paragraph, edit, save, commit.

### Change colors
Open `css/style.css`. The first ~25 lines define every color used:
```css
:root {
  --color-bg:          #fbf6ee;   /* page background — warm off-white */
  --color-bg-alt:      #f4ead8;   /* section background — deeper cream */
  --color-accent:      #c87a5e;   /* coral — links, accents, monogram */
  --color-accent-soft: #fee6c4;   /* peach — large ornaments only */
  --color-ink:         #1a1614;   /* body text — warm near-black */
  --color-ink-soft:    #514a44;   /* secondary text */
  --color-rule:        #d9cfbe;   /* hairline dividers */
}
```
Change a value here and it propagates everywhere. The palette honors the existing Wix site's warm peach/cream while deepening the accent for better contrast.

### Change fonts
Two changes are needed:
1. The `<link>` tag in each HTML `<head>` that loads Google Fonts.
2. The `--font-serif` / `--font-sans` variables at the top of `css/style.css`.

### Add a page
1. Copy any existing page (e.g. `about.html`) → rename to `your-new-page.html`.
2. Edit the title, meta description, canonical URL, and body content.
3. Add a link to it in the `<nav>` of every page (yes, by hand — seven files. The trade-off for not having a build step).
4. Add an entry to `sitemap.xml`.

### Add a redirect
Edit `_redirects`. Format is `from-path  to-path  status-code`, one per line. Cloudflare Pages reads it at deploy time.

---

## Deploying to Cloudflare Pages

### One-time setup

1. **Create the GitHub repo and push:**
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:YOUR-USERNAME/susaneweiner.com.git
   git push -u origin main
   ```

2. **Create the Cloudflare Pages project:**
   - Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
   - Authorize GitHub, pick this repo
   - Build settings:
     - Framework preset: **None**
     - Build command: *(leave empty)*
     - Build output directory: `/` *(or leave empty)*
   - **Save and Deploy**

3. **Attach the custom domain:**
   - Pages project → **Custom domains** → **Set up a custom domain**
   - Add `susaneweiner.com` and `www.susaneweiner.com`
   - If the domain is at Cloudflare, DNS auto-configures. If elsewhere, follow the on-screen instructions.

4. **Verify** by visiting `https://www.susaneweiner.com/about-5` — it should 301 to `/about.html`.

### Subsequent deploys
```bash
git add .
git commit -m "Update: <what you changed>"
git push
```
Cloudflare Pages picks up the push and deploys to the global edge in ~30 seconds. Preview URLs are generated for each commit.

---

## Migration checklist (Wix → Cloudflare)

- [ ] Repo pushed to GitHub
- [ ] Cloudflare Pages project deploying successfully on a `*.pages.dev` URL
- [ ] Reviewed every page on the preview URL (mobile + desktop)
- [ ] **Confirmed Susan owns `susaneweinerediting.com` at a real registrar** (not locked in Wix). If locked, transfer it out *before* doing anything else.
- [ ] Decision made: keep `susaneweinerediting.com`, switch to `susaneweiner.com`, or run both (with the old redirecting to the new)
- [ ] DNS pointed at Cloudflare Pages
- [ ] HTTPS active (Cloudflare provisions automatically — wait a few minutes after DNS)
- [ ] Old Wix URLs redirect correctly (test `/about-5`, `/contact-8-1`, etc.)
- [ ] **Email link tested** — `mailto:susanweinerediting@gmail.com` opens to Susan's gmail (the old site had a placeholder `info@mysite.com` bug)
- [ ] LinkedIn link tested
- [ ] Submit new sitemap to Google Search Console
- [ ] Wix subscription cancelled

---

## Design notes

A few decisions worth recording so they aren't undone by accident:

- **Typography is the primary design element.** For an editor's site, this is the right move. Cormorant Garamond (serif) + Inter Tight (sans) — classical pairing, signals craft.
- **Restrained palette, generous whitespace, narrow text column.** Body copy is constrained to a ~38rem measure (≈ 65 characters) for readability. Academic readers respect a well-set page.
- **No stock photography.** The original Wix site used a generic mountain-at-sunrise hero image that undercut the message. The new site uses an oversized italic ampersand as the hero ornament — a typographic flourish that signals editorial craft instead.
- **No clip-art icons.** Services are presented as numbered editorial entries (i., ii.) under hairline rules, not as cards with cartoon icons.
- **Subtle paper-grain texture** is applied via inline SVG noise in `body::before`. Adds warmth without weight. Easy to disable — set `opacity: 0` on that pseudo-element.
- **The mobile menu is a single button toggling a stacked list.** No fancy drawer, no animation library. It works.

---

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari — last two major versions). No IE. Uses CSS custom properties, `clamp()`, `backdrop-filter`, flexbox, and grid. Tested cleanly on iOS Safari and Android Chrome.

---

## Credits

- Content & copy: (c) Susan E. Weiner
- Design & implementation: Migrated from Wix, May 2026
- Fonts: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) by Christian Thalmann, [Inter Tight](https://fonts.google.com/specimen/Inter+Tight) by Rasmus Andersson — both via Google Fonts, OFL licensed.

---

## License

See [`LICENSE`](./LICENSE). Code is MIT. Content (the words on the pages) is (c) Susan E. Weiner, all rights reserved.
