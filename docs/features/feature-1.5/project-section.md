# Project Section - Feature 1.5

## 🎯 Visão Geral

Seção de projetos responsável por apresentar os 3 principais projetos do portfólio com design moderno, animações elegantes e sistema de internacionalização completo.

## 🏗️ Estrutura da Seção

### **Componente Principal**
- `ProjectSection.tsx`: Orquestrador que gerencia os 3 projetos com animações e estado global

### **Projetos Incluídos**
1. **Betting Management** - Sistema de gestão operacional para contas de betting
2. **School of Bets** - Plataforma educacional para apostadores
3. **Stakely** - Ferramenta de análise e gestão de investimentos

## 🎨 Animações e Interações

### **Animação de Scroll Elegante**
Implementar animação suave quando o usuário faz scroll para a seção de projetos:
- **Efeito Parallax**: Movimento diferenciado entre elementos de fundo e primeiro plano
- **Fade-in Progressivo**: Elementos aparecem em sequência durante o scroll
- **Timing Controlado**: Animações sincronizadas para experiência fluida

### **Hook de Entrada Visual**
Seção intermediária entre Hero e Projects com mensagem de transição animada:

#### **Posicionamento no Layout**
```
HeroSection
    ↓ scroll
ProjectEntryHook (nova seção)
    ↓ automático após 2-3s ou scroll
ProjectSection (com Betting Management)
```

#### **Conteúdo do Hook (Baseado no Hero)**

**Título e Subtítulo em Dois Idiomas:**

🇧🇷 **Português:**
- **Título:** "De problemas reais para produtos reais"
- **Subtítulo:** "Onde faltam ferramentas eficientes, surgem produtos pensados para resolver dores reais"

🇺🇸 **English:**
- **Title:** "From real problems to real products"
- **Subtitle:** "Where efficient tools are missing, products are created to solve real-world pains"

**CTA Central (Hero-like):**
- **Português:** "Explore"
- **English:** "Explore"
- Com efeito glow animado (sem bounce/ícone)
- Clicável para scroll direto para Betting Management
- Duas linhas horizontais decorativas nos lados
- Sem indicador de scroll tradicional

**Comportamento:**
- **Fade-in Up**: Entrada suave de baixo para cima (HERO_ANIMATIONS.blurFade)
- **Auto-scroll**: Scroll automático após 3 segundos usando `scrollIntoView({ behavior: 'smooth' })`
- **Manual Control**: Usuário pode scroll manualmente a qualquer momento
- **CTA Clickable**: Texto com glow effect e onClick para Betting Management
- **Visual Impact**: Tipografia hero-like com `hero-headline` styling

#### **Navegação Cross-Component**

**Header Navigation:**
- Botão "Projects" no Header → Scroll para ProjectEntryHook
- Usar `document.getElementById('project-entry-hook').scrollIntoView({ behavior: 'smooth' })`

**Hero CTA Integration:**
- Botão "Meus projetos" / "My projects" → Scroll para ProjectEntryHook  
- Manter comportamento existente do Hero CTA

**ProjectEntryHook CTA:**
- "Explore" → Scroll direto para Betting Management section
- Usar `document.getElementById('betting-mgmt').scrollIntoView({ behavior: 'smooth' })`

#### **Wireframe ASCII**

**Desktop View:**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                 DE PROBLEMAS REAIS PARA PRODUTOS REAIS                     │
│                       (text-6xl font-bold text-cv-text-primary)             │
│                                                                             │
│        Onde faltam ferramentas eficientes, surgem produtos pensados       │
│                   para resolver dores reais                                 │
│                    (text-2xl text-foreground max-w-3xl mx-auto)             │
│                                                                             │
│                                                                             │
│  ──────────────────────── ◉ Explore ─────────────────────────  │
│         (linha)            (pulse animate)            (linha)                │
│                                                                             │
│                                                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Mobile View:**
```
┌─────────────────────────────────┐
│                                 │
│     DE PROBLEMAS REAIS         │
│     PARA PRODUTOS REAIS        │
│      (text-5xl bold)           │
│                                 │
│   Onde faltam ferramentas      │
│   eficientes, surgem produtos  │
│   pensados para resolver       │
│   dores reais                  │
│    (text-xl max-w)              │
│                                 │
│                                 │
│   ────── ◉ Explore ──────      │
│                                │
│                                 │
│                                 │
└─────────────────────────────────┘
```

