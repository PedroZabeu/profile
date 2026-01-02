# Feature 1.2 - Criar o Logo

## 🎯 Objetivo
Criar um componente de logo textual responsivo que servirá como elemento principal de identificação visual no portfolio.

## 📋 Visão Geral

### Descrição do Componente
Logo puramente textual sem ícones ou elementos gráficos, composto por duas partes coloridas:

- **Parte 1**: "PEDRO" - Cor primária
- **Parte 2**: ".ZABEU" - Cor de destaque (accent)

### Comportamento Responsivo
- **Desktop**: Exibe nome completo "PEDRO.ZABEU"
- **Mobile**: Versão adaptada para telas pequenas

## 🎨 Especificações Visuais

### Tipografia
- **Fonte**: Geist Sans (padrão do projeto)
- **Variável CSS**: `--font-geist-sans`
- **Tamanho**: `text-lg` (mobile) → `text-xl` (desktop)
- **Peso**: `font-semibold` (600)
- **Espaçamento**: `tracking-tighter` (mais compacto)

### Paleta de Cores
- **Texto Primário ("PEDRO")**: Branco puro
- **Texto Destaque (".ZABEU")**: Teal TRON (#7DFDFE)

*Inspiração visual baseada no filme TRON - combinação de branco luminoso com teal elétrico característico do universo digital do filme.*

## 🖼️ Wireframes

### Layout Desktop
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    PEDRO.ZABEU                             │
│                    [██████████]                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Layout Mobile
```
┌─────────────────────────────────┐
│                                 │
│         PEDRO.ZABEU            │
│         [██████████]            │
│                                 │
└─────────────────────────────────┘
```

### Estrutura do Componente
```
Logo
├── Container (div)
│   ├── Span "PEDRO" (cor primária)
│   └── Span ".ZABEU" (cor accent)
```

## 🏗️ Arquitetura

### Tokens CSS (globals.css)
```css
/* Cores do logo - inspiradas em TRON */
--cv-text-primary: #ffffff;     /* Branco luminoso para "PEDRO" */
--cv-accent: #7DFDFE;           /* Teal elétrico para ".ZABEU" */
```

### Estrutura de Arquivos
- **Componente**: `/components/logo.tsx`
- **Estilos**: `/app/globals.css` (tokens)
- **Uso**: Integrado nos componentes da aplicação

## 📱 Implementação Responsiva

### Breakpoints
- **Mobile**: < 768px (md)
- **Desktop**: ≥ 768px (md)

### Estratégia
- Utilizar classes do Tailwind para responsividade
- Manter a mesma estrutura HTML em ambos os tamanhos
- Ajustar apenas o tamanho da fonte

## ✅ Critérios de Aceite

### Funcionais
- [ ] Logo exibido corretamente em desktop
- [ ] Logo adaptado para mobile
- [ ] Cores aplicadas conforme especificação
- [ ] Tipografia configurada com Geist Sans

### Visuais
- [ ] Contraste adequado com fundo escuro
- [ ] Espaçamento entre letras compacto
- [ ] Peso da fonte semibold (600)
- [ ] Alinhamento centralizado

### Técnicos
- [ ] Componente reutilizável
- [ ] Tokens CSS definidos em globals.css
- [ ] Sem estilos hardcoded no componente
- [ ] Responsividade funcionando

## 🔄 Fluxo de Trabalho

1. **Configurar tokens CSS** no globals.css
2. **Criar componente** logo.tsx
3. **Implementar responsividade** com classes Tailwind
4. **Testar** em diferentes tamanhos de tela
5. **Integrar** na página inicial

## 🎯 Contexto de Uso

O logo será utilizado em:
- Cabeçalho (header) da aplicação
- Seção hero da landing page
- Footer (opcional)
- Card de boas-vindas (validação)

## 📊 Considerações

### Performance
- Componente leve, sem imagens
- Fonte já carregada pelo projeto
- Mínimo de CSS adicional

### Acessibilidade
- Texto legível com bom contraste
- Sem dependência de cor apenas
- Estrutura semântica adequada