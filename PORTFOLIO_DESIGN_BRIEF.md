# Portfolio Design Brief — Monochrome Editorial

## 1. Project direction

Build a modern, minimal, monochrome portfolio for a Full Stack Developer using **Next.js**.

The visual reference is `reference-hero.png`. Use it as the primary visual direction for the overall feel and especially the hero section. The goal is not to copy the reference pixel-for-pixel, but to preserve its design language:

- Calm, clean, confident and understated.
- Mostly neutral colors, with nuanced off-whites and charcoals rather than stark pure black and pure white.
- Strong typography, generous whitespace and deliberate alignment.
- Subtle shadows, thin borders and restrained rounded surfaces.
- Content and project work should remain the focus.

The portfolio should feel like a carefully art-directed personal site, not a generic developer template.

## 2. Design principles

1. **Subtle contrast over harsh contrast** — avoid using `#FFFFFF` and `#000000` as the only colors across the whole interface.
2. **Whitespace is a design element** — give sections room to breathe and avoid packing every area with cards.
3. **Typography creates hierarchy** — use large, confident headings and readable body text.
4. **Use surfaces sparingly** — cards should exist only when they help group or compare content.
5. **Motion should be quiet** — use short, purposeful transitions; avoid distracting animations and excessive scroll effects.
6. **Responsive by design** — layouts must be composed for mobile, tablet, laptop and wide screens rather than merely shrunk down.

## 3. Color system

Use these as the initial design tokens. They can be tuned after implementation, but preserve the warm-neutral character.

| Token | Hex | Intended use |
|---|---|---|
| `--color-background` | `#FAFAF8` | Main page background |
| `--color-foreground` | `#171717` | Main text and high-emphasis elements |
| `--color-muted` | `#737373` | Supporting text and metadata |
| `--color-surface` | `#EEEEEC` | Soft badges and secondary surfaces |
| `--color-border` | `#E5E5E3` | Dividers, outlines and subtle borders |
| `--color-accent-muted` | `#E9E7F2` | Optional, very limited accent surface |

Suggested balance:
- Approximately 85% neutral black/white/gray.
- Approximately 10% subtle surface variations.
- Approximately 5% accent usage, only where it adds meaning.

Do not force every asset into monochrome. Project screenshots and technology logos can retain their original colors when that improves recognition and communicates the work accurately.

## 4. Typography

Create a clear typographic system:

- **Primary display / body typeface:** a modern, highly readable sans-serif.
- **Optional editorial contrast:** a restrained serif for a small number of hero or section accents, inspired by the serif role title in the reference.
- **Headings:** bold, compact and prominent, with controlled line lengths.
- **Body copy:** comfortable line-height and readable measure; avoid overly wide paragraphs.
- **Metadata:** smaller and muted, but never so faint that it becomes inaccessible.

Use a limited font family set and load fonts efficiently. Prefer locally hosted or optimized font loading through Next.js where practical.

## 5. Navigation

Create a floating, pill-shaped navigation bar:

- Centered horizontally on desktop.
- Rounded capsule with a white/off-white surface.
- Very subtle shadow and/or thin border.
- Compact icon + label navigation items.
- Clearly distinguish the active section with a dark filled pill and light text.
- Keep the navigation usable on small screens; do not allow labels to overflow or become cramped.
- Ensure keyboard navigation, visible focus states and accessible names for icon-only controls.

Suggested sections: Home, About, Projects, Services, Contact. Include only sections that have meaningful content.

## 6. Hero section

Use the reference as the main composition guide.

### Desktop composition
- Two-column layout with text on the left and a portrait/illustration or personal visual on the right.
- Keep the text column visually dominant.
- Use a small availability/status badge above the heading.
- Main greeting/name heading should be large, bold and allowed to wrap naturally.
- Follow with a prominent role/title line. A serif treatment can provide contrast if it remains consistent with the rest of the site.
- Add a concise, specific introduction focused on the kind of products and problems I build.
- Include a compact location/availability row only if the information is current and useful.
- Primary CTA: contact / hire me.
- Secondary CTA: download CV, using a real, maintained PDF asset.
- Add a thin divider and a restrained social-links row below the CTAs.

### Hero visual
- Use a real portrait, custom illustration or another intentional visual asset.
- Keep its crop, dimensions and alignment deliberate.
- Do not use a random stock image or leave an empty image placeholder in the finished design.
- On mobile, stack the content and visual cleanly; avoid shrinking the hero visual into an awkward thumbnail.

### Content quality
Avoid generic filler such as “I create beautiful digital experiences” unless it is rewritten to accurately describe my actual skills, experience and projects. Do not invent years of experience, client results, location status or availability.

## 7. Page sections

### About
- Short professional introduction.
- Explain the type of development work I enjoy and the problems I solve.
- Keep it editorial and readable rather than a large block of text.

### Skills / technology
- Group skills by practical categories (for example: frontend, backend, databases, tools).
- Use simple labels or compact groupings instead of a wall of colorful badges.
- Only list technologies I can genuinely discuss and demonstrate.

### Experience
- Use a clean timeline or structured editorial layout.
- Include role, company, dates and concise impact/responsibilities.
- Do not invent metrics or achievements.

### Projects
- Make projects the visual centerpiece after the hero.
- Use strong screenshots, clear project names, concise descriptions and technology details.
- Include live/demo and source-code links only when they exist.
- Use a restrained card treatment: subtle border, minimal shadow, consistent image ratios and generous internal spacing.
- Let screenshots retain their real colors.

### Services
- Present only services I can actually deliver.
- Use a simple grid or stacked list; avoid unnecessary decorative cards.

