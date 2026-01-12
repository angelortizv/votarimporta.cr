"use client"

import type React from "react"

import { useState, useRef, useEffect, useMemo } from "react"
import { useChat } from "@ai-sdk/react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { candidatos } from "@/data/candidatos"
import { Send, Bot, User, ChevronDown, Sparkles, AlertTriangle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import type { Candidato } from "@/lib/data"
import { DefaultChatTransport } from "ai"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const suggestedQuestions = [
  "¿Cuál es su plan para mejorar la educación?",
  "¿Cómo va a combatir la inseguridad?",
  "¿Qué propone para generar empleo?",
  "¿Cuál es su posición sobre el ambiente?",
]

export function ChatContent() {
  const searchParams = useSearchParams()
  const initialCandidatoId = searchParams.get("candidato")

  const [selectedCandidato, setSelectedCandidato] = useState<Candidato | null>(
    initialCandidatoId ? candidatos.find((c) => c.id === initialCandidatoId) || null : null,
  )

  const [input, setInput] = useState("")

  // Unique id per candidate to reset chat when changing candidates
  const chatId = selectedCandidato?.id ?? "default"

  // Recreate transport when candidate changes
  const transport = useMemo(() => {
    if (!selectedCandidato) return undefined
    return new DefaultChatTransport({
      body: { candidatoId: selectedCandidato.id },
    })
  }, [selectedCandidato])

  const { messages, sendMessage, setMessages, status } = useChat({
    id: chatId,
    transport,
  })

  const isLoading = status === "streaming" || status === "submitted"
  const isWaitingForResponse = status === "submitted"

  // Clear messages when candidate changes
  useEffect(() => {
    setMessages([])
  }, [selectedCandidato, setMessages])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || !selectedCandidato || isLoading) return

    sendMessage({
      text: input.trim(),
    })
    setInput("")
  }

  const handleSuggestedQuestion = (question: string) => {
    if (!selectedCandidato || isLoading) return
    setInput(question)
  }

  return (
    <div className="relative flex h-full flex-1 flex-col overflow-hidden px-4 py-6">
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col overflow-y-auto">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">Chat con IA</span>
          </div>
          <h1 className="text-2xl font-bold md:text-3xl">Preguntale al Candidato</h1>
          <p className="mt-2 text-sm text-muted-foreground">Hacé preguntas basadas en su plan de gobierno</p>
        </div>

        {/* Candidate Selector */}
        <div className="mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex w-full items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted">
                {selectedCandidato ? (
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={selectedCandidato.foto || "/placeholder.svg"}
                        alt={selectedCandidato.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">{selectedCandidato.nombre}</p>
                      <Badge style={{ backgroundColor: selectedCandidato.color }} className="text-white">
                        {selectedCandidato.partidoSiglas}
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <span className="text-muted-foreground">Seleccionar candidato</span>
                )}
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[calc(100vw-2rem)] max-w-2xl">
              {candidatos.map((c) => (
                <DropdownMenuItem
                  key={c.id}
                  onClick={() => {
                    setSelectedCandidato(c)
                  }}
                  className="flex items-center gap-3 p-3"
                >
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image src={c.foto || "/placeholder.svg"} alt={c.nombre} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">{c.nombre}</p>
                    <p className="text-xs text-muted-foreground">{c.partido}</p>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Messages */}
        <div className="mb-4 flex-1 space-y-4 pb-44">
          {messages.length === 0 && selectedCandidato && (
            <div className="space-y-4">
              <p className="text-center text-sm text-muted-foreground">
                Preguntale a {selectedCandidato.nombre} sobre sus propuestas
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {suggestedQuestions.map((q, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestedQuestion(q)}
                    className="text-xs"
                  >
                    {q}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={cn("flex gap-3", message.role === "user" ? "justify-end" : "justify-start")}
            >
              {message.role === "assistant" && (
                <div
                  className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2"
                  style={{ borderColor: selectedCandidato?.color, boxShadow: `0 0 0 2px ${selectedCandidato?.color}` }}
                >
                  <Image
                    src={selectedCandidato?.foto || "/placeholder.svg"}
                    alt={selectedCandidato?.nombre || "Asistente"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <Card
                className={cn(
                  "max-w-[80%]",
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-card",
                )}
              >
                <CardContent className="p-3">
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case "text":
                        return (
                          <div
                            key={`${message.id}-${i}`}
                            className={cn(
                              "prose prose-sm max-w-none dark:prose-invert",
                              "prose-p:my-2 prose-p:leading-relaxed",
                              "prose-strong:font-bold prose-strong:text-foreground",
                              "prose-ul:my-2 prose-ul:pl-4 prose-li:my-1",
                              "prose-headings:font-semibold prose-headings:text-foreground",
                              message.role === "user" &&
                                "prose-p:text-primary-foreground prose-strong:text-primary-foreground",
                            )}
                          >
                            <ReactMarkdown>{part.text}</ReactMarkdown>
                          </div>
                        )
                      default:
                        return null
                    }
                  })}
                </CardContent>
              </Card>
              {message.role === "user" && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}

          {isWaitingForResponse && (
            <div className="flex gap-3">
              <div
                className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2"
                style={{ borderColor: selectedCandidato?.color, boxShadow: `0 0 0 2px ${selectedCandidato?.color}` }}
              >
                <Image
                  src={selectedCandidato?.foto || "/placeholder.svg"}
                  alt={selectedCandidato?.nombre || "Asistente"}
                  fill
                  className="object-cover"
                />
              </div>
              <Card className="bg-card">
                <CardContent className="p-3">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:0.1s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:0.2s]" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        {selectedCandidato && (
          <form onSubmit={handleSubmit} className="sticky bottom-0 z-10 bg-background pb-20 pt-4 md:bottom-0 md:pb-4">
            <div className="flex gap-2 rounded-xl bg-background p-2 shadow-lg ring-1 ring-border">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribí tu pregunta..."
                className="flex-1 border-0 bg-transparent focus-visible:ring-0"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-3 flex items-start gap-2 text-center text-xs text-muted-foreground">
              <AlertTriangle className="h-3 w-3 shrink-0 mt-0.5" />
              <p>
                Respuestas generadas con IA basadas en el plan de gobierno. Puede cometer errores.{" "}
                <a href="/transparencia" className="underline hover:text-foreground">
                  Más información
                </a>
              </p>
            </div>
          </form>
        )}

        {!selectedCandidato && (
          <div className="rounded-2xl border border-dashed border-muted-foreground/30 p-8 text-center">
            <Bot className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
            <h3 className="mb-2 font-semibold">Seleccioná un candidato</h3>
            <p className="text-sm text-muted-foreground">Elegí el candidato al que querés hacerle preguntas</p>
          </div>
        )}
      </div>
    </div>
  )
}
