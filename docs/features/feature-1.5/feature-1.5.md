# Feature 1.5 - Hero Section

## 🎯 Objetivo
Criar uma seção hero impressionante com animação WebGL avançada, tipografia dinâmica e botões interativos, servindo como elemento principal de apresentação do portfolio.

## 📋 Visão Geral
A Hero Section será o componente central da landing page, ocupando toda a altura da viewport com um fundo animado usando tecnologia WebGL (componente Threads) que cria linhas ondulantes respondendo ao movimento do mouse. O conteúdo incluirá um título principal com rotação automática de áreas de expertise, um subtítulo descritivo e botões com efeito shimmer. O componente será totalmente responsivo, personalizado através das configurações globais (cores, tamanhos) e sincronizado com o idioma selecionado.

## 🎨 Especificações Visuais

### Tipografia
- **Título Principal**: `font-bold text-cv-text-primary` 
  - Mobile: `text-4xl md:text-5xl lg:text-6xl`
  - Variação por tamanho: compact (3xl-5xl), default (4xl-6xl), large (5xl-7xl)
- **Palavra Rotativa**: `font-bold text-cv-accent` (mesmo tamanho do título, cor diferente do texto estático)
- **Subtítulo**: `text-cv-text-muted text-lg md:text-xl`
- **Botões**: `font-medium px-6 py-3`

### Paleta de Cores
- **Background**: `var(--cv-bg-main)` (preto suave)
- **Texto Principal**: Branco puro (`text-cv-text-primary`)
- **Texto Destaque**: Teal TRON (`text-cv-accent`)
- **Texto Secundário**: Cinza suave (`text-cv-text-muted`)
- **Botão Primário**: Background branco, texto do background principal
- **Botão Secundário**: Background transparente escuro, texto branco
- **Cor das Threads**: Teal TRON padrão do projeto

### Animações e Efeitos
- **Threads WebGL**: 40 linhas animadas com Perlin noise, interação mouse
- **Word Rotate Effect**: Rotação suave entre áreas de expertise (Magic UI)
- **Entrada de Conteúdo**: Fade-in com blur effects
- **Botões Shimmer**: Efeito brilhante animado contínuo
- **Transições Idioma**: Animações sincronizadas na troca

### Dimensões e Layout
- **Altura**: `min-h-[100dvh]` (altura total da viewport)
- **Container**: `max-w-4xl mx-auto` para conteúdo centralizado
- **Espaçamentos**: `px-6` mobile, centralizado com flexbox
- **Botões**: Gap de 4 unidades, stacked em mobile se necessário

### Textos i18n

#### Português (pt)
- **Título Principal**: "Criando vantagem competitiva para"
- **Subtítulo**: "Projetando, construindo e entregando ferramentas que transformam complexidade em vantagem"
- **Áreas de Expertise**: ["Equity Research", "M&A", "Varejo", "Software", "Machine Learning", "Sports Betting"]
- **Botão About Me**: "Sobre mim"
- **Botão Projects**: "Meus projetos"

#### Inglês (en)
- **Título Principal**: "Creating an edge for"
- **Subtítulo**: "Designing, building, and shipping tools that turn complexity into leverage"
- **Áreas de Expertise**: ["Equity Research", "M&A", "Retail", "Software", "Machine Learning", "Sports Betting"]
- **Botão About Me**: "About me"
- **Botão Projects**: "My projects"

### Botões CTA (Call-to-Action)

#### Botão 1: About Me
- **Estilo**: Botão simples com fundo branco
- **Cor Background**: Branco puro (`bg-white`)
- **Cor Texto**: Cor do background principal (`text-cv-bg-primary`)
- **Tipografia**: `font-medium px-6 py-3`
- **Borda**: Sem borda
- **Quinas**: Bem arredondadas (border-radius alto)
- **Hover**: Background branco com leve sombra/escurecimento
- **Funcionalidade**: Placeholder (por enquanto sem navegação)

