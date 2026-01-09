# Feature 1.6 - About Section

## 🎯 Objetivo

Seção "About" para apresentar posicionamento profissional com foco em tecnologia, dados e IA, usando sistema de internacionalização completo e cards com design sofisticado.

## 📋 Visão Geral

Seção "About" responsável por apresentar o perfil profissional através de 3 cards que contam uma história clara: pensamento estratégico (finanças aplicadas), construção de sistemas (full-stack data), e desenvolvimento nativo em IA. A seção utiliza containers queries do Tailwind para layout adaptativo, sistema i18n (Zustand) para português/inglês, e efeitos de hover que intensificam o glow nos ícones.

## 📝 Conteúdo dos Cards

### Card 1 - Strategic Thinker (Ícone: TrendingUp)
**Título:** "Strategic Thinker"
**Descrição:** "Former CFO and finance executive with 10+ years framing complex decisions, risk, and incentives — now applying strategic mindset to data-driven products."

**Título PT:** "Pensamento Estratégico"
**Descrição PT:** "Ex-CFO e executivo financeiro com 10+ anos estruturando decisões complexas, risco e incentivos — hoje aplicando mentalidade estratégica em produtos orientados por dados."

**Tags:** executive, entrepreneur

### Card 2 - Builder (Ícone: Code)
**Título:** "Builder"
**Descrição:** "Builds end-to-end systems using Python, R, and TypeScript — from ML models and APIs to production-ready apps with persistent data and permissions."

**Título PT:** "Construtor"
**Descrição PT:** "Desenvolve sistemas ponta a ponta com Python, R e TypeScript — de modelos ML e APIs a aplicações em produção com dados persistentes e controle de permissões."

**Tags:** R, python, react

### Card 3 - AI-Powered (Ícone: Brain)
**Título:** "AI-POWERED"
**Descrição:** "Embraces AI coding agents as core tools — using Cursor and Claude Code to deliver faster iterations, cleaner code, and more efficient development cycles."

**Título PT:** "AI-POWERED"
**Descrição PT:** "Adota agentes de codificação IA como ferramentas centrais — usando Cursor e Claude Code para entregar iterações mais rápidas, código mais limpo e ciclos de desenvolvimento mais eficientes."

**Tags:** claude, cursor, agents, aicoding

## 🎨 Especificações Visuais

### Tipografia
- **Fonte**: Geist Sans (padrão do projeto)
- **Título da Seção**: `text-4xl` (mobile) → `text-5xl` (desktop), `font-semibold`
- **Descrição da Seção**: `text-lg` com `text-foreground/80`
- **Card Title**: `font-medium` com `mt-6`
- **Card Description**: `text-sm`

### Internacionalização (i18n)
- **Idiomas**: Português (pt) e Inglês (en)
- **Estado**: Persistido via Zustand store
- **Selector**: LanguageSelector no Header
- **Atualização**: Re-render automática ao trocar idioma

### Tags (Opcional)
- **Executivo**: executive, entrepreneur
- **Builder**: R, python, react
- **AI-Powered**: claude, cursor, codex

### Paleta de Cores
- **Background**: `bg-background` (oklch(0.145 0 0))
- **Título**: `text-foreground` (oklch(0.985 0 0))
- **Subtítulo**: `text-foreground/80`
- **Card Border**: `--color-border` com gradient
- **Card Shadow**: `shadow-zinc-950/5` (dark: adaptado)
- **Decorator Border**: `--color-border` com `color-mix(in_oklab, ...)`

### Layout
- **Container**: `@container` com `max-w-5xl`
- **Mobile**: Cards stacked verticalmente com `divide-y`
- **Desktop**: Cards em 3 colunas com `@min-4xl:grid-cols-3`
- **Spacing**: `py-16` (mobile) → `py-32` (desktop)
- **Padding**: `px-6` no container

### CardDecorator
- **Size**: `size-36` (144px)
- **Grid**: `bg-[size:24px_24px]` com gradient de bordas
- **Mask**: `mask-radial-from-40% mask-radial-to-60%`
- **Icon Container**: `size-12` centralizado com `border-l border-t`
- **Animation**: `duration-200` no hover

