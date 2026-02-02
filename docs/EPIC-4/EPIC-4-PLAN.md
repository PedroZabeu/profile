# EPIC 4: Adventures Page (The Heritage Logs - Global Exploration) 📸

## 🏔️ Overview
The "Heritage Logs - Global Exploration" transforms the Adventures page into a high-tech **Global Expedition Map** powered by **COBE**. This section showcases 13 distinct outdoor adventures as key expedition locations on an interactive 3D globe, reinforcing the "Scientific Expedition Briefing" aesthetic.

---

---

## 🎨 Design System & Visual Language

To maintain the high-end "Expedition Briefing" aesthetic, EPIC 4 will adhere to the following strict design tokens:

### 1. Color Palette (Technical Monochrome + Alpine Accents)
| Token | Hex/Value | Usage |
| :--- | :--- | :--- |
| **Interface Base** | `#0D1B2A` (Night Summit) | Primary background and modal surfaces. |
| **Primary Text** | `#F1F5F9` (Alpine Mist) | Headlines and high-priority terminal data. |
| **Accent Color** | `#82B7F5` (Alpine Blue) | Globe glow, active destination markers, and highlighting. |
| **Muted Data** | `#7A8FA3` (Glacier Steel) | Borders, scanlines, and secondary metadata. |
| **Location Lock** | `#FFFFFF` (Fresh Powder) | Immediate location "X" and high-contrast triggers. |

### 2. Typography (The Technical Hierarchy)
- **Primary Labels (Oxanium)**: Used for all UI controls, sidebar items, and "technical" data (LAT/LON, ALT).
- **Narrative Log (Geist Sans)**: Used for the long-form adventure descriptions in the debriefing terminal to ensure max readability.
- **Micro-Labels (Oxanium/Monospace)**: Used for status indicators and versioning (e.g., `[ STATUS: ON ]`).

### 3. Visual Stylization
- **Scanlines**: Low-opacity horizontal line overlays (CSS linear-gradient) on the globe and modals.
- **Terminal Framing**: All containers must use 1px solid borders (`Glacier Steel` at 20% opacity) with a subtle `backdrop-blur-md`.
- **Grit & Texture**: Subtle topography-patterned background overlay to break the flat darkness.
- **Animations**: 
  - **The "Position Lock"**: A rapid recursive pulse animation (expanding rings) when an adventure is selected.
  - **Data Streaming**: Paragraphs should use a character-by-character "typing" reveal at 0.05s intervals.

---

## 🗺️ Feature Roadmap & Implementations

### [x] F-4.1: The Global Exploration Grid (Foundations)
**Description**: Initialization of the adventures route and the holographic globe display.
- Setup `/adventures` route and layout.
- Install `cobe` and initialize a basic rotating globe.
- Configure `Alpine Blue` thematic lighting and scanline overlays.

**State Representation:**
```text
+-------------------------------------------------------------+
| [ ADVENTURES ]                                 [ STATUS: ON ] |
+-------------------------------------------------------------+
|                                                             |
|  [ DATA FEED ]                     [ GLOBAL_EXPLORATION ]   |
|                                                             |
|  (EMPTY LIST)                     /-------------\           |
|                                  /       .       \          |
|                                 |    . GLOBE .    |         |
|                                 |      . . .      |         |
|                                  \       .       /          |
|                                   \-------------/           |
|                                                             |
|  [ SIGNAL_STABLE ]                 [ LAT: --- ]             |
|  EXPLORATION_ACTIVE...             [ LON: --- ]             |
|                                                             |
+-------------------------------------------------------------+
```

### F-4.2: Expedition Archive (Adventure Sidebar)
**Description**: Populating the sidebar with the 13 global adventures organized by **Activity Clusters**.
- **Organization Logic**: To emphasize technical versatility, adventures will be grouped into **Expedition Clusters**:
  - **[ VERTICAL_OPS ]**: Rock Climbing, Deep Water Solo, Sport Climbing (Joshua Tree, Red Rocks, Mallorca, Arco, Railay, Dedo de Deus, Chapada).
  - **[ ALPINE_OPS ]**: Mountaineering, Backcountry Snowboarding (Huayna Potosi, Wyoming).
  - **[ OVERLAND_OPS ]**: Trekking, Mountain Biking, Road Trips (Patagonia, Road of Death, Bariloche, SW USA).
- Implement the `AdventuresSidebar` with collapsible cluster headers.
- Responsive design: Sidebar collapses into an "Adventure Selector" drawer on mobile.

**State Representation:**
```text
+-------------------------------------------------------------+
| [ ADVENTURES ]                                 [ STATUS: ON ] |
+-------------------------------------------------------------+
|                                                             |
|  [ ADVENTURES ]                    [ GLOBAL_EXPLORATION ]   |
|  ------------------               /-------------\           |
|  > HUAYNA POTOSI                 /       .       \          |
|  > PATAGONIA                    |    . GLOBE .    |         |
|  > WYOMING                      |      . . .      |         |
|  > JOSHUA TREE                   \       .       /          |
|  > DEDO DE DEUS                   \-------------/           |
|  > ... (13 TOTAL)                                           |
|                                                             |
|  [ READY_TO_SCAN ]                 [ LAT: 00.00 ]           |
|  STABLE_SIGNAL                     [ LON: 00.00 ]           |
|                                                             |
+-------------------------------------------------------------+
```

