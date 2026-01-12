# Extraer información del plan de gobierno

### Contexto

En Febrero de 2026 son las elecciones presidenciales de Costa Rica para el gobierno de 2026-2030. Uno de los principales problemas en Costa Rica con respecto a las elecciones es el **abstencionismo**, principalmente en jóvenes de entre 18 y 38 años de edad. Así que el objetivo es crear una página web minimalista, fácil de usar e intuitiva donde recopile toda la información de los candidatos para así tomar una decisión informada.

### Problema

El abstencionismo, principalmente en jóvenes. En un mundo donde la atención es limitada, este grupo de personas no se va a tomar el tiempo de leer todos los planes de gobierno de todos los partidos, sus debates o entrevistas, lo cuál genera una gran polarización, los que saben y los que no. El principal problema es que las personas no se toman el tiempo de conocer a sus candidatos, sus propuestas ni su plan de gobierno.

### Objetivo

Tu objetivo es analizar detalladamente la información brindada y exponerla en un formato JSON.

### Paso a paso a realizar

Vas a analizar detalladamente el plan de gobierno y su CV (en caso de que se adjunte) u otra información relevante del candidato un total de 3 veces:

1. El primer análisis va a ser de exploración, úsalo como un contexto.
2. Vas a ir página por página del plan de gobierno y llenando la información de tres propiedades específicas. El candidato, el área temática, visión país. A continuación te detallo cada área temática.

   1. Educación: Incluye escuelas, colegios, universidades, programas de ayuda a estudiantes, becas, asistencias, STEAM, bilingüismo, educación dual, educación especial, virtualidad.
   2. Tecnología: innovación tecnológica, transformación digital, Inteligencia artificial, hardware y software, ciberseguridad.
   3. Deporte y cultura: Patrimonio Arquitectónico, arqueológico, actividades musicales, teatrales, gastronómicas, cinematográficas, visuales. ICODER, becas deportivas, espacios recreativos, financiamiento para actividades, juegos nacionales, juegos universitarios.
   4. Pensiones: pensiones de lujo, reformas en las pensiones, pensiones mínimas universales.
   5. Agricultura: financiamiento de agricultura, agro 4.0, seguridad alimentaria, aranceles, agricultura de precisión, cultivos sensibles, competitividad del sector agrio.
   6. Telecomunicaciones: ICE, apertura comercial, nuevas o eliminación de competencias.
   7. Turismo: atracción de turismo nacional e internacional.
   8. Economía: PYMEs, política monetaria, política fiscal, inversión extranjera directa, fuentes de empleo, producción nacional, comercio exterior, acceso a créditos, fomento a la competitividad, tipo de cambio.
   9. Seguridad: tasa de homicidios, seguridad social, equipamiento para policía, aduanas, policía migratoria, control de drogas, sistema penitenciario, transparencia política, corrupción.
   10. Ambiente: cambio climático, fuentes de energía renovable, biodiversidad, aguas residuales, parques nacionales, educación ambiental.
   11. Vivienda: créditos a vivienda, bonos, impuestos municipales, centrilficación, precarios.
   12. Infraestructura: transporte público, desarrollo vial, mejora de puentes, ferroviaria, movilidad urbana.
   13. Salud: EBAIS, Caja Costarricense de Seguro Social (CCSS), salud mental, reducción de listas de espera, infraestructura hospitalaria, fármacos.

   <aside>

   IMPORTANTE: Dentro de cada plan de gobierno puede que no vengan estas áreas o categorías explícitamente. Su labor adicional es identificar cuáles propuestas pueden encajar en dicha categoría.

   </aside>

   <aside>

   IMPORTANTE: Puede que no haya ninguna propuesta clara para una área o categoría específica. Por ende esa categoría puede quedar sin propuestas.

   </aside>

   Su instrucción en este paso sería: Analizar la propuesta → categorizarla en alguna área → extraerla.

   Por cada propuesta extraiga el `problema` (qué), la `solución` (cómo) y `paso a paso para elaborarlo` (de qué manera). **Esta información extraída debe ser lo suficientemente robusta para completar el argumento pero lo suficientemente simple para que cualquiera pueda entenderlo**. Recuerda la frase “Nadie nunca se quejó que la explicación fuera simple o corta.”

3. En el tercer análisis de los documentos lo que vas a hacer es leer y comparar. Analizar las propuestas dentro de la categoría y vas a realizar este checklist.
   - [ ] La propuesta contiene necesariamente el problema y la solución. Puede que no haya un paso a paso para elaborarlo de manera clara, así que esta propiedad sería opcional.
   - [ ] La propuesta está en la categoría o área correcta.
   - [ ] Verificar que las opciones sean claras, concisas y exhaustivas. Recuerda **Esta información extraída debe ser lo suficientemente robusta para completar el argumento pero lo suficientemente simple para que cualquiera pueda entenderlo.**

### Formato de salida

Sería un formato JSON que tenga la siguiente estructura

\`\`\`json
{
  "partido_politico": {
    "nombre": "",
    "siglas": "",
    "ideologia": "",
    "posicion_politica": "",
    "bandera": "",
    "colores": ["", ""]
  },
  "candidato": {
    "nombre": "",
    "edad": "",
    "ocupacion": "",
    "biografia": ""
  },
  "propuestas": {
    "educacion": [
      {
        "problema": "",
        "solucion": "",
        "ejecucion": ""
      }
    ],
    "tecnologia": [
      {
        "problema": "",
        "solucion": "",
        "ejecucion": ""
      }
    ],
    "deporte_cultura": [
      {
        "problema": "",
        "solucion": "",
        "ejecucion": ""
      }
    ],
    "pensiones": [
      {
        "problema": "",
        "solucion": "",
        "ejecucion": ""
      }
    ],
    "agricultura": [
      {
        "problema": "",
        "solucion": "",
        "ejecucion": ""
      }
    ],
    "telecomunicaciones": [
      {
        "problema": "",
        "solucion": "",
        "ejecucion": ""
      }
    ],
    "turismo": [
      {
        "problema": "",
        "solucion": "",
        "ejecucion": ""
      }
    ],
    "economia": [
      {
        "problema": "",
        "solucion": "",
        "ejecucion": ""
      }
    ],
    "seguridad": [
      {
        "problema": "",
        "solucion": "",
        "ejecucion": ""
      }
    ],
    "ambiente": [
      {
        "problema": "",
        "solucion": "",
        "ejecucion": ""
      }
    ],
    "infraestructura": [
      {
        "problema": "",
        "solucion": "",
        "ejecucion": ""
      }
    ],
    "vivienda": [
      {
        "problema": "",
        "solucion": "",
        "ejecucion": ""
      }
    ],
    "salud": [
      {
        "problema": "",
        "solucion": "",
        "ejecucion": ""
      }
    ]
  }
}
\`\`\`

<aside>

IMPORTANTE: Para las propiedades de `partido_politico` y `candidato` puede que no venga toda la información dentro del plan de gobierno, así que toma información de los documentos adicionales o déjalo en blanco. La que es primordial que llenes con toda la estructura son las propuestas.

</aside>

## Estructura del prompt

1. Vas a leer e interiorizar detalladamente el prompt
2. En el siguiente mensaje te envío el plan de gobierno del partido político y su información adicional.
