# The apps site

A small static site (Astro) that introduces the apps, shows where to get them (the web today, with App Store and Google Play placeholders), and holds the support,
terms, privacy and refund pages. It is the page Stripe and customers will look at.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # writes dist/
```

## Change these first (`src/config.ts`)

| Setting | What it is |
| --- | --- |
| `site.name` | The brand name. It is a working name ("Waz Apps"); changing it changes the header, footer and page titles |
| `site.contactEmail` | Where feedback and questions go. It appears on Support, Terms, Privacy and Refunds |
| `site.legalReviewed` | Leave `false` until a lawyer has looked at the legal pages. While it is `false` they show a "draft" notice |
| `apps[]` | Each app's name, text, features, accent colour, icon (`public/img/`), status and live link (`appUrl`) |

Each app gets its own page at `/<slug>/` (`/simple-kennel/`, `/coach-board/`, `/heirloom/`, `/family-game-night/`, `/steady/`, `/fishlog/`) from
`src/pages/[slug].astro`. Add an app by adding an entry to `apps`.

## Publishing

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main` (Settings → Pages → Source =
"GitHub Actions"). For a user site (`<user>.github.io`) the site lives at the root. For a custom domain, add the domain in
the repo's Pages settings and set `SITE_URL` to it. All links are relative to the site's base, so nothing else changes. If the
site ever lives under a sub-path, build with `SITE_BASE=/that-path`.

## To do before launch

* Pick the name and buy the domain; update `site.name`, `SITE_URL` and each app's `appUrl` (point them at the domain).
* Real contact email; have the legal pages reviewed, then set `legalReviewed: true`.
* Screenshots of each app on its page.
* Pricing, once decided, in each app's `pricing` text.
