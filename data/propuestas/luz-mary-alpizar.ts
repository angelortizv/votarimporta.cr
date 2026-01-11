import { AreaName, AreaPropuestas, Propuesta } from "@/lib/data";

export const luzMaryAlpizarPropuestas: AreaPropuestas[] = [
  {
    area: AreaName.Educacion,
    propuestas: [
      {
        problema: 'Rezago en aprendizajes (lectura y matemáticas) y brechas más fuertes en comunidades vulnerables; riesgo de que estudiantes se queden atrás.',
        solucion: 'Programas robustos de tutorías y apoyo académico (presencial y virtual), con prioridad en lectoescritura y enfoque en poblaciones vulnerables.',
        ejecucion: '1) Identificar estudiantes con rezago. 2) Implementar tutorías individuales y grupales. 3) Movilizar docentes, universitarios (servicio social) y voluntariado. 4) Crear/usar plataformas con recursos interactivos. 5) Fortalecer bibliotecas cantonales y recursos comunitarios. 6) Dar seguimiento periódico al progreso.'
      },
      {
        problema: 'Alta deserción y choque de transición al entrar a 7mo año por desigualdades entre escuelas (currículo, conectividad, nivel previo).',
        solucion: 'Nivelación al ingreso a 7mo: reforzar socialización y nivelar conocimientos para mejorar adaptación y bajar deserción.',
        ejecucion: '1) Usar días de ingreso a 7mo para inducción. 2) Diagnosticar brechas básicas. 3) Ejecutar módulos cortos de nivelación (lectoescritura, matemática, habilidades de estudio). 4) Actividades de integración y compañerismo. 5) Monitorear asistencia y riesgo de abandono durante el primer trimestre.'
      },
      {
        problema: 'Baja proporción de jóvenes con educación superior frente a OCDE; baja finalización en universidades públicas; listas de espera en formación técnica (INA).',
        solucion: 'Mejorar articulación secundaria–educación superior y elevar graduación: nivelación en secundaria con acción social universitaria, ferias regionales, metas explícitas de graduación y una meta país para converger con el promedio OCDE en 10 años.',
        ejecucion: '1) Ofrecer cursos de autonivelación a estudiantes de 10°–12°. 2) Levantar necesidades regionales de carreras/diplomados y ajustar oferta territorial. 3) Presentar oferta integrada 2 años antes de salir del cole. 4) Realizar ferias universitarias regionales con información de cupos/becas/calidad. 5) Definir metas explícitas de graduación (universidades e INA) y medir resultados.'
      },
      {
        problema: 'Currículo desactualizado y desigualdades: solo una minoría de escuelas tendría currículo completo; baja pertinencia para realidades locales.',
        solucion: 'Revisión del currículo nacional y metodologías activas: aprendizaje por proyectos, STEM, habilidades socioemocionales y adaptación a necesidades locales ("tema país").',
        ejecucion: '1) Revisar currículo y eliminar contenidos obsoletos. 2) Capacitar docentes en metodologías activas. 3) Integrar STEM y habilidades socioemocionales. 4) Incorporar contenidos de identidad, ambiente e historia local. 5) Implementar "materias flexibles" según necesidades del territorio (cultura/arte/ambiente/autoestima, etc.).'
      }
    ]
  },
  {
    area: AreaName.Tecnologia,
    propuestas: [
      {
        problema: 'Brecha digital y conectividad lenta/ineficiente (baja ejecución de FONATEL, falta de rectoría articulada, trabas municipales y rezago en 5G).',
        solucion: 'Tratar la conectividad como derecho humano; acelerar infraestructura y 5G; fortalecer ciberseguridad; mejorar coordinación y regulación (MICITT/SUTEL) y permitir soluciones locales en zonas rurales.',
        ejecucion: '1) Definir conectividad como derecho humano. 2) Priorizar despliegue 5G. 3) Fortalecer Estrategia Nacional de Ciberseguridad. 4) Homologar permisos municipales/MOPT para ductos. 5) Publicar inventario de ductos por distrito (SUTEL). 6) Capacitación digital comunitaria (seguridad informática y uso de plataformas). 7) Ajustar regulación y exigir cuota de reducción de brecha digital a proveedores. 8) Flexibilizar frecuencias y habilitar redes comunitarias/cooperativas rurales.'
      },
      {
        problema: 'Crimen organizado se adapta rápido; falta de información y respuesta oportuna.',
        solucion: 'Inteligencia policial con tecnologías y datos (Big Data) y centro de monitoreo de cámaras de forma gradual.',
        ejecucion: '1) Mejorar calidad y disponibilidad de datos policiales. 2) Implementar analítica/Big Data para patrones delictivos. 3) Desplegar cámaras priorizando "puntos calientes". 4) Crear centro de monitoreo electrónico por etapas. 5) Ajustar operativos según evidencia.'
      }
    ]
  },
  {
    area: AreaName.DeporteYCultura,
    propuestas: [
      {
        problema: 'Acceso limitado al deporte escolar (muchos estudiantes sin Educación Física), baja participación en juegos estudiantiles, brechas de género y sedentarismo/obesidad en niñez.',
        solucion: 'Fortalecer juegos estudiantiles y programas inclusivos; incentivos a centros educativos y enfoque integral (valores, salud, prevención de violencia y racismo).',
        ejecucion: '1) Ampliar alcance y frecuencia de Juegos Estudiantiles. 2) Crear programas deportivos inclusivos en horario escolar y extraescolar. 3) Establecer incentivos a centros que promuevan deporte. 4) Coordinar con CCDR y organizaciones para programas con enfoque en valores y salud. 5) Medir participación y resultados (género, región, continuidad).'
      },
      {
        problema: 'Deporte de alto rendimiento con inestabilidad presupuestaria y distribución inadecuada; falta de estrategia para profesionalizar y optimizar inversión pública.',
        solucion: 'Guía de inversiones del ICODER y alianzas público-privadas; profesionalización del talento; emprendimiento en atletas y desarrollo de turismo deportivo.',
        ejecucion: '1) Diseñar guía de inversiones públicas del ICODER. 2) Identificar proyectos aptos para APP. 3) Implementar estrategia de turismo deportivo y recreativo. 4) Fortalecer capacidades para alta competencia. 5) Medir impacto económico con instrumentos como cuenta satélite (cuando aplique).'
      }
    ]
  },
  {
    area: AreaName.Pensiones,
    propuestas: [
      {
        problema: 'Dificultades de acceso al Régimen No Contributivo (RNC) para personas adultas mayores y vulnerabilidad económica.',
        solucion: 'Agilizar el RNC mediante simplificación de trámites y atención diferenciada.',
        ejecucion: '1) Simplificar requisitos y procesos. 2) Implementar ventanillas/atención diferenciada. 3) Reducir tiempos de respuesta. 4) Seguimiento de casos hasta resolución.'
      }
    ]
  },
  {
    area: AreaName.Agricultura,
    propuestas: [
      {
        problema: 'Sector agropecuario con baja productividad, dependencia alimentaria externa, desmotivación, pobreza/desempleo rural, tramitología, falta de crédito accesible y apoyo técnico.',
        solucion: 'Atacar retos institucionales, tecnológicos y de financiamiento; apoyo estatal para acceder a tecnologías (pilotos) y fortalecer soporte técnico y crédito para producción nacional.',
        ejecucion: '1) Identificar cuellos de botella institucionales (trámites y apoyo). 2) Diseñar planes piloto de adopción tecnológica por regiones. 3) Financiar/ayudar a obtener tecnologías de alto valor. 4) Reforzar extensión/acompañamiento técnico (MAG y aliados). 5) Mejorar acceso a crédito para productor. 6) Monitorear productividad y comercialización.'
      },
      {
        problema: 'Tipo de cambio/política monetaria y estructura de mercado: se percibe beneficio al importador en detrimento del exportador; caída de competitividad para sectores que venden en dólares y pagan costos en colones.',
        solucion: 'Revisar políticas monetarias para balancear efectos, fortalecer sector exportador y buscar equilibrio costo-ganancia.',
        ejecucion: '1) Evaluar efectos de política monetaria sobre importadores/exportadores. 2) Ajustar lineamientos para balancear impactos. 3) Implementar medidas de fortalecimiento exportador. 4) Seguimiento de competitividad y márgenes.'
      },
      {
        problema: 'Necesidad de modernización y sostenibilidad (incluido cambio climático) en agricultura.',
        solucion: 'Invertir en investigación para agricultura moderna y desarrollo de biomoléculas que apoyen una producción más sostenible.',
        ejecucion: '1) Definir agenda de investigación aplicada (prioridades productivas y ambientales). 2) Financiar centros/proyectos de I+D. 3) Pilotear innovaciones con productores. 4) Escalar tecnologías que reduzcan riesgos climáticos y mejoren sostenibilidad.'
      }
    ]
  },
  {
    area: AreaName.Telecomunicaciones,
    propuestas: [
      {
        problema: 'Gestión lenta e ineficiente para cerrar brecha digital; debilidades de ejecución (FONATEL), rectoría (MICITT) y trabas municipales para infraestructura; ausencia de mecanismos para exigir aportes a transnacionales.',
        solucion: 'Reforma operativa y regulatoria: 5G como prioridad; coordinación MICITT/SUTEL; homologar permisos; exigir cuota de reducción de brecha digital; habilitar redes comunitarias rurales; formación digital.',
        ejecucion: '1) Declarar conectividad como derecho humano. 2) Implementar 5G. 3) Fortalecer ciberseguridad nacional. 4) Homologar permisos municipales/MOPT y facilitar despliegue de ductos. 5) Publicar infraestructura de ductos por distrito (SUTEL). 6) Capacitar digitalmente a comunidades. 7) Ajustar regulación y exigir contribuciones de proveedores. 8) Flexibilizar frecuencias/normas rurales para redes comunitarias/cooperativas.'
      }
    ]
  },
  {
    area: AreaName.Turismo,
    propuestas: [
      {
        problema: 'Aprovechamiento limitado del deporte como motor económico y territorial.',
        solucion: 'Desarrollar turismo deportivo y recreativo como parte de una estrategia de deporte de alto rendimiento y economía deportiva.',
        ejecucion: '1) Definir productos y circuitos de turismo deportivo. 2) Coordinar eventos/infraestructura con gobiernos locales y sector privado. 3) Integrar formación y profesionalización en organizaciones deportivas. 4) Medir resultados (visitación, empleo local, uso de instalaciones).'
      },
      {
        problema: 'Brechas de inclusión y desarrollo territorial (incluyendo territorios indígenas) con potencial productivo/cultural subutilizado.',
        solucion: 'Impulsar turismo comunitario sostenible y circuitos culturales (en territorios que lo definan).',
        ejecucion: '1) Programas de apoyo a emprendimientos locales. 2) Fortalecer mercados locales y encadenamientos. 3) Diseñar circuitos culturales y oferta turística comunitaria. 4) Capacitación y acompañamiento para sostenibilidad.'
      }
    ]
  },
  {
    area: AreaName.Economia,
    propuestas: [
      {
        problema: 'Costo de vida elevado y presiones sobre hogares; debilidad de competitividad y productividad de sectores productivos; informalidad.',
        solucion: 'Paquete de reactivación: fortalecimiento de fondos de avales y crédito (Banca para el Desarrollo), apoyo a microempresas, generación de empleo y reducción de informalidad con simplificación de requisitos y cargas sociales diferenciadas.',
        ejecucion: '1) Fortalecer Fondo Nacional de Avales y ajustar lineamientos de Banca para el Desarrollo. 2) Impulsar capital semilla/financiamiento a microempresas (especialmente mujeres). 3) Crear empleo en polos tecnológicos y encadenamientos. 4) Simplificar requisitos para formalizarse. 5) Diseñar cargas sociales diferenciadas por sector/zona/tamaño. 6) Monitorear formalización y empleo.'
      },
      {
        problema: 'Ajustes fiscales pueden recaer en inversión social; riesgo de desbalance entre indicadores económicos y desarrollo social.',
        solucion: 'Revisar presupuestos públicos y sostenibilidad de gasto, buscando equilibrio entre finanzas públicas e inversión social prioritaria.',
        ejecucion: '1) Auditoría/revisión de partidas y eficacia del gasto. 2) Definir prioridades con enfoque en inversión social esencial. 3) Ajustes con base en evidencia y seguimiento de resultados.'
      }
    ]
  },
  {
    area: AreaName.Seguridad,
    propuestas: [
      {
        problema: 'Aumento de homicidios, violencia asociada al crimen organizado y armas de fuego; mayor impacto en población joven y territorios vulnerables.',
        solucion: 'Estrategia integral: fortalecimiento policial, prevención focalizada en jóvenes en riesgo, reducción de desigualdades y cultura de paz; priorización territorial e inteligencia policial.',
        ejecucion: '1) Mejorar recursos humanos, equipamiento y condiciones laborales policiales. 2) Identificar jóvenes en riesgo (deserción 6° y no matrícula 7°) y dar seguimiento hasta reinserción educativa. 3) Programas deportivos, artísticos y comunitarios en barriadas en riesgo. 4) Campañas de cultura de paz y resolución de conflictos. 5) Intervención interinstitucional en "puntos calientes". 6) Analítica e inteligencia policial (Big Data) y monitoreo por cámaras por etapas.'
      },
      {
        problema: 'Cuerpos policiales con faltantes de vehículos, comunicaciones, cómputo y armamento; coordinación institucional deficiente y respuesta lenta del sistema penal.',
        solucion: 'Asignación prioritaria de recursos y rediseño operativo; revisar gobernanza/rectoría interinstitucional; reformas a justicia penal, ley de armas y ejecución de pena; recuperación de activos del crimen.',
        ejecucion: '1) Asignar recursos para equipamiento y tecnología de inteligencia. 2) Rediseñar estrategia territorial y crear unidad dedicada a "zonas calientes". 3) Revisar comisiones/espacios de coordinación para hacerlos efectivos. 4) Impulsar reformas: ley de armas, prisión preventiva (casos complejos), persecución penal. 5) Fortalecer investigación e incautación/administración de bienes. 6) Reformar modelo carcelario para controles internos y reinserción.'
      }
    ]
  },
  {
    area: AreaName.Ambiente,
    propuestas: [
      {
        problema: 'Riesgos crecientes por cambio climático (sequías, inundaciones) que afectan seguridad alimentaria, infraestructura y medios de vida; necesidad de integrar adaptación en planificación.',
        solucion: 'Fortalecer resiliencia social/económica y prevención de desastres; integrar adaptación climática en planificación del desarrollo e infraestructura.',
        ejecucion: '1) Identificar zonas y sectores vulnerables. 2) Incorporar adaptación en planes de desarrollo e infraestructura. 3) Priorizar obras y medidas de prevención (según riesgo). 4) Monitorear resultados y ajustar intervenciones.'
      }
    ]
  },
  {
    area: AreaName.Infraestructura,
    propuestas: [
      {
        problema: 'Movilidad y transporte público requieren modernización y mejor gestión; congestión y baja eficiencia operativa.',
        solucion: 'Modernización del transporte público con herramientas tecnológicas: semáforos inteligentes y mecanismos para mejorar el flujo vial.',
        ejecucion: '1) Diagnóstico de intersecciones críticas. 2) Instalación progresiva de semáforos inteligentes. 3) Integración con gestión de tráfico y transporte público. 4) Evaluación de tiempos de viaje y ajustes.'
      }
    ]
  },
  {
    area: AreaName.Vivienda,
    propuestas: [
      {
        problema: 'Déficit de vivienda y presión por recortes/inconsistencia en el Bono Familiar de Vivienda; asentamientos precarios y riesgo por desastres; necesidad de coordinación institucional.',
        solucion: 'Revertir recortes al BFV; habilitar uso de tierra pública; atender emergencia por desastres; fortalecer RAMT y reestructurar el sector vivienda con integración institucional.',
        ejecucion: '1) Revertir reducciones al BFV y asegurar financiamiento. 2) Inventariar y habilitar tierra pública apta para vivienda. 3) Activar mecanismos de emergencia y reasentamiento por desastres. 4) Fortalecer RAMT y coordinación MIVAH-INVU-BANHVI-municipalidades. 5) Reducir precarios con proyectos integrales (servicios e infraestructura).'
      },
      {
        problema: 'Hogares sin acceso a financiamiento y con viviendas sin legalización plena; barrios con deterioro urbano.',
        solucion: 'Programa nacional de legalización de viviendas con hipoteca; revitalización de barrios consolidados y mejoramiento de espacio público.',
        ejecucion: '1) Diseñar ruta de legalización y titularización con instrumentos hipotecarios. 2) Articular banca/estado para financiamiento accesible. 3) Intervenir barrios con obras de mejoramiento urbano y servicios. 4) Seguimiento a regularización y calidad habitacional.'
      }
    ]
  },
  {
    area: AreaName.Salud,
    propuestas: [
      {
        problema: 'Listas de espera y deterioro/limitaciones en capacidad de la CCSS; necesidad de mejorar acceso y calidad de servicios.',
        solucion: 'Impulsar mejoras a la CCSS y gestión para reducir listas de espera y fortalecer infraestructura/servicios.',
        ejecucion: '1) Diagnóstico de cuellos de botella (cirugías, especialidades, EBAIS). 2) Reforzar gestión de listas de espera con metas y seguimiento. 3) Invertir en capacidad resolutiva (según prioridades). 4) Monitorear tiempos de espera y resultados.'
      },
      {
        problema: 'Alta carga de enfermedad y dependencia en personas adultas mayores; abandono e insuficiencia de programas de cuidado.',
        solucion: 'Sistema Nacional de Cuidados y salud especializada: asistencia domiciliar remunerada y construcción de hospital de investigación y especialidades (Raúl Blanco Cervantes), más articulación de cuidados domiciliarios/centros diurnos/residencias.',
        ejecucion: '1) Crear subsidio (FODESAF/CONAPAM) para cuidadoras con aseguramiento CCSS. 2) Construir/fortalecer hospital de especialidades con clínica de memoria, atención integral y hospital de día. 3) Consolidar sistema nacional de cuidados con corresponsabilidad Estado-familias-comunidad. 4) Escalar servicios según demanda y evaluación.'
      }
    ]
  }
]