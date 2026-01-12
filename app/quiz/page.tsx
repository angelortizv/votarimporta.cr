"use client"

import { useState, useEffect } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { candidatos } from "@/data/candidatos"
import type { Candidato } from "@/lib/data"
import { ArrowLeft, ArrowRight, RefreshCw, Check, Compass, ShieldCheck, Brain, Play, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Question {
  id: string
  question: string
  type: "single" | "multiple"
  options: {
    label: string
    value: string
    weight: Record<string, number>
  }[]
}

const questions: Question[] = [
  {
    id: "preocupacion",
    question: "¿Qué es lo que más te preocupa de Costa Rica?",
    type: "single",
    options: [
      {
        label: "El desempleo y la falta de oportunidades",
        value: "economia",
        weight: { "candidato-1": 3, "candidato-2": 3, "candidato-3": 1, "candidato-4": 2 },
      },
      {
        label: "La inseguridad y el crimen",
        value: "seguridad",
        weight: { "candidato-1": 2, "candidato-2": 2, "candidato-3": 1, "candidato-4": 3 },
      },
      {
        label: "La calidad de la educación",
        value: "educacion",
        weight: { "candidato-1": 3, "candidato-2": 2, "candidato-3": 2, "candidato-4": 1 },
      },
      {
        label: "El cambio climático y el ambiente",
        value: "ambiente",
        weight: { "candidato-1": 2, "candidato-2": 1, "candidato-3": 3, "candidato-4": 1 },
      },
    ],
  },
  {
    id: "rol-estado",
    question: "¿Cuál debería ser el rol del Estado en la economía?",
    type: "single",
    options: [
      {
        label: "Debe intervenir más para reducir la desigualdad",
        value: "intervencion",
        weight: { "candidato-1": 3, "candidato-2": 0, "candidato-3": 3, "candidato-4": 0 },
      },
      {
        label: "Debe reducirse para que el mercado funcione mejor",
        value: "libre-mercado",
        weight: { "candidato-1": 0, "candidato-2": 3, "candidato-3": 0, "candidato-4": 3 },
      },
      {
        label: "Un balance entre intervención y libertad económica",
        value: "balance",
        weight: { "candidato-1": 2, "candidato-2": 2, "candidato-3": 1, "candidato-4": 1 },
      },
    ],
  },
  {
    id: "seguridad-enfoque",
    question: "¿Cómo se debería combatir la delincuencia?",
    type: "single",
    options: [
      {
        label: "Mano dura: más policía y penas más severas",
        value: "mano-dura",
        weight: { "candidato-1": 1, "candidato-2": 2, "candidato-3": 0, "candidato-4": 3 },
      },
      {
        label: "Prevención: atacar las causas sociales del crimen",
        value: "prevencion",
        weight: { "candidato-1": 2, "candidato-2": 1, "candidato-3": 3, "candidato-4": 0 },
      },
      {
        label: "Combinación de ambas estrategias",
        value: "combinacion",
        weight: { "candidato-1": 3, "candidato-2": 2, "candidato-3": 2, "candidato-4": 2 },
      },
    ],
  },
  {
    id: "ambiente-desarrollo",
    question: "¿Cómo equilibrar el desarrollo económico con el ambiente?",
    type: "single",
    options: [
      {
        label: "El ambiente debe ser la prioridad, aunque afecte el crecimiento",
        value: "ambiente-primero",
        weight: { "candidato-1": 1, "candidato-2": 0, "candidato-3": 3, "candidato-4": 0 },
      },
      {
        label: "El desarrollo económico es más urgente que el ambiente",
        value: "desarrollo-primero",
        weight: { "candidato-1": 0, "candidato-2": 2, "candidato-3": 0, "candidato-4": 3 },
      },
      {
        label: "Se puede crecer económicamente de forma sostenible",
        value: "equilibrio",
        weight: { "candidato-1": 3, "candidato-2": 2, "candidato-3": 2, "candidato-4": 1 },
      },
    ],
  },
  {
    id: "educacion-enfoque",
    question: "¿Qué es más importante en educación?",
    type: "single",
    options: [
      {
        label: "Formar para el mercado laboral y la tecnología",
        value: "tecnica",
        weight: { "candidato-1": 2, "candidato-2": 3, "candidato-3": 1, "candidato-4": 1 },
      },
      {
        label: "Formación integral con valores y pensamiento crítico",
        value: "integral",
        weight: { "candidato-1": 2, "candidato-2": 1, "candidato-3": 2, "candidato-4": 3 },
      },
      {
        label: "Educación ambiental y sostenibilidad",
        value: "ambiental",
        weight: { "candidato-1": 1, "candidato-2": 0, "candidato-3": 3, "candidato-4": 0 },
      },
    ],
  },
  {
    id: "posicion",
    question: "¿Con qué posición política te identificás más?",
    type: "single",
    options: [
      {
        label: "Izquierda progresista",
        value: "izquierda",
        weight: { "candidato-1": 2, "candidato-2": 0, "candidato-3": 3, "candidato-4": 0 },
      },
      {
        label: "Centro-izquierda",
        value: "centro-izquierda",
        weight: { "candidato-1": 3, "candidato-2": 1, "candidato-3": 2, "candidato-4": 0 },
      },
      {
        label: "Centro-derecha",
        value: "centro-derecha",
        weight: { "candidato-1": 1, "candidato-2": 3, "candidato-3": 0, "candidato-4": 2 },
      },
      {
        label: "Derecha conservadora",
        value: "derecha",
        weight: { "candidato-1": 0, "candidato-2": 2, "candidato-3": 0, "candidato-4": 3 },
      },
      {
        label: "No me identifico con ninguna",
        value: "ninguna",
        weight: { "candidato-1": 1, "candidato-2": 1, "candidato-3": 1, "candidato-4": 1 },
      },
    ],
  },
]

interface CandidateResult {
  candidato: Candidato
  score: number
  percentage: number
}

function calculateResults(answers: Record<string, string>): CandidateResult[] {
  const scores: Record<string, number> = {}

  candidatos.forEach((c) => {
    scores[c.id] = 0
  })

  Object.entries(answers).forEach(([questionId, answerValue]) => {
    const question = questions.find((q) => q.id === questionId)
    if (!question) return

    const option = question.options.find((o) => o.value === answerValue)
    if (!option) return

    Object.entries(option.weight).forEach(([candidatoId, weight]) => {
      scores[candidatoId] = (scores[candidatoId] || 0) + weight
    })
  })

  const maxPossibleScore = questions.length * 3

  const results: CandidateResult[] = candidatos.map((c) => ({
    candidato: c,
    score: scores[c.id] || 0,
    percentage: Math.round(((scores[c.id] || 0) / maxPossibleScore) * 100),
  }))

  return results.sort((a, b) => b.score - a.score)
}

export default function QuizPage() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const principios = [
    {
      icon: Compass,
      titulo: "Es una guía",
      descripcion: "Este cuestionario es orientativo, no una imposición de por quién votar.",
    },
    {
      icon: ShieldCheck,
      titulo: "100% Anónimo",
      descripcion: "Tus respuestas no se almacenan en ninguna base de datos. Son completamente privadas.",
    },
    {
      icon: Brain,
      titulo: "La lógica",
      descripcion: "Comparamos tus respuestas con las propuestas de los planes de gobierno para calcular afinidad.",
    },
  ]

  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
        <MobileNav />

        <div className="mx-auto max-w-2xl px-4 py-12 md:py-20">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="mb-3 text-3xl font-bold md:text-4xl">¿No sabés por quién votar?</h1>
            <p className="text-lg text-muted-foreground">
              Te ayudamos a descubrir qué candidatos se alinean más con tus ideas
            </p>
          </div>

          {/* Cards */}
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            {principios.map((principio) => (
              <Card key={principio.titulo} className="border-border bg-muted/30">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-foreground">
                    <principio.icon className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{principio.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{principio.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              disabled
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg opacity-50 cursor-not-allowed"
            >
              <Play className="mr-2 h-5 w-5" />
              Iniciar cuestionario
            </Button>
            <p className="mt-3 text-sm font-medium text-muted-foreground">Disponible próximamente</p>
          </div>

          {/* Section with links to other quizzes */}
          <div className="mt-10 rounded-xl border border-border bg-muted/20 p-6">
            <h3 className="mb-4 text-center font-semibold">Mientras tanto, podés hacer estos quices:</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.nacion.com/gnfactory/elecciones-2026/candidatos-presidente-costa-rica.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-border bg-background p-4 transition-colors hover:bg-muted/50"
              >
                <span className="font-medium">La Nación - Candidatos a la Presidencia 2026</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://votico.app/Ai/PlanChat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-border bg-background p-4 transition-colors hover:bg-muted/50"
              >
                <span className="font-medium">VoTico - Chateá con candidatos con IA</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://votometro.votemoscr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-border bg-background p-4 transition-colors hover:bg-muted/50"
              >
                <span className="font-medium">Votómetro 2026 - VotemosCR</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://www.nacion.com/politica/elecciones-2026-este-quiz-gratuito-revela-que/GL75RZZWERHVHNH6MMGEUCVNPM/story/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-border bg-background p-4 transition-colors hover:bg-muted/50"
              >
                <span className="font-medium">La Nación - Quiz de Candidatos Presidenciales</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Recuerda: la decisión final es tuya. Este cuestionario es solo una herramienta para ayudarte a explorar
            opciones.
          </p>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100
  const canGoNext = answers[question?.id] !== undefined
  const isLastQuestion = currentQuestion === questions.length - 1

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }))
  }

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true)
    } else {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentQuestion === 0) {
      setShowOnboarding(true)
    } else {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setShowOnboarding(true)
  }

  const results = showResults ? calculateResults(answers) : []

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <MobileNav />

      <div className="mx-auto max-w-2xl px-4 py-6 md:py-12">
        {!showResults ? (
          <>
            {/* Progress */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="font-medium">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-6 text-xl font-semibold md:text-2xl">{question.question}</h2>

                <div className="space-y-3">
                  {question.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full rounded-xl border-2 p-4 text-left transition-all ${
                        answers[question.id] === option.value
                          ? "border-foreground bg-foreground/5"
                          : "border-border hover:border-foreground/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                            answers[question.id] === option.value
                              ? "border-foreground bg-foreground"
                              : "border-muted-foreground"
                          }`}
                        >
                          {answers[question.id] === option.value && <Check className="h-4 w-4 text-background" />}
                        </div>
                        <span className="font-medium">{option.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="mt-6 flex gap-3">
              <Button variant="outline" onClick={handleBack} className="flex-1 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {currentQuestion === 0 ? "Volver" : "Anterior"}
              </Button>
              <Button onClick={handleNext} disabled={!canGoNext} className="flex-1">
                {isLastQuestion ? "Ver resultados" : "Siguiente"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Results */}
            <div className="mb-6 text-center">
              <h1 className="mb-2 text-2xl font-bold md:text-3xl">Tus resultados</h1>
              <p className="text-muted-foreground">
                Basado en tus respuestas, estos candidatos son más afines a tus ideas
              </p>
            </div>

            <div className="space-y-4">
              {results.slice(0, 3).map((result, index) => (
                <Link key={result.candidato.id} href={`/candidatos/${result.candidato.id}`}>
                  <Card
                    className={`overflow-hidden transition-all hover:shadow-lg ${index === 0 ? "ring-2 ring-foreground" : ""}`}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 p-4">
                        <div className="relative">
                          <div className="relative h-16 w-16 overflow-hidden rounded-full">
                            <Image
                              src={result.candidato.foto || "/placeholder.svg"}
                              alt={result.candidato.nombre}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {index === 0 && (
                            <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                              1
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{result.candidato.nombre}</h3>
                            <span
                              className="rounded-full px-2 py-0.5 text-xs font-medium text-white"
                              style={{ backgroundColor: result.candidato.color }}
                            >
                              {result.candidato.partidoSiglas}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{result.candidato.posicionPolitica}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold">{result.percentage}%</span>
                          <p className="text-xs text-muted-foreground">afinidad</p>
                        </div>
                      </div>
                      {/* Party color bar */}
                      <div
                        className="h-1"
                        style={{
                          background: `linear-gradient(to right, ${result.candidato.color} ${result.percentage}%, transparent ${result.percentage}%)`,
                        }}
                      />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Other candidates */}
            {results.length > 3 && (
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-medium text-muted-foreground">Otros candidatos</h3>
                <div className="space-y-2">
                  {results.slice(3).map((result) => (
                    <Link key={result.candidato.id} href={`/candidatos/${result.candidato.id}`}>
                      <div className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/50">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={result.candidato.foto || "/placeholder.svg"}
                            alt={result.candidato.nombre}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="font-medium">{result.candidato.nombre}</span>
                          <span
                            className="ml-2 rounded-full px-2 py-0.5 text-xs font-medium text-white"
                            style={{ backgroundColor: result.candidato.color }}
                          >
                            {result.candidato.partidoSiglas}
                          </span>
                        </div>
                        <span className="font-semibold">{result.percentage}%</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <Button variant="outline" onClick={handleRestart} className="flex-1 bg-transparent">
                <RefreshCw className="mr-2 h-4 w-4" />
                Volver a empezar
              </Button>
              <Button asChild className="flex-1">
                <Link href="/comparar">Comparar candidatos</Link>
              </Button>
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              Este quiz es una guía orientativa. Te recomendamos revisar las propuestas completas de cada candidato
              antes de votar.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