#### Botão 2: My Projects
- **Estilo**: Shimmer Button com efeito animado de luz giratória
- **Cor Background**: Transparente com borda branca
- **Cor Texto**: Branco puro (`text-white`)
- **Efeito Shimmer**: Luzinha na cor `cv-accent` (teal TRON) dando volta no botão
- **Quinas**: Bem arredondadas (border-radius alto)
- **Tipografia**: `font-medium px-6 py-3`
- **Animação**: Luz giratória contínna ao redor do botão
- **Funcionalidade**: Placeholder (por enquanto sem navegação)

## 🖼️ Wireframes Detalhados dos Componentes

### Componente: HeroThreads.tsx
**Função**: Container WebGL com animação de linhas interativas

#### Estrutura Visual
```text
Canvas WebGL Full Viewport
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ~~~~~~~~ Linhas onduladas animadas ~~~~~~~~                │
│     /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\                  │
│    /                                       \                │
│   ~    Respondem ao movimento do mouse      ~               │
│    \                                       /                │
│     \\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/                 │
│                                                             │
│  • 40 linhas (u_line_count) com Perlin noise                │
│  • Cor: Teal TRON (cv-accent)                               │
│  • Interação: amplitude varia com mouse                     │
│  • Performance: GPU-accelerated (ogl library)               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Estados de Interação
```text
Estado Repouso:
┌─────────────────────────────────────────────────────────────┐
│  ~~~~~~~~ Ondas suaves e constantes ~~~~~~~~                │
│  Amplitude: padrão, Velocidade: constante                   │
└─────────────────────────────────────────────────────────────┘

Estado Interação Mouse:
┌─────────────────────────────────────────────────────────────┐
│  ~~~~~~~~~ Ondas respondem ao cursor ~~~~~~~~~              │
│  Amplitude: aumenta perto do mouse                          │
│  Velocidade: varia com distância                             │
│  Efeito: orgânico e fluido                                  │
└─────────────────────────────────────────────────────────────┘
```

### Componente: HeroHeadline.tsx
**Função**: Orquestrador que combina componentes UI para criar o título completo

#### Estrutura Visual
```
HeroHeadline.tsx (Orquestrador)
┌─────────────────────────────────────────────────────────────────────┐
│  [hero-static-title.tsx] + [word-rotate.tsx] + [hero-subtitle.tsx]  │
│  Combinados pelo HeroHeadline.tsx                                   │
│                                                                     │
│               CREATING AN EDGE FOR                                  │
│             [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]                       │
│                                                                     │
│                    [EQUITY RESEARCH]                                │
│                  (fade in/out animation)                            │
│                                                                     │
│  Designing, building and shipping tools that                        │
│  turn complexity into leverage                                      │
│                                                                     │
│  • HeroHeadline.tsx: Orquestrador                                   │
│  • hero-static-title.tsx: Texto fixo                                │
│  • word-rotate.tsx: Palavra rotativa (Magic UI)                     │
│  • hero-subtitle.tsx: Subtítulo descritivo                          │
│  • Ciclo: 2 segundos por palavra                                    │
│  • Efeito: Fade in/out suave                                        │
│  • Tipografia: Bold, cores contrastantes                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

#### Componentes UI Combinados

**hero-static-title.tsx**
```text
CREATING AN EDGE FOR

• Texto fixo: "CREATING AN EDGE FOR"
• Cor: cv-text-primary (branco)
• Tipografia: Bold
• Tamanho: Responsivo (4xl-6xl)
• Posição: Antes da palavra rotativa
• Alinhamento: Centralizado
```

**hero-subtitle.tsx**
```text
Designing, building and shipping tools that
turn complexity into leverage

• Texto fixo: Subtítulo descritivo
• Cor: cv-text-muted (cinza suave)
• Tipografia: Normal
• Tamanho: Responsivo (lg:text-xl, md:text-lg)
• Posição: Abaixo do título principal
• Alinhamento: Centralizado
```