### Animações e Efeitos
- **Hover**: `--color-border` intensifica de 10% → 20%
- **Dark Mode**: `--color-border` com 15% → 20%
- **Duration**: `duration-200` para transições suaves

## 🎨 Detalhamento de Cores e Formatação

### 📌 Separação de Responsabilidades

#### ❌ HARDCODED (No Componente AboutCardDecorator.tsx)
```tsx
// Cores específicas do grid decorativo que NÃO ficam no globals.css
const gridColor = 'color-mix(in_oklab, var(--color-zinc-950) 10%, transparent)'

const gridColorHover = 'color-mix(in_oklab, var(--color-zinc-950) 20%, transparent)'

const gridColorDark = 'color-mix(in_oklab, var(--color-white) 15%, transparent)'

const gridColorDarkHover = 'color-mix(in_oklab, var(--color-white) 20%, transparent)'
```

#### ✅ DO GLOBALS.CSS (Sistema Existente)
```css
/* Cores reutilizadas do globals.css */
--background: oklch(0.145 0 0);          /* Preto suave para fundo geral */
--foreground: oklch(0.985 0 0);          /* Branco puro para texto */
--border: oklch(1 0 0 / 10%);            /* Borda sutil */
--card: oklch(0.205 0 0);                /* Cinza escuro para fundo dos cards */
--card-foreground: oklch(0.985 0 0);     /* Texto dentro dos cards */
--cv-accent: oklch(0.85 0.21 200);       /* Teal TRON para destaques */
--radius: 0.625rem;                       /* Border radius padrão */
```

### 🎯 Descrição em Linguagem Natural

#### **COR DE FUNDO GERAL DA SEÇÃO**
- **Descrição**: Fundo preto suave, ligeiramente mais claro que preto absoluto (MESMA cor de fundo usada em toda a página: Hero, Projects, Header, etc.)
- **Valor**: `oklch(0.145 0 0)` - é preto com leve brilho (14.5% de luminance)
- **Fonte**: `--background` (globals.css) - Variável global usada consistentemente em todo o projeto
- **Uso no Componente**: `bg-background` - Mesma classe usada no body e nas outras seções

#### **COR DE PREENCHIMENTO DOS CARDS**
- **Descrição**: Cinza escuro, mais claro que o fundo da seção, cria separação visual
- **Valor**: `oklch(0.205 0 0)` - cinza escuro com 20.5% de luminance
- **Fonte**: `--card` (globals.css)
- **Uso no Componente**: `bg-card`
- **Contraste**: Diferença de 6% de luminance em relação ao fundo geral

#### **COR DO QUADRICULADO EM VOLTA DO ÍCONE LUCIDE**
- **Descrição**: Grid decorativo com linhas brancas finas sobre fundo preto
- **Cor das Linhas**: Branco
- **Estado Normal**: Branco com 25% de opacidade
  - Fórmula: `color-mix(in_oklab, white 25%, transparent)`
  - Visual: Linhas brancas sutis, visíveis mas discretas
- **Estado Hover**: Branco com 35% de opacidade
  - Fórmula: `color-mix(in_oklab, white 35%, transparent)`
  - Visual: Linhas ficam mais brilhantes e visíveis
- **Mudança no Hover**: Opacidade aumenta de 25% → 35%, linhas ficam mais brilhantes
- **Fonte**: HARDCODED no componente (não fica no globals.css)
- **Tamanho do Grid**: 24px × 24px (`bg-[size:24px_24px]`)

#### **COR DO ÍCONE LUCIDE (TrendingUp, Code, Brain)**
- **Descrição**: Ícone branco dentro de um container cinza escuro
- **Container Background**: `bg-background` (preto suave oklch(0.145 0 0))
- **Bordas do Container**: `border-l border-t` com `--border` (oklch(1 0 0 / 10%))
- **Ícone SVG**: `text-foreground` (branco puro oklch(0.985 0 0))
- **Fonte**: `--background`, `--border`, `--foreground` (globals.css)

#### **COR DO TEXTO DOS CARDS**
- **Título (Strategic Thinker, Builder, AI-POWERED)**: `text-foreground` (branco puro oklch(0.985 0 0))
- **Descrição**: `text-foreground/80` (branco com 80% de opacidade)
- **Fonte**: `--foreground` (globals.css)

