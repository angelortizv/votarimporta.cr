import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { candidatos } from '@/data/candidatos';
import { getSystemMessages } from './prompt';

export async function POST(req: Request) {
  const { messages, candidatoId }: { messages: UIMessage[]; candidatoId: string } = await req.json();
  
  const candidato = candidatos.find((c) => c.id === candidatoId);

  if (!candidato) {
    return new Response('Candidato no encontrado', { status: 404 });
  }

  const systemMessages = getSystemMessages(candidato)
  const userMessages = await convertToModelMessages(messages)

  const result = streamText({
    model: "openai/gpt-5.2-chat",
    messages: [...systemMessages, ...userMessages],
  });

  return result.toUIMessageStreamResponse();
}
