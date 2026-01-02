# Guia de Tipagem - Portfolio Pedro Zabeu

> Como tipar corretamente no projeto do portfolio.

---

## 🎯 Visão Geral

```
┌─────────────────────────────────────────────────────────────────┐
│                       FLUXO DE TIPOS                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   TYPES.TS                    Exporta tipos únicos             │
│        │                                                        │
│        ▼                                                        │
│   APLICAÇÃO              Componentes, Hooks, Store            │
│                          importam tipos de @/types              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Princípio fundamental:** `types.ts` é a fonte única de verdade para todos os tipos do projeto.

---

## 📁 Estrutura de Tipos

```
┌─────────────────────────────────────────────────────────────────┐
│                    ORGANIZAÇÃO DE ARQUIVOS                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   types/                      ← Pasta de tipos                  │
│    │                                                            │
│    └── types.ts               ← ARQUIVO ÚNICO de tipos          │
│                                 (fonte única de verdade)        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Responsabilidades do types.ts

**O QUE VAI AQUI:**
- Props de todos os componentes
- Tipos de retorno de funções
- Tipos de estado de hooks
- Tipos de UI (temas, estados, variantes)
- Tipos específicos do negócio

**O QUE NÃO VAI AQUI:**
- Tipos de bibliotecas externas (importe direto)
- Tipos genéricos do React (ReactNode, etc.)

---

## 🎭 Padrões de Tipagem

### Estados Finitos

**✅ CERTO: Union Types para estados**
```typescript
type Status = 'idle' | 'loading' | 'success' | 'error';

type LoadingState = {
  status: 'loading';
  message: string;
};

type SuccessState = {
  status: 'success';
  data: unknown;
};

type Result = LoadingState | SuccessState;
```

**❌ ERRADO: Texto genérico para estados**
```typescript
// NÃO FAÇA ISSO
type Status = string; // Aceita qualquer coisa!

type Result = {
  status: 'loading' | 'success' | 'error' | 'qualquer_coisa';
  data?: unknown;
  error?: string;
};
```

### Props de Componentes

**✅ CERTO: Props tipadas e reutilizáveis**
```typescript
// Props base reutilizáveis
interface BaseProps {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

// Props de componente compartilhado (shared/)
interface LogoProps extends BaseProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'compact';
}

// Props de bloco funcional (blocks/)
interface HeroBlockProps extends BaseProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

// Props de seção (sections/)
interface AboutSectionProps extends BaseProps {
  title: string;
  content: string;
  skills?: string[];
}

// Button component (ui/)
interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}
```

**❌ ERRADO: Props não tipadas ou genéricas**
```typescript
// NÃO FAÇA ISSO
interface ButtonProps {
  variant?: string; // Deveria ser union type
  size?: string;   // Deveria ser union type
  onClick?: any;   // NUNCA usar any!
}
```

### Resultados de Funções

**✅ CERTO: Discriminated Union**
```typescript
type ActionResult<T = unknown> = 
  | { success: true; data: T }
  | { success: false; error: string };

type LoginResult = ActionResult<{
  token: string;
  user: {
    id: string;
    name: string;
  };
}>;
```

**❌ ERRADO: Campos opcionais ambíguos**
```typescript
// NÃO FAÇA ISSO
type ActionResult = {
  success: boolean;
  data?: unknown;    // Quando success = false, data não existe
  error?: string;    // Quando success = true, error não existe
};
```

---

## 🏪 Tipagem de Hooks

### Hooks Personalizados

```typescript
// hooks/useLogo.ts
import type { LogoProps } from '@/types';

export function useLogo(props: LogoProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  
  const toggleVisibility = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);
  
  return {
    isVisible,
    toggleVisibility,
    props: {
      ...props,
      style: { opacity: isVisible ? 1 : 0 }
    }
  };
}
```

### Hooks de Estado

```typescript
// useState com tipo explícito
const [count, setCount] = useState<number>(0);

// useState com tipo complexo
const [user, setUser] = useState<{
  id: string;
  name: string;
  email: string;
} | null>(null);

// useReducer com types
type CounterState = { count: number };
type CounterAction = { type: 'increment' } | { type: 'decrement' };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
};
```

---

## 🎨 Tipos de UI

### Variantes e Tamanhos

```typescript
// Tipos reutilizáveis para UI
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Variant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost';
type Color = 'primary' | 'secondary' | 'accent' | 'destructive';

// Aplicado em componentes
interface ComponentProps {
  size?: Size;
  variant?: Variant;
  color?: Color;
}
```

### Temas e Aparência

```typescript
type Theme = 'light' | 'dark';
type Locale = 'pt-BR' | 'en-US';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}
```

---

## 🔧 Boas Práticas

