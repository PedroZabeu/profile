**Pedro Ivo Barreto Zabeu**
# Product Requirements Document: Personal Portfolio

## 1. Executive Summary

**Project Name:** Personal Portfolio Website

**Objective:** Create a personal profile webpage that serves as an online CV, showcasing professional career, projects, and outdoor adventures through an immersive mountain/climbing theme.

**Target Audience:** Recruiters, potential clients, collaborators, and fellow outdoor enthusiasts.

**Success Metrics:**
- Professional presentation of career trajectory
- Clear project showcases with interactive elements
- Engaging storytelling of outdoor adventures
- Responsive design across all devices

---

## 2. Design Direction

### 2.1 Visual Theme
**Inspiration:** Mountains, snow, climbing, trekking, outdoor adventures

### 2.2 Color Palette
The color palette is inspired by mountain landscapes, incorporating snow, rock, sky, and fog elements to create a cohesive visual identity. The palette ensures high contrast ratios for accessibility while maintaining thematic consistency.

| Element | Hex Code | RGB | Usage | Contrast Combinations |
|----------|----------|-----|-------|-----------------------|
| Snow | #F5F5F5 | (245, 245, 245) | Primary background, light sections | Text: Rock (#8B7355) - High contrast (12.1:1) |
| Rock | #8B7355 | (139, 115, 85) | Primary text, headings, accents | Background: Snow (#F5F5F5) - High contrast (12.1:1) |
| Cloudy Day | #B8C5D6 | (184, 197, 214) | Secondary backgrounds, buttons, links | Text: Rock (#8B7355) - Medium contrast (4.2:1); Text: Fog (#D3D8DE) - Low contrast (1.2:1, avoid for text) |
| Fog | #D3D8DE | (211, 216, 222) | Secondary text, borders, subtle elements | Background: Snow (#F5F5F5) - Low contrast (1.3:1, avoid); Background: Rock (#8B7355) - High contrast (3.8:1) |
| Glacier Blue | #72B0D5 | (114, 176, 213) | Accent color for highlights, interactive elements | Text: Snow (#F5F5F5) - High contrast (6.5:1) |
| Summit Gray | #3B6B9B | (59, 107, 155) | Dark accents, strong CTAs | Text: Snow (#F5F5F5) - High contrast (8.9:1) |

**Contrast Guidelines:**
- Primary text combinations maintain WCAG AA compliance (4.5:1 minimum)
- Secondary text uses higher contrast where possible
- Accent colors provide visual hierarchy without sacrificing readability

### 2.3 Design Guidelines
- Apply consistent color filter to images for unified visual identity
- Mountain imagery as central visual element
- Climbing progression metaphor for career timeline
- Clean, minimal typography
- Smooth animations and transitions

---

## 3. Technical Architecture

### 3.1 Tech Stack
| Technology | Purpose |
|------------|---------|
| Next.js | React framework for production |
| Tailwind CSS | Utility-first styling |
| Shadcn | UI component library |
| Remotion | Motion graphics and animations |
| React animation libraries | Interactive animations |

### 3.2 Project Structure
```
src/
├── app/
│   ├── page.tsx (Landing)
│   ├── career/page.tsx
│   ├── projects/page.tsx
│   └── adventures/page.tsx
├── components/
├── lib/
└── styles/
```

---

## 4. Features & Requirements

### 4.1 Epic 1: Landing Page

**Priority:** P0

| Feature ID | Feature Name | Description | Status |
|------------|--------------|-------------|--------|
| F1.1 | Project Initiation | Set up Next.js with TypeScript and configured tooling | Backlog |
| F1.2 | Logo Creation | Design and implement logo using React/TypeScript | Backlog |
| F1.3 | Hero Section | Create immersive hero section with mountain theme | Backlog |
| F1.4 | Career CTA | Call-to-action linking to Career page | Backlog |
| F1.5 | Projects CTA | Call-to-action linking to Projects page | Backlog |
| F1.6 | Adventures CTA | Call-to-action linking to Adventures page | Backlog |

**User Story:** As a visitor, I want to immediately understand the portfolio theme and navigate to sections of interest.

