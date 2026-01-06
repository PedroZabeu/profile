# Stakely - Visual e Conteúdo

## 🎯 Visão Geral

Sistema automatizado de envio e gestão de tips para tipsters. Conecta tipsters com clientes em grupos individualizados, automatizando o controle de resultados e o cálculo de staking por cliente.

## 📱 Conteúdo Visual e Textos

### **Identidade do Projeto**
- **Nome**: Stakely
- **Categoria**: Plataforma de Gestão de Tips
- **Foco**: Automação de Staking + Grupos Individualizados + Telegram Integration

### **Textos Principais**

#### **Português (pt)**
```
Título: Sistema Inteligente para Tipsters

Descrição: Sistema único de envio de tips que automatiza e resolve a principal dor do tipster: o cálculo de resultados de forma individualizada, cliente a cliente

Features:
• Grupos individualizados para cada cliente
• Integração nativa com Telegram
• Controle real do que cada cliente apostou
• Planilhamento automático e personalizado de resultados
• Métricas de perfomance em dashboards 


CTA: Explore
Link: https://stakely-bets.vercel.app/
```

#### **Inglês (en)**
```
Title: Intelligent System for Tipsters

Description: Unique tip delivery system that automates and solves the tipster's main pain point: individualized result calculation, client by client

Features:
• Individual groups for each client
• Native Telegram integration
• Personalized control of each client's bets
• Automatic and personalized result calculation
• Performance metrics on dashboards

CTA: Explore
Link: https://stakely-bets.vercel.app/
```

## 🎨 Demo Visual - Simulação Telegram

### **Conceito Visual**
Demo que simula uma conversa de Telegram com um tipster enviando uma tip para um cliente. Mostra apenas o essencial: mensagem da tip + status de confirmação.

### **Layout do Demo (Desktop)**
```
┌─────────────────────────────────┐
│                                 │
│  💬 Grupo VIP - Cliente Joao    │
│                                 │
│  ┌─────────────────────────────┐│
│  │  ⚽ Tip #124                 ││
│  │                             ││
│  │  🔴 Flamengo x Vasco        ││
│  │  Over 2.5 gols @ 2.10       ││
│  │                             ││
│  │  📊 Análise:                ││
│  │  Ambos times com bons ataques││
│  │  Últimos 3 jogos: Over      ││
│  │                             ││
│  │  💰 Stake: 2 unidades        ││
│  │                             ││
│  │  [✅] Conseguiu apostar      ││
│  │  [❌] Não conseguiu apostar  ││
│  └─────────────────────────────┘│
│                                 │
└─────────────────────────────────┘
```

### **Layout do Demo (Mobile)**
```
┌─────────────────────────┐
│                         │
│ 💬 Grupo VIP - Joao     │
│                         │
│ ┌─────────────────────┐│
│ │ ⚽ Tip #124          ││
│ │                     ││
│ │ 🔴 Flamengo x Vasco ││
│ │ Over 2.5 @ 2.10     ││
│ │                     ││
│ │ 💰 Stake: 2u        ││
│ │                     ││
│ │ ✅ Conseguiu apostar││
│ │ ❌ Não conseguiu    ││
│ └─────────────────────┘│
│                         │
└─────────────────────────┘
```

## 🎨 Elementos Visuais do Demo

### **Cores e Estilo**
- **Background**: `bg-background` (escuro similar ao Telegram)
- **Mensagem**: `bg-card` com `border` (bolha de chat)
- **Textos**: `text-foreground` e `text-muted-foreground`
- **Destaques**: `text-cv-accent` (teal) para odds e valores
- **Botões**: `bg-green-500/20 border-green-500/50` (✅) e `bg-red-500/20 border-red-500/50` (❌)

### **Ícones e Indicadores**
- **Grupo**: 💬 (ícone de chat)
- **Tip**: ⚽ (ícone de futebol)
- **Time**: 🔴 (indicador de time mandante)
- **Análise**: 📊 (ícone de gráfico)
- **Dinheiro**: 💰 (ícone de stake)

### **Animações Sugeridas**
- **Mensagem**: Fade-in suave ao aparecer
- **Botões**: Hover com `scale-105`
- **Status**: Piscada sutil nos botões de confirmação

## 📊 Estrutura de Dados Visual

### **Tip Exemplo (Completa)**
```
⚽ Tip #124
🔴 Flamengo x Vasco
Over 2.5 gols @ 2.10

📊 Análise:
Ambos times com bons ataques
Últimos 3 jogos: Over

💰 Stake: 2 unidades

[✅] Conseguiu apostar
[❌] Não conseguiu apostar
```

