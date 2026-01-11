import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { CandidateCard } from "@/components/candidate-card"
import { candidatos } from "@/data/candidatos"
import { HelpCircle, ChevronDown } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <MobileNav />

      <section className="flex h-[calc(100vh-56px-64px)] flex-col items-center justify-center px-4 text-center md:h-[calc(100vh-64px)]">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Elecciones Costa Rica 2026
        </p>
        <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
          Tu voto decide el futuro
        </h1>
        <p className="mb-8 max-w-md text-lg text-muted-foreground text-pretty">
          Informate en minutos. Compará candidatos. Votá consciente.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="min-w-[200px] text-base">
            <Link href="/quiz">
              <HelpCircle className="mr-2 h-5 w-5" />
              ¿No sabés por quién votar?
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="min-w-[200px] bg-transparent text-base" asChild>
            <a href="#candidatos">
              Ver candidatos
              <ChevronDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <section id="candidatos" className="scroll-mt-16 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Candidatos Presidenciales</h2>
            <p className="mt-2 text-muted-foreground">{candidatos.length} candidatos registrados</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {candidatos.map((candidato) => (
              <CandidateCard key={candidato.id} candidato={candidato} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            Voto Consciente Costa Rica 2026 — Información ciudadana, no partidaria.
          </p>
        </div>
      </footer>
    </div>
  )
}
