# Feature 1.3 - Header

## 🎯 Objetivo
Criar um header responsivo com logo, navegação principal e seletor de idioma, integrado ao layout raiz da aplicação.

## 📋 Visão Geral
O header será o componente de navegação principal do site, posicionado fixo no topo da página. Deverá exibir o logo criado na feature 1.2, itens de navegação principal e um seletor de idioma. Os botões de navegação serão placeholders com efeitos visuais completos, mas sem funcionalidade real nesta fase. O seletor de idioma será um componente reutilizável em blocks, enquanto o header principal ficará em sections e será integrado diretamente no layout.tsx raiz.

## 🎨 Especificações Visuais

### Tipografia
- **Fonte**: Geist Sans (padrão do projeto)
- **Logo**: `text-lg md:text-xl font-semibold tracking-tighter`
- **Nav Items**: `text-sm font-medium`
- **Seletor Idioma**: `text-sm uppercase`

### Paleta de Cores
- **Background**: Transparente (scrolled: `bg-cv-bg-card/80 backdrop-blur-md`)
- **Logo Texto Primário**: Branco puro
- **Logo Destaque**: Teal TRON (`text-cv-accent`)
- **Nav Items**: `text-cv-text-primary` (hover: `text-cv-accent`)
- **Seletor Idioma**: `bg-cv-bg-card border-cv-border-muted text-cv-text-primary`

### Espaçamentos e Dimensões
- **Altura Header**: `var(--cv-header-height)` → `var(--cv-header-height-scrolled)`
- **Padding Container**: `px-6 md:px-12`
- **Gap Items**: `gap-3`
- **Logo Gap**: `gap-0`

### Estados e Animações
- **Hover**: Scale `active:scale-95`, cor transitions
- **Scroll**: Background blur, shadow, height reduction
- **Mobile**: Logo mantido "PEDRO.ZABEU", menu hamburguer com seletor idioma no dropdown

## 🖼️ Wireframes

### Layout Desktop
```
┌─────────────────────────────────────────────────────────────┐
│  Fixed Header (bg-blur when scrolled)                        │
│  ┌───────────────────────────────────────────────────────┐   │
│  │  LOGO                Navigation Items    Language     │   │
│  │  PEDRO.ZABEU         [Home] [About]      [EN ▼]      │   │
│  │  [██████████]        [Projects] [Contact]             │   │
│  │                                                       │   │
│  └───────────────────────────────────────────────────────┘   │
│  Bottom decorative line with shine effect                    │
└─────────────────────────────────────────────────────────────┘
```

### Layout Mobile (Menu Fechado)
```
┌─────────────────────────────────────────┐
│  Fixed Header                           │
│  ┌─────────────────────────────────────┐ │
│  │  LOGO                    Navigation │ │
│  │  PEDRO.ZABEU                 [☰]    │ │
│  │  [██████████]                        │ │
│  └─────────────────────────────────────┘ │
│  Bottom decorative line                  │
└─────────────────────────────────────────┘
```

### Layout Mobile (Menu Aberto)
```
┌─────────────────────────────────────────┐
│  Fixed Header                           │
│  ┌─────────────────────────────────────┐ │
│  │  LOGO                    Navigation │ │
│  │  PEDRO.ZABEU                 [✕]    │ │
│  │  [██████████]                        │ │
│  └─────────────────────────────────────┘ │
│  ┌─────────────────────────────────────┐ │
│  │           Mobile Menu                │ │
│  │  ┌─────────────────────────────────┐ │ │
│  │  │ [Home]                          │ │ │
│  │  │ [About]                         │ │ │
│  │  │ [Projects]                      │ │ │
│  │  │ [Contact]                       │ │ │
│  │  │ [─────────────────────────────] │ │ │
│  │  │ [🌐 Language: EN]               │ │ │
│  │  └─────────────────────────────────┘ │ │
│  └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Scroll State (Desktop)
```
┌─────────────────────────────────────────────────────────────┐
│  Header com backdrop-blur                                    │
│  ┌───────────────────────────────────────────────────────┐   │
│  │  LOGO                Navigation Items    Language     │   │
│  │  PEDRO.ZABEU         [Home] [About]      [EN ▼]      │   │
│  │  [██████████]        [Projects] [Contact]             │   │
│  │                                                       │   │
│  └───────────────────────────────────────────────────────┘   │
│  [Gradient bottom line with shine]                           │
└─────────────────────────────────────────────────────────────┘
```

### Scroll State (Mobile - Menu Fechado)
```
┌─────────────────────────────────────────┐
│  Header com backdrop-blur               │
│  ┌─────────────────────────────────────┐ │
│  │  LOGO                    Navigation │ │
│  │  PEDRO.ZABEU                 [☰]    │ │
│  │  [██████████]                        │ │
│  └─────────────────────────────────────┘ │
│  [Gradient bottom line]                  │
└─────────────────────────────────────────┘
```

## 🏗️ Estrutura de Arquivos

```
┌─ components/
│  ├─ blocks/
│  │  └─ header/
│  │     └─ LanguageSelector.tsx     # Componente seletor idioma
│  │
│  ├─ sections/
│  │  └─ HeaderSection.tsx          # Header principal com navegação
│  │
│  ├─ shared/
│  │  └─ logo.tsx                   # Reutilizado da feature 1.2
│  │
│  └─ ui/
│     └─ button.tsx                  # Reutilizado para nav items

