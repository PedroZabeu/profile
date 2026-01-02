# Regras de Arquitetura - Portfolio Pedro Zabeu

## 🏗️ Nomenclatura de Arquivos

| Local | Convenção | Exemplo |
|-------|-----------|---------|
| `components/ui/` | kebab-case | `button.tsx` |
| `components/shared/` | kebab-case | `logo.tsx` |
| `components/blocks/` | PascalCase | `HeroBlock.tsx` |
| `components/sections/` | PascalCase | `AboutSection.tsx` |
| `hooks/` | camelCase (use*) | `useTheme.ts` |
| `types.ts` | camelCase | `LogoProps` |

## 🎯 Hierarquia de Componentes

```
Página (app/) → Seções (sections/) → Blocos (blocks/) → UI Atômica (ui/) → Shared (shared/)
```

**Regra de imports:** Só importar "para baixo":
- `ui/` nunca importa de outros diretórios
- `shared/` nunca importa de `blocks/` ou `sections/`
- `blocks/` nunca importa de `sections/`
- `sections/` nunca importa de `app/`
- `shared/` pode importar de `ui/`
- `blocks/` pode importar de `shared/` e `ui/`
- `sections/` pode importar de `blocks/`, `shared/` e `ui/`

## 📁 Estrutura de Pastas

```
components/
├── ui/           → Componentes atômicos (button, card, input)
├── shared/       → Componentes reutilizáveis (logo, header, footer)
├── blocks/       → Blocos funcionais (HeroBlock, SkillsBlock)
└── sections/     → Seções de página (AboutSection, ProjectsSection)
```

### Organização por Contexto

Componentes em `blocks/` e `sections/` ficam em subpastas:
- `shared/` → usado em 2+ páginas ou componentes
- `landing/` → só na landing page
- `about/` → só na página sobre
- `projects/` → só na página de projetos

## 🔐 SSOT (Single Source of Truth)

| O quê | Onde |
|-------|------|
| Todos os tipos | `types.ts` |
| Variáveis CSS | `app/globals.css` |
| Componentes UI | `components/ui/` |
| Componentes Compartilhados | `components/shared/` |

## 🎨 Cores

**NUNCA usar cores hardcoded.** Sempre tokens CSS:
- ❌ `#7DFDFE`, `rgb(...)`, `bg-teal-500`
- ✅ `bg-background`, `text-foreground`, `border-border`
- ✅ `var(--cv-text-primary)`, `var(--cv-accent)`

**Tokens CSS definidos em globals.css:**
- `--cv-text-primary`: Branco luminoso (PEDRO)
- `--cv-accent`: Teal elétrico (.ZABEU)

## 🏪 Estado

| Tipo | Onde |
|------|------|
| Só 1 componente usa | `useState` (local) |
| Múltiplos componentes | Context/Store (se necessário) |

**Regra:** Manter estado local sempre que possível.

## 📱 Estrutura de Componente

```typescript
// 1. Imports externos (React, Next.js)
// 2. Imports internos (componentes do projeto)
// 3. Import de tipos (sempre de @/types)

export function Component(props: ComponentProps) {
  // 1. Hooks (useState, useEffect)
  // 2. Variáveis derivadas
  // 3. Handlers de eventos
  // 4. Early returns (condições)
  // 5. Render JSX
}
```

## 🎭 Props

- Sempre tipadas com TypeScript
- Sempre importadas de `@/types`
- **NUNCA** `any` ou `unknown`
- Usar union types: `'sm' | 'md' | 'lg'` (não `string`)

## 📲 Mobile First

Estilos base são para mobile, breakpoints adicionam para telas maiores:
- ✅ `text-sm md:text-base lg:text-lg`
- ❌ `text-lg md:text-base sm:text-sm`

**Ordem de breakpoints:** `base` → `sm` → `md` → `lg` → `xl`

## 🚀 Performance

- Componentes devem ser leves
- Evitar re-renders desnecessários
- Usar `React.memo` quando necessário
- Prefira CSS em vez de bibliotecas pesadas

## 🔍 Qualidade de Código

- Componentes pequenos e focados
- Nomes descritivos
- Sem código comentado (remova o que não usa)
- Sem `console.log` em produção

## 📋 Checklist Antes de Commit

- [ ] Componente segue estrutura padrão
- [ ] Props tipadas corretamente
- [ ] Sem cores hardcoded
- [ ] Sem `any` ou `unknown`
- [ ] Mobile first implementado
- [ ] Importações seguem hierarquia
- [ ] Nomenclatura correta
- [ ] Performance otimizada