### **Status de Confirmação**
- **Verde (✅)**: Cliente conseguiu apostar
- **Vermelho (❌)**: Cliente não conseguiu apostar
- **Resultado**: Sistema registra automaticamente

## 🌐 Internacionalização do Demo

### **Elementos Localizados**
- **Títulos**: "Grupo VIP" vs "VIP Group"
- **Ações**: "Conseguiu apostar" vs "Managed to bet"
- **Negações**: "Não conseguiu" vs "Couldn't bet"
- **Textos**: "Análise" vs "Analysis", "Stake" mantido

### **Adaptação Visual**
- **Português**: Formato brasileiro (R$ 100,00)
- **Inglês**: Formato internacional ($100.00)
- **Cores**: Mantidas em ambos os idiomas
- **Layout**: Bolha de chat em ambos os idiomas

## 🎯 Foco Principal do Demo

### **Informações Essenciais (Apenas 5 elementos)**
1. **Grupo**: 💬 Nome do grupo individual
2. **Tip**: ⚽ Identificação + Jogo + Mercado
3. **Odds**: Valor decimal (@ 2.10)
4. **Stake**: Quantidade em unidades (2u)
5. **Confirmação**: Botões ✅/❌ para status da aposta

### **Hierarquia Visual**
1. **Cabeçalho** (topo - nome do grupo)
2. **Conteúdo** (centro - dados da tip)
3. **Ação** (fundo - botões de confirmação)

## 🚀 Impacto Visual Esperado

### **Contexto Real**
- Simulação autêntica de Telegram
- Interface familiar para usuários
- Fluxo natural de confirmação

### **Valor Imediato**
- Cliente entende o sistema instantaneamente
- Reconhece processo de confirmação
- Identifica automação de staking

### **Profissionalismo**
- Design limpo similar ao Telegram
- Cores consistentes e intuitivas
- UX de chat nativo

## 🔧 Implementação Técnica - SSOT

### **O que pode ser REAPROVEITADO (100%)**

#### **Tipos Existentes em `types.ts`**
```typescript
// ✅ REAPROVEITAR - Sistema de idiomas
export type Language = 'en' | 'pt';

// ✅ REAPROVEITAR - Sistema de cores unificado
export type ColorTheme = 'teal' | 'blue' | 'violet' | 'emerald' | 'rose' | 'cyan' | 'amber' | 'pink';
export const COLOR_SYSTEM = { /* sistema completo */ };

// ✅ REAPROVEITAR - Motion props para animações
export interface MotionProps { /* sistema completo */ };

// ✅ REAPROVEITAR - Estrutura de dados de projetos
export interface ProjectData {
  id: string;
  name: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  features: Array<{
    icon: string;
    text: Record<Language, string>;
  }>;
  url: string;
  color: ColorTheme;
}

// ✅ REAPROVEITAR - Props de componentes UI
export type CardProps = React.ComponentProps<"div">;
export interface ButtonProps extends React.ComponentProps<"button"> { /* sistema completo */ };
```

#### **CSS Existentes em `globals.css`**
```css
/* ✅ REAPROVEITAR - Sistema de cores base */
--color-background: var(--background);
--color-foreground: var(--foreground);
--color-border: var(--border);
--color-card: var(--card);
--color-cv-accent: var(--cv-accent);

/* ✅ REAPROVEITAR - Sistema de espaçamento */
--cv-spacing-xs: 0.25rem;
--cv-spacing-sm: 0.5rem;
--cv-spacing-md: 0.75rem;
--cv-spacing-lg: 1rem;

/* ✅ REAPROVEITAR - Sistema de tipografia */
--cv-font-size-sm: 0.875rem;
--cv-font-size-base: 1rem;
--cv-font-size-lg: 1.125rem;

/* ✅ REAPROVEITAR - Classes de componentes */
.cv-shimmer-highlight { /* sistema completo */ };
.cv-shimmer-hover { /* sistema completo */ };
```

### **O que deve ser CRIADO (Mínimo necessário)**

