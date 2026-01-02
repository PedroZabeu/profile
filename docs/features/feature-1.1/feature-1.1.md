# Feature 1.1: Iniciar Projeto Next.js + TypeScript + Shadcn UI

## 🎯 Objetivo
Configurar um novo projeto Next.js com TypeScript e Shadcn UI para servir como base do portfolio.

## 📋 Tarefas

### 1. Criar projeto Next.js
```bash
npx create-next-app@latest . --typescript --tailwind --eslint
```
**Respostas esperadas:**
- TypeScript: ✅ Sim
- ESLint: ✅ Sim
- Tailwind CSS: ✅ Sim
- App Router: ✅ Sim

### 2. Instalar Shadcn UI
```bash
npx shadcn-ui@latest init
```
**Respostas esperadas:**
- Style: `Default`
- Base color: `Slate`
- CSS variables: ✅ Sim

### 3. Instalar componentes iniciais
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
```

### 4. Validar instalação
```bash
npm run dev
```
Acesso: `http://localhost:3000`

## ✅ Critério de Aceição
- [ ] Projeto criado e rodando localmente
- [ ] Next.js + TypeScript configurados
- [ ] Shadcn UI instalado e funcionando
- [ ] Componentes básicos disponíveis
- [ ] Dev server operacional na porta 3000

## 📦 Dependências Instaladas
- next
- react
- typescript
- tailwindcss
- shadcn-ui

## 🎨 Exemplo de Componente - Card de Sucesso

```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SuccessCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Card className="w-full max-w-md border-green-500 bg-slate-800">
        <CardHeader>
          <CardTitle className="text-green-500">✅ Projeto iniciado com sucesso</CardTitle>
          <CardDescription className="text-slate-300">
            Seu portfolio Next.js está pronto para desenvolvimento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-slate-200">
            Todas as dependências foram instaladas corretamente. Você pode começar a adicionar páginas e componentes!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
```

**Adicionar em:** `app/page.tsx`