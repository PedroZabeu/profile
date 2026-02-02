# EPIC 3 PLAN: The Climbing Path (Career & Skills)

This document outlines the detailed implementation plan for the Career and Skills page, following the **Expedition Mission Briefing** theme. The goal is to provide an immersive, data-driven visualization of Pedro's professional ascent.

---

## 🎨 Visual System & Aesthetic

- **Theme:** Technical Mission Briefing / Mountain Ascent.
- **Colors:**
  - **Background Layer 1:** Night Sky (#0D1B2A / Night Summit).
  - **Background Layer 2:** `topography.png` overlay (Low opacity/Blend mode).
  - **UI Elements:** Alpine Mist (#F1F5F9) for boxes, Slate Rock (#4B5866) for secondary text.
  - **Accents:** Alpine Blue (#82b7f5) for interactive dots and gauges.
- **Typography:**
  - **Oxanium:** Headlines, Buttons, Terminal data (The "Mission" font).
  - **Geist Sans:** Body descriptions, metadata (The "Utility" font).
- **Key Interactions:**
  - **Glitch Effect:** On navigation buttons and box entrance.
  - **Typing Effect:** All text data should reveal with a precise typing animation.
  - **Scale-Up Animation:** Boxes open from their top-left corner.
  - **SVG Drawing:** The side topography mountain should draw its outline on load.

---

## 🗺️ Global Layout & Flow

The page uses a modular "Briefing Box" system.

```
+-------------------------------------------------------------+
| [ CAREER ]   [ SKILLS ]   [ HOME ]                          |
| (Top-left Nav, Translucent, Glitch on Hover)                |
|                                                             |
|  +-------------------------------------------------------+  |
|  | [OXANIUM] LOG_TERMINAL: Professional Ascent           |  |
|  |                                                       |  |
|  |     (Main Content Box - Scales from Top-Left)         |  |
|  |                                                       |  |
|  |                                                       |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  +-------------------------------------------------------+  |
|  | [GEIST] LOG_ENTRY: [Selected Milestone]                |  |
|  |                                                       |  |
|  |     (Detail Box - Opens when milestone selected)      |  |
|  |                                                       |  |
|  +-------------------------------------------------------+  |
|                                                             |
|                          (Footer)                           |
+-------------------------------------------------------------+

### Scale-Up Interaction (Box Opening)
```
1. Hidden         2. Expanding      3. Full
[ ]               [+---]            [+---------+]
                  [|   ]            [|         |]
                                    [+---------+]
(Starts from Top-Left corner)
```
```

---

## 🛰️ F3.0: Expedition Hub (Initial State)

When the user first lands on the Career page, no content boxes are open. The focus is on the immersive atmosphere and the "Mission Selection".

### ASCII Wireframe: Initial State
```
+-------------------------------------------------------------+
| [ CAREER ]   [ SKILLS ]   [ HOME ]                          |
| (Entering with typing effect + glitch)                      |
|                                                             |
|                                                             |
|                                                             |
|                                                             |
|             [ TOPOGRAPHY BACKGROUND LAYER ]                 |
|            (Subtle pulse / Scanning line effect)            |
|                                                             |
|                                                             |
|                                                             |
|                                                             |
| ___________________________________________________________ |
|                [ CONTACT_DATA_TERMINAL ]                    |
+-------------------------------------------------------------+
```

### Technical Specs:
- **Background Boot-up:** The topography layer fades in with a "CRT scanning" or flicker effect to match the terminal theme.
- **Idle State:** A very subtle scanning line moves vertically across the screen, or a "SYSTEM: STANDBY" text pulse in a corner.
- **Entrance:** The three buttons appear sequentially with a `typing` effect.

---

## 🧗 F3.1: Career Selected State

In this state, the user sees the 2D Mountain Topography representing the career path.

### ASCII Wireframe: Career Layout
```
+-------------------------------------------------------------+
| [ CAREER ]   SKILLS     HOME                                |
|                                                             |
|  +-------------------------------------------------------+  |
|  | PATH: PROFESSIONAL_ASCENT                             |  |
|  | ----------------------------------------------------- |  |
|  |                                           / \         |  |
|  |                                          /   \ [DOT]  |  |
|  |                                         /     \       |  |
|  |                                  [DOT] /       \      |  |
|  |                                     __/         \     |  |
|  |                        [DOT] ______|             \    |  |
|  |                  ___________/                     \   |  |
|  |       [BASECAMP]                                      |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  +-------------------------------------------------------+  |
|  | ENTRY_LOG_04: Z-SCORE SPORTS BETTING                  |  |
|  | ----------------------------------------------------- |  |
|  | [typing...] Founder & Lead Developer                  |  |
|  | - Advanced ML integration for odds prediction.        |  |
|  | - Scalable cloud infrastructure.                      |  |
|  |                                                       |  |
|  +-------------------------------------------------------+  |
+-------------------------------------------------------------+
```

### Technical Specs:
- **Mountain SVG:** A custom React component that takes `milestones` as data and generates a polyline.
- **Milestones (Dots):** Pulsating dots positioned along the SVG path. Click triggers the Detail Box.
- **Basecamp:** The lowest point, representing education/starting point.

---

## 🧗 F3.2: Career Accordion Logs (Expansion)

When a milestone is clicked in the list, the entry expands vertically as an accordion to reveal detailed professional logs, skills, and links.

### ASCII Wireframe: Accordion State
```text
+-------------------------------------------------------------+
| [ CAREER_LOG ]                            [ ^ ] [ v ]       |
| ----------------------------------------------------------- |
|                                                             |
|  Z-SCORE SPORTS BETTING                     2022 - 2025     |
|  ---------------------------------------------------------  |
|  FOUNDER & CEO                                              |
|  [ EXPERIENCE_LOG ]:                                         |
|  | - Built profitable sports betting company from scratch.   |
|  | - 18.24% monthly growth, 3.8% return per bet.            |
|  | - Developed proprietary ML models (R/Python).             |
|  [ SKILLS_DEVELOPED ]:                                       |
|  > MACHINE LEARNING // ENTREPRENEURSHIP // FULL-STACK       |
|                                                             |
|  I.SYSTEMS                                  2020 - 2022     |
|  ---------------------------------------------------------  |
|  CHIEF FINANCIAL OFFICER                                    |
|                                                             |
+-------------------------------------------------------------+
```

### Technical Specs:
- **Interaction:** Vertical expansion using `framer-motion` (height: 0 -> auto).
- **Behavior:** Multiple entries can be expanded, or auto-collapse can be implemented for focus.
- **Content:** Includes `EXPERIENCE_LOG`, `SKILLS_DEVELOPED`, and `EXTERNAL_LINKS`.

---

## 🛠️ F3.3: Skills Terminal Briefing

The layout shifts to a sidebar-driven terminal view.

### ASCII Wireframe: Skills Layout
```text
+-------------------------------------------------------------+
|   CAREER   [ SKILLS ]   HOME                                |
|                                                             |
|  +-----------+  +-----------------------------------------+ |
|  | TYPE      |  | DATA_STREAM: TECH_STACK                 | |
|  | --------- |  | --------------------------------------- | |
|  | [v] TECH  |  | TYPESCRIPT [========----------] 80%     | |
|  | [ ] FIN   |  | NEXT.JS    [=============-----] 90%     | |
|  | [ ] CLIMB |  | FIREBASE   [======------------] 60%     | |
|  |           |  |                                         | |
|  | (Sidebar) |  | (Terminal Bars - Animating)             | |
|  +-----------+  +-----------------------------------------+ |
+-------------------------------------------------------------+
```

### Technical Specs:
- **Terminal Bars:** Squared, rugged progress bars using `framer-motion` for the loading effect.
- **Data-Driven:** Skills are categorized (Technical, Financial, Outdoor).
- **Sidebar:** Selection updates the main Skills Box with a scale-out/scale-in animation.

---

## 📞 F3.4: Contact Expedition Section

A bottom section that mirrors the landing page contact but with a darker, altitude-briefing aesthetic.

```
+-------------------------------------------------------------+
|                                                             |
|                [ CONTACT_DATA_TERMINAL ]                    |
|                                                             |
|      [O] EMAIL          [O] LINKEDIN          [O] GH        |
|      pedro@...          /in/pzabeu            /pzabeu       |
|                                                             |
| ___________________________________________________________ |
| ALTITUDE: 6.088m | STATUS: ASCENDING | (C) 2026 PZ          |
+-------------------------------------------------------------+
```

---

## 📱 Mobile Adaptation

On mobile, the dual-box layout stacks vertically to maintain readability.

```
+---------------------------+
| [ C ] [ S ] [ H ] (Icons) |
+---------------------------+
| +-----------------------+ |
| | PATH_ASCENT           | |
| | [ SVG MOUNTAIN ]      | |
| +-----------------------+ |
|                           |
| +-----------------------+ |
| | LOG_DETAILS           | |
| | [ DESCRIPTION ]       | |
| +-----------------------+ |
+---------------------------+
```

---

## 🚀 Implementation Roadmap

1.  **Phase 0: Atmosphere & Hub (Initial State)**
    - Implement the dual-layer background with the topography scanning effect.
    - Set up the initial "Empty/Atmospheric" view.

2.  **Phase 1: Shell & Navigation**
    - Create the transparent Navigation buttons with glitch/typing effects.
    - Handle the state logic for switching between NULL, CAREER, and SKILLS.

3.  **Phase 2: Side Mountain Topography (SVG)**
    - Build the `MountainPath` component.
    - Implement the drawing animation.
    - Map career milestones to coordinates on the path.

3.  **Phase 3: Career Interactivity**
    - Add milestone dots with hover/click states.
    - Build the "Detail Box" with the scale-up entrance and typing reveal.

4.  **Phase 4: Skills Terminal**
    - Build the Sidebar navigation.
    - Create the `TerminalLoadingBar` component.
    - Implement the category switching logic.

5.  **Phase 5: Polish & Transitions**
    - Add the scale-out reverse animations for switching between Career/Skills/Home.
    - Finalize colors and fonts alignment with PRD.
    - Ensure mobile responsiveness for the modular boxes.
