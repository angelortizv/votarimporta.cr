"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { candidatos } from "@/data/candidatos"
import { areas } from "@/lib/areas"
import type { Candidato, AreaName } from "@/lib/data"
import {
  Swords,
  ChevronDown,
  X,
  Check,
  Lightbulb,
} from "lucide-react"
import { iconMap, defaultIcon } from "@/lib/icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

function CandidateSelector({
  selected,
  onSelect,
  excludeId,
  side,
}: {
  selected: Candidato | null
  onSelect: (c: Candidato | null) => void
  excludeId?: string
  side: "left" | "right"
}) {
  const availableCandidatos = candidatos.filter((c) => c.id !== excludeId)

  return (
    <div className="relative h-[200px] md:h-[240px]">
      {selected ? (
        <div
          className="flex h-full flex-col items-center justify-center rounded-2xl border-2 p-4"
          style={{ borderColor: selected.color }}
        >
          <button onClick={() => onSelect(null)} className="absolute right-2 top-2 rounded-full p-1 hover:bg-muted">
            <X className="h-4 w-4" />
          </button>
          <div className="relative mb-2 h-16 w-16 overflow-hidden rounded-full md:h-20 md:w-20">
            <Image src={selected.foto || "/placeholder.svg"} alt={selected.nombre} fill className="object-cover" />
          </div>
          <Badge style={{ backgroundColor: selected.color }} className="mb-1 text-white text-xs">
            {selected.partidoSiglas}
          </Badge>
          <h3 className="text-center text-sm font-semibold md:text-base">{selected.nombre}</h3>
          <p className="text-center text-xs text-muted-foreground">{selected.posicionPolitica}</p>
        </div>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-muted-foreground/30 transition-colors hover:border-foreground hover:bg-muted/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>
              <span className="text-xs text-muted-foreground px-2 text-center">
                {side === "left" ? "Primer" : "Segundo"} candidato
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-56 max-h-64 overflow-y-auto">
            {availableCandidatos.map((c) => (
              <DropdownMenuItem key={c.id} onClick={() => onSelect(c)} className="flex items-center gap-3 p-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full flex-shrink-0">
                  <Image src={c.foto || "/placeholder.svg"} alt={c.nombre} fill className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm truncate">{c.nombre}</p>
                  <p className="text-xs text-muted-foreground">{c.partidoSiglas}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}

function AreaSelector({
  selectedArea,
  onSelect,
}: {
  selectedArea: AreaName | null
  onSelect: (area: AreaName) => void
}) {
  const selectedAreaData = areas.find((a) => a.area === selectedArea)
  const SelectedIcon = selectedAreaData ? iconMap[selectedAreaData.icon] || defaultIcon : null

  return (
    <div className="space-y-3">
      <h2 className="text-center text-sm font-medium text-muted-foreground">Selecciona el area</h2>

      {/* Mobile: Dropdown */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between h-12 bg-transparent">
              {selectedArea && SelectedIcon ? (
                <span className="flex items-center gap-2">
                  <SelectedIcon className="h-4 w-4" />
                  {selectedAreaData?.area}
                </span>
              ) : (
                <span className="text-muted-foreground">Elegir area a comparar</span>
              )}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[calc(100vw-2rem)] max-h-64 overflow-y-auto">
          {areas.map((area) => {
            const Icon = iconMap[area.icon] || defaultIcon
            const isSelected = selectedArea === area.area
            return (
              <DropdownMenuItem
                  key={area.area}
                  onClick={() => onSelect(area.area)}
                  className="flex items-center gap-3 p-3"
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="flex-1 text-sm">{area.area}</span>
                  {isSelected && <Check className="h-4 w-4 text-foreground" />}
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop: Horizontal scroll with badges */}
      <div className="hidden md:block">
        <div className="flex flex-wrap justify-center gap-2">
          {areas.map((area) => {
            const Icon = iconMap[area.icon] || defaultIcon
            const isSelected = selectedArea === area.area
            return (
              <Button
                key={area.area}
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => onSelect(area.area)}
                className={cn("flex items-center gap-1.5 text-xs", isSelected && "bg-foreground text-background")}
              >
                <Icon className="h-3.5 w-3.5" />
                {area.area}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function CompararPage() {
  const [candidato1, setCandidato1] = useState<Candidato | null>(null)
  const [candidato2, setCandidato2] = useState<Candidato | null>(null)
  const [selectedArea, setSelectedArea] = useState<AreaName | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const showComparison = candidato1 && candidato2 && selectedArea

  const getAreaPropuestas = (candidato: Candidato, areaName: AreaName) => {
    const areaPropuestas = candidato.propuestas.find((p) => p.area === areaName)
    return areaPropuestas?.propuestas || []
  }

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <MobileNav />

      <div className="px-4 py-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-6 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5">
              <Swords className="h-4 w-4" />
              <span className="text-sm font-medium">Comparar</span>
            </div>
            <h1 className="text-2xl font-bold md:text-3xl">Compara Candidatos</h1>
            <p className="mt-1 text-sm text-muted-foreground">Selecciona dos candidatos y un area</p>
          </div>

          {/* Candidate Selection */}
          <div className="mb-6 grid grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-4">
            <CandidateSelector selected={candidato1} onSelect={setCandidato1} excludeId={candidato2?.id} side="left" />
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
              <span className="text-sm font-bold">VS</span>
            </div>
            <CandidateSelector selected={candidato2} onSelect={setCandidato2} excludeId={candidato1?.id} side="right" />
          </div>

          {/* Area Selection - show when both candidates selected */}
          {candidato1 && candidato2 && (
            <div className="mb-6">
              <AreaSelector selectedArea={selectedArea} onSelect={setSelectedArea} />
            </div>
          )}

          {/* Comparison View */}
          {showComparison && (
            <>
              {/* Desktop: Side by side */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-4">
                {[candidato1, candidato2].map((candidato) => {
                  const propuestas = getAreaPropuestas(candidato, selectedArea)
                  return (
                    <div key={candidato.id}>
                      {/* Candidate header */}
                      <div
                        className="mb-3 rounded-xl p-3 text-center text-white"
                        style={{ backgroundColor: candidato.color }}
                      >
                        <h3 className="font-semibold text-sm">{candidato.nombre}</h3>
                        <p className="text-xs opacity-90">{candidato.partidoSiglas}</p>
                      </div>

                      {/* Propuestas - solo solucion */}
                      <div className="space-y-2">
                        {propuestas.length > 0 ? (
                          propuestas.map((propuesta, idx) => (
                            <Card key={idx} className="overflow-hidden">
                              <CardContent className="p-3 flex items-start gap-2">
                                <Lightbulb className="h-4 w-4 flex-shrink-0 mt-0.5 text-muted-foreground" />
                                <p className="text-sm leading-relaxed">{propuesta.solucion}</p>
                              </CardContent>
                            </Card>
                          ))
                        ) : (
                          <Card>
                            <CardContent className="p-4 text-center text-sm text-muted-foreground">
                              No tiene propuestas en esta area
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Mobile: Intercalado */}
              <div className="md:hidden space-y-3">
                {(() => {
                  const propuestas1 = getAreaPropuestas(candidato1, selectedArea)
                  const propuestas2 = getAreaPropuestas(candidato2, selectedArea)
                  const maxLength = Math.max(propuestas1.length, propuestas2.length)

                  if (maxLength === 0) {
                    return (
                      <Card>
                        <CardContent className="p-4 text-center text-sm text-muted-foreground">
                          Ninguno tiene propuestas en esta area
                        </CardContent>
                      </Card>
                    )
                  }

                  const items = []
                  for (let i = 0; i < maxLength; i++) {
                    // Propuesta candidato 1
                    if (propuestas1[i]) {
                      items.push(
                        <Card
                          key={`c1-${i}`}
                          className="overflow-hidden border-l-4"
                          style={{ borderLeftColor: candidato1.color }}
                        >
                          <CardContent className="p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="relative h-6 w-6 overflow-hidden rounded-full flex-shrink-0">
                                <Image
                                  src={candidato1.foto || "/placeholder.svg"}
                                  alt={candidato1.nombre}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <span className="text-xs font-medium text-muted-foreground">
                                {candidato1.partidoSiglas}
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed">{propuestas1[i].solucion}</p>
                          </CardContent>
                        </Card>,
                      )
                    }
                    // Propuesta candidato 2
                    if (propuestas2[i]) {
                      items.push(
                        <Card
                          key={`c2-${i}`}
                          className="overflow-hidden border-l-4"
                          style={{ borderLeftColor: candidato2.color }}
                        >
                          <CardContent className="p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="relative h-6 w-6 overflow-hidden rounded-full flex-shrink-0">
                                <Image
                                  src={candidato2.foto || "/placeholder.svg"}
                                  alt={candidato2.nombre}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <span className="text-xs font-medium text-muted-foreground">
                                {candidato2.partidoSiglas}
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed">{propuestas2[i].solucion}</p>
                          </CardContent>
                        </Card>,
                      )
                    }
                  }
                  return items
                })()}
              </div>
            </>
          )}

          {/* Empty State - only show when candidates not selected */}
          {(!candidato1 || !candidato2) && (
            <div className="rounded-2xl border border-dashed border-muted-foreground/30 p-6 text-center">
              <Swords className="mx-auto mb-3 h-10 w-10 text-muted-foreground/50" />
              <h3 className="mb-1 font-semibold text-sm">Selecciona dos candidatos</h3>
              <p className="text-xs text-muted-foreground">Compara sus propuestas lado a lado</p>
            </div>
          )}

          {/* Show message to select area when candidates are selected but no area */}
          {candidato1 && candidato2 && !selectedArea && (
            <div className="rounded-2xl border border-dashed border-muted-foreground/30 p-6 text-center">
              <ChevronDown className="mx-auto mb-3 h-10 w-10 text-muted-foreground/50" />
              <h3 className="mb-1 font-semibold text-sm">Selecciona un area</h3>
              <p className="text-xs text-muted-foreground">Elige el area que quieres comparar</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