#### **COR DA MÁSCARA RADIAL**
- **Descrição**: Máscara que suaviza as bordas do grid decorativo
- **Configuração**: `mask-radial-from-40% mask-radial-to-60%`
- **Efeito**: Grid é visível no centro e desvanece para as bordas
- **Fonte**: HARDCODED no componente (propriedade CSS do Tailwind)

#### **COR DA SOMBRA DOS CARDS**
- **Descrição**: Sombra suave para criar profundidade
- **Valor**: `shadow-zinc-950/5` (preto com 5% de opacidade)
- **Adaptação Dark Mode**: Precisa ser ajustado para usar `--foreground` com baixa opacidade
- **Fonte**: HARDCODED no componente (classe Tailwind)

### 📋 Resumo por Tipo de Valor

| Elemento | Fonte | Valor | Uso no Componente |
|----------|-------|-------|-------------------|
| **Background Geral** | globals.css | `--background: oklch(0.145 0 0)` | `bg-background` |
| **Card Background** | globals.css | `--card: oklch(0.205 0 0)` | `bg-card` |
| **Texto Principal** | globals.css | `--foreground: oklch(0.985 0 0)` | `text-foreground` |
| **Texto Descrição** | globals.css | `--foreground: oklch(0.985 0 0)` | `text-foreground/80` |
| **Borda Ícone Container** | globals.css | `--border: oklch(1 0 0 / 10%)` | `border border-border` |
| **Grid Normal** | HARDCODED | `color-mix(in_oklab, white 25%, transparent)` | CSS custom |
| **Grid Hover** | HARDCODED | `color-mix(in_oklab, white 35%, transparent)` | CSS custom |
| **Grid Size** | HARDCODED | `24px × 24px` | `bg-[size:24px_24px]` |
| **Máscara Radial** | HARDCODED | `from-40% to-60%` | `mask-radial-*` |
| **Sombra Card** | HARDCODED | `zinc-950/5` | `shadow-zinc-950/5` |
| **Cor de Destaque (Teal)** | globals.css | `--cv-accent: oklch(0.85 0.21 200)` | (opcional para efeitos) |

### 🧪 Valores Hardcoded no Componente

```tsx
// AboutCardDecorator.tsx
const gridStyles = {
  '--color-border': gridColor, // Calculado dinamicamente
}

// Grid com gradient de linhas horizontais e verticais
className="bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"

// Máscara radial
className="mask-radial-from-40% mask-radial-to-60%"

// Transição de hover
className="duration-200 group-hover:[--color-border:valorHover]"
```

### 🎨 Tokens CSS a Adicionar no globals.css (Opcional)

Se quiser manter consistência, pode adicionar:

```css
:root {
  /* Cores específicas do AboutSection (Opcional) */
  --about-grid-line-spacing: 24px;
  --about-grid-opacity-normal: 10%;
  --about-grid-opacity-hover: 20%;
  --about-grid-opacity-dark-normal: 15%;
  --about-grid-opacity-dark-hover: 20%;
}
```

Porém, **NÃO é obrigatório** - os valores podem ficar hardcoded no componente, pois são específicos desta seção e não são reutilizados em outros lugares.

## 🖼️ Wireframes

