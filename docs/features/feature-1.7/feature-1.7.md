# Feature 1.7 - Section Contact

## 🎯 Objetivo
Criar a seção de contato do portfolio com formulário funcional e informações de contato.

## 📋 Visão Geral
Implementar a seção de contato como parte final da landing page, permitindo que visitantes entrem em contato. A seção deve incluir:
- Formulário de contato com validação
- Informações de contato (email, LinkedIn, GitHub, WhatsApp, Telegram)
- Botões de ação para redes sociais e mensageiros
- Responsividade mobile/desktop
- Internacionalização PT/EN

### Dados de Contato
- **Email**: pedroibzabeu@gmail.com
- **LinkedIn**: https://linkedin.com/in/pedroivo-zabeu
- **GitHub**: https://github.com/PedroZabeu
- **WhatsApp**: +55 11 97122-9926 (https://wa.me/5511971229926)
- **Telegram**: @pzabeu (https://t.me/pzabeu)

## 🎨 Especificações Visuais

### Tipografia
- **Fonte**: Geist Sans (padrão do projeto)
- **Título**: `text-3xl md:text-5xl font-bold tracking-tighter`
- **Subtítulo**: `text-lg md:text-xl font-medium text-muted-foreground`
- **Formulário Labels**: `text-sm font-semibold`
- **Formulário Inputs**: `text-base`

### Paleta de Cores
- **Título**: Branco puro
- **Subtítulo**: Cinza claro
- **Botão Primary**: Teal TRON (#7DFDFE)
- **Botão Secondary**: Preto com borda branca
- **Botão WhatsApp**: Verde WhatsApp (#25D366)
- **Botão Telegram**: Azul Telegram (#0088CC)
- **Background**: Preto suave com gradiente sutil
- **Inputs**: Preto com borda cinza escuro
- **Input Focus**: Borda Teal TRON

### Ícones Animados
Usando componentes AnimateIcons via shadcn:
- **WhatsApp**: `MessageCircleIcon` (verde #25D366)
- **Telegram**: `SendIcon` (azul #0088CC)
- **GitHub**: `GithubIcon` (branco)
- **LinkedIn**: `LinkedinIcon` (branco)
- **Email**: Ícone de envelope (usando `MessageCircleIcon` customizado)
- **Tamanho dos ícones**: `size={24}` (mobile) → `size={32}` (desktop)
- **Botões quadrados**: `w-12 h-12` (mobile) → `w-14 h-14` (desktop)
- **Animações**: Ícones animam ao hover (`isAnimated={true}`)

### Espaçamento
- **Section Padding**: `py-20 md:py-32`
- **Card Padding**: `p-6 md:p-8`
- **Gap Between Elements**: `gap-4 md:gap-6`

## 🖼️ Wireframes

### Layout Desktop
```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│                     ENTRE EM CONTATO                            │
│                    Vamos trabalhar juntos?                       │
│                                                                  │
│  ┌──────────────────────────┬────────────────────────────────┐  │
│  │                          │                                │  │
│  │  FORMULARIO              │    INFORMAÇÕES                │  │
│  │  +--------------------+  │    +------------------------+  │  │
│  │  | Nome              |  │    | 📧 pedroibzabeu@      |  │  │
│  │  +--------------------+  │    |   gmail.com           |  │  │
│  │  +--------------------+  │    |                        │  │  │
│  │  | Email             |  │    | 📱 +55 11 97122-9926   |  │  │
│  │  +--------------------+  │    |   (WhatsApp)          |  │  │
│  │  +--------------------+  │    |                        │  │  │
│  │  | Mensagem          |  │    | ✈️ @pzabeu (Telegram) |  │  │
│  │  |                   |  │    +------------------------+  │  │
│  │  |                   |  │                                │  │
│  │  +--------------------+  │    +----+ +----+ +----+ +----+ │  │
│  │                          │    │ IN │ │ GH │ │ WA │ │ TG │ │  │
│  │      [ENVIAR]             │    +----+ +----+ +----+ +----+ │  │
│  │                          │                                │  │
│  └──────────────────────────┴────────────────────────────────┘  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Layout Mobile
```
┌─────────────────────────────┐
│                             │
│       ENTRE EM CONTATO      │
│    Vamos trabalhar juntos?  │
│                             │
│  ┌───────────────────────┐  │
│  │                       │  │
│  │  FORMULARIO           │  │
│  │  +-----------------+  │  │
│  │  | Nome           |  │  │
│  │  +-----------------+  │  │
│  │  +-----------------+  │  │
│  │  | Email          |  │  │
│  │  +-----------------+  │  │
│  │  +-----------------+  │  │
│  │  | Mensagem       |  │  │
│  │  |                |  │  │
│  │  +-----------------+  │  │
│  │                       │  │
│  │     [ENVIAR]          │  │
│  │                       │  │
│  └───────────────────────┘  │
│                             │
│  INFORMAÇÕES               │
│  📧 pedroibzabeu@gmail.com │
│  📱 +55 11 97122-9926      │
│  ✈️ @pzabeu (Telegram)     │
│                             │
│  +--+ +--+ +--+ +--+       │
│  │IN│ │GH│ │WA│ │TG│       │
│  +--+ +--+ +--+ +--+       │
│                             │
└─────────────────────────────┘
```

## 🏗️ Estrutura de Arquivos

```
┌─ components/
│  ├─ sections/
│  │  └─ ContactSection.tsx    # Seção de contato principal
│  │
│  ├─ blocks/
│  │  └─ contact/
│  │     ├─ ContactForm.tsx    # Formulário de contato
│  │     └─ ContactInfo.tsx    # Informações de contato
│  │
│  ├─ ui/
│  │  ├─ contact-card.tsx      # Card wrapper do formulário
│  │  └─ social-button.tsx     # Botão com ícone animado
│  │
│  ├─ MessageCircleIcon.tsx    # Ícone animado (WhatsApp)
│  ├─ SendIcon.tsx             # Ícone animado (Telegram)
│  ├─ GithubIcon.tsx           # Ícone animado (GitHub)
│  └─ LinkedinIcon.tsx         # Ícone animado (LinkedIn)
│
├─ app/
│  └─ page.tsx                 # Modificado para incluir ContactSection
│
├─ types.ts                    # Adiciona tipos de contato
│
└─ stores/
   └─ settings.ts              # Modificado para incluir textos PT/EN
```

## ✅ Critérios de Aceite

### Funcionais
- [ ] Formulário de contato exibido corretamente
- [ ] Validação de campos (nome, email, mensagem)
- [ ] Botão de envio desabilitado durante envio
- [ ] Feedback de sucesso/erro após envio
- [ ] Link para LinkedIn funcionando (https://linkedin.com/in/pedroivo-zabeu)
- [ ] Link para GitHub funcionando (https://github.com/PedroZabeu)
- [ ] Link para WhatsApp funcionando (https://wa.me/5511971229926)
- [ ] Link para Telegram funcionando (https://t.me/pzabeu)
- [ ] Email clicável (mailto:pedroibzabeu@gmail.com)
- [ ] Internacionalização PT/EN funcionando

### Visuais
- [ ] Cores aplicadas conforme especificação
- [ ] Tipografia configurada corretamente
- [ ] Layout responsivo (mobile/desktop)
- [ ] Hover states nos botões e links
- [ ] Focus states nos inputs acessíveis
- [ ] Gradiente sutil no background da seção
- [ ] Alinhamento centralizado do conteúdo

### Técnicos
- [ ] Componente reutilizável
- [ ] TypeScript tipado corretamente
- [ ] Sem estilos hardcoded (usar Tailwind)
- [ ] Performance otimizada (sem re-renders desnecessários)
- [ ] Formulário com estados (idle, loading, success, error)
- [ ] Acessibilidade (labels, ARIA attributes)
- [ ] SEO otimizado (schema markup)

## 🔄 Fluxo de Trabalho

1. **Definir tipos** em types.ts para formulário e dados de contato
2. **Criar componente ContactForm** com validação e estados
3. **Criar componente ContactInfo** com dados de contato
4. **Criar componente SocialButton** reutilizável
5. **Criar ContactSection** combinando form e info
6. **Adicionar textos PT/EN** no settings store
7. **Implementar layout responsivo** com Tailwind
8. **Integrar ContactSection** na page.tsx
9. **Testar validação** de formulário
10. **Testar responsividade** em diferentes tamanhos

## 🎯 Contexto de Uso
A seção de contato será o último componente da landing page, posicionado abaixo da Section About e antes do Footer. É o ponto final de conversão onde visitantes podem entrar em contato para oportunidades profissionais.

## 📊 Considerações

### Performance
- Formulário leve sem dependências externas
- Validação client-side para feedback rápido
- Lazy loading de ícones de redes sociais

### Acessibilidade
- Labels adequados para todos os inputs
- Mensagens de erro claras e descritivas
- Navegação por teclado funcionando
- Contraste adequado (WCAG AA)
- ARIA labels para ícones

### UX
- Feedback imediato ao submeter formulário
- Estados de loading claros
- Mensagem de sucesso com call-to-action adicional
- Redirecionamento opcional após sucesso
- Formulário resetado após envio bem-sucedido