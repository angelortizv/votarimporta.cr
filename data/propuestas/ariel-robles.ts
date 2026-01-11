import { AreaName, AreaPropuestas, Propuesta } from "@/lib/data";

export const arielRoblesPropuestas: AreaPropuestas[] = [
  {
    area: AreaName.Educacion,
    propuestas: [
      {
        problema: "Estudiantes en secundaria (y modalidades técnica/diversificada) en pobreza o vulnerabilidad no acceden de forma universal a alimentación escolar, lo que afecta permanencia y bienestar.",
        solucion: "Universalizar el servicio de comedores escolares (PANEA) para esa población, elevándolo como programa esencial del sistema educativo público.",
        ejecucion: "Reformar leyes para: (1) establecer comedores como programa integral del sistema educativo; (2) ajustar el uso del fondo asignado a comedores para priorizar alimentación; (3) redefinir roles/gestión vinculados a juntas educativas y normativa relacionada, de forma que el financiamiento y operación sean sostenibles."
      },
      {
        problema: "La pobreza y vulnerabilidad presionan la deserción y limitan el acceso efectivo a la educación pública.",
        solucion: "Transferencias monetarias directas y apoyos escalonados a estudiantes en pobreza/pobreza extrema/vulnerabilidad dentro del sistema educativo público.",
        ejecucion: "Fortalecer financiamiento y mejorar coordinación entre IMAS, MEP, PANI y otras instancias vinculadas para implementar apoyos sin distingo de territorio, edad o condición."
      },
      {
        problema: "Brechas de alfabetización digital y falta de reglas claras sobre el uso de teléfonos inteligentes e IA en entornos educativos.",
        solucion: "Impulsar una política pública y legislación especializada para el uso de teléfonos inteligentes e IA en el sistema educativo; además promover alfabetización digital crítica a nivel nacional.",
        ejecucion: "Definir lineamientos, responsabilidades y salvaguardas; ejecutar campañas/programas de alfabetización digital crítica para reducir brechas y fortalecer capacidades de ciudadanía digital."
      }
    ]
  },
  {
    area: AreaName.Tecnologia,
    propuestas: [
      {
        problema: "Costa Rica necesita capacidades nacionales articuladas para investigar, desarrollar y usar IA de forma responsable y beneficiosa.",
        solucion: "Desarrollar y financiar el Laboratorio Nacional de Inteligencia Artificial (LANIA) en CeNAT y fomentar un ecosistema público-privado de IA con universidades.",
        ejecucion: "Asignar contenido presupuestario; articular alianzas con universidades y actores público-privados; promover investigación/desarrollo y adopción con enfoque de bien público."
      },
      {
        problema: "Riesgo de uso no ético o poco transparente de IA, especialmente en áreas sensibles (seguridad, salud, educación, etc.).",
        solucion: "Crear política pública para uso ético y responsable de IA en la administración pública y fortalecer transparencia algorítmica.",
        ejecucion: "Fortalecer legislación en áreas clave, formar capacidades en el funcionariado y exigir transparencia, especialmente donde hay decisiones automatizadas sensibles."
      },
      {
        problema: "Sistemas digitales públicos pueden fallar o excluir (accesibilidad/interoperabilidad), afectando continuidad de servicios y confianza ciudadana.",
        solucion: "Exigir aseguramiento de calidad, pruebas exhaustivas, auditorías independientes y estándares de accesibilidad e interoperabilidad para sistemas digitales públicos.",
        ejecucion: "Reformar marcos de gobierno digital para incluir métricas obligatorias de calidad de software y auditorías previas; auditar cumplimiento con ANGD y Contraloría."
      },
      {
        problema: "Digitalización estatal fragmentada y con riesgos de intercambio inseguro de datos.",
        solucion: "Desarrollar una plataforma digital basada en blockchain para digitalización completa de servicios del Estado y el intercambio seguro de datos.",
        ejecucion: "Diseñar e implementar la plataforma con estándares de seguridad y gobernanza de datos, habilitando interoperabilidad y resguardo seguro entre sistemas públicos y privados."
      }
    ]
  },
  {
    area: AreaName.DeporteYCultura,
    propuestas: [
      {
        problema: "Gobernanza deportiva con baja participación directa de atletas y debilidades en enfoque de género, discapacidad y territorios prioritarios.",
        solucion: "Reformar la Ley 7800 (ICODER) para incluir representación electa de deportistas, fortalecer rectoría y exigir planes/metas de inclusión en convenios.",
        ejecucion: "Ajustar la ley para: (a) representación de atletas; (b) formalizar estructuras técnicas; (c) exigir metas y participación de atletas activas en órganos de gobierno."
      },
      {
        problema: "Violencias en el deporte (acoso/hostigamiento y otras) sin sanciones administrativas suficientemente claras ni aplicación uniforme de protocolos.",
        solucion: "Reformar la Ley 9967 para tipificar sanciones administrativas claras por incumplimiento y ampliar cobertura a otras violencias (psicológica, física, negligencia).",
        ejecucion: "Actualizar normativa y establecer sanciones/protocolos obligatorios con medidas cautelares, alineadas a recomendaciones institucionales."
      },
      {
        problema: "Infraestructura deportiva comunitaria desigual y financiamiento local con riesgo de uso ineficiente.",
        solucion: "Fortalecer CCDR en el Código Municipal y asegurar el 3% mínimo de ingresos municipales con reglas de gasto y planes estratégicos.",
        ejecucion: "Reformar artículos correspondientes; fijar límites administrativos (p. ej. tope) y obligación de planes alineados a política deportiva nacional."
      },
      {
        problema: "Acceso limitado de la población a eventos deportivos de interés nacional y financiamiento frágil para alto rendimiento e infraestructura.",
        solucion: "Crear ley de acceso universal a eventos deportivos por radiodifusión abierta y rediseñar financiamiento sostenible (sin depender de publicidad prohibida).",
        ejecucion: "Establecer obligación de acceso abierto; proponer impuesto selectivo específico a bebidas alcohólicas con destino etiquetado para becas, infraestructura, mantenimiento y deporte seguro; incentivar contratación de atletas de élite mediante créditos fiscales condicionados."
      }
    ]
  },
  {
    area: AreaName.Pensiones,
    propuestas: [
      {
        problema: "Personas adultas mayores en pobreza/vulnerabilidad sin ingreso suficiente garantizado.",
        solucion: "Pensión universal para población mayor de 65 años en condición de pobreza y vulnerabilidad.",
        ejecucion: "Definir criterios de elegibilidad centrados en vulnerabilidad y asegurar asignación presupuestaria sostenida para cobertura efectiva."
      },
      {
        problema: "Mujeres que realizaron trabajo de cuido no remunerado quedan con alta vulnerabilidad económica antes de los 65 años.",
        solucion: "Pensión universal para mujeres entre 60 y 64 años que se hayan dedicado al cuido, como reconocimiento y protección de bienestar.",
        ejecucion: "Establecer mecanismo de reconocimiento/validación del trabajo de cuido y ejecutar la transferencia como antesala a la pensión de 65+."
      },
      {
        problema: "Personas con discapacidad (incluyendo niñez y juventud) enfrentan barreras estructurales y mayor riesgo de pobreza, especialmente en territorios indígenas.",
        solucion: "Pensión para niñas, niños y jóvenes hasta 35 años con discapacidad permanente; y para personas con discapacidad (0–64) en comunidades indígenas.",
        ejecucion: "Definir rutas de verificación de discapacidad y coordinación territorial para asegurar acceso efectivo en comunidades indígenas."
      }
    ]
  },
  {
    area: AreaName.Telecomunicaciones,
    propuestas: [
      {
        problema: "Brechas de conectividad y desigualdad territorial en infraestructura de redes de comunicación.",
        solucion: "Regionalizar la infraestructura de redes de comunicación del país y universalizar su acceso como derecho humano.",
        ejecucion: "Diseñar una estrategia de despliegue territorial con metas de universalización y priorización de zonas con mayor brecha."
      }
    ]
  },
  {
    area: AreaName.Economia,
    propuestas: [
      {
        problema: "Baja transferencia del valor de ciencia/tecnología hacia competitividad real de MIPYMES e iniciativas de economía social solidaria.",
        solucion: "Dotar a instituciones de financiamiento de ciencia y tecnología de mecanismos/recursos para que los beneficios lleguen más rápido a quienes lo necesitan, con énfasis en MIPYMES nacionales y economía social solidaria.",
        ejecucion: "Fortalecer instrumentos de financiamiento y mecanismos de ejecución que prioricen adopción práctica, impacto y acceso equitativo a fondos."
      }
    ]
  },
  {
    area: AreaName.Seguridad,
    propuestas: [
      {
        problema: "Barrios con altos niveles de violencia requieren intervención coordinada y sostenida.",
        solucion: "Promulgar una política pública para la paz como prioridad de los primeros 100 días, combinando intervención social y policial para pacificación territorial.",
        ejecucion: "Definir territorios prioritarios; articular intervención social + acción policial; establecer indicadores de seguimiento y rendición de cuentas."
      },
      {
        problema: "Cuerpos policiales con necesidades de profesionalización, condiciones laborales y confianza ciudadana.",
        solucion: "Profesionalizar policías administrativas (con CONARE/UNED), mejorar salarios/derechos laborales, y crear sistemas de evaluación, transparencia y rendición de cuentas.",
        ejecucion: "Revisar requisitos de ingreso y mallas de formación; incorporar ejes de DDHH y perspectiva de género; implementar evaluación de desempeño por unidades; fortalecer vínculo policía-comunidad."
      },
      {
        problema: "Fronteras vulnerables a narcotráfico, trata y otros delitos, con riesgos de abusos y criminalización indebida.",
        solucion: "Fortalecer puntos fronterizos para seguimiento delictivo con enfoque de derechos humanos y no criminalización de personas migrantes.",
        ejecucion: "Invertir en capacidades operativas y coordinación interinstitucional; definir protocolos con enfoque civilista y de DDHH."
      }
    ]
  },
  {
    area: AreaName.Ambiente,
    propuestas: [
      {
        problema: "Maltrato/abandono animal y débil articulación local para protección animal; limitaciones operativas para proteger vida silvestre.",
        solucion: "Fortalecer educación pública en bienestar/protección animal, articular gobiernos locales y organizaciones, mapear animales en calle, y mejorar capacidades del SINAC (guardaparques) con equipo tecnológico y mejores condiciones.",
        ejecucion: "Capacitar y acompañar al MEP para integrar contenidos; alianzas con organizaciones animalistas para actividades prácticas; coordinación con gobiernos locales y SENASA; mapeo cantonal; inversión y mejoras laborales para guardaparques."
      },
      {
        problema: "Participación comunitaria insuficiente y procesos poco accesibles en decisiones ambientales/territoriales (EIA, planes reguladores).",
        solucion: "Reformular audiencias públicas y mecanismos para garantizar acceso oportuno a información y participación efectiva (incluida asesoría jurídica), y promover consejos de cuenca con poder de decisión.",
        ejecucion: "Actualizar procedimientos de SETENA y ordenamiento territorial; instalar consejos de cuenca participativos; definir reglas para priorización del uso del agua y planes territoriales evitando gentrificación."
      }
    ]
  },
  {
    area: AreaName.Infraestructura,
    propuestas: [
      {
        problema: "Transporte público poco integrado y movilidad urbana insegura/ineficiente, con ciudades desconectadas y baja infraestructura para movilidad activa.",
        solucion: "Invertir en un sistema de transporte público intermodal, seguro y accesible; impulsar 'calles completas'; crear Red Nacional de Ciclovías; promover Desarrollo Urbano Orientado al Transporte (DUOT).",
        ejecucion: "Planificar intermodalidad por corredores; vincular usos de suelo y transporte; ejecutar red de ciclovías; aplicar diseño vial seguro para peatones/ciclistas/transporte público."
      },
      {
        problema: "Financiamiento municipal insuficiente o poco redistributivo para obra pública y mejora urbana.",
        solucion: "Implementar mecanismos de economía urbana (p. ej. captura de plusvalías) para financiar obra pública y redistribuir renta urbana con justicia espacial.",
        ejecucion: "Incorporar instrumentos en planes reguladores; capacitar desde INVU a gobiernos locales para diseño e implementación de estos mecanismos."
      }
    ]
  },
  {
    area: AreaName.Vivienda,
    propuestas: [
      {
        problema: "Gestión institucional fragmentada y lenta para garantizar vivienda adecuada como derecho humano, con brechas territoriales y de movilidad barrial.",
        solucion: "Crear un Ministerio de Vivienda y Ordenamiento Territorial (fusión INVU + MIVAH) y una Secretaría de Vivienda y Mejoramiento Barrial con presencia regional.",
        ejecucion: "Fusionar instituciones sin vacíos legales; instalar secretarías con sedes regionales; crear ventanillas únicas para seguimiento (incluido arrendamiento) y articulación interinstitucional."
      },
      {
        problema: "Dificultad para habilitar suelo y soluciones habitacionales oportunas, y debilidad en la gestión comunitaria de mejoras barriales.",
        solucion: "Crear bancos de tierras regionales y promover Juntas de Mejoramiento Barrial desde comunidades.",
        ejecucion: "Inventariar tierras disponibles de instituciones/municipalidades; mediar con propietarios; conformar juntas con enfoque integral (incluye movilidad, áreas verdes y equipamientos)."
      },
      {
        problema: "Urbanizaciones/condominios sin controles adecuados generan segregación, privatización de espacios y externalidades viales.",
        solucion: "Regular nuevos procesos de urbanización por escala e impacto y obligar compensaciones urbanas (espacios públicos de calidad).",
        ejecucion: "Definir estándares de control; exigir compensaciones en el entorno; fiscalizar cumplimiento para evitar segregación y privatización de convivencia."
      },
      {
        problema: "Acceso desigual a vivienda (bonos/selección) y falta de alternativas temporales ante emergencias.",
        solucion: "Fortalecer selección de familias para BFV y crear banco estatal de viviendas de alquiler para atención temporal en emergencias (incluye albergues temporales para mujeres víctimas de violencia).",
        ejecucion: "Actualizar criterios de priorización por desigualdad y necesidad real; implementar stock de alquiler estatal con rutas de transición a solución permanente."
      }
    ]
  },
  {
    area: AreaName.Salud,
    propuestas: [
      {
        problema: "Listas de espera y falta de especialistas generan rezagos estructurales; además hay riesgos de politización/gestión poco transparente en CCSS.",
        solucion: "Ampliar formación de especialistas y fortalecer gobernanza/controles en CCSS (idoneidad, transparencia, juntas de salud como auditorías ciudadanas).",
        ejecucion: "Coordinar con CENDEISSS para ampliar cupos y procesos de formación; definir criterios de calidad; fortalecer juntas de salud con acceso a información y consulta en presupuestos/prioridades."
      },
      {
        problema: "Riesgo operativo y financiero por implementación tecnológica institucional (p. ej., ERP-SAP) sin suficientes revisiones.",
        solucion: "Auditar implementación del sistema ERP-SAP para asegurar control administrativo sin afectar continuidad de atención.",
        ejecucion: "Solicitar auditoría y aplicar revisiones para transición adecuada, respetando criterios técnicos y evitando impactos en atención y finanzas."
      }
    ]
  }
]
