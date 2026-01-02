# Planificar Feature - Portfolio Pedro Zabeu

Crie um documento de feature seguindo esta estrutura:

## 📍 Saída

**Localização:** `docs/features/feature-[NUMBER]/feature-[NUMBER].md`

## 📑 Seções do Documento (em ordem)

1. `# Feature [NUMBER] - [Título]`
2. `## 🎯 Objetivo` - 1-2 frases
3. `## 📋 Visão Geral` - Descrição detalhada
4. `## 🎨 Especificações Visuais` - Cores, tipografia, layout
5. `## 🖼️ Wireframes` - ASCII wireframes (um por view)
6. `## 🏗️ Estrutura de Arquivos` - Arquivos/pastas criadas ou modificadas
7. `## ✅ Critérios de Aceite` - Funcionais, Visuais, Técnicos
8. `## 🔄 Fluxo de Trabalho` - Passos de implementação
9. `## 🎯 Contexto de Uso` - Onde será utilizado
10. `## 📊 Considerações` - Performance, Acessibilidade

## 📏 Regras

1. **SEM CÓDIGO** - Apenas estrutura, wireframes e checklists
2. **Português** - Todo conteúdo em português
3. **ASCII art** - Use `+`, `-`, `|` para wireframes
4. **Sem caracteres corrompidos** - Use apenas ASCII padrão
5. **Mobile First** - Design wireframes para mobile primeiro
6. **Resultado Visível** - Toda feature deve ter mudança UI testável
7. **UX Obrigatório** - Toda feature deve definir estados e interações

## 🎨 Exemplo de Especificações Visuais

```
## 🎨 Especificações Visuais

### Tipografia
- **Fonte**: Geist Sans (padrão do projeto)
- **Tamanho**: `text-lg` (mobile) → `text-xl` (desktop)
- **Peso**: `font-semibold` (600)
- **Espaçamento**: `tracking-tighter`

### Paleta de Cores
- **Texto Primário**: Branco puro
- **Texto Destaque**: Teal TRON (#7DFDFE)
- **Background**: Preto suave
```

## 🖼️ Exemplo de Wireframe

```
### Layout Desktop
```
┌─────────────────────────────────────────────────────────────┐
│                                                         │
│                    LOGO AQUI                           │
│                    [██████████]                          │
│                                                         │
│  +-----------------------------------------------+     │
│  | Card Component                                |     │
│  | +----------+ +----------+ +----------+        |     │
│  | | Conteúdo  | | Conteúdo  | | Conteúdo  |        |     │
│  | +----------+ +----------+ +----------+        |     │
│  +-----------------------------------------------+     │
│                                                         │
└─────────────────────────────────────────────────────────────┘
```

### Layout Mobile
```
┌─────────────────────────────────┐
│                             │
│         LOGO AQUI           │
│         [██████████]        │
│                             │
│  +-----------------------+   │
│  | Card Component       |   │
│  | +-------+ +-------+ |   │
│  | |Conteú | |Conteú | |   │
│  | | do    | | do    | |   │
│  | +-------+ +-------+ |   │
│  +-----------------------+   │
│                             │
└─────────────────────────────────┘
```

## 🏗️ Exemplo de Estrutura de Arquivos

```
┌─ components/
│  ├─ ui/
│  │  └─ component.tsx           # Descrição
│  ├─ shared/
│  │  └─ component.tsx         # Descrição
│  ├─ blocks/
│  │  └─ ComponentBlock.tsx    # Descrição
│  └─ sections/
│     └─ ComponentSection.tsx  # Descrição
│
├─ app/
│  └─ page.tsx                # Modificado para usar componente
│
├─ types.ts                   # Adiciona novos tipos
│
└─ app/
   └─ globals.css             # Adiciona tokens CSS
```

## ✅ Exemplo de Critérios de Aceite

### Funcionais
- [ ] Componente exibido corretamente
- [ ] Responsividade funcionando
- [ ] Interações implementadas

### Visuais
- [ ] Cores aplicadas conforme especificação
- [ ] Tipografia configurada corretamente
- [ ] Layout alinhado

### Técnicos
- [ ] Componente reutilizável
- [ ] Tokens CSS definidos
- [ ] Sem estilos hardcoded
- [ ] TypeScript tipado corretamente

## 🔄 Exemplo de Fluxo de Trabalho

1. **Configurar tokens CSS** no globals.css
2. **Criar tipos** em types.ts
3. **Criar componente** seguindo estrutura padrão
4. **Implementar responsividade** com classes Tailwind
5. **Integrar** na página
6. **Testar** em diferentes tamanhos

## 📊 Exemplo de Considerações

### Performance
- Componente leve, sem dependências pesadas
- CSS otimizado com tokens
- Mínimo de re-renders

### Acessibilidade
- Texto legível com bom contraste
- Estrutura semântica adequada
- Navegação por teclado funcionando