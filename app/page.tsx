import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Logo from "@/components/logo"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <Logo size="lg" />
      <Card className="w-full max-w-md">
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
