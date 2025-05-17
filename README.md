# HevoData - Enterprise Grade Security

This project showcases an interactive feature section highlighting **HevoData’s enterprise-grade security** capabilities with a smooth UI experience built using **Next.js 13 (app router)** and **React** with **TypeScript**.

---

## Overview

The app presents three core security features of HevoData:

- Role-based access control  
- Region-specific pipeline execution  
- Compliance and trusted security  

These features are displayed as interactive cards on the left side, and when a card is selected or auto-cycled, a corresponding illustrative image is shown on the right.

---

## Technical Approach

- **Next.js 13 (app router)** with React functional components using hooks (`useState`, `useEffect`).
- **TypeScript** for strong typing and better developer experience.
- **Component design**:
  - `FeatureSection` handles feature cards with auto-play functionality cycling every 3 seconds.
  - `FeatureCard` represents individual feature items with an active state and click handler.
  - `SecuritySection` dynamically displays the corresponding security feature image based on the selected card.
- Used **Google Fonts (Geist & Geist Mono)** integrated via Next.js font optimization for styling.
- Images and icons are imported and managed as modules (SVGs and Lucide React icons).
- Tailwind CSS for styling and responsive design.
- The UI automatically updates the displayed security image on card selection or auto-advance.
- Proper cleanup of timers to avoid memory leaks during component unmount or state changes.
- Accessibility considerations like `aria-label` on loading spinner.

---

## Key Highlights

- **Auto-play with manual override:** The feature cards cycle automatically every 3 seconds, but user clicks disable auto-play for manual control.
- **Dynamic image rendering:** The `SecuritySection` only renders an image if a valid URL is provided, avoiding unnecessary image loading.
- **Modular and reusable components:** Clear separation of concerns with individual components for cards and image display.
- **SEO-ready:** Metadata setup for SEO with descriptive titles, keywords, and author information.
- **Clean and maintainable codebase:** Adheres to best practices with strong typing, functional components, and React hooks.

---

## How to run

1. Clone the repository  
2. Run `npm install` or `yarn`  
3. Run `npm run dev` or `yarn dev` to start the Next.js development server  
4. Open [http://localhost:3000](http://localhost:3000) to view in browser

---

## Folder Structure

- `/app` - Next.js app directory with layout and page components  
- `/components` - FeatureSection, FeatureCard, SecuritySection components  
- `/data` - Static data for feature cards including icons and images  
- `/assets/images` - Feature-related SVG images  
- `/types` - TypeScript interfaces and types

---

## Author

**Vishal Jagamani**  
[https://vishaljagamani.vercel.app](https://vishaljagamani.vercel.app)

---

Thank you for checking out the project!
