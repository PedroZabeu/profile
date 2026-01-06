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

#### **Componente do Hook**
```typescript
// components/blocks/projects/ProjectEntryHook.tsx
export const ProjectEntryHook = () => {
  const { language } = useSettingsStore()
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const messages = {
    pt: {
      title: "Projetos em Destaque",
      subtitle: "Soluções inovadoras desenvolvidas com excelência técnica",
      indicator: "Explore meus trabalhos abaixo"
    },
    en: {
      title: "Featured Projects", 
      subtitle: "Innovative solutions built with technical excellence",
      indicator: "Explore my work below"
    }
  }
  
  const msg = messages[language]
  
  return (
    <section className={`py-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-6">
          {/* Título Principal */}
          <h2 className="text-5xl lg:text-6xl font-bold text-cv-text-primary">
            {msg.title}
          </h2>
          
          {/* Subtítulo */}
          <p className="text-xl lg:text-2xl text-foreground max-w-3xl mx-auto">
            {msg.subtitle}
          </p>
          
          {/* Indicador Visual */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <div className="w-12 h-0.5 bg-cv-accent/60"></div>
            <span className="text-cv-accent font-medium animate-pulse">
              {msg.indicator}
            </span>
            <div className="w-12 h-0.5 bg-cv-accent/60"></div>
          </div>
          
          {/* Indicador de Scroll */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cv-accent/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cv-accent rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

#### **Integração no ProjectSection**
```typescript
// components/sections/ProjectSection.tsx
export function ProjectSection({ className, motionProps }: ProjectSectionProps) {
  return (
    <>
      {/* Hook de entrada antes dos projetos */}
      <ProjectEntryHook />
      
      {/* Seção dos projetos */}
      <section 
        id="projects"
        className={`py-24 lg:py-32 ${className}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            <BettingMGMT />
            {/* Future projects */}
          </div>
        </div>
      </section>
    </>
  )
}
```

#### **Animações e Efeitos**
- **Fade-in Up**: Entrada suave de baixo para cima
- **Pulse Effects**: Indicador visual pulsando
- **Scroll Indicator**: Animação bounce contínua
- **Auto-progression**: Após 3s, scroll automático suave para primeiro projeto
- **Manual Control**: Usuário pode scroll manualmente a qualquer momento

#### **Design Visual**
- **Background**: Mesmo `--background` do restante do site
- **Cores**: Sistema OKLCH com `text-cv-text-primary` e `text-cv-accent`
- **Tipografia**: Hierarquia clara com títulos grandes
- **Espaçamento**: `py-32` para impacto visual
- **Centralização**: Conteúdo centralizado com `text-center`

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