### Layout Desktop
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                          ABOUT ME (EN) / SOBRE (PT)                          │
│                    (text-5xl font-semibold text-center)                     │
│                                                                             │
│              Você pensa como estrategista, constrói como engenheiro           │
│              e executa com IA. (PT) / You think like strategist,            │
│              build like engineer, execute with AI. (EN)                      │
│                   (text-lg text-center text-foreground/80)                  │
│                                                                             │
│  ┌─────────────────────────┬─────────────────────────┬───────────────────┐  │
│  │                         │                         │                   │  │
│  │    ◌◌◌◌◌◌◌◌◌            │    ◌◌◌◌◌◌◌◌◌            │    ◌◌◌◌◌◌◌◌◌      │  │
│  │    ◌ ◌ ◌ ◌ ◌            │    ◌ ◌ ◌ ◌ ◌            │    ◌ ◌ ◌ ◌ ◌      │  │
│  │    ◌  📈  ◌ ◌            │    ◌  💻  ◌ ◌            │    ◌  🧠  ◌ ◌      │  │
│  │    ◌ ◌ ◌ ◌ ◌            │    ◌ ◌ ◌ ◌ ◌            │    ◌ ◌ ◌ ◌ ◌      │  │
│  │    ◌◌◌◌◌◌◌◌◌            │    ◌◌◌◌◌◌◌◌◌            │    ◌◌◌◌◌◌◌◌◌      │  │
│  │                         │                         │                   │  │
│  │      STRATEGIC          │         BUILDER          │      AI-POWERED  │  │
│  │       THINKER           │                         │                   │  │
│  │                         │                         │                   │  │
│  │  Former CFO with 10+ yrs│  Builds end-to-end       │  Embraces AI      │  │
│  │  framing decisions,     │  systems using Python,   │  coding agents    │  │
│  │  risk and incentives —   │  R, and TypeScript —    │  as core tools —  │  │
│  │  now applying strategic │  from ML models and APIs │  Cursor, Claude   │  │
│  │  mindset to data-driven │  to production apps.    │  Code, faster     │  │
│  │  products.              │                         │  iterations.     │  │
│  └─────────────────────────┴─────────────────────────┴───────────────────┘  │
│                                                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Layout Mobile
```
┌─────────────────────────────────┐
│                                 │
│      ABOUT ME (EN) / SOBRE (PT) │
│      (text-4xl font-semibold)   │
│                                 │
│  Você pensa como estrategista,  │
│  constrói como engenheiro e     │
│  executa com IA. (PT) / You     │
│  think like strategist, build   │
│  like engineer, execute with    │
│  AI. (EN)                       │
│    (text-lg text-foreground/80) │
│                                 │
│  ┌─────────────────────────┐    │
│  │    ◌◌◌◌◌◌◌◌◌            │    │
│  │    ◌ ◌ ◌ ◌ ◌            │    │
│  │    ◌  📈  ◌ ◌            │    │
│  │    ◌ ◌ ◌ ◌ ◌            │    │
│  │    ◌◌◌◌◌◌◌◌◌            │    │
│  │                         │    │
│  │    STRATEGIC THINKER    │    │
│  │                         │    │
│  │  Former CFO with 10+ yrs│    │
│  │  framing decisions,     │    │
│  │  risk and incentives —   │    │
│  │  now applying strategic │    │
│  │  mindset to data-driven │    │
│  │  products.              │    │
│  └─────────────────────────┘    │
│                                 │
│  ┌─────────────────────────┐    │
│  │    ◌◌◌◌◌◌◌◌◌            │    │
│  │    ◌ ◌ ◌ ◌ ◌            │    │
│  │    ◌  💻  ◌ ◌            │    │
│  │    ◌ ◌ ◌ ◌ ◌            │    │
│  │    ◌◌◌◌◌◌◌◌◌            │    │
│  │                         │    │
│  │        BUILDER          │    │
│  │                         │    │
│  │  Builds end-to-end       │    │
│  │  systems using Python,   │    │
│  │  R, and TypeScript —    │    │
│  │  from ML models and APIs │    │
│  │  to production apps.     │    │
│  └─────────────────────────┘    │
│                                 │
│  ┌─────────────────────────┐    │
│  │    ◌◌◌◌◌◌◌◌◌            │    │
│  │    ◌ ◌ ◌ ◌ ◌            │    │
│  │    ◌  🧠  ◌ ◌            │    │
│  │    ◌ ◌ ◌ ◌ ◌            │    │
│  │    ◌◌◌◌◌◌◌◌◌            │    │
│  │                         │    │
│  │      AI-POWERED         │    │
│  │                         │    │
│  │  Embraces AI coding    │    │
│  │  agents as core tools — │    │
│  │  Cursor, Claude Code,   │    │
│  │  faster iterations.    │    │
│  └─────────────────────────┘    │
│                                 │
└─────────────────────────────────┘
```

## 🏗️ Estrutura de Arquivos

## 🔒 Tipagem TypeScript (Strict)

### 📌 Regras de Tipagem

