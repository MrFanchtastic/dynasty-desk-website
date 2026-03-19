# Dynasty Desk — Marketing Website

Production-ready marketing site for **Dynasty Desk**, a mobile American football franchise management simulation game.

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and TypeScript. Deploys to [Vercel](https://vercel.com) with zero additional configuration.

## Local Development

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:4321`.

## Environment Variables

| Variable      | Values                    | Description                                      |
| ------------- | ------------------------- | ------------------------------------------------ |
| `LAUNCH_MODE` | `coming_soon` (default) / `live` | Controls pre-launch vs full landing page display |

Copy `.env.example` to `.env` and set the value:

```bash
cp .env.example .env
```

## Deployment (Vercel)

1. Connect this repository to Vercel
2. Set the `LAUNCH_MODE` environment variable in the Vercel dashboard
3. Deploy — no additional configuration needed (`vercel.json` is included)

## Adding Assets

### Logo & App Icon
Drop your logo files into `public/images/`:
- `logo-mark.png` — Icon only (used at small sizes, nav, footer)
- `logo-full.png` — Icon + wordmark (used at nav scale)
- `icon-512.png` — App icon for Open Graph / social sharing

### Screenshots
Drop 6 app screenshots into `public/images/screenshots/`:
- `screen-1.png` through `screen-6.png`
- Recommended: 1290×2796 px (iPhone 15 Pro Max) or similar mobile aspect ratio

### Wiring Up Mailchimp
Find the `#email-capture` div in `src/components/EmailCapture.astro` and replace its contents with your Mailchimp embedded form code.

### Updating Store Links
Search for `TODO` comments to find all placeholder links:

```bash
grep -r "TODO" src/
```

Key placeholders:
- App Store URL
- Google Play URL
- Discord invite URL
- Social media profile URLs (X, TikTok, Instagram, YouTube, Reddit)

## Project Structure

```
src/
  pages/
    index.astro        — Home / landing page
    privacy.astro      — Privacy Policy
    support.astro      — Support / FAQ
  components/
    Nav.astro          — Sticky navigation
    Hero.astro         — Hero section with countdown (coming_soon) or full CTA (live)
    Features.astro     — 4-card feature grid
    Screenshots.astro  — Horizontal scroll phone mockups
    EmailCapture.astro — Mailchimp placeholder
    AppStoreButtons.astro — App Store + Google Play badges
    Footer.astro       — Footer with social links
  layouts/
    Base.astro         — HTML shell, fonts, meta, OG tags
public/
  images/              — Logo, icon, and screenshot assets
```

## Tech Stack

- **Framework:** Astro (static output)
- **Styling:** Tailwind CSS v3
- **Language:** TypeScript (strict)
- **Deployment:** Vercel
