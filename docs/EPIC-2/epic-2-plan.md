# EPIC 2: Animated Showcase Plan

## 🎯 Objective
Create a new route `/animated-showcase` that replicates the final result of `/showcase` but with progressive entrance animations.

## 📋 Methodology
- Each feature builds incrementally on the previous one
- Test thoroughly before proceeding to next feature
- Do not modify existing `/showcase` functionality
- Create dedicated components for `/animated-showcase`

## 🗂️ Architecture Requirements

### Component Organization
```
components/
├── showcase/
│   ├── (existing components)
│   └── ...
└── animated-showcase/
    ├── background/
    ├── clouds/
    ├── logo/
    ├── dots/
    └── scroll-button/
```

### Development Approach
1. Analyze existing `/showcase` components
2. Copy and adapt for `/animated-showcase`
3. Add entrance animations progressively
4. Maintain parallel functionality

---

## 🚀 Feature Breakdown

### F2.1 - Image and Design Sections
**Timeline:** Foundation stage
**Components Needed:**
- `AnimatedBackground` (adapted from showcase)
- `DesignSection` (adapted from showcase)
- `ExpeditionBriefingCards` (adapted from showcase)

**Requirements:**
- Background image identical to `/showcase`
- Logo Design and Expedition Briefing Cards
- Smooth scrolling between sections
- **No** logo, clouds, dots, modals, or scroll button
- Same scroll behavior as `/showcase`

**Acceptance Criteria:**
- Page renders with background and design sections
- Scroll behavior matches `/showcase` exactly
- No entrance animations yet

---

### F2.2 - Clouds Layer
**Timeline:** Background enhancement
**Components Needed:**
- `AnimatedClouds` (adapted from showcase)

**Requirements:**
- Add clouds moving right to left
- Same cloud behavior as `/showcase`
- **No** entrance animations for clouds
- Clouds present from page load

**Acceptance Criteria:**
- Clouds overlay background correctly
- Movement matches `/showcase` behavior
- Other elements unchanged from F2.1

---

### F2.3 - Logo Entrance
**Timeline:** 0.8s total animation
**Components Needed:**
- `AnimatedLogo` (new component)

**Animation Sequence:**
1. **0.0s - 0.3s:** Wait period (image and clouds visible)
2. **0.3s - 0.8s:** Logo entrance animation
   - Fade in effect
   - Slide in from top
   - Smooth transition (0.5s duration)

**Requirements:**
- Background and clouds already visible (no entrance effects)
- Logo appears with fade + slide from top
- Total animation: 0.8s
- **No** dots or scroll button yet

**Acceptance Criteria:**
- Logo appears exactly at 0.3s
- Animation completes at 0.8s
- Smooth fade + slide effect
- Background/Clouds unchanged during logo entrance

---

### F2.4 - Dots with Modals
**Timeline:** Sequential dot entrances
**Components Needed:**
- `AnimatedDots` (adapted from showcase)
- `AnimatedModal` (adapted from showcase)

**Animation Sequence:**
1. **Start:** Begins immediately after logo entrance (0.8s)
2. **Per Dot:** 0.5s each
   - Glitch effect entrance
   - Fade in with labels visible
   - Labels disappear after entrance
   - Only glowing dots remain

**Requirements:**
- Sequential dot entrance (one by one)
- Glitch effect during entrance
- Labels show briefly, then disappear
- Hover behavior: labels reappear
- Click behavior: modal opens
- Same modal functionality as `/showcase`

**Acceptance Criteria:**
- Dots enter one after another
- Each dot takes 0.5s to complete entrance
- Glitch effect visible during entrance
- Hover shows labels
- Click opens modal with same content as `/showcase`

---

### F2.5 - Scroll Button
**Timeline:** Final element
**Components Needed:**
- `AnimatedScrollButton` (adapted from showcase)

**Animation Sequence:**
1. **Start:** After all dots complete entrance
2. **Effect:** Quick fade in
   - Glitch effect
   - Slight bounce animation

**Requirements:**
- Whiter color for better contrast
- Message: "scroll" (not "scroll to explore")
- Quick fade in with glitch + bounce
- Same scroll functionality as `/showcase`

**Acceptance Criteria:**
- Button appears after all dots are settled
- Glitch + bounce effect visible
- Whiter color for contrast
- "scroll" text displayed
- Scroll behavior matches `/showcase`

---

## ⚠️ Critical Constraints

### Do Not Break Existing Functionality
- `/showcase` route must remain unchanged
- All existing components preserved
- No breaking changes to current implementation

### Component Separation
- Create dedicated `/animated-showcase` components
- Use different folder structure
- Share logic but maintain separate UI components

### Testing Requirements
- Each feature tested independently
- Backward compatibility verified
- Performance impact assessed
- Cross-browser compatibility checked

---

## 📊 Success Metrics

### Performance
- Page load time < 2s
- Animation smoothness (60fps)
- No layout shifts

### Functionality
- All interactions work as expected
- Modal content matches `/showcase`
- Scroll behavior identical

### User Experience
- Progressive reveal feels natural
- Animation timing is comfortable
- Visual hierarchy maintained

---

## 🚦 Dependencies

### External
- Framer Motion for animations
- Existing `/showcase` components as reference
- Tailwind CSS for styling

### Internal
- F2.1 completion required for F2.2
- F2.2 completion required for F2.3
- F2.3 completion required for F2.4
- F2.4 completion required for F2.5

---

## 🔄 Release Strategy

### Feature Flags
- Implement feature toggles for each stage
- Enable progressive testing
- Allow rollback capabilities

### Testing Approach
- Unit tests for each component
- Integration tests for animation sequences
- E2E tests for complete user flow
- Performance testing for animation smoothness