#### **Animações e Efeitos Detalhados**

### 🎬 **ANIMAÇÕES DO PROJECT ENTRY HOOK**

**📥 Entrada do Hook (Hook Entry - Fade-in Up Cinematográfica)**
Quando o usuário faz scroll para o Hook, a seção inteira entra com uma animação sofisticada que combina múltiplas transformações sincronizadas. O elemento emerge da parte inferior da tela com uma transição suave de opacity 0→100% acompanhada por um movimento vertical de 40px para cima. Esta animação dura 0.8 segundos com uma curva de easing `cubic-bezier(0.25, 0.46, 0.45, 0.94)` que cria uma sensação orgânica e cinematográfica. O elemento aparece gradualmente como se estivesse subindo das profundezas da tela, criando impacto visual imediato.

**✨ Glow Pulsante Orgânico do Hook (Hook Soft Pulse Glow)**
O CTA "Explore" do Hook possui um efeito de luminescência que respira organicamente. O glow não é um pulse estático, mas sim uma oscilação suave que imita o ritmo de respiração humana. A intensidade da luz varia entre 50% e 70% de opacidade ao longo de 3 segundos completos, criando uma aparência viva e convidativa. O glow usa a cor teal `oklch(0.85 0.21 200)` com blur de 20-25px, gerando um halo suave que parece pulsar de dentro para fora. Este efeito é sutilmente hipnótico, atraindo o olhar do usuário sem ser agressivo.

**🌊 Transição de Hover do Hook (Hook Glow Intensification)**
Quando o usuário posiciona o cursor sobre o CTA "Explore" do Hook, ocorre uma cascata de transformações harmônicas. Primeiramente, o elemento sofre um scale de 1.05x que o expande suavemente. Simultaneamente, o glow se intensifica dramaticamente, passando de 20px para 30px de blur e aumentando a opacidade de 50% para 80%. Esta transição dura 300ms e utiliza a curva `ease-out` para criar uma resposta tátil que parece física e responsiva. O efeito criado é como se o elemento estivesse "acendendo" em resposta ao toque, proporcionando feedback visual imediato e satisfatório.

**🔄 Sequência de Revelação do Hook (Hook Staggered Reveal)**
Os elementos do Hook não aparecem todos simultaneamente. Em vez disso, seguem uma coreografia temporal precisa. O título principal aparece primeiro com 0ms de delay. Após 200ms, o subtitle emerge com a mesma animação de fade-in-up. Finalmente, após 400ms do início, o CTA com seu glow pulsante entra em cena. Esta sequência escalonada cria uma experiência narrativa onde o usuário primeiro vê o conceito geral, depois entende o contexto, e finalmente é convidado à ação.

**📤 Saída do Hook (Hook Exit - Fade-out Suave)**
Quando o Hook sai do viewport (seja por scroll manual ou auto-scroll), ele desaparece com uma animação elegante de fade-out que dura 600ms. O elemento diminui suavemente de scale 1→0.98 enquanto a opacity vai de 100%→0%, criando a sensação de receder suavemente para o fundo. Esta saída é complementar à entrada, mantendo a fluidez visual da transição entre o Hook e a primeira seção de projetos.

**🎭 Auto-Progressão do Hook (Hook Smart Auto-Scroll)**
Após 3 segundos de visibilidade completa, se o usuário não interagiu, o Hook executa um scroll suave automático. Este não é um movimento brusco, mas sim uma transição cinematográfica que dura 800ms usando `scrollIntoView({ behavior: 'smooth', block: 'start' })`. A experiência é similar a uma câmera de filme que se move suavemente para enquadrar a primeira cena de projetos. Este comportamento é inteligente: se o usuário já interagiu (scrolled ou clicou), o auto-scroll é cancelado para evitar conflitos de experiência.

### 🚀 **ANIMAÇÕES DAS SEÇÕES DE PROJETOS**

**📥 Entrada dos Projetos (Projects Entry - Parallax Staggered)**
Quando o primeiro projeto (Betting Management) entra no viewport após o Hook, ele aparece com uma animação diferente que complementa a do Hook. O projeto emerge com um efeito parallax onde o conteúdo textual entra primeiro com fade-in-up (0.6s) e a demonstração visual segue 200ms depois com uma animação de slide-in da esquerda. Esta sequência cria profundidade visual e diferencia claramente a transição Hook→Projetos. Cada projeto subsequente entra com 400ms de delay entre si, criando uma cascata visual suave.