**OBRIGATÓRIO:**
- ❌ **SEM `any`** - Proibido usar tipo `any` em qualquer parte do código
- ❌ **SEM `unknown`** - Proibido usar tipo `unknown` sem type guard
- ✅ **Tipos Específicos** - Usar tipos mais específicos possíveis
- ✅ **Enums para valores fixos** - Usar enums quando valores são conhecidos
- ✅ **Union Types estritos** - Usar union types específicos em vez de string genérica
- ✅ **Readonly** - Usar `readonly` quando dados não devem ser modificados
- ✅ **Type Guards** - Implementar type guards quando necessário

### 📝 Tipos a Criar em `types.ts`

#### 1. Enum para Tags Específicas
```typescript
// Tags específicas por categoria - EVITAR string genérica
export enum AboutFeatureTag {
  // Executive/Entrepreneur
  EXECUTIVE = 'executive',
  ENTREPRENEUR = 'entrepreneur',

  // Builder
  R = 'R',
  PYTHON = 'python',
  REACT = 'react',

  // AI-Powered
  CLAUDE = 'claude',
  CURSOR = 'cursor',
  AGENTS = 'agents',
  AICODING = 'aicoding',
}

// Type readonly para conjunto de tags
export type AboutFeatureTags = ReadonlyArray<AboutFeatureTag>;
```

#### 2. Enum para Ícones Específicos
```typescript
// Ícones específicos usados nos cards - EVITAR string genérica
export enum AboutFeatureIcon {
  TRENDING_UP = 'TrendingUp',
  CODE = 'Code',
  BRAIN = 'Brain',
}

export type AboutFeatureIconType = AboutFeatureIcon[keyof typeof AboutFeatureIcon];
```

#### 3. Tipo para Dados de um Card
```typescript
// Tipo específico para dados de um card (sem any/unknown)
export interface AboutCardData {
  readonly id: string;
  readonly icon: AboutFeatureIcon;
  readonly title: AboutFeatureText;
  readonly description: AboutFeatureText;
  readonly tags: AboutFeatureTags;
}

// Tipo específico para texto multilíngue
export interface AboutFeatureText {
  readonly en: string;
  readonly pt: string;
}

// Type helper para obter texto baseado em idioma
export type AboutFeatureLocalizedText<T extends AboutFeatureText> = T['en'] | T['pt'];
```

#### 4. Enum para Categorias de Cards
```typescript
export enum AboutFeatureCategory {
  STRATEGIC_THINKER = 'strategic-thinker',
  BUILDER = 'builder',
  AI_POWERED = 'ai-powered',
}
```

#### 5. Props do Componente AboutSection
```typescript
import type { Language } from './types'; // Tipo existente no projeto

export interface AboutSectionProps {
  readonly language: Language; // 'en' | 'pt' (tipo existente, não string)
  readonly className?: string;
}
```

#### 6. Props do Componente AboutCardDecorator
```typescript
export interface AboutCardDecoratorProps {
  readonly icon: AboutFeatureIcon; // Enum específico, não string
  readonly className?: string;
}
```

#### 7. Props do Componente Individual do Card
```typescript
export interface AboutCardProps {
  readonly data: AboutCardData; // Tipo específico, não any
  readonly language: Language; // Tipo existente do projeto
  readonly className?: string;
}
```

