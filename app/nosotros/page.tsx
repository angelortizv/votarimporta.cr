import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { creadores } from "@/lib/creadores"
import { ArrowLeft, Twitter, Github, Linkedin, Globe } from "lucide-react"

const socialLinks = [
  { key: "twitter", icon: Twitter, label: "Twitter" },
  { key: "linkedin", icon: Linkedin, label: "LinkedIn" },
  { key: "github", icon: Github, label: "GitHub" },
  { key: "web", icon: Globe, label: "Sitio Web" },
] as const

export default function NosotrosPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <MobileNav />

      {/* Gradient header - black to white for neutrality */}
      <div className="relative">
        <div
          className="absolute inset-x-0 top-0 h-48 md:h-64"
          style={{
            background: "linear-gradient(to right, #000000, #ffffff)",
          }}
        />

        <div className="relative px-4 py-6">
          <div className="mx-auto max-w-4xl">
            <Button asChild variant="ghost" className="mb-4 -ml-2 text-white hover:bg-white/20 hover:text-white">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Link>
            </Button>

            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold md:text-4xl">Quiénes Somos</h1>
              <p className="text-muted-foreground">Dos costarricenses comprometidos con la democracia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission section */}
      <div className="px-4 pb-8">
        <div className="mx-auto max-w-4xl">
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="mb-3 text-xl font-bold">Nuestra Misión</h2>
              <p className="text-muted-foreground">
                Creamos <span className="font-medium text-foreground">Votar Importa</span> porque creemos que cada
                costarricense merece acceso fácil y rápido a información sobre los candidatos presidenciales. Queremos
                combatir el abstencionismo juvenil y empoderar a los votantes con herramientas que les permitan tomar
                decisiones informadas, sin sesgos partidarios.
              </p>
            </CardContent>
          </Card>

          {/* Creators */}
          <div className="grid gap-6 md:grid-cols-2">
            {creadores.map((creador) => (
              <Card key={creador.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-border">
                      <Image
                        src={creador.foto || "/placeholder.svg"}
                        alt={creador.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mb-1 text-xl font-bold">{creador.nombre}</h3>
                    <p className="mb-3 text-sm font-medium text-muted-foreground">{creador.ocupacion}</p>
                    <p className="mb-4 text-sm text-muted-foreground">{creador.bio}</p>
                    <div className="flex items-center gap-3">
                      {socialLinks.map(({ key, icon: Icon, label }) => {
                        const url = creador.redesSociales[key as keyof typeof creador.redesSociales]
                        if (!url) return null
                        return (
                          <a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-muted-foreground transition-colors hover:text-foreground"
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Values */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-bold text-center">Nuestros Principios</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h3 className="font-semibold">Neutralidad</h3>
                  <p className="text-sm text-muted-foreground">Sin favoritismos ni sesgos partidarios</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="font-semibold">Transparencia</h3>
                  <p className="text-sm text-muted-foreground">Información verificada y fuentes claras</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <span className="text-2xl">🇨🇷</span>
                  </div>
                  <h3 className="font-semibold">Democracia</h3>
                  <p className="text-sm text-muted-foreground">Fortaleciendo la participación ciudadana</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