```

#### Estados de Animação
```text
┌─────────────────────────────────────────────────────────────┐
│ Estado 1: [EQUITY RESEARCH] (Visível)                       │
│ ╔═════════════════════════════════════════════════════════╗ │
│ ║                   [EQUITY RESEARCH]                     ║ │
│ ║               Opacity: 1.0, Scale: 1.0                  ║ │
│ ╚═════════════════════════════════════════════════════════╝ │
│                                                             │
│ Estado 2: Transição (Fade Out / Shift)                      │
│ ╔═════════════════════════════════════════════════════════╗ │
│ ║                   [EQUITY RESEARCH]                     ║ │
│ ║         Opacity: 1.0 → 0.0, Y: 0 → 20, Blur: 0 → 4px    ║ │
│ ║         Tempo: 300ms, Ease: easeOut                     ║ │
│ ╚═════════════════════════════════════════════════════════╝ │
│                                                             │
│ Estado 3: [M&A] (Entrada / Fade In)                         │
│ ╔═════════════════════════════════════════════════════════╗ │
│ ║                         [M&A]                           ║ │
│ ║         Opacity: 0.0 → 1.0, Y: -20 → 0, Blur: 4 → 0px   ║ │
│ ╚═════════════════════════════════════════════════════════╝ │
└─────────────────────────────────────────────────────────────┘
```

### Componente: HeroCta.tsx
**Função**: Botões de call-to-action com efeitos visuais

#### Estrutura Visual
```text
HeroCta.tsx (Botões)
┌───────────────────────────────────────────────────┐
│                                                   │
│    [    ABOUT ME    ]     [  MY PROJECTS  ]       │
│                                                   │
│    (Botão Simples)         (Botão Shimmer)        │
│                                                   │
│ • Botão 1: Fundo branco, texto cv-bg-primary      │
│ • Botão 2: Shimmer (luz giratória cv-accent)      │
│ • Layout: Horizontal desktop, stacked mobile      │
│ • Gap: 4 unidades entre botões (gap-4)            │
│ • Quinas: Arredondadas (rounded-full / large)     │
│ • Hover: Shadow + scale(1.05)                     │
│                                                   │
└───────────────────────────────────────────────────┘
```

#### Estados dos Botões
```text
Botão 1 - About Me:
┌───────────────────────────────────────────┐
│ [    ABOUT ME    ]      ← Estado Normal   │
│ Fundo: bg-white, Texto: cv-bg-primary     │
└───────────────────────────────────────────┘
┌───────────────────────────────────────────┐
│ [    ABOUT ME    ]      ← Estado Hover    │
│ Shadow: xl, Transform: scale(1.05)        │
└───────────────────────────────────────────┘

Botão 2 - My Projects:
┌───────────────────────────────────────────┐
│ [  MY PROJECTS  ]     ← Estado Normal     │
│ Border: white/10, Shimmer: ON (cv-accent) │
│ Background: rgba(0,0,0,0.8)               │
└───────────────────────────────────────────┘
┌───────────────────────────────────────────┐
│ [  MY PROJECTS  ]     ← Estado Hover      │
│ Border: cv-accent, Shimmer: +Velocidade   │
│ Transform: scale(1.05)                    │
└───────────────────────────────────────────┘
```

### Layout Mobile Completo
```text
┌───────────────────────────────┐
│ [ Header (Classic Glass) ]    │
│                               │
│ ┌───────────────────────────┐ │
│ │ ~~~ [HeroThreads] ~~~~    │ │
│ │ ~~~ (WebGL Canvas) ~~~~   │ │
│ └───────────────────────────┘ │
│                               │
│      CREATING AN EDGE FOR     │
│    [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]    │
│                               │
│       [EQUITY RESEARCH]       │
│         (word-rotate)         │
│                               │
│      Designing, building      │
│      and shipping tools       │
│     turn complexity into      │
│           leverage            │
│                               │
│      [   ABOUT ME   ]         │
│      [ MY PROJECTS  ]         │
│                               │
│ ┌───────────────────────────┐ │
│ │ ~~~ [HeroThreads] ~~~~    │ │
│ │ ~~~ (WebGL Canvas) ~~~~   │ │
│ └───────────────────────────┘ │
└───────────────────────────────┘
```

### Layout Desktop Completo
```text
┌─────────────────────────────────────────────────────────────────────┐
│ [ Header (Classic Glass Bar) ]                                      │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ ~~~ [HeroThreads - Background Full Viewport] ~~~~~~~~~~~~~~~~~~ │ │
│ │                                                                 │ │
│ │             CREATING AN EDGE FOR                                │ │
│ │           [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]                     │ │
│ │                                                                 │ │
│ │                [EQUITY RESEARCH]                                │ │
│ │                 (word-rotate)                                   │ │
│ │                                                                 │ │
│ │     Designing, building and shipping tools that                 │ │
│ │     turn complexity into leverage                               │ │
│ │                                                                 │ │
│ │         [ ABOUT ME ]         [ MY PROJECTS ]                    │ │
│ │                                                                 │ │
│ │ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ │ │
│ └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