**🌊 Interatividade dos Projetos (Projects Hover Effects)**
Cada seção de projeto possui suas próprias animações de hover especializadas. O texto do projeto tem um efeito de "lift" suave (translateY -2px) quando hover, enquanto a área de demonstração tem uma escala sutil de 1.02x com um overlay de color que corresponde à cor do projeto (teal para Betting, azul para School of Bets, violet para Stakely). Estes efeitos são mais sutis que os do Hook, criando hierarquia visual: Hook = drama, Projetos = elegância contida.

**📤 Saída dos Projetos (Projects Exit - Scroll-out Fade)**
Quando os projetos saem do viewport durante a navegação, eles desaparecem com uma animação de fade-out diferenciada. O texto some primeiro com opacity 1→0 em 400ms, enquanto a demo visual permanece visível por 200ms adicionais antes de desaparecer. Esta sobreposição timing cria uma sensação de continuidade visual, como se a demonstração visual estivesse "seguindo" o usuário brevemente antes de desaparecer completamente.

**🔄 Transição Entre Projetos (Projects Cross-fade)**
A navegação entre projetos (Betting → School of Bets → Stakely) usa transições de cross-fade suaves. Quando um projeto sai do centro do viewport e outro entra, há uma sobreposição de 300ms onde ambos são parcialmente visíveis (opacity 50% cada), criando uma fusão visual contínua. Esta técnica evita cortes bruscos e mantém o fluxo de leitura natural entre os diferentes casos de uso apresentados.

**📱 Adaptação Contextual (Responsive Behavior)**
Em dispositivos móveis, todas as animações são otimizadas para performance. O glow no mobile usa 15px de blur em vez de 20px para economizar recursos da GPU, e a intensidade máxima é de 60% para não sobrecarregar telas menores. A duração das transições é reduzida para 200ms no hover para responder melhor ao toque, e as sequências de entrada dos projetos são mais curtas (300ms delay ao invés de 400ms) para melhorar performance em conexões mais lentas.

**♿ Acessibilidade Animada (Motion Consideration)**
Para usuários com `prefers-reduced-motion`, as animações são desativadas e substituídas por transições instantâneas de opacity. O glow é mantido mas sem animação pulsante, apenas o estado estático. O conteúdo permanece acessível e navegável sem perda de funcionalidade, apenas sem o espetáculo visual. Tanto o Hook quanto os Projetos mantêm sua estrutura e usabilidade completa.

#### **Design Visual**
- **Background**: Mesmo `--background` escuro do restante do site
- **Cores**: Sistema OKLCH com `text-cv-text-primary` (branco) e `text-cv-accent` (teal)
- **Tipografia**: Hierarquia clara com títulos extra grandes
- **Espaçamento**: `py-32` vertical para impacto visual máximo
- **Centralização**: Todo conteúdo centralizado horizontalmente

## 🌐 Internacionalização

### **Sistema i18n Integrado**
- **Idiomas**: Português (pt) e Inglês (en)
- **Estado Persistido**: Configuração mantida entre sessões via Zustand
- **Textos Localizados**: Todos os conteúdos traduzidos dinamicamente
- **Selector Visual**: Componente `LanguageSelector` para troca de idioma

### **Estrutura de Textos**
Cada projeto possui:
- **Título Principal**: Nome do projeto em ambos os idiomas
- **Descrição**: Contexto e objetivos do projeto
- **Features**: Lista de funcionalidades com ícones
- **CTA**: Call-to-action localizado

## 🎨 Sistema Visual Unificado

### **Cores OKLCH**
Baseado no sistema de cores moderno com fallback RGB:
- **Texto Principal**: `--cv-text-primary: oklch(1 0 0)`
- **Cor de Destaque**: `--cv-accent: oklch(0.85 0.21 200)`
- **Background**: `--background: oklch(0.145 0 0)`
- **Helpers**: `getThreadColor()`, `getCssColor()`, `colorToRgb()`

### **Design System**
- **Border Radius**: `--radius: 0.625rem` com variantes
- **Fontes**: Geist Sans via `--font-sans`
- **Responsividade**: Layout adaptativo mobile/desktop
- **Aspect Ratio**: Padrão 76/59 para demos visuais

## 📱 Layout Responsivo

