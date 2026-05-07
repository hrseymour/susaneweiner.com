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

## Deploying to Cloudflare Pages

### Subsequent deploys
```bash
git add .
git commit -m "Update: <what you changed>"
git push
```
Cloudflare Pages picks up the push and deploys to the global edge in ~30 seconds. Preview URLs are generated for each commit.

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