### Contact
- Clear invitation to get in touch.
- Make email and relevant social links easy to find.
- Provide a functional contact method; do not present a decorative form that does not submit.

### Footer
- Minimal, muted and consistent with the navigation.
- Include only useful links and a small copyright line.

## 8. Layout, spacing and responsive behavior

Use a consistent spacing scale and a centered content container with a comfortable maximum width.

Responsive expectations:
- **Wide desktop:** balanced whitespace; do not stretch text across the entire screen.
- **Laptop:** preserve the hero's two-column balance and prevent text/image collisions.
- **Tablet (including 768 × 1024):** deliberately rework the composition. Adjust column proportions, typography, navigation spacing and image size; do not rely on desktop dimensions with smaller fonts.
- **Mobile:** stack sections, make navigation compact, keep CTAs tappable and avoid horizontal overflow.
- **Small mobile:** test 320px, 360px, 375px and 425px widths.
- Test common breakpoints around 1440px, 1024px, 768px, 425px, 375px and 320px.

Avoid fixed heights for content-heavy sections. Use fluid sizing, sensible max-widths and responsive image behavior.

## 9. Interaction and motion

- Use subtle hover and focus transitions for links, buttons and project cards.
- Use smooth scrolling only where it improves navigation.
- Keep animations short and purposeful.
- Respect `prefers-reduced-motion`.
- All interactive elements must work with a keyboard and have visible focus indicators.
- Do not sacrifice performance or accessibility for animation.

## 10. Next.js implementation direction

Use **Next.js** as the application framework, with a structure that supports a fast, maintainable portfolio and strong SEO.

Recommended implementation principles:
- Prefer the App Router.
- Use Server Components by default; add Client Components only for genuinely interactive UI.
- Use semantic HTML and accessible heading order.
- Use `next/image` for optimized project and hero imagery with appropriate dimensions, sizing and alt text.
- Use `next/font` or another optimized font-loading approach.
- Keep content data-driven where practical (projects, skills, experience and social links).
- Keep reusable UI components small and purposeful.
- Avoid unnecessary dependencies and client-side JavaScript.
- Ensure production builds are clean and check for console errors.

Possible component organization:

```text
app/
  layout.tsx
  page.tsx
  globals.css
  sitemap.ts
  robots.ts
components/
  navigation.tsx
  hero.tsx
  section-heading.tsx
  about.tsx
  skills.tsx
  experience.tsx
  project-card.tsx
  projects.tsx
  services.tsx
  contact.tsx
  footer.tsx
data/
  projects.ts
  experience.ts
  skills.ts
public/
  images/
  files/
```

This is a suggested starting point, not a requirement to create every file immediately.

## 11. SEO and domain readiness

The site should be ready to deploy to a custom domain (planned: `prathameshjadhav.com`) without needing a structural rewrite.

Implement:
- A unique, descriptive page title.
- A useful meta description written for a human reader.
- Canonical URL based on the production domain.
- Open Graph and social-sharing metadata, including a proper preview image.
- Twitter/X card metadata where appropriate.
- `app/sitemap.ts` and `app/robots.ts`.
- Semantic page structure and descriptive link text.
- Descriptive image alt text; decorative images should use empty alt text.
- A favicon and appropriate web app metadata.
- Structured data using valid Schema.org JSON-LD where appropriate (for example, `Person` and `WebSite`). Only include accurate facts.
- Fast loading, optimized images, minimal JavaScript and good Core Web Vitals.
- Search Console verification and analytics after the domain is connected.

Do not keyword-stuff the page. The content should naturally communicate the developer's name, role, core technologies, projects and professional focus.

## 12. Accessibility and quality bar

Target WCAG 2.2 AA practices:
- Sufficient text and UI contrast.
- Visible keyboard focus.
- Keyboard-operable navigation and controls.
- Correct labels and accessible names.
- Meaningful alt text.
- Reduced-motion support.
- Logical heading structure.
- Responsive zoom/reflow without horizontal scrolling.
- Forms with clear labels, errors and success feedback.

## 13. Things to avoid

- Pure black and pure white everywhere; preserve nuanced neutral tones.
- Generic blue/purple gradient backgrounds.
- Excessive glassmorphism, glow effects or heavy shadows.
- Too many rounded cards and badges.
- Random decorative icons.
- Overly animated sections and cursor effects.
- Fake metrics, fake testimonials or invented experience.
- Tiny text and low-contrast gray.
- Desktop-first layouts that break at tablet widths.
- Placeholder buttons, dead links or non-functional contact forms.
- Adding a dark mode before the light theme is polished; treat it as a separate later decision.

## 14. Build sequence

1. Confirm project identity, content and real assets.
2. Set up the Next.js foundation and global design tokens.
3. Build the responsive navigation and hero first.
4. Validate the hero at desktop, tablet and mobile widths.
5. Build About, Skills and Experience.
6. Build the project showcase with real project screenshots.
7. Add Services, Contact and Footer.
8. Implement metadata, sitemap, robots and structured data.
9. Run accessibility, responsive, performance and SEO checks.
10. Deploy and connect the custom domain; verify canonical URLs, sitemap and Search Console.

## 15. Acceptance criteria

The portfolio is ready for launch when:
- The visual direction matches the reference's understated monochrome/editorial feel.
- The interface uses nuanced neutrals rather than harsh black-and-white everywhere.
- All sections are responsive, including 768 × 1024 and small mobile widths.
- Real content and project assets replace all placeholders.
- Every CTA and link works.
- Keyboard navigation and focus states are reliable.
- Metadata, canonical URL, sitemap and robots are configured.
- Images and fonts are optimized.
- No horizontal overflow, broken layouts or major console/build errors remain.
