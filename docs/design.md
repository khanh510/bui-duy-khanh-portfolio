# Portfolio design record

## Understanding summary

- Build a production-ready personal portfolio for Bùi Duy Khánh.
- Prioritize backend and backend-leaning full-stack recruitment and freelance evaluation.
- Make verified experience and projects understandable within the first few seconds.
- Keep content separate from React presentation so the owner can maintain it easily.
- Use Next.js, TypeScript, Tailwind CSS, App Router, and minimal client-side JavaScript.
- Support light/dark themes, mobile navigation, accessibility, SEO, and Vercel deployment.
- Avoid invented claims, unreliable integrations, heavy animation, databases, and unnecessary services.

## Assumptions

- The supplied CV is the factual source of truth for professional experience and project scope.
- English is the primary portfolio language for international recruiters and freelance clients.
- Organization-owned production repositories cannot be linked publicly until permission is confirmed.
- Email can be published because it is present in the supplied CV; phone number and street address are intentionally omitted.
- GitHub, LinkedIn, Upwork, Freelancer.com, and final site URL remain TODOs.

## Decision log

1. **Single-page narrative:** Chosen for fast recruiter scanning and low maintenance; multiple routes would add little value at the current content volume.
2. **Systems dossier visual language:** Structured labels, timelines, technical briefs, restrained green accents, and strong typography convey backend engineering without decorative effects.
3. **Static-first architecture:** All content is local typed data; only theme and mobile navigation require client JavaScript.
4. **Private-source project treatment:** Cards emphasize requirements, responsibilities, and technical features instead of hiding work that cannot link to a public repository.
5. **Optional URL configuration:** `NEXT_PUBLIC_SITE_URL` improves deployment flexibility while a safe placeholder keeps local builds working.

## Final design

The page moves from concise positioning to engineering approach, verified work history, selected project case studies, grouped capabilities, and contact options. Experience and project sections use the largest information surfaces. Light and dark themes share the same muted technical palette, high-contrast typography, visible focus states, and responsive spacing. Content updates happen in `src/data`; visual components remain reusable and mostly server-rendered.
