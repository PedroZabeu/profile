# Feature 1.6 - About Me

## 🎯 Objetivo
Criar seção "About Me" com narrativa tech-first, apresentando a jornada: "pensa como estrategista, constrói como engenheiro, executa com IA".

## 📋 Visão Geral
Seção com layout de cards inspirada no código exemplo, apresentando Pedro Zabeu como profissional tech com fundação estratégica. Destacar 3 pilares: Strategic Thinking, Engineering Execution, AI-Powered Execution. Cada card com ícone animado e frase de impacto. Incluir botão CTA "Saiba Mais" direcionando para futura página /about.

## 🎨 Especificações Visuais

### Tipografia
- **Fonte**: Geist Sans (padrão do projeto)
- **Título Principal**: `text-4xl` (mobile) → `text-5xl` (desktop)
- **Título Cards**: `font-medium`
- **Descrição Cards**: `text-sm`
- **Peso**: `font-semibold` (título), `font-medium` (cards)
- **Espaçamento**: `tracking-tighter`

### Paleta de Cores
- **Background Section**: `bg-zinc-50` (light) / `dark:bg-transparent`
- **Cards**: `bg-white` com `shadow-zinc-950/5`
- **Texto Principal**: `text-zinc-900` (light) / `text-white` (dark)
- **Ícones**: Teal TRON (#7DFDFE)
- **Botão CTA**: Gradiente teal com hover effect

### Layout Cards
- **Grid**: 1 coluna (mobile) → 3 colunas (desktop)
- **Divisores**: `divide-x` horizontal entre cards
- **Spacing**: `py-16` (mobile) → `py-32` (desktop)
- **Container**: `max-w-5xl` com `@container`

## 🖼️ Wireframes

### Layout Desktop
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                        About Me                             │
│                  [██████████████]                           │
│                                                             │
│  Pensa como estrategista, constrói como engenheiro e        │
│  executa com IA. Ex-CFO aplicando mentalidade estratégica  │
│  em produtos orientados por dados e sistemas inteligentes. │
│                                                             │
│  ┌─────────────┬─────────────┬─────────────┐               │
│  │   [📈]      │   [💻]      │   [🧠]      │               │
│  │             │             │             │               │
│  │ Strategic   │ Engineering │ AI-Powered  │               │
│  │ Thinking    │ Execution   │ Execution   │               │
│  │             │             │             │               │
│  │ Former CFO  │ End-to-end  │ Agent-based │               │
│  │ framing     │ systems     │ coding      │               │
│  │ decisions   │ with Python │ structured  │               │
│  │             │ R, TS       │ EPICs       │               │
│  │             │             │             │               │
│  │ Strategic   │ Production  │ Automated   │               │
│  │ mindset     │ ready apps  │ debugging   │               │
│  │             │             │             │               │
│  │ [executive] │ [R]         │ [claude]    │               │
│  │ [entrepreneur] [python]   │ [cursor]    │               │
│  │             │ [react]     │ [codex]     │               │
│  └─────────────┴─────────────┴─────────────┘               │
│                                                             │
│                    [ Saiba Mais → ]                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Layout Mobile
```
┌─────────────────────────────────┐
│                                 │
│            About Me             │
│         [██████████████]        │
│                                 │
│  Pensa como estrategista,       │
│  constrói como engenheiro e     │
│  executa com IA.                │
│                                 │
│  ┌─────────────────────────────┐ │
│  │        [📈] Strategic        │ │
│  │                              │ │
│  │ Former CFO framing          │ │
│  │ decisions with strategic     │ │
│  │ mindset                      │ │
│  │                              │ │
│  │ [executive]                  │ │
│  │ [entrepreneur]               │ │
│  └─────────────────────────────┘ │
│                                 │
│  ┌─────────────────────────────┐ │
│  │        [💻] Builder         │ │
│  │                              │ │
│  │ End-to-end systems with     │ │
│  │ Python, R, TS production    │ │
│  │ ready apps                  │ │
│  │                              │ │
│  │ [R]                          │ │
│  │ [python]                     │ │
│  │ [react]                      │ │
│  └─────────────────────────────┘ │
│                                 │
│  ┌─────────────────────────────┐ │
│  │        [🧠] AI-Powered      │ │
│  │                              │ │
│  │ Agent-based coding with     │ │
│  │ structured EPICs and        │ │
│  │ automated debugging         │ │
│  │                              │ │
│  │ [claude]                     │ │
│  │ [cursor]                     │ │
│  │ [codex]                      │ │
│  └─────────────────────────────┘ │
│                                 │
│         [ Saiba Mais → ]        │
│                                 │
└─────────────────────────────────┘
```

## 🏗️ Estrutura de Arquivos

```
┌─ components/
│  ├─ ui/
│  │  └─ profile-card.tsx           # Card decorator com ícone
│  ├─ blocks/
│  │  └─ profile/
│  │     ├─ ProfileHeadline.tsx      # Título "About Me"
│  │     ├─ ProfileDescription.tsx   # Descrição narrativa
│  │     ├─ StrategicCard.tsx       # Card Strategic Thinker
│  │     ├─ BuilderCard.tsx         # Card Builder
│  │     ├─ AiCard.tsx              # Card AI-Powered
│  │     └─ ProfileCta.tsx          # Botão CTA
│  └─ sections/
│     └─ AboutSection.tsx           # Seção completa com cards
│
├─ app/
│  └─ page.tsx                      # Modificado para incluir seção
│
├─ types.ts                         # Adiciona tipos ProfileCard
│
└─ app/
   └─ globals.css                   # Adiciona tokens CSS para profile cards
```

## ✅ Critérios de Aceite

### Funcionais
- [ ] Seção com 3 cards exibida corretamente abaixo de HeroSection
- [ ] Grid responsivo: 1 coluna (mobile) → 3 colunas (desktop)
- [ ] Cards com ícones Lucide animados (TrendingUp, Code, Brain)
- [ ] Tags específicas em cada card (executive/entrepreneur, R/python/react, claude/cursor/codex)
- [ ] Ícones instalados via animateicons.in com animações suaves
- [ ] Botão CTA com hover effect e animação
- [ ] Conteúdo baseado no CV (Pedro Zabeu - CV 2025.md)

### Visuais
- [ ] Layout cards inspirado no código exemplo
- [ ] Card decorator com grid pattern e hover effects
- [ ] Divisores visuais entre cards (divide-x)
- [ ] Sombras e bordas conforme especificação
- [ ] Animações suaves no hover dos cards

### Técnicos
- [ ] Componente reutilizável e modular
- [ ] Card decorator reutilizável com children prop
- [ ] Tokens CSS definidos para cores e espaçamentos
- [ ] Sem estilos hardcoded
- [ ] TypeScript tipado corretamente
- [ ] SEO otimizado com heading hierarchy

## 🔄 Fluxo de Trabalho

1. **Configurar tokens CSS** para profile cards no globals.css
2. **Criar tipos** ProfileCard em types.ts
3. **Instalar ícones animados** via animateicons.in
4. **Criar ProfileCardDecorator** componente reutilizável
5. **Criar ProfileHeadline** para título principal
6. **Criar ProfileDescription** para descrição geral
7. **Criar StrategicCard** com ícone TrendingUp e conteúdo Strategic Thinker
8. **Criar BuilderCard** com ícone Code e conteúdo Builder
9. **Criar AiCard** com ícone Brain e conteúdo AI-Powered
10. **Criar ProfileCta** para botão com animação
11. **Criar AboutSection** com grid de cards
12. **Integrar** na página principal abaixo de HeroSection
13. **Testar** responsividade e interações

## 🎯 Contexto de Uso
Seção "About Me" exibida após hero threads, apresentando jornada tech-first através de 3 pilares: Strategic Thinker, Builder, AI-Powered. Layout inspirado no código exemplo com grid responsivo e card decorators. Narrativa "pensa como estrategista, constrói como engenheiro, executa com IA". Botão CTA prepara navegação para futura página about com detalhes completos.

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
**Título:** "AI-Powered"
**Descrição:** "Leverages AI as core development layer — agent-based coding, structured EPIC planning, automated debugging and continuous validation workflows."

**Título PT:** "AI-Powered"
**Descrição PT:** "Usa IA como camada central de desenvolvimento — codificação com agentes, planejamento estruturado por EPICs, debug automatizado e validação contínua."

**Tags:** claude, cursor, codex

## 🎯 Ícones Lucide com Animação

### Comandos para Instalar Ícones Animados
```bash
npx shadcn@latest add "https://animateicons.in/icons/trending-up.json"
npx shadcn@latest add "https://animateicons.in/icons/code.json"  
npx shadcn@latest add "https://animateicons.in/icons/brain.json"
```

### Implementação
- Usar Lucide icons com animação via animateicons.in
- Importar ícones animados nos componentes de cards
- Configurar animações suaves no hover
- Manter consistência visual com design system

## 📊 Considerações

### Performance
- Componente leve, sem dependências pesadas
- CSS otimizado com tokens
- Mínimo de re-renders
- Lazy loading opcional para conteúdo abaixo fold

### Acessibilidade
- Texto legível com bom contraste
- Estrutura semântica adequada (header, h2, p)
- Navegação por teclado funcionando
- Screen reader compatibility
- Botão CTA com aria-label descritivo