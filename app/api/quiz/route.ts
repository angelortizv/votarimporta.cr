import { generateText, Output } from 'ai';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function POST(req: Request) {
  // Calcular afinidad de los candidatos con las respuestas del usuario
  const { output } = await generateText({
  model: "openai/gpt-5.2-chat",
  output: Output.object({
    schema: z.object({
      preguntas: z.array(z.string()),
    }),
  }),
  prompt: 'Generate a lasagna recipe.',
})
  return NextResponse.json(output);
}
