# Feature 2.1 - Skills Section

## 🎯 Objetivo
Criar uma seção de habilidades profissionais exibida em clusters com barras de progresso visuais, onde os detalhes e notas são revelados através de interações hover, proporcionando uma experiência de navegação limpa e interativa.

## 📋 Visão Geral

A seção Skills será uma página dedicada na rota /about que exibe as competências profissionais divididas em 4 clusters principais:

1. **Financial Skills** - Competências financeiras avançadas
2. **Data Science** - Analytics e modelagem de dados
3. **Full Stack Development** - Desenvolvimento web e visão de produto
4. **Other Skills** - Liderança, comunicação e AI agents

Cada cluster contém skills individuais com barras de progresso que mostram proficiência visualmente. Ao passar o mouse sobre uma barra, é exibido um tooltip/popover com:
- Nota numérica (0-10)
- Descrição técnica detalhada
- Tecnologias/conhecimentos específicos

### Dados dos Skills

**Financial Skills**
- Equity Valuation: 9.5/10 - DCF, Residual Income, DDM, Multiples
- Financial Statements Modeling: 9.5/10 - Banks, Insurance, SaaS, Retail, Genco, Ports
- Debt & Derivatives Instruments: 8/10 - Advanced knowledge of debt instruments and derivatives
- Risk Assessment: 8.5/10 - VaR Modeling

**Data Science**
- Econometrics: 9/10 - OLS, Assumptions Testing, Causal Inference, Time Series
- Machine Learning: 8/10 - Supervised Learning, Cross Validation, Random Forest, xGBoost
- Simulations: 8/10 - Monte Carlo, MCMV

**Full Stack Development**
- Frontend Development: 9/10 - React, Next.js, TypeScript, Tailwind CSS
- Backend Development: 8.5/10 - Node.js, API Design, Database Architecture
- Product Vision: 9/10 - User Research, Feature Planning, MVP Development
- Full-cycle Development: 9/10 - From concept to deployment, iterative improvement

**Other Skills**
- Leadership: 9/10 - CFO, Leading Analyst (Equity Research), Entrepreneur
- Commercial Skills: 8.5/10 - Sell Side Analyst, Investor Education, M&A, Retail
- Communication: 9.5/10 - Coverage Reports, Presentations, Fluent EN/PT, Advanced ES
- AI Agents: 8.5/10 - Claude Code, Cursor, Antigravity, Opencode

## 🎨 Especificações Visuais

### Tipografia
- **Fonte**: Geist Sans (padrão do projeto)
- **Cluster Title**: `text-2xl md:text-3xl`, `font-bold`
- **Skill Title**: `text-base md:text-lg`, `font-semibold`
- **Tooltip Title**: `text-lg`, `font-bold`
- **Tooltip Description**: `text-sm`, `font-normal`, `text-muted-foreground`
- **Tooltip Score**: `text-4xl md:text-5xl`, `font-bold`

### Paleta de Cores
- **Background Cluster**: `bg-neutral-900/50` com borda `border-neutral-800`
- **Skill Bar Background**: `bg-neutral-800`
- **Skill Bar Fill**: Gradiente verde para azul (OKLCH)
  - 9.0-10.0: `oklch(70% 0.15 150)` - Verde vibrante
  - 8.0-8.9: `oklch(70% 0.15 180)` - Verde-azulado
  - 7.0-7.9: `oklch(70% 0.15 210)` - Azul claro
- **Tooltip Background**: `bg-neutral-800` com borda `border-teal-500/30`
- **Hover Effects**: `hover:border-teal-500/50`, `hover:scale-[1.02]`
- **Tooltip Score Text**: Branco brilhante com glow

### Espaçamento
- **Cluster Spacing**: `gap-6 md:gap-8`
- **Skill Items**: `space-y-3 md:space-y-4`
- **Internal Padding**: `p-6 md:p-8`
- **Tooltip Padding**: `p-4`
- **Bar Height**: `h-3 md:h-4`

### Animações
- **Entrada**: Fade-in com stagger por cluster (300ms delay)
- **Bars**: Animação de preenchimento (width: 0 → score) com ease-out
- **Hover**: Scale suave 1.02, border brilho, opacity fade-in do tooltip
- **Tooltip**: Fade-in com slide-up

