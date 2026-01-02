import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md border-green-500">
        <CardHeader>
          <CardTitle className="text-green-500">✅ Projeto iniciado com sucesso</CardTitle>
          <CardDescription>
            Seu portfolio Next.js está pronto para desenvolvimento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Todas as dependências foram instaladas corretamente. Você pode começar a adicionar páginas e componentes!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