## 🔗 Esquema Visual de Conexão dos Componentes

### Arquitetura HeroSection.tsx (Orquestrador Principal)

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                              HeroSection.tsx                                │
│                         (Componente Orquestrador)                           │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🎯 FUNÇÃO PRINCIPAL: Montar e coordenar toda a Hero Section          │  │
│  │  • Gerenciar estado de carregamento                                   │  │
│  │  • Conectar com estado global (Zustand: language, color)              │  │
│  │  • Orquestrar layout responsivo e animações de entrada                │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│            ┌───────────────────────────────────────────────────┐            │
│            │            ESTRUTURA VISUAL COMPLETA              │            │
│            │                                                   │            │
│            │  ╔═════════════════════════════════════════════╗  │            │
│            │  ║  [HeroThreads.tsx] - BACKGROUND TOTAL       ║  │            │
│            │  ║  • Canvas WebGL (ogl) preenche viewport     ║  │            │
│            │  ║  • 40 linhas animadas (u_line_count: 40)    ║  │            │
│            │  ║  • Interação mouse / Cor: cv-accent         ║  │            │
│            │  ║  • Z-index: fundo (-10 / 0)                 ║  │            │
│            │  ╚═════════════════════════════════════════════╝  │            │
│            │                                                   │            │
│            │  ╔═════════════════════════════════════════════╗  │            │
│            │  ║  [HeroHeadline.tsx] - CONTEÚDO CENTRAL      ║  │            │
│            │  ║  • Static Title + WordRotate + Subtitle     ║  │            │
│            │  ║  • WordRotate (Magic UI): 2s cycle          ║  │            │
│            │  ║  • Cores: cv-text-primary / cv-accent       ║  │            │
│            │  ╚═════════════════════════════════════════════╝  │            │
│            │                                                   │            │
│            │  ╔═════════════════════════════════════════════╗  │            │
│            │  ║  [HeroCta.tsx] - BOTÕES DE AÇÃO             ║  │            │
│            │  ║  • Primary: About (Solid)                   ║  │            │
│            │  ║  • Secondary: Projects (Shimmer)            ║  │            │
│            │  ║  • Efeitos: scale(1.05) no hover            ║  │            │
│            │  ╚═════════════════════════════════════════════╝  │            │
│            │                                                   │            │
│            └───────────────────────────────────────────────────┘            │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🔄 FLUXO DE DADOS E ESTADOS                                           │  │
│  │  • settings store → HeroSection → Children (language/color)           │  │
│  │  • window resize → HeroThreads (resize canvas)                        │  │
│  │  • mouse move → HeroThreads (update shader uniforms)                  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Diagrama de Conexão de Componentes