### **Mobile (Stacked)**
- **Layout Vertical**: Texto acima, demo abaixo
- **Espaçamento**: `gap-12` entre elementos
- **Typography**: `text-4xl` para títulos
- **Container**: Full width com padding adequado

### **Desktop (Grid)**
- **Layout Horizontal**: Texto (2/5) + Demo (3/5)
- **Espaçamento**: `gap-24` entre seções
- **Typography**: `text-5xl` para títulos
- **Grid**: Sistema de 5 colunas proporcional

## 🔧 Componentes Específicos

### **Templates Genéricos**
- `ProjectFeature.tsx`: Base reutilizável para todos os projetos
- `project-feature-text.tsx`: Área de conteúdo textual
- `project-feature-demo.tsx`: Container para demonstrações visuais

### **Customizações por Projeto**
- `BettingMGMT.tsx`: Dashboard analítico minimalista
- `SchoolOfBets.tsx`: Interface educacional interativa  
- `Stakely.tsx**: Visualização de dados de investimento

## 📊 Conteúdo dos Projetos

### **Betting Management** (Implementação Atual)
- **Focus**: Dashboard + Tabelas + Analytics
- **Demo**: Cards de métricas com saldo total e contas (R$ 36.5K)
- **Features**: Controle de contas, relatórios, permissões, segurança
- **Status**: ✅ Implementado como referência para os demais

### **School of Bets** (Pendente)
- **Focus**: Plataforma educacional
- **Demo**: Interface de aprendizado com cursos
- **Features**: Cursos interativos, progresso, certificados
- **Status**: ⏳ Aguardando implementação (baseado em BettingMGMT)

### **Stakely** (Pendente)
- **Focus**: Análise de investimentos  
- **Demo**: Gráficos e métricas de performance
- **Features**: Dashboard analítico, portfólio, relatórios
- **Status**: ⏳ Aguardando implementação (baseado em BettingMGMT)

## 🚀 Performance e Otimização

### **Animações Otimizadas**
- **GPU Acceleration**: Transformações via `transform3d`
- **Debouncing**: Throttle em eventos de scroll
- **Lazy Loading**: Carregamento progressivo de conteúdo
- **Memory Management**: Cleanup adequado de event listeners

### **Internacionalização Eficiente**
- **Static Generation**: Textos pré-compilados em build time
- **Client-side Hydration**: Estado i18n restaurado eficientemente
- **Minimal Bundle**: Apenas idiomas necessários carregados

## 🔄 Fluxo de Dados

```
ProjectSection.tsx (Wrapper com Hook)
    ↓
ProjectEntryHook.tsx (seção intermediária)
    ↓
Componentes Específicos (BettingMGMT, SchoolOfBets, Stakely)
    ↓
ProjectFeature.tsx (Template Genérico)
    ↓
Sub-componentes (Text, Demo)
    ↓
Sistema de Cores (OKLCH + types.ts) + i18n (Zustand)
```

## 🎯 Objetivos de UX

### **Experiência do Usuário**
- **Primeira Impressão**: Animação de entrada impactante
- **Navegação Intuitiva**: Layout claro e organizado
- **Acessibilidade**: Suporte completo a leitores de tela
- **Performance**: Carregamento rápido e interações suaves

### **Engajamento**
- **Visual Atrativo**: Design moderno e profissional
- **Interatividade**: Elementos que respondem às ações do usuário
- **Contexto Rápido**: Informações essenciais fáceis de identificar
- **Conversão**: CTAs claros e destacados

## 🏷️ Sistema de Tipos (TypeScript)

### **Tipos Reutilizáveis (Types.ts)**

#### **✅ Aproveitamento Direto**
- `Language = 'en' | 'pt'`: Sistema i18n completo
- `MotionProps` & `EnhancedMotionProps`: Animações Framer Motion
- `ColorTheme`: Cores OKLCH unificadas
- `ProjectData`: Estrutura completa para dados dos projetos
- `HERO_ANIMATIONS blurFade & blurFadeDelay`: Animações padronizadas

#### **✅ Adaptação Necessária**
- `HeroTexts`: Adaptar para `ProjectEntryTexts` (remover CTA, adicionar Entry Hook texts)
- `HERO_SIZE_CLASSES default`: Reaproveitar para tipografia do Hook
- `threadsProps`: Adaptação opcional para fundo animado do Hook

### **Novos Tipos Necessários**

#### **Tipos Específicos do Hook**
```typescript
// Textos específicos do ProjectEntryHook
export interface ProjectEntryTexts {
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  cta: Record<Language, string>;
}