**Acceptance Criteria:**
- Hero section loads within 3 seconds
- All CTAs are clearly visible and functional
- Consistent color scheme applied

---

### 4.2 Epic 2: Career Page

**Priority:** P0

| Feature ID | Feature Name | Description | Status |
|------------|--------------|-------------|--------|
| F2.1 | Page Header | Design header for Career section | Backlog |
| F2.2 | Mountain Background | Create mountain-themed visual background | Backlog |
| F2.3 | Climbing Path | Interactive climbing path representing career progression | Backlog |
| F2.4 | Career Cards/Modals | Display career milestones with details | Backlog |
| F2.5 | Skills Section | Showcase technical and soft skills | Backlog |

**User Story:** As a recruiter, I want to visualize the candidate's career progression in an engaging way.

**Design Concept:**
- Mountain represents career journey
- Base camps = early career positions
- Higher camps = senior roles
- Summit = current position/future goals

**Acceptance Criteria:**
- Timeline is scrollable and interactive
- Career milestones display relevant details (company, role, duration, achievements)
- Mobile-responsive layout

---

### 4.3 Epic 3: Projects Page

**Priority:** P1

| Feature ID | Feature Name | Description | Status |
|------------|--------------|-------------|--------|
| F3.1 | Hero/Hook Section | Compelling introduction to projects section | Backlog |
| F3.2 | Betting MGMT | Showcase Betting MGMT project with animations | Backlog |
| F3.3 | Stakely | Showcase Stakely project with animations | Backlog |
| F3.4 | School of Bets | Showcase School of Bets project with animations | Backlog |

**User Story:** As a potential client/employer, I want to explore completed projects with engaging visuals.

**Acceptance Criteria:**
- Each project has dedicated showcase section
- Animations trigger on scroll/hover
- Links to live projects and repositories
- Project descriptions highlight key features and technologies

---

### 4.4 Epic 4: Adventures Page

**Priority:** P2

| Feature ID | Feature Name | Description | Status |
|------------|--------------|-------------|--------|
| F4.1 | Huayna Potosi | Document Huayna Potosi climb | Backlog |
| F4.2 | Patagonia | Document Patagonia expedition | Backlog |
| F4.3 | Wyoming | Document Wyoming adventures | Backlog |
| F4.4 | Joshua Tree | Document Joshua Tree climbing | Backlog |
| F4.5 | Chapada Diamantina | Document Chapada Diamantina trek | Backlog |
| F4.6 | Dedo de Deus | Document Dedo de Deus climb | Backlog |
| F4.7 | Red Rock Canyon | Document Red Rock Canyon adventure | Backlog |

**User Story:** As a visitor, I want to read compelling stories about outdoor adventures.

**Acceptance Criteria:**
- Each adventure includes photos and narrative
- Consistent layout for all adventure entries
- Engaging storytelling format
- Mobile-friendly image presentation

---

## 5. Non-Functional Requirements

### 5.1 Performance
- Lighthouse score > 90 for performance
- Image optimization and lazy loading
- Code splitting for fast initial load

### 5.2 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Alt text for all images
- Contrast ratio compliance

### 5.3 Responsiveness
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px

### 5.4 SEO
- Meta tags optimization
- Semantic HTML structure
- Open Graph tags for social sharing
- Sitemap generation

---

## 6. Timeline & Milestones

| Phase | Deliverable | Estimated Duration |
|-------|-------------|-------------------|
| Phase 1 | Project setup, Landing page | 1 week |
| Phase 2 | Career page | 1 week |
| Phase 3 | Projects page | 1 week |
| Phase 4 | Adventures page | 1 week |
| Phase 5 | Testing, optimization, deployment | 1 week |

---

## 7. Future Considerations

- Multi-language support
- Blog section
- Contact form with email integration
- Analytics integration
- CMS for adventure updates
- Dark mode toggle

---

## 8. Approval

| Role | Name | Date |
|------|------|------|
| Product Owner | [Name] | [Date] |
| Designer | [Name] | [Date] |
| Developer | [Name] | [Date] |

---

*Document Version: 1.0*
*Last Updated: January 2026*