### Interações
- **Hover Bar**: Mostra tooltip com detalhes
- **Focus**: Tooltip visível também via teclado (tab + enter)
- **Mobile**: Tap para mostrar tooltip (ou tooltip sempre visível)
- **Escape**: Fecha tooltip aberta

## 🖼️ Wireframes

### Layout Desktop - Estado Normal
```
+-----------------------------------------------------------------------+
|                                                                       |
|                          SKILLS SECTION                                |
|                                                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|  +---------------------------+  +---------------------------+         |
|  |  FINANCIAL SKILLS         |  |  DATA SCIENCE             |         |
|  |  -------------------      |  |  -------------------      |         |
|  |                           |  |                           |         |
|  |  Equity Valuation        |  |  Econometrics             |         |
|  |  [█████████████░]         |  |  [████████████░░]         |         |
|  |                           |  |                           |         |
|  |  Fin. Statements         |  |  Machine Learning        |         |
|  |  [█████████████░]         |  |  [██████████░░░░]         |         |
|  |                           |  |                           |         |
|  |  Debt & Derivatives      |  |  Simulations              |         |
|  |  [██████████░░░░]         |  |  [██████████░░░░]         |         |
|  |                           |  |                           |         |
|  +---------------------------+  +---------------------------+         |
|                                                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|  +---------------------------+  +---------------------------+         |
|  |  FULL STACK DEVELOPMENT   |  |  OTHER SKILLS             |         |
|  |  -------------------      |  |  -------------------      |         |
|  |                           |  |                           |         |
|  |  Frontend                |  |  Leadership               |         |
|  |  [████████████░░]         |  |  [████████████░░]         |         |
|  |                           |  |                           |         |
|  |  Backend                 |  |  Commercial               |         |
|  |  [███████████░░░]         |  |  [███████████░░░]         |         |
|  |                           |  |                           |         |
|  |  Product Vision          |  |  Communication            |         |
|  |  [████████████░░]         |  |  [█████████████░]         |         |
|  |                           |  |                           |         |
|  |  Full-cycle              |  |  AI Agents                |         |
|  |  [████████████░░]         |  |  [███████████░░░]         |         |
|  |                           |  |                           |         |
|  +---------------------------+  +---------------------------+         |
|                                                                       |
+-----------------------------------------------------------------------+
```

### Layout Desktop - Estado com Hover (Tooltip)
```
+-----------------------------------------------------------------------+
|                                                                       |
|  FINANCIAL SKILLS                                        DATA SCIENCE |
|  -------------------                                   -------------------      |
|                                                                       |
|  Equity Valuation                        9.5  |  Econometrics           |
|  [█████████████░]                          |  [████████████░░]         |
|                                          |                           |
|  +----------------------------------+     |                           |
|  | DCF, Residual Income, DDM...     |     |                           |
|  | Multiples Valuation Methods      |     |                           |
|  +----------------------------------+     |                           |
|                                          |                           |
|  Fin. Statements                        |  Machine Learning           |
|  [█████████████░]                        |  [██████████░░░░]         |
|                                          |                           |
|                                          |                           |
+-----------------------------------------------------------------------+
```

### Layout Mobile - Estado Normal
```
+---------------------------------------------------------------+
|                                                               |
|                    SKILLS SECTION                              |
|                                                               |
+---------------------------------------------------------------+
|                                                               |
|  +---------------------------------------------------------+  |
|  |  FINANCIAL SKILLS                                        |  |
|  |  -------------------                                     |  |
|  |                                                         |  |
|  |  Equity Valuation                                       |  |
|  |  [█████████████░]                                       |  |
|  |                                                         |  |
|  |  Financial Statements                                   |  |
|  |  [█████████████░]                                       |  |
|  |                                                         |  |
|  |  Debt & Derivatives                                    |  |
|  |  [██████████░░░░]                                       |  |
|  |                                                         |  |
|  +---------------------------------------------------------+  |
|                                                               |
|  +---------------------------------------------------------+  |
|  |  DATA SCIENCE                                            |  |
|  |  -------------------                                     |  |
|  |                                                         |  |
|  |  Econometrics                                           |  |
|  |  [████████████░░]                                       |  |
|  |                                                         |  |
|  |  Machine Learning                                       |  |
|  |  [██████████░░░░]                                       |  |
|  |                                                         |  |
|  +---------------------------------------------------------+  |
|                                                               |
+---------------------------------------------------------------+
```

