# Feature 1.2 - Criar o Logo

## Especificações

1. Descrição
O logo é textual e composto por dois elementos:

Desktop: Mostra nome completo PEDRO.ZABEU
Mobile: Versão comprimida P.ZABEU (apenas a inicial)
Responsivo: Usa hidden md:inline / md:hidden para trocar

Todos os detalhes da tipografia devem estar em globals.css

2. Tipografia
Fonte: Geist Sans (padrão do projeto)
Variável CSS: --font-geist-sans
Tamanho: text-lg md:text-xl
Peso: font-semibold (600)
Espaçamento: tracking-tighter (mais compacto)

3. Cores
Localização no globals.css:

/* Cor "PEDRO" - Branco */
--cv-text-primary: #ffffff;

/* Cor ".ZABEU" - TRON Teal Accent */
--cv-accent: #7DFDFE;

Na prática:

<span className="text-cv-text-primary">PEDRO</span> → Branco (#ffffff)
<span className="text-cv-accent">.ZABEU</span> → Teal (#7DFDFE)

## Arquivos Criados

- /components/logo.tsx - criado
- /globals.css - modificado
- /app/page.tsx - modificado

## Modificações UI

- O logo foi adicionado ao card inicial presente em app/page.tsx