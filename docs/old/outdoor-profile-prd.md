# PRD: Outdoor Professional Profile - Pedro Ivo Zabeu

## 1. Visão Geral do Produto

**Nome do Projeto:** Outdoor Profile
**Objetivo:** Desenvolver um portfólio pessoal imersivo que harmonize uma carreira sólida em Finanças e Tecnologia com a paixão pelo montanhismo. O site funciona como um "Expedition Mission Briefing" interativo, utilizando a estética de missões de montanha para narrar a progressão profissional.

**Público-Alvo:** Recrutadores de tech/finanças, parceiros de negócios e entusiastas de outdoor.

---

## 2. Direcionamento de Design (Aesthetic & Experience)

Baseado nas referências visuais de alta montanha, o design é focado em um **High-End Light Mode (Foggy Aesthetic)** com um tema de **Expedition Mission Briefing**, evocando a precisão e a atmosfera de uma exploração em altitude.

### 2.1 Paleta de Cores Refinada (Inspirada na Imagem de Neblina/Snow)

A paleta prioriza um **Light Mode** extremamente limpo e profissional, utilizando os tons frios e acinzentados da imagem para criar uma experiência sóbria e elegante.

| Categoria | Nome | Hex | Aplicação | Referência Visual |
| :--- | :--- | :--- | :--- | :--- |
| **Background** | Alpine Mist | #F1F5F9 | Fundo principal e highlights | O topo enevoado da montanha |
| **Accent (Deep)** | Night Summit | #0D1B2A | Títulos e CTAs de alto destaque | A base sólida da montanha |
| **Accent (Blue)** | Alpine Blue | #82b7f5 | Destaques técnicos e links | O azul metálico do céu nublado |
| **Secondary Text** | Slate Rock | #4B5866 | Descrições e outlines técnicos | Tons médios da rocha vulcânica |
| **Muted Blue** | Glacier Steel | #7A8FA3 | Ícones e elementos de borda | O gelo antigo da geleira |
| **Highlight** | Fresh Powder | #FFFFFF | Elementos de overlay e neve | Neve pura |

### 2.2 Estética Visual
- **Mission Aesthetics:** Estética de documentos técnicos e briefings de expedição, com grades sutis e tipografia precisa.
- **Dynamic Layers (Atmosphere):** Camadas sobrepostas de neblina e nuvens lentas sobre silhuetas de montanhas.
- **Micro-interações:** Glitch effects sutis em elementos interativos e transições de "briefing data" (typing effects).
- **Tipografia:** Comfortaa para Brand/Logotipo, Oxanium para elementos Mission/Technical, e Geist (Sans) para textos utilitários.

### 2.3 Typography & Font Usage
**Brand Font (Social/Logo):** Comfortaa - Usada para o logotipo `pedro.zabeu` e títulos de seções principais, trazendo uma identidade pessoal moderna.  
**Mission Font (Technical):** Oxanium - Usada para CTAs (CONTACT, EXPLORE) e o conteúdo dos "Briefing Cards", transmitindo precisão técnica.  
**Utility Font (Body):** Geist (Sans) - Usada para descrições detalhadas e pequenos rótulos (`TRACKING-WIDEST`).

**ASCII Wireframe Examples:**

Hero Section:
```
+-----------------------------------+
|          [Comfortaa]              |
|          pedro.zabeu              |
|                                   |
|   (Career)      (Projects)        |
|     [DOT]          [DOT]          |
|                                   |
|          [ CONTACT ]              |
|          [Oxanium]                |
+-----------------------------------+
```

Mission Briefing Card:
```
+-------------------------------------+
| [Oxanium] MISSION: CAREER           |
| [Geist] Established basecamp in     |
| Finance and Tech innovation...      |
|                                     |
| [Oxanium] > View Full Log           |
+-------------------------------------+
```

---



## 3. Arquitetura Técnica

| Tecnologia | Motivo |
| :--- | :--- |
| **Next.js (App Router)** | Performance, SEO e escalabilidade. |
| **Tailwind CSS** | Agilidade no styling e tokens de design customizados. |
| **Framer Motion** | Orquestração de animações complexas (Timeline de escalada). |
| **Shadcn UI** | Base de componentes acessíveis e customizáveis. |
| **Lucide React** | Ícones minimalistas para interface. |

---

## 4. Funcionalidades de Destaque (Epics)

### F1: Home (The Ascent Basecamp)
- **Hero Section:** Imagem de alta resolução em segundo plano (montanha enevoada) com overlay suave de névoa.
- **Animated Headlines:** Texto que alterna entre "Finance Executive", "Full-Stack Developer" e "Alpine Climber".

### F2: Career Timeline (The Climbing Path)
- **Metáfora Visual:** Uma linha vertical que representa a subida de uma montanha.
- **Milestones:** Cada cargo é um "Acampamento Base" (Basecamp). À medida que o usuário desce a página, ele "sobe" a montanha.
- **Destaque:** Z-Score Sports Betting Analytics como um dos acampamentos mais altos (inovação/empreendedorismo).

### F3: Adventures (The Summit Logs)
- **Galeria Imersiva:** Relatos de Huayna Potosi, Patagônia, Wyoming, etc.
- **Data Points:** Altitude máxima, dificuldade técnica e fotos em widescreen.

### F4: Portfolio (The Expeditions)
- **Cards Interativos:** Projetos como *Betting MGMT*, *Stakely* e *School of Bets*.
- **Quick View:** Hover que mostra as tecnologias usadas com ícones em tons metálicos (Glacier Steel).

---

## 5. Experiência do Usuário (UX) Principais Regras
1. **Performance First:** Nenhuma seção deve demorar para carregar (Lighthouse 95+).
2. **Mobile Immersive:** A experiência de scroll na montanha deve ser fluida no celular.
3. **Contrast Compliance:** Garantir que os textos escuros (Night Summit) sobre o fundo claro (Alpine Mist) passem nos testes de acessibilidade WCAG.

---

## 6. Próximos Passos (Workflow)
1. **Configuração de Design Tokens:** Implementar a nova paleta no `tailwind.config.ts`.
2. **Desenvolvimento da Home:** Focar no componente de Hero com o visual "Alpine Mist".
3. **Drafting da Timeline:** Criar a lógica de scroll para a metáfora da escalada.

---
**Documento gerado por Antigravity AI** | Janeiro 2026