```text
       PÁGINA (page.tsx)
       ┌─────────────────────────┐
       │     <HeroSection />     │
       └───────────┬─────────────┘
                   ▼
     HeroSection.tsx (ORQUESTRADOR)
     ┌───────────────────────────────────────────────────────┐
     │                                                       │
     │  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐  │
     │  │ HeroThreads │   │HeroHeadline │   │   HeroCta   │  │
     │  ├─────────────┤   ├─────────────┤   ├─────────────┤  │
     │  │WebGL Canvas │   │Título +     │   │Primary:About│  │
     │  │40 Lines (40)│   │WordRotate   │   │Sec: Shimmer │  │
     │  └──────┬──────┘   └──────┬──────┘   └──────┬──────┘  │
     │         │                 │                 │         │
     │  ┌──────┴──────┐   ┌──────┴──────┐   ┌──────┴──────┐  │
     │  │ threads.tsx │   │ word-rotate │   │ shimmer-btn │  │
     │  │ (ReactBits) │   │ (Magic UI)  │   │   (UI Lib)  │  │
     │  └─────────────┘   └─────────────┘   └─────────────┘  │
     │                                                       │
     └─────────────┬─────────────────┬───────────────────────┘
                   │                 │
           ┌───────┴──────┐   ┌──────┴───────┐
           │ settings.ts  │   │   types.ts   │
           │ (Zustand)    │   │ (I18n / Lib) │
           └──────────────┘   └──────────────┘
```

### Fluxo de Renderização e Estados
```text
CICLO DE VIDA HERO SECTION

1️⃣ MONTAGEM INICIAL
┌───────────────────────────────────────────┐
│ HeroSection.tsx                           │
│ • useEffect (mount) → loading: true;      │
│ • Dynamic import: HeroThreads             │
│ • Zustand Subscribe: settings (language)  │
└───────────────┬───────────────────────────┘
                │
2️⃣ HIDRATAÇÃO E WEBGL
┌───────────────┴───────────────────────────┐
│ Componentes filhos inicializam:           │
│ • HeroThreads: ogl Renderer + 40 lines    │
│ • HeroHeadline: Magic UI WordRotate start │
│ • HeroCta: Shimmer button animation start │
└───────────────┬───────────────────────────┘
                │
3️⃣ ESTADO PRONTO (IDLE)
┌───────────────┴───────────────────────────┐
│ HeroSection → loading: false              │
│ • Content Fade-In (blur: 4px → 0)         │
│ • WordRotate: 2s interval cycle           │
│ • Mouse handlers: ACTIVE                  │
└───────────────┬───────────────────────────┘
                │
4️⃣ INTERAÇÕES EM TEMPO REAL
┌───────────────┴───────────────────────────┐
│ EVENT LOOP / USER ACTIONS:                │
│ • Mouse move → Update shader uniforms     │
│ • Color/Lang change → Reactive update     │
│ • Window resize → Resize ogl canvas       │
└───────────────┬───────────────────────────┘
                │
5️⃣ DESMONTAGEM (CLEANUP)
┌───────────────┴───────────────────────────┐
│ UNMOUNT / CLEANUP:                        │
│ • cancelAnimationFrame (Thread loop)      │
│ • ogl loseContext + remove canvas         │
│ • clear all intervals/listeners           │
└───────────────────────────────────────────┘
```

## 🏗️ Estrutura de Arquivos

```
┌─ components/
│  ├─ blocks/
│  │  └─ hero/
│  │     ├─ HeroThreads.tsx         # Componente principal com WebGL
│  │     ├─ HeroHeadline.tsx        # Orquestrador: static + rotate + subtitle
│  │     └─ HeroCta.tsx            # Botões com efeito shimmer
│  │
│  ├─ ui/
│  │  ├─ hero-static-title.tsx    # Título estático "CREATING AN EDGE FOR"
│  │  ├─ hero-subtitle.tsx         # Subtítulo descritivo
│  │  ├─ word-rotate.tsx          # Componente de rotação de texto (Magic UI)
│  │  └─ shimmer-button.tsx       # Botão com efeito shimmer
│  │
│  └─ reactbits/
│     └─ threads.tsx              # Componente WebGL das threads
│
├─ components/
│  └─ sections/
│     └─ HeroSection.tsx          # Orquestrador principal
│
├─ stores/
│  └─ settings.ts                 # Modificado para estado global de idioma
│
├─ types.ts                        # Tipos e constantes do hero
│
└─ app/
   └─ page.tsx                    # Modificado para incluir HeroSection
```

