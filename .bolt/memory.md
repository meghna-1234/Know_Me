# Project memory

## Product intent & audience

- Professional portfolio website for Meghna Patel (software developer)
- Purpose: introduce her to recruiters via resume, certificates, skills, profile image, and GitHub projects
- Built with Vite + React

## Brand personality & voice

- Professional, recruiter-facing presentation
- Concise, credential-forward tone emphasizing skills and project work

## Visual design & UX direction

- Hero section with profile photo placement (currently placeholder — no image file in workspace)
- Project cards/rows clickable, opening GitHub repositories in a new tab
- Resume and certificate access via external link (Google Drive)
- Tailwind-based styling; Lucide React icons used for UI elements
- Design aims for production-quality, non-generic aesthetics

## Decisions, constraints & rationale

- Projects list (final names + GitHub URLs):
  - EnterpriseConnect (renamed from WorkSphere) — `https://github.com/meghna-1234/EnterpriseConnect`
  - Brick Breaker Game — `https://github.com/meghna-1234/ultimate_BrickBreakerGame`
  - AI-Try_It (replaced AlumniConnect) — description: "An AI-powered fashion app that lets you virtually try on outfits, discover styles, and get personalized wardrobe recommendations." — `https://github.com/meghna-1234/AI-Try_It`
- All project entries open their GitHub repo in a new tab
- GitHub username: `meghna-1234`
- Build and type checks verified passing after updates

## Open questions & assumptions

- Profile photo: no image file exists in the workspace; awaiting direct image file upload or direct image URL from user
- Resume Google Drive link is used for both resume and certificate buttons; exact link value not captured here
- Assumes recruiters access resume/certificates via the provided external link rather than hosted PDFs