### Layout Mobile - Estado com Tap (Tooltip Modal)
```
+---------------------------------------------------------------+
|                                                               |
|                    SKILLS SECTION                              |
|                                                               |
+---------------------------------------------------------------+
|                                                               |
|  +---------------------------------------------------------+  |
|  |  FINANCIAL SKILLS                                        |  |
|  |  -------------------                                     |  |
|  |                                                         |  |
|  |  Equity Valuation                                       |  |
|  |  [█████████████░]                                       |  |
|  |                                                         |  |
|  +-----------------------------------------------+         |  |
|  |  9.5  DCF, Residual Income, DDM           [X] |         |  |
|  |       Multiples Valuation Methods             |         |  |
|  |                                               |         |  |
|  |       Banks, Insurance, SaaS, Retail...      |         |  |
|  +-----------------------------------------------+         |  |
|  |                                                         |  |
|  |  Financial Statements                                   |  |
|  |  [█████████████░]                                       |  |
|  |                                                         |  |
|  +---------------------------------------------------------+  |
|                                                               |
+---------------------------------------------------------------+
```

### Tooltip Detalhado (Desktop)
```
┌─────────────────────────────────────────────────────────────┐
│  9.5                        [×]                            │
│                                                             │
│  Equity Valuation                                            │
│  ═══════════════════════════════════════════════════════════│
│                                                             │
│  Technologies:                                              │
│  • DCF (Discounted Cash Flow)                               │
│  • Residual Income Model                                     │
│  • DDM (Dividend Discount Model)                            │
│  • Multiples Valuation (P/E, EV/EBITDA, P/B)                │
│                                                             │
│  Experience:                                                 │
│  Valuation of financial institutions,                        │
│  insurance companies, SaaS, retail,                          │
│  generation companies, and ports                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## 🏗️ Estrutura de Arquivos

```
┌─ app/
│  └─ about/
│     └─ page.tsx                          # Nova página /about
│
├─ components/
│  ├─ sections/
│  │  └─ skills-section.tsx                # Seção principal de skills
│  │
│  ├─ blocks/
│  │  ├─ skill-cluster.tsx                 # Card de cluster
│  │  └─ skill-item.tsx                    # Item de skill individual
│  │
│  ├─ ui/
│  │  ├─ skill-bar.tsx                     # Barra de progresso animada
│  │  └─ skill-tooltip.tsx                  # Tooltip com detalhes
│  │
│  └─ shared/
│     └─ tooltip.tsx                       # Tooltip genérico (reutilizar)
│
├─ types/
│  └─ skills.ts                            # Tipos para skills
│
├─ data/
│  └─ skills-data.ts                       # Dados dos skills
│
└─ lib/
   └─ skill-utils.ts                       # Utilitários (cores, formatação)
