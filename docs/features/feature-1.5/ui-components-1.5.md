# Feature 1.5 - Componentes UI

## 🎯 Objetivo
Documentar os componentes de interface criados especificamente para a seção de projetos, usando Betting Management como exemplo principal.

## 🎨 Sistema de Cores Padronizado

Baseado no sistema unificado OKLCH + RGB com helpers do `types.ts`:

### **Cores Principais (OKLCH + RGB)**
- **Texto Principal**: `--cv-text-primary: oklch(1 0 0)` → `getThreadColor('primary')`
- **Texto Secundário**: `--foreground: oklch(0.985 0 0)`
- **Cor de Destaque**: `--cv-accent: oklch(0.85 0.21 200)` → `COLOR_SYSTEM.teal.oklch`
- **Background**: `--background: oklch(0.145 0 0)`
- **Borders**: `--border: oklch(1 0 0 / 10%)`

### **Sistema de Cores (types.ts)**
```typescript
COLOR_SYSTEM = {
  teal: { 
    oklch: 'oklch(0.85 0.21 200)', 
    rgb: [0.49, 0.99, 1.0] 
  }
}

// Helpers:
getThreadColor('teal')     // retorna 'oklch(0.85 0.21 200)'
getCssColor('teal')        // retorna '[49_255_255]' para Tailwind
colorToRgb('teal')         // detecta e converte automaticamente
```

### **Cores de Botões**
- **Botão Primário**: `--cv-accent` (teal/oklch)
- **Texto Botão**: `--cv-text-primary` (branco)
- **Botão Secundário**: `transparent` com `--border`
- **Estado Hover**: `opacity-90`

### **Design System**
- **Border Radius**: `--radius: 0.625rem`
- **Radius Variants**: `--radius-lg`, `--radius-xl`
- **Fontes**: `--font-sans: var(--font-geist-sans)`
- **Tokens CSS**: Todas as cores sincronizadas via `globals.css`

## 🌐 Suporte a Internacionalização

O sistema oferece suporte completo a internacionalização com estado persistido via Zustand:

- **Idiomas Suportados**: `'en' | 'pt'`
- **Estado Global**: `useSettingsStore` com persistência automática
- **Componente Selector**: `LanguageSelector` com toggle entre idiomas
- **Textos Localizados**: Sistema de `Record<Language, string>` para traduções

Para detalhes completos da implementação, veja: **@docs/features/feature-1.5/ui-components-1.5.md#🌐-sistema-de-internacionalização-i18n**

## 🎨 Componentes UI Criados

### **1. project-feature-text - Área de Texto (Lado Esquerdo)**

#### **Função**
Componente principal para o conteúdo textual do projeto, incluindo título, problema, solução, tecnologias e CTA.

#### **Wireframes**

**1. project-feature-text (Mobile)**
```
┌─────────────────────────────────────┐
│                                     │
│  📱 MOBILE - COMPONENTE TEXTO        │
│                                     │
│  Betting Management                  │
│  (text-sm text-cv-accent)           │
│                                     │
│  Sistema Completo para              │
│  Gestão Operacional                 │
│  (text-4xl font-semibold)          │
│                                     │
│  Controle total de contas,          │
│  permissões e analytics             │
│  (mt-6 text-foreground)            │
│                                     │
│  ┌─────────────────────────────────┐ │
│  │ LISTA DE FEATURES                │ │
│  │ ──────────────────────────────── │ │
│  │ [📧] Controle de Contas          │ │
│  │ ──────────────────────────────── │ │
│  │ [📊] Analytics e Relatórios      │ │
│  │ ──────────────────────────────── │ │
│  │ [👥] Gestão de Permissões        │ │
│  │ ──────────────────────────────── │ │
│  │ [🔒] Segurança Multi-fator      │ │
│  └─────────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

**2. project-feature-demo (Mobile)**
```
┌─────────────────────────────────────┐
│                                     │
│  📱 MOBILE - COMPONENTE DEMO         │
│                                     │
│  ┌─────────────────────────────────┐ │
│  │                                 │ │
│  │     [CONTEÚDO FLEXÍVEL]        │ │
│  │                                 │ │
│  │  • Imagem                       │ │
│  │  • Componente React mock        │ │
│  │  • Formulário interativo        │ │
│  │  • Qualquer conteúdo React     │ │
│  │                                 │ │
│  │  Aspect: 76/59                 │ │
│  │  rounded-2xl                   │ │
│  └─────────────────────────────────┘ │
│                                     │
│  Container: rounded-3xl border p-3 │
│                                     │
└─────────────────────────────────────┘
```

**3. Combinação Mobile**
```
┌─────────────────────────────────────┐
│                                     │
│  📱 MOBILE - STACKED LAYOUT          │
│                                     │
│  ┌─────────────────────────────────┐ │
│  │ BETTING MANAGEMENT             │ │
│  │ Sistema Completo para...       │ │
│  │                                 │ │
│  │ ─────────────────────────────── │ │
│  │ [📧] Controle de Contas          │ │
│  │ [📊] Analytics e Relatórios      │ │
│  │ [👥] Gestão de Permissões        │ │
│  │ [🔒] Segurança Multi-fator      │ │
│  └─────────────────────────────────┘ │
│                                     │
│  ┌─────────────────────────────────┐ │
│  │                                 │ │
│  │     [DEMO FLEXÍVEL]            │ │
│  │                                 │ │
│  └─────────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