├─ app/
│  └─ layout.tsx                     # Modificado para incluir HeaderSection

├─ types.ts                          # Se necessário, novos tipos para header

└─ app/
   └─ globals.css                    # Tokens CSS para header (--cv-header-height)
```

## ✅ Critérios de Aceite

### Funcionais
- [ ] Header exibido fixo no topo de todas as páginas
- [ ] Logo criado na feature 1.2 integrado corretamente
- [ ] Menu hamburguer funcional em mobile com animação
- [ ] Seletor de idioma integrado no menu mobile (não visível fechado)
- [ ] Seletor de idioma visível diretamente no desktop
- [ ] Botões de navegação com efeitos hover/placeholders
- [ ] Comportamento de scroll (mudança de background/altura)
- [ ] Responsividade mobile/desktop funcionando

### Visuais
- [ ] Background transparente → backdrop-blur no scroll
- [ ] Cores aplicadas conforme especificação (teal accent)
- [ ] Tipografia configurada corretamente
- [ ] Linha decorativa inferior com efeito shine
- [ ] Transições suaves entre estados
- [ ] Logo mantido "PEDRO.ZABEU" em mobile
- [ ] Menu mobile overlay com backdrop blur
- [ ] Animação hamburguer → X suave

### Técnicos
- [ ] HeaderSection em sections/ integrado em layout.tsx
- [ ] LanguageSelector em blocks/ como componente reutilizável
- [ ] Sem botão de customização (conforme solicitado)
- [ ] Tokens CSS definidos em globals.css
- [ ] Componentes reutilizáveis e sem código hardcoded
- [ ] TypeScript tipado corretamente
- [ ] Performance otimizada (scroll listener passive)

## 🔄 Fluxo de Trabalho

1. **Configurar tokens CSS** no globals.css para alturas do header
2. **Criar LanguageSelector** component em blocks/header/
3. **Criar HeaderSection** component em sections/ com logo e navegação
4. **Implementar menu mobile** com hamburguer e overlay
5. **Implementar scroll listener** para mudanças de estado
6. **Adicionar efeitos visuais** (linha decorativa, transições)
7. **Integrar HeaderSection** no layout.tsx raiz
7. **Testar responsividade** mobile/desktop
8. **Validar estados scroll** e efeitos visuais

## 🎯 Contexto de Uso

O header será utilizado em todas as páginas do site através do layout.tsx raiz, proporcionando navegação consistente e acesso rápido ao seletor de idioma. Será o primeiro elemento visual que os usuários verão, estabelecendo a identidade visual do portfolio.

## 📊 Considerações

### Performance
- Scroll listener com `{ passive: true }` para melhor performance
- Componente otimizado com React.memo se necessário
- CSS animations em vez de JavaScript quando possível
- Mínimo de re-renders com estado local otimizado

### Acessibilidade
- Aria labels adequados para botões e seletor
- Semântica HTML correta com `<header>` e `<nav>`
- Contraste adequado entre texto e background
- Navegação por teclado funcionando

### UX
- Feedback visual imediato em interações
- Transições suaves entre estados
- Mobile-first approach com menu adaptativo
- Estados hover bem definidos para elementos interativos