#### 8. Constantes Tipadas para Dados dos Cards
```typescript
// Dados tipados para Card 1 - Strategic Thinker
export const STRATEGIC_THINKER_DATA: AboutCardData = {
  id: AboutFeatureCategory.STRATEGIC_THINKER,
  icon: AboutFeatureIcon.TRENDING_UP,
  title: {
    en: 'Strategic Thinker',
    pt: 'Pensamento Estratégico',
  },
  description: {
    en: 'Former CFO and finance executive with 10+ years framing complex decisions, risk, and incentives — now applying strategic mindset to data-driven products.',
    pt: 'Ex-CFO e executivo financeiro com 10+ anos estruturando decisões complexas, risco e incentivos — hoje aplicando mentalidade estratégica em produtos orientados por dados.',
  },
  tags: [AboutFeatureTag.EXECUTIVE, AboutFeatureTag.ENTREPRENEUR],
} as const; // 'as const' para readonly

// Dados tipados para Card 2 - Builder
export const BUILDER_DATA: AboutCardData = {
  id: AboutFeatureCategory.BUILDER,
  icon: AboutFeatureIcon.CODE,
  title: {
    en: 'Builder',
    pt: 'Construtor',
  },
  description: {
    en: 'Builds end-to-end systems using Python, R, and TypeScript — from ML models and APIs to production-ready apps with persistent data and permissions.',
    pt: 'Desenvolve sistemas ponta a ponta com Python, R e TypeScript — de modelos ML e APIs a aplicações em produção com dados persistentes e controle de permissões.',
  },
  tags: [AboutFeatureTag.R, AboutFeatureTag.PYTHON, AboutFeatureTag.REACT],
} as const;

// Dados tipados para Card 3 - AI-Powered
export const AI_POWERED_DATA: AboutCardData = {
  id: AboutFeatureCategory.AI_POWERED,
  icon: AboutFeatureIcon.BRAIN,
  title: {
    en: 'AI-POWERED',
    pt: 'AI-POWERED',
  },
  description: {
    en: 'Embraces AI coding agents as core tools — using Cursor and Claude Code to deliver faster iterations, cleaner code, and more efficient development cycles.',
    pt: 'Adota agentes de codificação IA como ferramentas centrais — usando Cursor e Claude Code para entregar iterações mais rápidas, código mais limpo e ciclos de desenvolvimento mais eficientes.',
  },
  tags: [AboutFeatureTag.CLAUDE, AboutFeatureTag.CURSOR, AboutFeatureTag.AGENTS, AboutFeatureTag.AICODING],
} as const;

// Array tipado com todos os cards
export const ABOUT_FEATURES_DATA: readonly AboutCardData[] = [
  STRATEGIC_THINKER_DATA,
  BUILDER_DATA,
  AI_POWERED_DATA,
];
```

#### 9. Type Guards para Validação
```typescript
// Type guard para verificar se tag é válida
export function isAboutFeatureTag(value: string): value is AboutFeatureTag {
  return Object.values(AboutFeatureTag).includes(value as AboutFeatureTag);
}

// Type guard para verificar se ícone é válido
export function isAboutFeatureIcon(value: string): value is AboutFeatureIcon {
  return Object.values(AboutFeatureIcon).includes(value as AboutFeatureIcon);
}

// Type guard para verificar se categoria é válida
export function isAboutFeatureCategory(value: string): value is AboutFeatureCategory {
  return Object.values(AboutFeatureCategory).includes(value as AboutFeatureCategory);
}
```

#### 10. Utilitários de Tipagem
```typescript
// Type para obter texto localizado baseado em idioma
export type LocalizedAboutFeatureText = Record<Language, string>;

// Type para mapeamento de card por ID
export type AboutFeatureCardsMap = Record<AboutFeatureCategory, AboutCardData>;

// Type para renderização de ícones (componentes Lucide)
export type LucideIconComponent = React.ComponentType<{ className?: string }>;

// Mapeamento de enum para componente Lucide
export const ABOUT_ICON_MAP: Record<AboutFeatureIcon, LucideIconComponent> = {
  [AboutFeatureIcon.TRENDING_UP]: TrendingUp,
  [AboutFeatureIcon.CODE]: Code,
  [AboutFeatureIcon.BRAIN]: Brain,
};
```

### ✅ Checklist de Tipagem Segura

- [ ] Nenhum `any` usado em nenhum lugar
- [ ] Nenhum `unknown` sem type guard
- [ ] Todos os enums definidos com valores específicos
- [ ] Union types usados em vez de `string` genérica
- [ ] `readonly` usado para dados que não devem mudar
- [ ] `as const` usado para constantes
- [ ] Type guards implementados para validação externa
- [ ] Tipos específicos para props de componentes
- [ ] Tipos específicos para dados dos cards
- [ ] Mapeamento de enums para componentes Lucide

### 📦 Imports de Lucide Icons (Tipados)

```typescript
// Importar ícones com tipos específicos do lucide-react
import {
  TrendingUp,
  Code,
  Brain,
} from 'lucide-react';

// Type para componentes de ícone
type LucideIconProps = React.ComponentProps<typeof TrendingUp>;
```

