# StudyNest — Self Study Library

A modern, premium, fully responsive Self Study Library website built with React.js and plain CSS.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/     One .jsx + matching .css file per section
  hooks/          useReveal.js — scroll-reveal IntersectionObserver hook
  App.jsx         Assembles all sections
  index.css       Design tokens, reset, shared utility classes (buttons, cards, reveal animations)
```

## Notes

- This is a frontend showcase only — the contact form and all "View" buttons are
  informational/UI-only, with no real backend, authentication, or payment integration.
- Colors, fonts and layout follow the brief's premium green palette (#4A7C2A / #D1E8D2)
  with a muted brass-gold accent (#C9962B) for highlights.
- Images are sourced from Unsplash for demonstration; swap in your own library's
  photography before going live.
