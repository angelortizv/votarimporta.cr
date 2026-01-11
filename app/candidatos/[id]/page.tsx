"use client"

import type React from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaFilter } from "@/components/area-filter"
import { candidatos } from "@/data/candidatos"
import { areas } from "@/lib/areas"
import {
  ArrowLeft,
  GraduationCap,
  Shield,
  TrendingUp,
  Leaf,
  Briefcase,
  Award,
  MessageCircle,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  Cpu,
  Palette,
  PiggyBank,
  Signal,
  Plane,
} from "lucide-react"
import { Area, AreaName } from "@/lib/data"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

function isLightColor(color: string): boolean {
  if (color.startsWith("#")) {
    const hex = color.replace("#", "")
    const r = Number.parseInt(hex.substr(0, 2), 16)
    const g = Number.parseInt(hex.substr(2, 2), 16)
    const b = Number.parseInt(hex.substr(4, 2), 16)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return luminance > 0.6
  }
  if (color.toLowerCase() === "white" || color === "#ffffff") return true
  return false
}

const iconMap: Record<string, React.ElementType> = {
  "graduation-cap": GraduationCap,
  shield: Shield,
  "trending-up": TrendingUp,
  leaf: Leaf,
  cpu: Cpu,
  palette: Palette,
  "piggy-bank": PiggyBank,
  signal: Signal,
  plane: Plane,
}

const socialLinks = [
  { key: "twitter", icon: Twitter, label: "Twitter" },
  { key: "instagram", icon: Instagram, label: "Instagram" },
  { key: "facebook", icon: Facebook, label: "Facebook" },
  { key: "tiktok", icon: TikTokIcon, label: "TikTok" },
  { key: "youtube", icon: Youtube, label: "YouTube" },
  { key: "web", icon: Globe, label: "Sitio Web" },
] as const