```

## ✅ Critérios de Aceite

### Funcionais
- [ ] Exibir 4 clusters de skills
- [ ] Mostrar barras de progresso para cada skill (sem nota visível)
- [ ] Tooltip com nota e detalhes ao hover
- [ ] Responsividade mobile/desktop
- [ ] Navegação funcionando na rota /about
- [ ] Hover effects suaves
- [ ] Tooltip fechável (click/tap no mobile)

### Visuais
- [ ] Layout grid de 2x2 em desktop
- [ ] Stacked em mobile
- [ ] Gradientes de cores por score
- [ ] Animações de entrada suaves
- [ ] Tipografia consistente com o projeto
- [ ] Dark mode aplicado corretamente
- [ ] Tooltip com design limpo e legível
- [ ] Indicador visual de interação (cursor pointer)

### Técnicos
- [ ] TypeScript tipado corretamente
- [ ] Componentes reutilizáveis
- [ ] Dados separados em arquivo próprio
- [ ] Performance otimizada (debounce no hover)
- [ ] Sem estilos hardcoded
- [ ] Tokens CSS utilizados
- [ ] Acessibilidade (ARIA labels, keyboard navigation)
- [ ] Tooltip com position inteligente (evitar overflow)

### UX
- [ ] Legibilidade em mobile
- [ ] Hierarquia visual clara
- [ ] Feedback visual ao hover/tap
- [ ] Carregamento suave das animações
- [ ] Diferenciação visual entre clusters
- [ ] Tooltip não bloquear scroll em mobile
- [ ] Transições suaves (300ms)

### Mobile
- [ ] Tooltip com tap (não hover)
- [ ] Modal/overlay em mobile (não floating)
- [ ] Botão de fechar no tooltip
- [ ] Touch-friendly hit areas
- [ ] Não interfere com scroll

## 🔄 Fluxo de Trabalho

1. **Criar tipos** em `types/skills.ts` (Skill, SkillCluster, SkillTooltipData)
2. **Criar dados** em `data/skills-data.ts` (todos os 4 clusters com notas e descrições)
3. **Criar componente base** `skill-bar.tsx` (barra de progresso com animação)
4. **Criar componente** `skill-tooltip.tsx` (tooltip com nota + descrição)
5. **Criar componente** `skill-item.tsx` (nome + barra + tooltip integrado)
6. **Criar componente** `skill-cluster.tsx` (container com título + skills)
7. **Criar componente** `skills-section.tsx` (grid de clusters)
8. **Criar página** `app/about/page.tsx`
9. **Implementar layout** responsive (grid-cols-1 md:grid-cols-2)
10. **Adicionar animações** de entrada (stagger por cluster)
11. **Implementar hover/tap** logic para tooltips
12. **Testar responsividade** (mobile, tablet, desktop)
13. **Verificar acessibilidade** (contraste, ARIA, keyboard)
14. **Otimizar performance** (debounce, lazy rendering se necessário)

## 🎯 Contexto de Uso

A seção Skills será acessada:
- **Página principal**: Link na Section About da landing page
- **Navegação direta**: URL `/about`
- **UX Flow**: Landing Page → About Section → View All Skills → `/about`

Usuário vê:
1. Resumo de top skills na landing page
2. Clica em "Ver Skills Completos"
3. Navega para `/about`
4. Visualiza clusters com barras de progresso
5. Passe o mouse (desktop) ou toque (mobile) para ver detalhes
6. Tooltip mostra nota numérica e descrição completa

## 📊 Considerações

### Performance
- **Debounce**: 100-150ms delay para tooltip aparecer (evitar flicker)
- **CSS animations**: Usar `transform` e `opacity` (GPU accelerated)
- **Lazy rendering**: Tooltips renderizados sob demanda
- **Data size**: Dados leves, sem fetch externo
- **Bundle size**: Tooltip reutilizável de `@radix-ui/react-tooltip`

### Acessibilidade
- **Contraste**: Cores com ratio mínimo 4.5:1
- **Screen readers**: ARIA labels nas barras e tooltips
- **Keyboard**: Navegável por teclado (tab para skill, enter para ver tooltip)
- **Text sizes**: Mínimo 16px em mobile
- **Focus indicators**: Visível para keyboard users

### Responsividade
- **Mobile**: Stacked layout, clusters full-width, tooltip como modal/overlay
- **Tablet**: Grid 1x2, clusters half-width, tooltip floating
- **Desktop**: Grid 2x2, clusters half-width, tooltip floating com position inteligente
- **Large screens**: Máximo 1400px, centralizado

### UX
- **Discoverability**: Cursor pointer e micro-indicador de hover
- **Feedback**: Transições suaves de 300ms
- **Cognitive load**: Informação secundária escondida (clean look)
- **Progressive disclosure**: Hover revela mais detalhes

### Manutenibilidade
- **Configuração centralizada**: Cores e thresholds em utils
- **Dados separados**: Fácil adicionar/remover skills
- **Componentes modulares**: Reutilizáveis em outras seções
- **Tipos TypeScript**: Autocomplete e type safety

### Próximas Features (Futuro)
- Filtro por cluster
- Ordenação por nota
- Modal com detalhes expandidos
- Download de skills em PDF
- Comparativo antes/depois
- Timeline de evolução de skills
- Certificações e cursos relacionados