// Props do Componente ProjectEntryHook
export interface ProjectEntryHookProps {
  language: Language;
  className?: string;
  onAutoScrollComplete?: () => void;
  autoScrollDelay?: number; // ms, padrão 3000
  onCtaClick?: () => void; // Handler para click no CTA
  enableAutoScroll?: boolean; // Controle de auto-scroll
}

// Configuração de animação específica
export interface ProjectEntryAnimation {
  initial: MotionProps['initial'];
  animate: MotionProps['animate'];
  transition: MotionProps['transition'];
}
```

#### **Tipos para Novos Projetos**
```typescript
// Dados dos novos projetos (extensão de ProjectData)
export const SCHOOL_OF_BETS_DATA: ProjectData = {
  id: 'school-of-bets',
  name: 'School of Bets',
  title: {
    pt: 'Plataforma Educacional para Apostadores',
    en: 'Educational Platform for Bettors'
  },
  // ... resto dos dados
};

export const STAKELY_DATA: ProjectData = {
  id: 'stakely',
  name: 'Stakely',
  title: {
    pt: 'Ferramenta de Análise de Investimentos',
    en: 'Investment Analysis Tool'
  },
  // ... resto dos dados
};
```

#### **Constantes de Textos do Hook**
```typescript
export const PROJECT_ENTRY_TEXTS: ProjectEntryTexts = {
  title: {
    pt: 'De problemas reais para produtos reais',
    en: 'From real problems to real products'
  },
  subtitle: {
    pt: 'Onde faltam ferramentas eficientes, surgem produtos pensados para resolver dores reais',
    en: 'Where efficient tools are missing, products are created to solve real-world pains'
  },
  cta: {
    pt: 'Explore',
    en: 'Explore'
  }
};
```

### **Prioridade de Reaproveitamento**
1. **High Priority**: `Language`, `MotionProps`, `ColorTheme`, `HERO_ANIMATIONS`
2. **Medium Priority**: `HeroTexts` (adaptação), `HERO_SIZE_CLASSES` (adaptação)
3. **Low Priority**: Novos tipos específicos (somente se necessário)

## 🎨 Sistema CSS e Estilos

### **Classes Reutilizáveis (globals.css)**

#### **✅ Aproveitamento Direto**
- `.hero-headline`: Tipografia principal para títulos grandes
- `--cv-text-primary`: Cor principal do texto
- `--cv-accent`: Cor de destaque teal
- `--radius` & variantes: Sistema de bordas consistente
- Sistema de spacing: `--cv-spacing-*`
- Animações: `.animate-shine`, `.animate-spin-around`

#### **✅ Adaptação Necessária**
- `.hero-rotation-container`: Adaptar para centralização do Hook
- `--cv-shimmer-*`: Adaptação para efeitos pulse do CTA

### **Novas Classes Necessárias**

#### **Classes Específicas do Hook**
```css
/* Container principal do ProjectEntryHook */
.project-entry-hook {
  @apply relative min-h-screen flex items-center justify-center;
  @apply py-32; /* Espaçamento vertical hero-like */
}

/* Tipografia hero-like para o título */
.project-entry-title {
  @apply hero-headline;
  @apply text-5xl md:text-6xl lg:text-7xl; /* Mesma escala do hero */
  @apply text-center mb-8;
}

/* Subtítulo com dimensões do hero */
.project-entry-subtitle {
  @apply text-xl md:text-2xl; /* Similar ao hero */
  @apply text-foreground/80; /* Fade suave */
  @apply text-center max-w-3xl mx-auto mb-16;
}

/* CTA central com efeito glow e hover */
.project-entry-cta {
  @apply relative flex items-center justify-center;
  @apply text-2xl font-semibold text-cv-accent;
  @apply cursor-pointer transition-all duration-300;
  /* Glow effect */
  text-shadow: 0 0 20px oklch(0.85 0.21 200 / 0.5);
  /* Hover para intensificar o glow */
}

.project-entry-cta:hover {
  @apply scale-105;
  text-shadow: 0 0 30px oklch(0.85 0.21 200 / 0.8),
               0 0 50px oklch(0.85 0.21 200 / 0.4);
}

