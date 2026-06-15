# DianaAF Makeup Landing Page Plan

## Summary
Build a static-first Next.js App Router landing page for **DianaAF Makeup**, optimized for mobile Instagram traffic, WhatsApp booking, portfolio browsing, accessibility, local SEO, and fast Vercel deployment.

The app will be created from the mostly empty workspace as a complete TypeScript + Tailwind project with no heavy UI libraries or animation packages.

## Project Structure
Create the requested core files:

```text
package.json
next.config.ts
tsconfig.json
postcss.config.mjs
tailwind.config.ts
src/app/layout.tsx
src/app/page.tsx
src/app/globals.css
src/components/Header.tsx
src/components/Hero.tsx
src/components/PortfolioGallery.tsx
src/components/Services.tsx
src/components/About.tsx
src/components/FAQ.tsx
src/components/Contact.tsx
src/components/Footer.tsx
src/lib/data.ts
src/lib/seo.ts
src/lib/utils.ts
public/images/...
```

## Key Changes
- Use semantic sections for header, hero, portfolio, services, about, contact, FAQ, and footer.
- Use a warm premium visual system: ivory, nude, champagne, rose accents, and warm brown text with strong contrast.
- Use `next/image` for hero and portfolio images with fixed aspect ratios to avoid layout shift.
- Add realistic placeholder image paths under `public/images/...`; leave TODO comments only for real phone number, Instagram URL, canonical URL, address, and real image replacement.
- Implement portfolio filtering as one small client component with typed categories: Wedding, Engagement, Graduation, Bridesmaid, and Party.
- Implement contact form UI as a client component that generates a prefilled WhatsApp link from name, date, event type, location, and message.
- Keep the rest of the page static server-rendered for performance.

## Public Interfaces And Data
- `src/lib/data.ts` will export typed arrays for portfolio items, services, trust indicators, and FAQ content.
- `src/lib/seo.ts` will export metadata constants and JSON-LD builders for:
  - `BeautySalon` or `HealthAndBeautyBusiness`
  - service offer catalog
  - FAQPage
- Placeholder constants will be centralized for:
  - WhatsApp number
  - Instagram URL
  - canonical site URL
  - address/service-area note
- Metadata will include title, description, keywords, Open Graph, Twitter card, robots, canonical URL placeholder, and Indonesian locale.

## Test Plan
- Run `npm run build` to verify TypeScript, Next.js compilation, metadata, and static rendering.
- Run `npm run lint` if configured by the scaffold.
- Manually verify mobile and desktop layouts with the local dev server.
- Check keyboard access for nav links, gallery filters, form fields, and CTA links.
- Confirm only one `h1`, proper `h2`/`h3` hierarchy, semantic landmarks, descriptive alt text, and visible focus states.
- Confirm JSON-LD renders valid sanitized JSON and does not invent a precise street address.

## Assumptions
- Use npm with the local Node.js `v20.20.0`.
- Use current stable Next.js, React, TypeScript, Tailwind CSS, PostCSS, and Autoprefixer compatible with Node 20.
- No backend form submission is required; WhatsApp message generation is enough.
- Real business assets and contact details are unavailable, so placeholders will be explicit and easy to replace.
- The site will be optimized for deployment to Vercel as a static-first marketing page.