#### **Novos Tipos em `types.ts`**
```typescript
// 🆕 CRIAR - Tipos específicos do Stakely
export interface StakelyTipData {
  id: string;
  sport: string;
  teams: {
    home: string;
    away: string;
  };
  market: string;
  odds: string;
  analysis: string;
  stake: string;
  status: 'pending' | 'confirmed' | 'missed';
}

export interface StakelyGroupData {
  name: string;
  clientName: string;
  tips: StakelyTipData[];
  isActive: boolean;
}

export interface StakelyChatProps {
  group: StakelyGroupData;
  currentTip: StakelyTipData;
  onStatusChange: (tipId: string, status: 'confirmed' | 'missed') => void;
  className?: string;
  motionProps?: MotionProps;
}

// 🆕 CRIAR - Dados do projeto Stakely (seguindo padrão BETTING_MGMT_DATA)
export const STAKELY_DATA: ProjectData = {
  id: 'stakely',
  name: 'Stakely',
  title: {
    pt: 'Sistema Inteligente para Tipsters',
    en: 'Intelligent System for Tipsters'
  },
  description: {
    pt: 'Sistema único de envio de tips que automatiza e resolve a principal dor do tipster: o cálculo de resultados de forma individualizada, cliente a cliente',
    en: 'Unique tip delivery system that automates and solves the tipster\'s main pain point: individualized result calculation, client by client'
  },
  features: [
    {
      icon: 'Users',
      text: {
        pt: 'Grupos individualizados para cada cliente',
        en: 'Individual groups for each client'
      }
    },
    {
      icon: 'MessageCircle',
      text: {
        pt: 'Integração nativa com Telegram',
        en: 'Native Telegram integration'
      }
    },
    {
      icon: 'ShieldCheck',
      text: {
        pt: 'Controle real do que cada cliente apostou',
        en: 'Real control of what each client bet'
      }
    },
    {
      icon: 'LayoutGrid',
      text: {
        pt: 'Planilhamento automático e personalizado de resultados',
        en: 'Automatic and personalized result spreadsheet'
      }
    },
    {
      icon: 'ChartBar',
      text: {
        pt: 'Métricas de perfomance em dashboards',
        en: 'Performance metrics on dashboards'
      }
    }
  ],
  url: 'https://stakely-bets.vercel.app/',
  color: 'violet' // 🎨 Usar cor diferente do Betting Management
};
```

#### **Novas Classes CSS em `globals.css`**
```css
/* 🆕 CRIAR - Classes específicas do Stakely */

/* Chat Message Styles */
.stakely-chat-container {
  @apply bg-card border rounded-lg p-4 max-w-md;
}

.stakely-chat-header {
  @apply flex items-center gap-2 mb-3 pb-2 border-b;
}

.stakely-chat-message {
  @apply bg-background border rounded-lg p-3 mb-3;
}

.stakely-tip-header {
  @apply flex items-center gap-2 mb-2;
}

.stakely-tip-content {
  @apply space-y-2 mb-3;
}

.stakely-tip-analysis {
  @apply text-muted-foreground text-sm italic;
}

.stakely-tip-stake {
  @apply font-semibold text-cv-accent;
}

.stakely-status-buttons {
  @apply flex gap-2 mt-3;
}

.stakely-status-btn {
  @apply px-3 py-1 rounded-md text-sm font-medium transition-all duration-200;
}

.stakely-status-confirm {
  @apply bg-green-500/20 border border-green-500/50 text-green-400 hover:bg-green-500/30;
}

.stakely-status-miss {
  @apply bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30;
}

/* Telegram-like styling */
.stakely-telegram-bg {
  background: oklch(0.18 0.01 240); /* Similar ao Telegram dark */
}

.stakely-telegram-message {
  background: oklch(0.22 0.02 240);
  border-radius: 1.25rem 1.25rem 0.25rem 1.25rem;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .stakely-chat-container {
    @apply max-w-full p-3;
  }
  
  .stakely-status-buttons {
    @apply flex-col gap-1;
  }
}
```

### **Estratégia de Reaproveitamento**

#### **Prioridade 1: Reaproveitar 100%**
- Sistema de idiomas (`Language`, `Record<Language, string>`)
- Sistema de cores (`ColorTheme`, `COLOR_SYSTEM`)
- Sistema de animações (`MotionProps`)
- Estrutura de dados (`ProjectData`)
- Componentes UI base (`CardProps`, `ButtonProps`)

#### **Prioridade 2: Estender Mínimo**
- Criar apenas tipos específicos do domínio Stakely
- Adicionar classes CSS apenas para estilos únicos (chat, Telegram)
- Manter padrão de nomenclatura existente

#### **Prioridade 3: Seguir Padrões**
- Usar `violet` como cor do projeto (diferente de `teal` do Betting)
- Manter estrutura de dados consistente com `BETTING_MGMT_DATA`
- Aplicar sistema de animações existente
- Seguir convenções de nomenclatura `stakely-*`

### **Benefícios do SSOT**

1. **Manutenibilidade**: Mudanças no sistema afetam todos os projetos
2. **Consistência**: Cores, animações e estrutura unificados
3. **Performance**: Menos código duplicado
4. **Escalabilidade**: Fácil adicionar novos projetos seguindo padrão