## ✅ Critérios de Aceite

### Funcionais
- [ ] Hero Section exibida em página inicial
- [ ] Animação WebGL funcionando com 40 linhas
- [ ] Word rotate effect para áreas de expertise
- [ ] Interação com mouse alterando animação
- [ ] Botões CTA funcionando (About Me simples, My Projects com shimmer)
- [ ] Responsividade mobile/desktop
- [ ] Seletor de idioma funcional com estado global Zustand
- [ ] Idioma padrão em inglês com persistência
- [ ] Sincronização de todo conteúdo com idioma global
- [ ] Personalização de cor/tamanho funcionando

### Visuais
- [ ] Background com cor tema aplicada corretamente
- [ ] Tipografia com tamanhos e pesos corretos

- [ ] Animações suaves e performáticas
- [ ] Layout centralizado e responsivo
- [ ] Efeitos de blur e transições aplicados

### Técnicos
- [ ] Componente WebGL carregado dinamicamente (SSR-safe)
- [ ] TypeScript tipado corretamente em `types.ts`
- [ ] Componentes reutilizáveis e modulares
- [ ] Performance otimizada (memoização)
- [ ] Cleanup adequado de resources WebGL
- [ ] Código seguindo arquitetura do projeto
- [ ] Sem estilos hardcoded (tokens CSS)

## 🔄 Fluxo de Trabalho

1. **Atualizar estado global** em `stores/settings.ts` com idioma padrão 'en'
2. **Criar tipos e constantes** em `types.ts` com textos i18n
3. **Implementar componente WebGL** `components/reactbits/threads.tsx`
4. **Criar componentes UI** `word-rotate.tsx` e `shimmer-button.tsx`
5. **Implementar botão simples** para "About Me" (fundo branco)
6. **Desenvolver blocks hero** `HeroThreads.tsx`, `HeroHeadline.tsx`, `HeroCta.tsx`
6. **Criar orquestrador** `HeroSection.tsx` em sections/
7. **Integrar na página** modificando `app/page.tsx`
8. **Testar responsividade** em mobile/desktop
9. **Validar integração** com idioma global

## 🎯 Contexto de Uso

A Hero Section será o primeiro elemento visual abaixo do header, servindo como apresentação principal do portfolio. Ocupará toda a viewport inicial e será responsável por causar impacto visual imediato, apresentando as áreas de expertise de forma dinâmica e direcionando os usuários para as próximas seções através dos botões de call-to-action. Todo o conteúdo será sincronizado com o estado global de idioma (Zustand), começando em inglês como padrão e permitindo alternar para português através do seletor no header.

## 📊 Considerações

### Performance
- Dynamic import do componente WebGL para evitar SSR issues
- Memoização de cores e configurações para evitar re-renders
- Animações GPU-aceleradas com CSS transforms
- Cleanup adequado de event listeners e WebGL context
- Otimização do shader para performance em dispositivos móveis

### Acessibilidade
- Semântica HTML correta com `<section>` e `<h1>`
- Texto legível com alto contraste
- Animações respeitando `prefers-reduced-motion`
- Botões acessíveis com teclado e screen readers
- Alternativa textual para animação WebGL

### UX
- Tempo de carregamento otimizado com lazy loading
- Feedback visual claro em interações
- Animações suaves sem causar motion sickness
- Design mobile-first com adaptações desktop
- Estados de loading e fallback para navegadores sem WebGL

### Estado Global
- Zustand store compartilhado para idioma entre todas as páginas
- Persistência do idioma selecionado no localStorage
- Sincronização imediata de conteúdo ao mudar idioma
- Idioma padrão 'en' (inglês) para primeira visita