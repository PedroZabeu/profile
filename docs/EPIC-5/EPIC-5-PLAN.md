# EPIC 5: Projects Page (Technical Portfolio) 💻

## 🏔️ Overview
The Projects page serves as a user-focused showcase of live applications and their value propositions. It utilizes a terminal-inspired interface to present projects with clear user benefits and direct access to live applications. The layout mirrors the `ExpeditionHub` (/career) for consistency while establishing a dedicated space for digital products.

---

## 🎨 Design System & Visual Language

EPIC 5 maintains technical consistency with the rest of the profile but prioritizes clarity and industrial aesthetics.

### 1. Color Palette (Cybernetic Industrial)
| Token | Hex/Value | Usage |
| :--- | :--- | :--- |
| **Interface Base** | `#0D1B2A` (Night Summit) | Primary background and terminal surfaces. |
| **Primary Text** | `#F1F5F9` (Alpine Mist) | Headlines and logging data. |
| **Accent Color** | `#A5F3FC` (Cyan 300) | Code snippets, active links, and highlights. |
| **Muted Data** | `#7A8FA3` (Glacier Steel) | Borders, dependency lines, and metadata. |
| **Status Ready** | `#10B981` (Emerald 500) | Live links and successfully completed statuses. |

### 2. Typography
- **UI & Identifiers (Oxanium)**: Used for terminal labels, IDs, and technical tags (e.g., `[ REF: 05 ]`).
- **Technical Narrative (Geist Sans)**: Used for project descriptions and architecture details for high legibility.

### 3. Visual Stylization
- **Technical Grid**: The same scanlines and topography background from `/career` to maintain a unified "Technical Profile" feel.
- **Project Indexing**: Projects are indexed with a `[01]`, `[02]` format in the sidebar.

---

## 🗺️ Feature Roadmap

### F-5.1: Technical Hub Architecture (Foundations) [PLAN](features/F-5.1-plan.md)
**Description**: Implementation of the `/projects` route using the cloned architecture of `ExpeditionHub`.
- Setup `/projects` route.
- Implement `ProjectHub` (container) and `ProjectSidebar` (navigation).
- Re-use `TopographyBackground` and `ScanLine` system.
- **Projects Navigation**: `[ BETTING_MGMT ]`, `[ STAKELY_BOT ]`, `[ SCHOOL_BETS ]`, `[ HOME ]` (redirects to main page).

**State Representation:**
```text
+-------------------------------------------------------------+
| [ PROJECTS ]                                   [ STATUS: ON ] |
+-------------------------------------------------------------+
|                                                             |
|  [ TERMINAL_NAV ]                  [ PROJECT_HUB_READY ]    |
|                                                             |
|  > [01] BETTING_MGMT              +-----------------------+ |
|  > [02] STAKELY_BOT               |                       | |
|  > [03] SCHOOL_BETS               |     (WAITING_ON_      | |
|  > [04] HOME                      |      SELECTION)       | |
|                                   |                       | |
|                                   +-----------------------+ |
|                                                             |
|  [ SYSTEM_ACTIVE ]                 [ REF: 0x5F1A ]          |
|  SIGNAL_STABLE                     [ REV: 2026.01 ]         |
|                                                             |
+-------------------------------------------------------------+
```

### F-5.2: Project Details Box (User-Focused Display) [PLAN](features/F-5.2-plan.md)
**Description**: A project detail box that opens when clicking on a project in the sidebar, focusing on user benefits and value delivered.
- **User-Centric Content**: Each project displays:
    - **Project Description**: Clear value proposition for target users.
    - **Key Features**: Main functionalities that solve user problems.
    - **User Benefits**: Specific measurable advantages delivered.
    - **Live Links**: Direct access to the actual website/app.

**State Representation:**
```text
+-------------------------------------------------------------+
| [ PROJECT: BETTING_MGMT ]                           [ X ] |
+-------------------------------------------------------------+
|                                                             |
|  Complete System for Betting Management                      |
|                                                             |
|  Centralize all operations in a single platform, eliminating |
|  spreadsheets and offering complete control.                 |
|                                                             |
|  KEY BENEFITS:                                             |
|  • Eliminates multiple spreadsheets                          |
|  • Detailed results in real-time                            |
|  • Protected access for all user levels                      |
|  • Integrated supplier management                           |
|                                                             |
|  [ LIVE_UPLINK: bettingmgmt.vercel.app ]                    |
|                                                             |
+-------------------------------------------------------------+
```

