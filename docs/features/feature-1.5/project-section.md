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

#### **Conteúdo do Hook**

**Títulos em Dois Idiomas:**
- **Português:** "Projetos em Destaque" + "Soluções inovadoras desenvolvidas com excelência técnica"
- **Inglês:** "Featured Projects" + "Innovative solutions built with technical excellence"

**Indicador Visual Central:**
- Texto pulsante: "Explore meus trabalhos abaixo" / "Explore my work below"
- Duas linhas horizontais nos lados do texto indicadoras
- Indicador de scroll animado no final da seção

**Comportamento:**
- Entrada com fade-in suave ao aparecer no viewport
- Texto centralizado com tipografia grande e impactante
- Auto-scroll suave após 3 segundos para o primeiro projeto
- Scroll manual permitido a qualquer momento

#### **Wireframe ASCII**

**Desktop View:**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                            PROJETOS EM DESTAQUE                            │
│                       (text-6xl font-bold text-cv-text-primary)             │
│                                                                             │
│              Soluções inovadoras desenvolvidas com excelência técnica        │
│                    (text-2xl text-foreground max-w-3xl mx-auto)             │
│                                                                             │
│                                                                             │
│  ──────────────────────── ◉ Explore meus trabalhos abaixo ─────────────────  │
│         (linha)            (pulse animate)            (linha)                │
│                                                                             │
│                                                                             │
│                                                                             │
│                                   ↓                                        │
│                             (scroll indicator)                              │
│                            (bounce animate)                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Mobile View:**
```
┌─────────────────────────────────┐
│                                 │
│        PROJETOS EM              │
│        DESTAQUE                 │
│      (text-5xl bold)           │
│                                 │
│   Soluções inovadoras          │
│   desenvolvidas com             │
│   excelência técnica           │
│    (text-xl max-w)              │
│                                 │
│                                 │
│   ────── ◉ Explore ──────      │
│         meus trabalhos          │
│         abaixo                  │
│                                 │
│                                 │
│               ↓                 │
│           (scroll)              │
│                                 │
└─────────────────────────────────┘
```

#### **Animações e Efeitos**
- **Fade-in Up**: Entrada suave de baixo para cima com opacity 0→1
- **Pulse Effects**: Indicador "Explore" pulsando continuamente
- **Scroll Indicator**: Animação bounce vertical contínua  
- **Auto-progression**: Scroll automático suave após 3 segundos
- **Manual Control**: Usuário pode scroll manualmente a qualquer momento

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
ProjectSection.tsx (Orquestrador)
    ↓
Componentes Específicos (BettingMGMT, SchoolOfBets, Stakely)
    ↓  
ProjectFeature.tsx (Template Genérico)
    ↓
Sub-componentes (Text, Demo)
    ↓
Sistema de Cores (OKLCH) + i18n (Zustand)
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