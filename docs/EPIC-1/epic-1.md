# Epic 1: Landing Page (The Basecamp) 🏕️

## Overview
This epic focuses on creating the initial landing page that introduces the outdoor professional profile theme. It serves as the basecamp for the entire portfolio, with an immersive mountain aesthetic and clear navigation paths to other sections.

## Features Breakdown

### F1.1: Project Initiation (Next.js + TS)
**Priority:** High  
**Status:** Pending  
**Description:** Set up the foundational Next.js project with TypeScript and configure essential tooling.

**Subtasks:**
- Set up Next.js project with TypeScript and App Router
- Configure Tailwind CSS with custom design tokens (Alpine Mist palette: #F1F5F9 background, #1E293B text, #0D1B2A Night Summit, etc.)
- Install and configure Shadcn UI components
- Install Framer Motion for animations
- Install Lucide React for icons
- Create folder structure: app/, components/, lib/, styles/

### F1.2: Logo Design (React/SVG)
**Priority:** Medium  
**Status:** Pending  
**Description:** Create a professional logo using React SVG components that reflects the mountain climbing theme.

**Subtasks:**
- Design logo as React SVG component with mountain theme
- Implement logo component with proper sizing and accessibility (alt text, semantic HTML)

### F1.3: Hero Section (Alpine Mist)
**Priority:** High  
**Status:** Pending  
**Description:** Develop an immersive hero section with foggy mountain aesthetics using glassmorphism effects.

**Subtasks:**
- Create Hero section with Alpine Mist background and frosted glass overlay (rgba(255, 255, 255, 0.6))
- Add animated headlines alternating between "Finance Executive", "Full-Stack Developer", and "Alpine Climber"
- Integrate logo into hero section with proper positioning

### F1.4: Career CTA Path
**Priority:** Medium  
**Status:** Pending  
**Description:** Implement call-to-action button linking to the career page with climbing path visual metaphor.

**Subtasks:**
- Create Career CTA button linking to /career with climbing path visual (SVG line or icon)
- Style with Glacier Steel accent (#82b7f5) and hover effects

### F1.5: Projects CTA Gallery
**Priority:** Medium  
**Status:** Pending  
**Description:** Add call-to-action for projects section with tech showcase preview.

**Subtasks:**
- Create Projects CTA button linking to /projects with tech showcase visual (code/tech icons)
- Style with Night Summit accent (#0D1B2A) for high contrast

### F1.6: Adventures CTA Story
**Priority:** Medium  
**Status:** Pending  
**Description:** Develop call-to-action for adventures page with mountain summit imagery.

**Subtasks:**
- Create Adventures CTA button linking to /adventures with mountain summit visual
- Style with Fresh Powder highlight (#FFFFFF) for subtle emphasis

## Cross-Cutting Concerns

### Navigation Component
- Add navigation component for CTAs with glassmorphism effect
- Ensure smooth transitions between CTAs

### Responsive Design
- Ensure all components are mobile-responsive (breakpoints: 320px, 768px, 1024px, 1440px)
- Test on mobile devices for immersive scroll experience

### Animations
- Add subtle animations (shimmer on buttons, parallax background)
- Use Framer Motion for smooth interactions

### Accessibility
- Implement accessibility features (alt texts, keyboard navigation, WCAG 2.1 AA compliance)
- Ensure high contrast ratios (text on background)

### Performance
- Optimize loading performance (lazy images, code splitting)
- Target Lighthouse score > 90 for performance

### Typography
- **Brand Font:** Comfortaa for the `pedro.zabeu` logo
- **Display Font:** Space Grotesk for hero headlines and section titles
- **UI Font:** Roboto Mono for CTA buttons and navigation elements
- Ensure fonts are loaded efficiently to avoid layout shift

**ASCII Wireframe Examples for Landing Page:**

Hero Section:
```
+-----------------------------+
|    [LOGO] pedro.zabeu       |
|                             |
|       [Space Grotesk]       |
|    Finance Executive /      |
|    Full-Stack Developer /   |
|    Alpine Climber           |
|                             |
| [Roboto Mono] Explore Career|
+-----------------------------+
```

CTA Buttons:
```
[Roboto Mono] [Career Path]  [Projects Gallery]  [Adventures Story]
```

Logo Area (Top Left):
```
[ (P+Z Icon) ] [Comfortaa] pedro.zabeu
```

## Acceptance Criteria
- Hero section loads within 3 seconds
- All CTAs are clearly visible, functional, and accessible
- Consistent Alpine Mist color scheme applied throughout
- Mobile-first responsive design implemented
- Smooth animations and transitions
- WCAG 2.1 AA accessibility compliance
- Performance optimizations for fast loading

## Dependencies
- Design tokens must be configured before component development
- Logo component ready before hero integration
- All CTAs require navigation component

## Estimated Duration
1-2 weeks for complete implementation and testing