```
┌─ components/
│  ├─ sections/
│  │  └─ AboutSection.tsx           # Componente principal da seção (com i18n)
│  │
│  ├─ ui/
│  │  └─ card.tsx                   # Reutilizado (shadcn/ui)
│  │
│  └─ shared/
│     └─ AboutCardDecorator.tsx     # Componente decorativo com máscara radial
│
├─ stores/
│  └─ settings.ts                   # Reutilizado (i18n state)
│
├─ types.ts                         # Adiciona tipos AboutFeatureData
│
└─ app/
   └─ page.tsx                      # Modificado para adicionar AboutSection
```

## ✅ Critérios de Aceite

### Funcionais
- [ ] Seção About exibida corretamente na página
- [ ] 3 cards renderizados com conteúdo apropriado
- [ ] Internacionalização funcionando (pt/en)
- [ ] Layout responsivo funcionando (mobile stacked, desktop 3 colunas)
- [ ] Efeitos de hover nos cards e ícones

### Visuais
- [ ] CardDecorator com grid decorativo renderizado
- [ ] Máscara radial aplicada corretamente
- [ ] Cores do sistema OKLCH aplicadas
- [ ] Gradiente de borda com color-mix funcionando
- [ ] Intensificação do glow no hover
- [ ] Ícones do lucide-react: TrendingUp, Code, Brain

### Técnicos
- [ ] Container queries do Tailwind funcionando (`@container`)
- [ ] Estado i18n do Zustand integrado
- [ ] TypeScript tipado corretamente
- [ ] Tags opcionais implementadas (executive, entrepreneur, R, python, react, claude, cursor, codex)
- [ ] Responsividade com breakpoints adequados
- [ ] Dark mode support com cores adaptadas

## 🔄 Fluxo de Trabalho

1. **Criar tipos** em `types.ts` para `AboutFeatureData` com suporte i18n
2. **Criar dados constantes** `ABOUT_FEATURES` com conteúdo pt/en e tags
3. **Criar componente** `AboutCardDecorator.tsx` com máscara radial e grid
4. **Criar componente** `AboutSection.tsx` com layout de cards e integração i18n
5. **Adicionar tokens CSS** em `globals.css` para AboutSection
6. **Integrar** `AboutSection.tsx` na página principal
7. **Testar** internacionalização (troca de idioma)
8. **Testar** responsividade em mobile e desktop
9. **Testar** efeitos de hover e dark mode

## 🎯 Contexto de Uso

A seção de features será posicionada após a seção de projetos, apresentando os diferenciais e capacidades do portfólio. Ela complementa a apresentação dos projetos destacando os aspectos técnicos e visuais do trabalho.

**Posição no Layout:**
```
HeroSection
    ↓ scroll
ProjectEntryHook
    ↓ automático após 2-3s
ProjectSection (Betting, School of Bets, Stakely)
    ↓ scroll
AboutSection (Strategic Thinker, Builder, AI-Powered)
```

## 📊 Considerações

### Performance
- Componente leve com CSS inline e Tailwind
- GPU acceleration com `transform` nas animações
- Sem imagens pesadas (ícones SVG do lucide-react)
- Container queries otimizam layout baseado no container, não viewport

### Acessibilidade
- Estrutura semântica com `section` e `article`
- Títulos hierárquicos adequados
- Ícones com `aria-hidden` (decorativos)
- Texto legível com bom contraste
- Suporte a `prefers-reduced-motion`

### Browser Compatibility
- Container queries: Chrome 105+, Safari 16+, Firefox 110+
- `color-mix()`: Chrome 111+, Safari 15.4+, Firefox 113+
- `mask-radial`: Verificar suporte ou usar fallback
- Polyfills podem ser necessários para navegadores mais antigos

### Design System
- Cores OKLCH integradas ao sistema existente
- Tipografia Geist consistente
- Border radius do design system
- Spacing tokens padrão do projeto
- Animações suaves (duration-200)

### Internacionalização
- Sistema Zustand store reutilizado (settings.ts)
- Re-render automático ao trocar idioma
- Dados constantes separados por idioma
- Performance otimizada com memoização

### Tags
- Implementadas como array de strings (opcional)
- Valores: executive, entrepreneur, R, python, react, claude, cursor, codex
- Podem ser usadas para filtros ou categorização futura