### F-5.3: Home Redirect (Navigation) [PLAN](features/F-5.3-plan.md)
**Description**: HOME option in sidebar redirects users to the main page (/) rather than showing a portfolio overview.
- **Navigation Behavior**: Clicking HOME takes users back to the main portfolio page
- **Rationale**: Keeps projects page focused on individual project details
- **Implementation**: Simple route redirect to root path

**State Representation:**
```text
+-------------------------------------------------------------+
| [ PROJECTS ]                                   [ STATUS: ON ] |
+-------------------------------------------------------------+
|                                                             |
|  [ TERMINAL_NAV ]                  [ PROJECT_SELECTED ]     |
|  ------------------               +-----------------------+ |
|  > [01] BETTING_MGMT               |                       | |
|  > [02] STAKELY_BOT                |     (SELECT_PROJECT   | |
|  > [03] SCHOOL_BETS                |      TO_VIEW_DETAILS) | |
|  > [04] HOME (→ /)                 |                       | |
|                                   +-----------------------+ |
|                                                             |
|  [ SYSTEM_ACTIVE ]                 [ REF: 0x5F1A ]          |
|  SIGNAL_STABLE                     [ REV: 2026.01 ]         |
|                                                             |
+-------------------------------------------------------------+
```



---

## 📋 Project Manifest (Database Core)

| Project ID | Title | User Focus | Link Type |
| :--- | :--- | :--- | :--- |
| `betting-mgmt` | **Betting MGMT** | Complete system for betting management | Live App |
| `stakely-bot` | **Stakely** | Intelligent system for tipsters | Live App |
| `school-bets` | **School of Bets** | Educational platform for bettor development | Live App |
| `alpine-profile` | **Alpine Profile** | Technical portfolio showcase | Source |

## 🎯 Project Details (User-Focused)

### Betting MGMT: Complete System for Betting Management
**Description**: Centralize all operations in a single platform, eliminating spreadsheets and offering complete control for different access levels.

**User Benefits**:
• Eliminates the need for multiple spreadsheets
• Detailed and consolidated results in real-time  
• Protected access for bettors, investors and operators
• Integrated supplier management

**Live URL**: https://bettingmgmt.vercel.app/

### Stakely: Intelligent System for Tipsters  
**Description**: The ultimate solution for tipsters who want to scale with efficiency. Automates tip delivery and client-by-client result calculations, eliminates manual work, and provides full clarity over each customer's performance.

**User Benefits**:
• Professional, client-segmented communication channels
• Native Telegram integration for a frictionless workflow
• Accurate tracking of what each client actually bet — no guesswork
• Automatic result consolidation and performance history
• Insightful dashboards that strengthen trust and retention

**Live URL**: https://stakely-bets.vercel.app/

### School of Bets: Educational Platform for Bettor Development (Beta)
**Description**: A learning environment designed for those who want to understand betting through mathematical and statistical fundamentals — without unnecessary complexity. The content is presented in a practical way, with guided exercises, simulations, and activities that demonstrate how to apply concepts such as probability, expected value, and variance to betting decisions.

**User Benefits**:
• Progressive content focused on real-world application
• Simplified explanations of essential quantitative concepts
• Practical simulations that connect theory to decision-making
• Exercises with real-time feedback to reinforce learning
• Platform continuously improved throughout the beta phase

**Live URL**: https://school-of-bets.vercel.app/

---

## 📝 User Acceptance Criteria (UAC)

- [ ] User can navigate to `/projects` and see a stable terminal UI.
- [ ] Interface parity with `/career` is maintained (Sidebar + Content Box).
- [ ] Sidebar navigation shows individual projects (Betting MGMT, Stakely, School Bets, Home).
- [ ] Clicking on any project opens a detail box with user benefits and value proposition.
- [ ] Project details focus on user problems, solutions, and measurable benefits (not technical implementation).
- [ ] Primary emphasis on live application links with clear calls-to-action.
- [ ] Home option redirects to main page (/) instead of showing portfolio overview.
- [ ] All external links provide user-focused hover feedback.
- [ ] Projects show accurate descriptions and live URLs as specified in manifest.