### F-4.3: Orbital Position-Sync (Interactivity)
**Description**: Implementing the orbital mechanics where the globe "locks on" to selected coordinates using springs.
- Integrate `framer-motion` `useSpring` with COBE's `phi` and `theta`.
- Map adventure coordinates to global rotation angles.
- Add "Location Identified" visual pulse and coordinate update feed.

**State Representation:**
```text
+-------------------------------------------------------------+
| [ ADVENTURES ]                                 [ STATUS: ON ] |
+-------------------------------------------------------------+
|                                                             |
|  [ ADVENTURES ]                    [ GLOBAL_EXPLORATION ]   |
|  ------------------               /-------------\           |
|  [*] HUAYNA POTOSI               /        |      \          |
|  > PATAGONIA                    |    -- (X) --    |         |
|  > WYOMING                      |         |       |         |
|  > JOSHUA TREE                   \               /          |
|  > ...                            \-------------/           |
|                                     [POSITION_SYNC]         |
|  [ LOCATION_LOCKED ]               [ LAT: 16.27S ]          |
|  BOLIVIA_POTOSI                    [ LON: 68.12W ]          |
|                                                             |
+-------------------------------------------------------------+
```

### F-4.4: Adventure Debriefing Terminal (Modal UI)
**Description**: The full "Intel Extraction" view where the story and technical data are displayed.
- [PLAN](features/F-4.4/F-4.4-plan.md)
- Build the `AdventureBriefing` component (Technical Modal).
- Implement narrative typing effects for descriptions.
- Grid layout for technical specs (Altitude, Activity, Adventure Date).
- **Note**: Initial implementation uses placeholders (No images).

**State Representation:**
```text
+-------------------------------------------------------------+
| [ MODAL: ADVENTURE_DEBRIEFING ]                       [ X ] |
+-------------------------------------------------------------+
|                                                             |
|  +-----------------------+   [ ADVENTURE_INTEL ]            |
|  |                       |   LOC: POTOSI, BOLIVIA           |
|  |     [ PHOTO ]         |   ACT: MOUNTAINEERING            |
|  |    (EXPLORATION)      |   ALT: 6,088m  [SUMMIT]          |
|  |                       |                                  |
|  |                       |   [ FIELD_LOG_LOG ]              |
|  +-----------------------+   "Expedition started 01:00...   |
|      VISUAL_SCAN: 100%        summit reached after 4 days."  |
|                                                             |
+-----------------------+-------------------------------------+
```

### F-4.5: Visual Exploration Polish & Asset Integration
**Description**: Final UI/UX polish for the exploration interface and integration of generated landscape assets.
- [PLAN](features/F-4.5/F-4.5-plan.md)
- Implement specialized "Scan" animations (HUD overlays on images).
- Coordinate status system (SIGNAL_STABLE, DATA_SYNC).
- Integrate 13 professional exploration photos (F-4.6 sub-task).
- Final synchronization with the `ExpeditionHub` navigation.

### F-4.6: Visual Exploration Asset Deployment
**Description**: Final integration of AI-generated assets into the debriefing terminal.
- [PROMPTS](features/F-4.4/images/image-prompts.md)
- Generate and link 13 professional 3:2 exploration photos.
- Implement image loading states with glitch/fade effects.

---

## 📋 Adventure Data Manifest (Comprehensive Log)

| Adventure ID | Location | Coordinates | Activity | Date |
| :--- | :--- | :--- | :--- | :--- |
| `potosi` | Huayna Potosi, BOL | -16.27, -68.12 | Mountaineering | 2022 |
| `road-death` | North Yungas, BOL | -16.21, -67.78 | Mountain Biking | 2022 |
| `patagonia` | Torres del Paine, CHI | -50.94, -73.40 | Trekking | 2016/18 |
| `bariloche` | Bariloche, ARG | -41.13, -71.30 | Road Trip | 2022 |
| `wyoming` | Teton Pass, USA | 43.49, -110.95 | Backcountry Snowboarding | 2013 |
| `joshua-tree` | Joshua Tree, USA | 34.13, -116.31 | Rock Climbing | 2023 |
| `red-rocks` | Nevada, USA | 36.13, -115.42 | Rock Climbing | 2023 |
| `sw-usa` | Southwest USA | 36.05, -112.10 | Road Trip | 2015 |
| `mallorca` | Mallorca, ESP | 39.69, 3.01 | Deep Water Solo | 2021 |
| `arco` | Arco, ITA | 45.91, 10.88 | Sport Climbing | 2021 |
| `railay` | Railay Beach, THA | 8.01, 98.83 | Rock Climbing | 2019 |
| `dedo-deus` | Dedo de Deus, BRA | -22.48, -42.98 | Rock Climbing | 2021 |
| `chapada` | Chapada Bahia, BRA | -12.45, -41.47 | Rock Climbing | 2022 |

---

## 📝 User Acceptance Criteria (UAC)
- [ ] User can navigate to `/adventures` from the Expedition Hub.
- [ ] COBE globe renders smoothly with 13 marked locations.
- [ ] Clicking a sidebar item triggers a fluid "Location Lock" rotation.
- [ ] Adventure details are presented in a high-contrast terminal modal.
- [ ] Images load with a "Visual Scan" glitch/fade effect.
- [ ] Mobile navigation uses a simplified "Adventure Selector" interface.