### Regra Geral: Sempre Específico

**✅ Use tipos específicos:**
```typescript
type UserRole = 'admin' | 'user' | 'moderator';
type ButtonColor = 'primary' | 'secondary' | 'accent';
type LoadingState = 'idle' | 'loading' | 'success' | 'error';
```

**❌ Evite tipos genéricos:**
```typescript
// Evite quando possível
type UserRole = string;
type ButtonColor = string;
type LoadingState = string;
```

### Genéricos Quando Útil

```typescript
// Componente genérico (ui/)
interface GenericListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onSelect: (item: T) => void;
}

// Hook genérico
function useApi<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
} {
  // implementação
}

// Bloco genérico (blocks/)
interface GenericBlockProps<T> extends BaseProps {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  title?: string;
}

// Seção genérica (sections/)
interface GenericSectionProps<T> extends BaseProps {
  sections: T[];
  renderSection: (section: T) => React.ReactNode;
  title?: string;
}
```

### Utility Types do TypeScript

```typescript
// Tornar todas as props opcionais
type PartialProps<T> = {
  [K in keyof T]?: T[K];
};

// Tornar props obrigatórias exceto algumas
type RequiredExcept<T, K extends keyof T> = Required<Omit<T, K>> & Pick<T, K>;

// Exemplo prático
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  disabled?: boolean;
}

// Botão com variant obrigatório, outros opcionais
type OptionalButtonProps = PartialExcept<ButtonProps, 'variant'>;
```

---

## 📋 Checklist de Tipagem

### ✅ Antes de Definir um Tipo

- [ ] **Já existe?** Verifique em types.ts
- [ ] **Pode reutilizar?** Adapte tipo existente
- [ ] **É específico o suficiente?** Evite `string`, `any`, `unknown`
- [ ] **Usa union types?** Para valores finitos
- [ ] **Tem nome descritivo?** Ex: `LoadingState`, não `State`

### ✅ Ao Escrever Tipos

- [ ] **Exportar de types.ts** Fonte única
- [ ] **Usar union types** para estados finitos
- [ ] **Evitar `any` e `unknown`** Sempre
- [ ] **Documentar tipos complexos** com comentários
- [ ] **Usar interfaces** para objetos com propriedades nomeadas
- [ ] **Usar type aliases** para unions, generics, utilities

### ✅ Ao Usar Tipos

- [ ] **Importar sempre de @/types** Nunca inline
- [ ] **Desestruturar com tipo** quando necessário
- [ ] **Verificar tipo em runtime** para dados externos
- [ ] **Usar type guards** para discriminated unions

---

## 🚨 Erros Comuns e Como Evitar

### 1. Definir Tipos Inline

**❌ Problema:**
```typescript
// Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary'; // Tipo não reutilizável
}
```

**✅ Solução:**
```typescript
// types.ts
type ButtonVariant = 'primary' | 'secondary';
interface ButtonProps {
  variant: ButtonVariant;
}

// Button.tsx
import type { ButtonProps } from '@/types';
```

### 2. Usar `any` por Preguiça

**❌ Problema:**
```typescript
const handleClick = (event: any) => {
  console.log(event.target.value); // Sem autocomplete
};
```

**✅ Solução:**
```typescript
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log(event.currentTarget.value); // Com autocomplete!
};
```

### 3. Não Discriminar Union Types

**❌ Problema:**
```typescript
type Result = { success: boolean; data?: unknown; error?: string };

if (result.success) {
  // TypeScript não sabe se data existe!
  console.log(result.data?.name);
}
```

**✅ Solução:**
```typescript
type Result = 
  | { success: true; data: { name: string } }
  | { success: false; error: string };

if (result.success) {
  // TypeScript sabe que data existe!
  console.log(result.data.name);
}
```

---

## 📊 Resumo Visual

```
┌─────────────────────────────────────────────────────────────────┐
│                    TIPAGEM NO PROJETO                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                      types.ts                                   │
│                         │                                       │
│    Define props, estados, variantes, tipos de negócio            │
│    "size: 'sm' | 'md' | 'lg'"                                │
│    "status: 'loading' | 'success' | 'error'"                   │
│    "LogoProps, ButtonProps, ComponentProps"                      │
│                         │                                       │
│         ┌───────────────┼───────────────┐                       │
│         │               │               │                       │
│         ▼               ▼               ▼                       │
│    Componentes       Hooks         Funções                     │
│                                                                 │
│    Importam tipos    Tipados        Retornam                    │
│    de @/types        com tipos      tipos tipados                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔗 Referências

- [Regras de Arquitetura](./architecture.md) - Estrutura do projeto
- [Executar Feature](./execute-feature.md) - Como implementar
- [Planificar Feature](./plan-feature.md) - Como planejar