**4. project-feature-text (Desktop)**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  🖥️ DESKTOP - COMPONENTE TEXTO (2/5 COLUNAS)                  │
│                                                             │
│  Betting Management                                          │
│  (text-sm text-cv-accent)                                    │
│                                                             │
│  Sistema Completo para                                       │
│  Gestão Operacional                                          │
│  (text-4xl font-semibold lg:text-5xl)                       │
│                                                             │
│  Controle total de contas,                                   │
│  permissões e analytics                                      │
│  (mt-6 text-foreground)                                      │
│                                                             │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ LISTA DE FEATURES                                        │ │
│  │ ──────────────────────────────────────────────────────── │ │
│  │ [📧] Controle de Contas em Tempo Real                     │ │
│  │ ──────────────────────────────────────────────────────── │ │
│  │ [📊] Analytics e Relatórios Detalhados                    │ │
│  │ ──────────────────────────────────────────────────────── │ │
│  │ [👥] Gestão de Permissões e Acesso                       │ │
│  │ ──────────────────────────────────────────────────────── │ │
│  │ [🔒] Segurança Multi-fator                               │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**5. project-feature-demo (Desktop)**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  🖥️ DESKTOP - COMPONENTE DEMO (3/5 COLUNAS)                   │
│                                                             │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                                                         │ │
│  │                 [CONTEÚDO FLEXÍVEL]                     │ │
│  │                                                         │ │
│  │  • Imagem responsiva                                     │ │
│  │  • Dashboard React component                            │ │
│  │  • Formulário interativo completo                       │ │
│  │  • Vídeo demonstrativo                                 │ │
│  │  • Qualquer conteúdo React personalizável              │ │
│  │                                                         │ │
│  │  Aspect: 76/59, rounded-2xl                             │ │
│  │                                                         │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                             │
│  Container: rounded-3xl border-border p-3                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**6. Combinação Desktop**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  🖥️ DESKTOP - GRID LAYOUT (2:3 COLUNAS)                          │
│                                                                 │
│  ┌─────────────────────┐  ┌─────────────────────────────────┐   │
│  │                     │  │                                 │   │
│  │  BETTING MANAGEMENT  │  │                                 │   │
│  │  Sistema Completo   │  │         [DEMO FLEXÍVEL]         │   │
│  │  para Gestão        │  │                                 │   │
│  │                     │  │  • Imagens responsivas           │   │
│  │  ───────────────── │  │  • Componentes React             │   │
│  │  [📧] Controle       │  │  • Forms interativos            │   │
│  │  [📊] Analytics      │  │  • Qualquer conteúdo           │   │
│  │  [👥] Permissões     │  │                                 │   │
│  │  [🔒] Segurança      │  │  Aspect: 76/59                  │   │
│  │                     │  │  Container: rounded-3xl          │   │
│  └─────────────────────┘  └─────────────────────────────────┘   │
│                                                                 │
│  Texto (2 colunas) + Demo (3 colunas) = Grid total 5 colunas     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### **Elementos Visuais**
- **Nome do App**: `text-sm text-cv-accent font-medium` (opcional)
- **Título Principal**: `text-4xl font-semibold lg:text-5xl` usando `text-cv-text-primary`
- **Descrição**: `mt-6` com `text-foreground`
- **Lista Features**: `ul` com `divide-y border-border`
  - Cada `li`: `flex items-center gap-3 py-3`
  - **Ícones**: `size-5` usando `text-cv-accent` - **AnimateIcons library** (sem emojis!)
  - Texto: `text-foreground`
- **Container**: `lg:col-span-2` (2/5 colunas em desktop)
- **Espaçamento**: `mt-8` para lista, `gap-12` mobile, `gap-24` desktop
- **Cores**: Integradas com sistema OKLCH via helpers `getThreadColor()`

#### **Ícones Disponíveis (AnimateIcons)**
**Business & Management:**
- `dashboard`, `layout-grid`, `layout-list`, `blocks`, `bring-to-front`
- `users`, `user-round`, `user-check`, `contact`, `shield-user`
- `shopping-cart`, `shopping-bag`, `wallet`, `hand-coins`

**Tech & Security:**
- `lock`, `key`, `key-round`, `shield-check`, `shield-user`
- `terminal`, `code`, `code-xml`, `wifi`, `globe`, `external-link`
- `download`, `upload`, `copy`, `clipboard`, `share`

**Communication:**
- `mail`, `message-circle`, `phone`, `bell`, `bell-ring`
- `send`, `github`, `twitter`, `linkedin`, `chrome`, `figma`

**Analytics & Monitoring:**
- `activity`, `chart-area`, `chart-bar`, `chart-column`, `chart-line`
- `chart-pie`, `trending-up`, `trending-down`, `signal`
- `eye`, `search`, `scan`, `qr-code`, `telescope`

**Actions & States:**
- `check`, `check-check`, `circle-check`, `circle-plus`
- `plus`, `minus`, `trash`, `bookmark`, `star`
- `play`, `pause`, `loader`, `zap`, `flame`

#### **Props Interface**
```typescript
interface ProjectFeatureTextProps {
  appName?: string           // Nome do aplicativo (opcional)
  title: string              // Título principal
  description: string        // Descrição/subtítulo
  features: Array<{
    icon: React.ReactNode    // Ícone da biblioteca AnimateIcons
    text: string             // Texto da feature
  }>
  language?: 'en' | 'pt'     // Idioma para renderização condicional (opcional)
}
```

---