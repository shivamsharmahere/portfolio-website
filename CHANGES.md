# CHANGES.md

This file will log all changes and actions taken to run and maintain the portfolio website.

---

- Initialized CHANGES.md to track all future changes and actions.
- Added `craco.config.js` or ensured it exists so frontend can start with `craco start`.
- Made MongoDB optional in `backend/server.py` to allow running frontend without a database.
- Added minimal `.cracorc.json` to ensure CRACO detects configuration.
- Updated `package.json` scripts to use `react-scripts` instead of `craco` so frontend can start without CRACO config.
- Fixed invalid `jsconfig.json` JSON (removed trailing/comment issues) so `react-scripts` can parse project config.
- Added `src/index.js` and `src/index.css` to bootstrap the React app and include Tailwind base styles.
- Removed `@craco/craco` from `devDependencies` and switched start scripts to use `react-scripts`.
- Added small wrapper components (`AIAboutSection`, `AIExperienceSection`, `AIProjectsSection`, `AIShowcaseSection`, `AISkillsSection`, `AIContactSection`) that re-export existing `Al*` components referenced by `HomePage.js`.
- Added temporary debug banner to `HomePage.js` to confirm React mounting in browser (visible red badge).
- Cleaned up `requirements.txt` to remove markdown fences so pip can install packages.

- Wrapped each section render in `frontend/src/pages/HomePage.js` with a try/catch and a small error panel so failing components are isolated and reported at runtime in the browser. This will help find which specific import is causing the "Element type is invalid" error.

- 2025-09-14: Temporarily replaced `frontend/src/pages/HomePage.js` with a minimal static test page so the app visibly renders while debugging component import issues.
 - 2025-09-14: Replaced `frontend/src/components/AIAboutSection.js` (was a re-export) with a temporary stub component to avoid potential invalid-module-type runtime errors while isolating the faulty component.

- 2025-09-14: Reintroduced `Navbar` and `CleanHeroSection` into `HomePage.js` as an incremental test to confirm smaller components render correctly.