export default function CandidatoDetailPage() {
  const params = useParams()
  const candidato = candidatos.find((c) => c.id === params.id)
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [expandedAreas, setExpandedAreas] = useState<Set<string>>(new Set())

  const toggleArea = (areaId: string) => {
    setExpandedAreas((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(areaId)) {
        newSet.delete(areaId)
      } else {
        newSet.add(areaId)
      }
      return newSet
    })
  }

  if (!candidato) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Candidato no encontrado</p>
      </div>
    )
  }

  const colores = candidato.colores || [candidato.color]
  const gradientColors = colores.length === 1 ? `white, ${colores[0]}` : colores.join(", ")
  const firstColorIsLight = isLightColor(colores[0])

  const filteredAreas = selectedArea ? candidato.propuestas.filter((propuesta) => propuesta.area === selectedArea) : candidato.propuestas

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <MobileNav />

      <div className="relative">
        <div
          className="absolute inset-x-0 top-0 h-48 md:h-64"
          style={{
            background: `linear-gradient(to right, ${gradientColors})`,
          }}
        />

        <div className="relative px-4 py-6">
          <div className="mx-auto max-w-4xl">
            <Button
              asChild
              variant="ghost"
              className={`mb-4 -ml-2 ${
                firstColorIsLight
                  ? "text-foreground hover:bg-black/10 hover:text-foreground"
                  : "text-white hover:bg-white/20 hover:text-white"
              }`}
            >
              <Link href="/#candidatos">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Link>
            </Button>

            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start">
              <div className="relative aspect-square w-32 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-lg md:w-48">
                <Image
                  src={candidato.foto || "/placeholder.svg"}
                  alt={candidato.nombre}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <Badge className="mb-2 text-white" style={{ backgroundColor: candidato.color }}>
                  {candidato.partido}
                </Badge>
                <h1 className="mb-2 text-3xl font-bold md:text-4xl">{candidato.nombre}</h1>
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">{candidato.posicionPolitica}</Badge>
                  <Badge variant="outline">{candidato.ideologia}</Badge>
                </div>
                <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>{candidato.ocupacion}</span>
                </div>
                <p className="text-muted-foreground">{candidato.bio}</p>

                <div className="mt-4 flex items-center gap-3">
                  {socialLinks.map(({ key, icon: Icon, label }) => {
                    const url = candidato.redesSociales[key as keyof typeof candidato.redesSociales]
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

                <Button asChild className="mt-4" style={{ backgroundColor: candidato.color }}>
                  <Link href={`/chat?candidato=${candidato.id}`}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Preguntarle con IA
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="mx-auto max-w-4xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Principales Logros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {candidato.logros.map((logro, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    <span>{logro}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Propuestas por Área</h2>

            <div className="mb-6">
              <AreaFilter areas={areas} selectedArea={selectedArea} onSelectArea={setSelectedArea} />
            </div>

            {selectedArea === null ? (
              <div className="space-y-4">
                {areas.map((area) => {
                  const Icon = iconMap[area.icon] || GraduationCap
                  const areaData = candidato.propuestas.find((propuesta) => propuesta.area === area.area)
                  const isExpanded = expandedAreas.has(area.area)
                  const hasProposals = areaData && areaData.propuestas.length > 0 

                  return (
                    <div key={area.area}>
                      {!isExpanded ? (
                        <Card
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            hasProposals ? "hover:border-foreground/20" : "opacity-50"
                          }`}
                          onClick={() => hasProposals && toggleArea(area.area)}
                        >
                          <CardContent className="flex items-center gap-3 p-4">
                            <div
                              className="flex h-10 w-10 items-center justify-center rounded-lg"
                              style={{ backgroundColor: `${candidato.color}15` }}
                            >
                              <Icon className="h-5 w-5" style={{ color: candidato.color }} />
                            </div>
                            <h3 className="flex-1 text-lg font-bold">{area.area}</h3>
                            {hasProposals && (
                              <Badge variant="secondary" className="text-xs">
                                {areaData?.propuestas.length} propuesta{areaData?.propuestas.length > 1 ? "s" : ""}
                              </Badge>
                            )}
                          </CardContent>
                        </Card>
                      ) : (
                        <Card
                          className="cursor-pointer overflow-hidden"
                          style={{ backgroundColor: `${candidato.color}10` }}
                          onClick={() => toggleArea(area.area)}
                        >
                          <CardContent className="p-4">
                            <div className="mb-4 flex items-center gap-3">
                              <div
                                className="flex h-10 w-10 items-center justify-center rounded-lg"
                                style={{ backgroundColor: `${candidato.color}25` }}
                              >
                                <Icon className="h-5 w-5" style={{ color: candidato.color }} />
                              </div>
                              <h3 className="text-lg font-bold">{area.area}</h3>
                            </div>
                            <div className="space-y-3" onClick={(e) => e.stopPropagation()}>
                              {areaData?.propuestas.map((propuesta, index) => (
                                <Card key={index} className="bg-background">
                                  <CardContent className="p-4">
                                    <div className="space-y-3">
                                      <div>
                                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                          Problema
                                        </span>
                                        <p className="mt-1 text-sm">{propuesta.problema}</p>
                                      </div>
                                      <div>
                                        <span className="text-xs font-medium uppercase tracking-wider text-foreground">
                                          Solución
                                        </span>
                                        <p className="mt-1 text-sm font-medium">{propuesta.solucion}</p>
                                      </div>
                                      <div>
                                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                          Cómo lo hará
                                        </span>
                                        <p className="mt-1 text-sm text-muted-foreground">{propuesta.ejecucion}</p>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredAreas.map((area) => {
                  const Icon = iconMap[area.area] || GraduationCap
                  return (
                    <div key={area.area}>
                      <div className="mb-3 flex items-center gap-2">
                        <Icon className="h-5 w-5" />
                        <h3 className="text-lg font-semibold">{area.area}</h3>
                      </div>
                      <div className="space-y-4">
                        {area.propuestas.map((propuesta, index) => (
                          <Card key={index}>
                            <CardContent className="p-4 md:p-6">
                              <div className="space-y-4">
                                <div>
                                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Problema
                                  </span>
                                  <p className="mt-1 font-medium">{propuesta.problema}</p>
                                </div>
                                <div>
                                  <span className="text-xs font-medium uppercase tracking-wider text-foreground">
                                    Solución
                                  </span>
                                  <p className="mt-1 font-medium">{propuesta.solucion}</p>
                                </div>
                                <div>
                                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Cómo lo harán
                                  </span>
                                  <p className="mt-1 text-sm text-muted-foreground">{propuesta.ejecucion}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
