# Feature 1.5 - Estrutura de Pastas

## 🎯 Objetivo
Definir a estrutura organizacional de arquivos para a seção de projetos, seguindo abordagem modular com componentes específicos por projeto e sistema unificado de cores e internacionalização.

## 🏗️ Arquitetura Modular

```
components/
├─ sections/
│  └─ ProjectSection.tsx              # Orquestrador principal + Hook wrapper
│
├─ blocks/
│  └─ projects/
│     ├─ templates/
│     │  └─ ProjectFeature.tsx        # Template genérico (Features-5)
│     │
│     ├─ ProjectEntryHook.tsx          # Hook de entrada visual (novo)
│     ├─ BettingMGMT.tsx               # Componente específico
│     ├─ SchoolOfBets.tsx              # Componente específico
│     └─ Stakely.tsx                   # Componente específico
│
├─ ui/
│  └─ projects/
│     ├─ project-feature-text.tsx     # Sub-componente texto
│     └─ project-feature-demo.tsx     # Sub-componente demo
│
└─ types/
   └─ projects.ts                     # Tipos TypeScript
```

## 📁 Responsabilidades

### **Orquestrador Principal**
- `ProjectSection.tsx`: Wrapper que inclui hook de entrada + gerencia projetos

### **Template Genérico**
- `ProjectFeature.tsx`: Base reutilizável para todos os projetos

### **Hook de Entrada**
- `ProjectEntryHook.tsx`: Seção intermediária entre Hero e Projects

### **Componentes Específicos**
- `BettingMGMT.tsx`: Customizações do projeto Betting Management
- `SchoolOfBets.tsx`: Customizações do projeto School of Bets  
- `Stakely.tsx`: Customizações do projeto Stakely

### **Sub-componentes Reutilizáveis**
- `project-feature-text.tsx`: Estrutura de texto padrão com sistema OKLCH
- `project-feature-demo.tsx`: Container para demo visual (aspect 76/59)

### **Tipos e Validação**
- `projects.ts`: Interfaces TypeScript para estrutura de dados
- `types.ts`: Sistema de cores OKLCH + RGB e helpers

### **Estado Global e Utilitários**
- `settings.ts`: Estado i18n com persistência (Zustand)
- `color-utils.ts`: Helpers para conversão de cores
- `utils.ts`: Utilitários gerais do sistema

## 🔄 Fluxo de Dados

```
ProjectSection.tsx (Wrapper com Hook)
    ↓
ProjectEntryHook.tsx (seção intermediária)
    ↓
Componentes Específicos (BettingMGMT, SchoolOfBets, Stakely)
    ↓
ProjectFeature.tsx (Template)
    ↓
Sub-componentes (Text, Demo)
    ↓
Sistema de Cores (OKLCH + types.ts) + i18n (settings.ts)
```

## 🎨 Benefícios da Estrutura

### **1. Modularidade**
- Cada projeto independente
- Template reutilizável
- Componentes atômicos

### **2. Manutenibilidade**
- Modificar um projeto não afeta outros
- Código organizado por responsabilidade
- Fácil localização de arquivos

### **3. Escalabilidade**
- Novos projetos seguem mesmo padrão
- Template evolui independente
- Componentes reutilizáveis

### **4. Customização**
- Layouts diferentes por projeto
- Cores específicas
- Features únicas por produto

## 🌐 Internacionalização e Cores

### **Sistema i18n**
- **Idiomas**: `'en' | 'pt'`
- **Estado**: `useSettingsStore` com persistência
- **Componente**: `LanguageSelector` com toggle
- **Textos**: `Record<Language, string>` para traduções

### **Sistema de Cores OKLCH**
- **Primárias**: `--cv-text-primary`, `--cv-accent`
- **Helpers**: `getThreadColor()`, `getCssColor()`, `colorToRgb()`
- **Tokens**: Sincronizados via `globals.css`
- **Fallback**: RGB automático para compatibilidade

### **Ícones Padronizados**
- **Biblioteca**: AnimateIcons (sem emojis)
- **Categorias**: Business, Tech, Communication, Analytics
- **Uso**: `size-5` com `text-cv-accent`

### **5. Sistema Unificado**
- Cores OKLCH sincronizadas via `types.ts`
- Internacionalização com estado persistido
- Ícones AnimateIcons padronizados
- Helpers automáticos para conversão de cores

### **6. Design System Integrado**
- Tokens CSS via `globals.css`
- Sistema de cores com fallback RGB
- Componentes responsivos (mobile/desktop)
- Aspect ratio padronizado (76/59)