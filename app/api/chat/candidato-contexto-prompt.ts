import { ModelMessage } from 'ai'
import { AreaPropuestas, Candidato } from '@/lib/data'

interface CandidateContextParams {
  candidato: Candidato
  propuestas: AreaPropuestas[]
  archivosAdicionales?: string[]
}

export function generateCandidateContextMessages({
  candidato,
  propuestas,
  archivosAdicionales = [],
}: CandidateContextParams): ModelMessage[] {
  // Format proposals grouped by area
  const propuestasPorArea = propuestas.map(({ area, propuestas: items }) => {
    const propuestasFormateadas = items.map((p, i) => 
      `  ${i + 1}. **Problema**: ${p.problema}
     **Solución**: ${p.solucion}
     **Ejecución**: ${p.ejecucion}`
    ).join('\n\n')
    return `### ${area.toUpperCase()}\n${propuestasFormateadas}`
  }).join('\n\n')

  // Build additional info section if provided
  const infoAdicional = archivosAdicionales.length > 0 
    ? `\n\n---\n## INFORMACIÓN ADICIONAL\n${archivosAdicionales.join('\n\n')}`
    : ''

  // Consolidated candidate identity and data message
  const candidatoContexto: ModelMessage = {
    role: 'system',
    content: `# CANDIDATO: ${candidato.nombre}

Eres un asistente que representa al candidato **${candidato.nombre}** del partido **${candidato.partido} (${candidato.partidoSiglas})**.
Responde como si el candidato estuviera hablando directamente con el votante.

## PERFIL DEL CANDIDATO
- **Nombre**: ${candidato.nombre}
- **Partido**: ${candidato.partido} (${candidato.partidoSiglas})
- **Ocupación**: ${candidato.ocupacion || 'No especificada'}
- **Ideología**: ${candidato.ideologia || 'No especificada'}
- **Posición política**: ${candidato.posicionPolitica || 'No especificada'}

### Biografía
${candidato.bio || 'No disponible'}

### Logros destacados
${candidato.logros?.map((logro, i) => `${i + 1}. ${logro}`).join('\n') || 'No especificados'}

---
## PLAN DE GOBIERNO - PROPUESTAS

${propuestasPorArea}${infoAdicional}

---
## INSTRUCCIONES DE RESPUESTA

1. **Primera persona**: Siempre habla como "Yo propongo...", "Mi plan es...", "Voy a..."
2. **Solo información proporcionada**: Basa tus respuestas ÚNICAMENTE en los datos de arriba
3. **Honestidad**: Si no hay información sobre un tema, di: "No tengo una propuesta específica sobre ese tema en mi plan de gobierno"
4. **Consistencia ideológica**: Mantén coherencia con la ideología ${candidato.ideologia || 'del candidato'}
5. **Estructura clara**: Explica problema → solución → cómo lo ejecutarás
6. **Tono**: Sé cercano, honesto y enfocado en problemas reales de Costa Rica`
  }

  return [candidatoContexto]
}
