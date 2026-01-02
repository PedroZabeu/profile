# Executar Feature - Portfolio Pedro Zabeu

Este guia orienta a implementação de features no projeto do portfolio, garantindo conformidade com padrões estabelecidos.

## 📋 Antes de Começar

**Leia as regras de arquitetura:**
```
docs/rules/architecture.md
```

Este arquivo resume todas as convenções do projeto.

---

## 🔧 Checklist de Implementação

### 1. Entender a Feature

- [ ] Ler documento da feature em `docs/features/feature-[NUMBER]/`
- [ ] Identificar **Resultado Visível** - o que o usuário verá/testará
- [ ] Identificar **Detalhes UX** - estados de carregamento, hover, transições
- [ ] Identificar todos os arquivos a criar/modificar
- [ ] Revisar checklist de sub-tarefas

### 2. Tipos Primeiro (SSOT)

Antes de escrever qualquer componente:

- [ ] Definir novos tipos em `@/types.ts`
- [ ] Exportar todos os tipos de `@/types.ts`
- [ ] Sempre inferir tipos quando possível

```
types.ts → componentes, hooks, stores
```

### 3. Hierarquia de Componentes

Siga o design atômico. Pergunte-se:

| Questão | Resposta | Localização |
|----------|--------|----------|
| É primitivo (button, input)? | Átomo | `components/ui/` (kebab-case) |
| É reutilizável entre contexts? | Compartilhado | `components/shared/` (kebab-case) |
| Combina átomos em bloco funcional? | Bloco | `components/blocks/` (PascalCase) |
| Combina blocos em seção de página? | Seção | `components/sections/` (PascalCase) |

**Context folders:** `shared/`, `landing/`, `about/`, `projects/`

**Regra de imports:** Apenas importar "para baixo" (páginas → sections → blocks → shared → ui)

### 4. Estrutura do Componente

Todo componente deve seguir esta ordem:

```typescript
// 1. Imports externos (react, next)
// 2. Imports internos (components, hooks, utils)
// 3. Import de tipos (sempre de @/types)

export function ComponentName(props: ComponentProps) {
  // 1. Hooks
  // 2. Variáveis derivadas
  // 3. Handlers
  // 4. Early returns (loading, error, empty)
  // 5. Render
}
```

### 5. Gerenciamento de Estado

| Cenário | Solução |
|----------|----------|
| Estado usado por UM componente | `useState` (local) |
| Estado compartilhado entre componentes | Context/Store (se necessário) |

**Regra:** Tipo definido em `@/types.ts`.

### 6. Estilização

**NUNCA hardcode cores:**
- Ruim: `#7DFDFE`, `rgb(...)`, `bg-teal-500`
- Bom: `bg-background`, `text-foreground`, `border-border`
- Bom: `var(--cv-text-primary)`, `var(--cv-accent)`

Todos os tokens de cor vêm de `app/globals.css`.

**Mobile First:** Estilos base são para mobile, breakpoints adicionam para telas maiores:
- Bom: `text-sm md:text-base lg:text-lg`
- Ruim: `text-lg md:text-base sm:text-sm`

Ordem dos breakpoints: `base` → `sm` → `md` → `lg` → `xl`

### 7. Server Components

Para componentes do lado do servidor:

```typescript
// components/server/[component-name].tsx
export default function ServerComponent(props: ComponentProps) {
  // Lógica do servidor
  // Render JSX sem hooks do cliente
}
```

---

## 📁 Referência Rápida de Nomenclatura

| Localização | Convenção | Exemplo |
|-------------|------------|---------|
| `components/ui/` | kebab-case | `button.tsx` |
| `components/shared/` | kebab-case | `logo.tsx` |
| `components/blocks/` | PascalCase | `HeroBlock.tsx` |
| `components/sections/` | PascalCase | `AboutSection.tsx` |
| `hooks/` | camelCase (use*) | `useTheme.ts` |
| `types.ts` | camelCase | `LogoProps` |

---

## 🚨 Erros Comuns a Evitar

1. **Definir tipos inline** - Todos os tipos vão em `@/types.ts`
2. **Importar do nível errado** - Átomos nunca importam moléculas
3. **Hardcoding de cores** - Use tokens CSS apenas
4. **Usar `any`** - Use tipos específicos ou union types
5. **Criar arquivos desnecessários** - Reuse > Adapt > Criar novo
6. **Over-engineering** - Implemente apenas o solicitado

---

## ✅ Após Implementação

- [ ] **Resultado Visível funciona** - Usuário pode ver/testar o resultado esperado
- [ ] **Detalhes UX implementados** - Estados de loading, hover, transições
- [ ] Todos os tipos estão em `@/types.ts`
- [ ] Todos os componentes seguem estrutura padrão
- [ ] Todos os imports respeitam hierarquia
- [ ] Sem cores hardcoded
- [ ] Sem tipos `any` ou `unknown`
- [ ] Checklist da feature está completa
- [ ] Funciona em diferentes tamanhos de tela

---

## 📚 Referências Detalhadas

Para explicações detalhadas, veja:

- [Regras de Arquitetura](../rules/architecture.md) - Referência rápida
- [Guia de Tipos](../rules/types-guide.md) - Padrões de tipagem
- [Guia de Componentes](../rules/component-guide.md) - Estrutura de componentes