/* Linhas decorativas dos lados */
.project-entry-line {
  @apply h-px bg-gradient-to-r from-transparent via-cv-accent to-transparent;
  @apply flex-1 mx-8;
}

/* Animação glow suave */
@keyframes softPulseGlow {
  0%, 100% {
    text-shadow: 0 0 20px oklch(0.85 0.21 200 / 0.5);
  }
  50% {
    text-shadow: 0 0 25px oklch(0.85 0.21 200 / 0.7);
  }
}

.project-entry-glow-animate {
  animation: softPulseGlow 3s ease-in-out infinite;
}

/* Animação de entrada do Hook */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-entry-animate-in {
  animation: fadeInUp 0.8s ease-out;
}
```

#### **Classes para Animações Avançadas**
```css
/* Efeito parallax sutil no fundo */
.project-entry-parallax-bg {
  @apply absolute inset-0;
  @apply opacity-5;
  @apply transform scale-110;
}

/* Container com perspectiva para efeitos 3D */
.project-entry-perspective {
  @apply perspective-1000;
}

/* Efeito de glassmorphism suave */
.project-entry-glass {
  @apply bg-background/80 backdrop-blur-sm;
  @apply border border-cv-accent/10;
}
```

### **Sistema de Cores (Extensão)**

#### **Variáveis CSS Adicionais**
```css
:root {
  /* Cores específicas do ProjectEntryHook */
  --project-entry-bg: var(--background);
  --project-entry-primary: var(--cv-text-primary);
  --project-entry-accent: var(--cv-accent);
  
  /* Animações do Hook */
  --project-entry-duration: 0.8s;
  --project-entry-delay: 0.3s;
  --project-entry-ease: ease-out;
}
```

### **Responsividade (Mobile-first)**

#### **Breakpoints do Hook**
```css
/* Mobile (até 768px) */
@media (max-width: 768px) {
  .project-entry-title {
    @apply text-4xl;
  }
  
  .project-entry-subtitle {
    @apply text-lg px-6;
  }
  
  .project-entry-cta {
    @apply text-xl;
    /* Glow otimizado para mobile */
    text-shadow: 0 0 15px oklch(0.85 0.21 200 / 0.4);
  }
  
  .project-entry-cta:hover {
    /* Touch-friendly hover */
    text-shadow: 0 0 20px oklch(0.85 0.21 200 / 0.6);
  }
  
  .project-entry-line {
    @apply mx-4;
  }
}

/* Desktop (768px+) */
@media (min-width: 768px) {
  .project-entry-hook {
    @apply py-48; /* Mais espaço em desktop */
  }
}
```

### **Performance e Otimização CSS**

#### **GPU Acceleration**
```css
.project-entry-animate-in,
.project-entry-cta {
  @apply transform-gpu; /* Hardware acceleration */
  will-change: transform, opacity;
}
```

#### **Reduced Motion Support**
```css
@media (prefers-reduced-motion: reduce) {
  .project-entry-animate-in {
    animation: none;
  }
  
  .project-entry-cta {
    animation: none;
    @apply transform-none;
  }
  
  .project-entry-glow-animate {
    animation: none;
  }
}
```

### **Integração com Sistema Existente**

#### **CSS Variables Map**
- `--cv-text-primary` → `--project-entry-primary`
- `--cv-accent` → `--project-entry-accent`
- `--background` → `--project-entry-bg`
- Classes hero: `.hero-headline` → `.project-entry-title`

#### **Consistência Visual**
- Mesma paleta OKLCH do sistema
- Mesmo sistema de tipografia Geist
- Mesmo radius e spacing design tokens
- Animações consistentes com o Hero

#### **ID Elements para Scroll Navigation**
```typescript
// IDs para navegação cross-component
const SCROLL_TARGETS = {
  projectEntryHook: 'project-entry-hook',     // Header CTA "Projects"
  bettingManagement: 'betting-mgmt',           // ProjectEntryHook CTA "Conheça"
} as const;
```

#### **Event Handlers Integration**
```typescript
// Função utilitária para scroll suave
export const smoothScrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Uso no Header CTA
onClick={() => smoothScrollToElement('project-entry-hook')}

// Uso no Hero CTA "Meus projetos"
onClick={() => smoothScrollToElement('project-entry-hook')}

// Uso no ProjectEntryHook CTA "Explore"
onClick={() => smoothScrollToElement('betting-mgmt')}
```