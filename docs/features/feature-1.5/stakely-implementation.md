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

Descrição: A solução definitiva para tipsters que desejam ganhar escala com eficiência. Automatiza o envio de tips e o cálculo de resultados por cliente, reduz o trabalho manual e oferece clareza total sobre a performance de cada apostador.

Features:
• Comunicação segmentada e profissional para cada cliente
• Integração nativa com Telegram para operação sem fricção
• Registro real do que cada cliente apostou — sem suposições
• Consolidação automática de resultados e histórico
• Dashboards com métricas que fortalecem confiança e retenção

CTA: Explore
Link: https://stakely-bets.vercel.app/
```

#### **Inglês (en)**
```
Title: Intelligent System for Tipsters

Description: The ultimate solution for tipsters who want to scale with efficiency. Automates tip delivery and client-by-client result calculations, eliminates manual work, and provides full clarity over each customer's performance.

Features:
• Professional, client-segmented communication channels
• Native Telegram integration for a frictionless workflow
• Accurate tracking of what each client actually bet — no guesswork
• Automatic result consolidation and performance history
• Insightful dashboards that strengthen trust and retention

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
│  │  📅 Data: 06/01/2026         ││
│  │  🏟️ Evento: Flamengo x Vasco ││
│  │  💰 Odd: 2.10                ││
│  │  🎯 Stake: 2 unidades        ││
│  │  🏠 Casa: Bet365             ││
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
│ │ 📅 06/01/2026       ││
│ │ 🏟️ Flamengo x Vasco││
│ │ 💰 2.10             ││
│ │ 🎯 2u               ││
│ │ 🏠 Bet365           ││
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
- **Data**: 📅 (ícone de calendário)
- **Evento**: 🏟️ (ícone de estádio)
- **Odd**: 💰 (ícone de dinheiro/odd)
- **Stake**: 🎯 (ícone de alvo/stake)
- **Casa**: 🏠 (ícone de casa/bet house)

### **Animações Sugeridas**
- **Mensagem**: Fade-in suave ao aparecer
- **Botões**: Hover com `scale-105`
- **Status**: Piscada sutil nos botões de confirmação

## 📊 Estrutura de Dados Visual

### **Tip Exemplo (Completa)**
```
⚽ Tip #124

📅 Data: 06/01/2026
🏟️ Evento: Flamengo x Vasco
💰 Odd: 2.10
🎯 Stake: 2 unidades
🏠 Casa: Bet365

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
- **Campos**: "Data" vs "Date", "Evento" vs "Event", "Casa" vs "Bookmaker"
- **Ações**: "Conseguiu apostar" vs "Managed to bet"
- **Negações**: "Não conseguiu" vs "Couldn't bet"
- **Campos mantidos**: "Odd" e "Stake" (internacionais)

### **Adaptação Visual**
- **Português**: Formato brasileiro (R$ 100,00)
- **Inglês**: Formato internacional ($100.00)
- **Cores**: Mantidas em ambos os idiomas
- **Layout**: Bolha de chat em ambos os idiomas

## 🎯 Foco Principal do Demo

### **Informações Essenciais (Apenas 6 elementos)**
1. **Grupo**: 💬 Nome do grupo individual
2. **Data**: 📅 Data do evento
3. **Evento**: 🏟️ Jogo/Partida
4. **Odd**: 💰 Valor da odd (2.10)
5. **Stake**: 🎯 Quantidade em unidades (2u)
6. **Casa**: 🏠 Casa de apostas
7. **Confirmação**: Botões ✅/❌ para status da aposta

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
  date: string; // 📅 Data formatada
  event: string; // 🏟️ Evento/Partida
  odds: string; // 💰 Valor da odd
  stake: string; // 🎯 Quantidade em unidades
  bookmaker: string; // 🏠 Casa de apostas
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
    pt: 'A solução definitiva para tipsters que desejam ganhar escala com eficiência. Automatiza o envio de tips e o cálculo de resultados por cliente, reduz o trabalho manual e oferece clareza total sobre a performance de cada apostador.',
    en: 'The ultimate solution for tipsters who want to scale with efficiency. Automates tip delivery and client-by-client result calculations, eliminates manual work, and provides full clarity over each customer\'s performance.'
  },
  features: [
    {
      icon: 'Users',
      text: {
        pt: 'Comunicação segmentada e profissional para cada cliente',
        en: 'Professional, client-segmented communication channels'
      }
    },
    {
      icon: 'MessageCircle',
      text: {
        pt: 'Integração nativa com Telegram para operação sem fricção',
        en: 'Native Telegram integration for a frictionless workflow'
      }
    },
    {
      icon: 'ShieldCheck',
      text: {
        pt: 'Registro real do que cada cliente apostou — sem suposições',
        en: 'Accurate tracking of what each client actually bet — no guesswork'
      }
    },
    {
      icon: 'LayoutGrid',
      text: {
        pt: 'Consolidação automática de resultados e histórico',
        en: 'Automatic result consolidation and performance history'
      }
    },
    {
      icon: 'ChartBar',
      text: {
        pt: 'Dashboards com métricas que fortalecem confiança e retenção',
        en: 'Insightful dashboards that strengthen trust and retention'
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