import { AreaName, AreaPropuestas, Propuesta } from "@/lib/data";

export const fabricioAlvaradoPropuestas: AreaPropuestas[] = [
  {
    area: AreaName.Educacion,
    propuestas: [
      {
        problema: "La educación pública arrastra baja calidad y un enfoque de memorización que no prepara para resolver problemas reales.",
        solucion: "Reestructurar la calidad educativa para migrar a una educación aplicada: lectura analítica, investigación, experimentación y creatividad.",
        ejecucion: "1) Diseñar el plan de reestructuración pedagógica. 2) Rediseñar metodologías y evaluación hacia aprendizaje práctico. 3) Capacitar docentes y acompañar la transición por etapas. 4) Medir resultados y ajustar."
      },
      {
        problema: "Falta de integración práctica e interdisciplinaria en el aprendizaje para habilidades del siglo XXI.",
        solucion: "Implementar un modelo STEAM (ciencia, tecnología, ingeniería, matemática, arte, deporte y comunicación) en todos los niveles educativos.",
        ejecucion: "1) Definir el estándar STEAM por nivel. 2) Preparar guías y materiales. 3) Ajustar planes de estudio. 4) Implementar de forma progresiva por centros y regiones."
      },
      {
        problema: "Cambios educativos suelen fallar por falta de pilotos y formación docente.",
        solucion: "Hacer planes piloto STEAM y capacitar docentes, para escalar gradualmente a todo el país.",
        ejecucion: "1) Seleccionar centros piloto. 2) Capacitar docentes en el enfoque STEAM. 3) Implementar en piloto y documentar lecciones. 4) Escalar gradualmente con base en resultados."
      },
      {
        problema: "Brecha tecnológica que limita el aprendizaje y la inclusión educativa.",
        solucion: "Reducir la brecha con conectividad digital de bajo costo en todo el territorio.",
        ejecucion: "1) Identificar zonas con mayor rezago. 2) Priorizar despliegue de conectividad. 3) Definir esquemas de costo accesible. 4) Monitorear cobertura, velocidad y uso educativo."
      },
      {
        problema: "Poblaciones vulnerables tienen poco acceso a recursos tecnológicos y apoyo fuera del aula.",
        solucion: "Crear centros comunitarios de alta tecnología para 'ciber-aprendizaje' usando bibliotecas y centros educativos.",
        ejecucion: "1) Mapear bibliotecas/centros con potencial. 2) Equipar con infraestructura y conectividad. 3) Definir horarios y tutorías. 4) Priorizar población vulnerable y evaluar impacto."
      },
      {
        problema: "Infraestructura educativa y currículo no están planificados en conjunto; edificios no responden a necesidades pedagógicas.",
        solucion: "Integrar el desarrollo de la malla curricular con la planificación de infraestructura educativa.",
        ejecucion: "1) Levantar requerimientos pedagógicos por nivel/territorio. 2) Traducirlos en estándares de diseño. 3) Programar obras según prioridades. 4) Supervisar que el diseño responda a la pedagogía."
      },
      {
        problema: "Bajo dominio del inglés limita oportunidades educativas y laborales.",
        solucion: "Programa asincrónico de enseñanza del inglés (en línea, fuera del horario de clase) para apalancar lecciones presenciales/virtuales.",
        ejecucion: "1) Diseñar plataforma y contenidos por nivel. 2) Asegurar acceso de estudiantes (conectividad/dispositivos). 3) Integrar seguimiento con docentes. 4) Evaluar avances y reforzar."
      }
    ]
  },
  {
    area: AreaName.Tecnologia,
    propuestas: [
      {
        problema: "Zonas rurales pueden quedar fuera de la innovación por falta de mapeo de talento y oportunidades de I+D.",
        solucion: "Programa de diagnóstico cantonal: mapear talento, sectores de conocimiento y portafolios locales de investigación/incubación para atraer startups y empresas.",
        ejecucion: "1) Recolectar datos de talento y capacidades locales. 2) Identificar sectores viables por cantón. 3) Construir portafolios de proyectos. 4) Atraer startups/empresas y articular con educación local."
      },
      {
        problema: "Falta de ecosistemas sólidos para transformar I+D en negocios innovadores y encadenamientos con MiPymes.",
        solucion: "Crear parques científicos y tecnológicos (clústeres) mediante zonas francas especializadas y transferencia tecnológica.",
        ejecucion: "1) Definir ubicaciones y sectores prioritarios. 2) Diseñar incentivos y gobernanza del parque. 3) Instalar empresas ancla y programas de transferencia. 4) Encadenar con MiPymes y medir resultados."
      },
      {
        problema: "Ciudades y territorios tienen baja integración tecnológica para servicios públicos y desarrollo local.",
        solucion: "Programa de ciudades inteligentes con planes piloto y gobernanza que integre gobierno central, local, instituciones, empresas y ONG (incluyendo zonas rurales y costeras).",
        ejecucion: "1) Elegir territorios piloto. 2) Definir casos de uso (movilidad, seguridad, trámites, etc.). 3) Implementar soluciones y datos abiertos donde aplique. 4) Escalar según impacto."
      },
      {
        problema: "Riesgo de rezago o uso no alineado de IA; oportunidad de empleo calificado y posicionamiento internacional.",
        solucion: "Impulsar a Costa Rica como potencia en IA ética: incentivos fiscales y fondos para I+D en IA (universidades/entes públicos) y deducciones a inversión en startups nacionales de IA.",
        ejecucion: "1) Crear el esquema de incentivos y criterios de elegibilidad. 2) Lanzar fondos concursables y alianzas público-privadas. 3) Monitorear transferencia de conocimiento y empleo generado. 4) Renovar/ajustar beneficios según resultados."
      },
      {
        problema: "Hogares, centros educativos y MiPymes no tienen acceso suficiente a conectividad y dispositivos para la transformación digital.",
        solucion: "Asegurar inversión eficiente de FONATEL para banda ancha y 5G; dotar centros educativos de conectividad 5G, equipos y software; alianzas público-privadas para abastecer dispositivos.",
        ejecucion: "1) Priorizar despliegue de fibra/5G por brecha. 2) Ejecutar inversiones FONATEL con metas medibles. 3) Equipar escuelas y apoyar MiPymes. 4) Evaluar uso, cobertura y resultados educativos/productivos."
      },
      {
        problema: "Zonas remotas siguen con baja conectividad por limitaciones geográficas.",
        solucion: "Aprovechar tecnologías aeroespaciales (redes satelitales) para cobertura en lugares remotos.",
        ejecucion: "1) Identificar zonas sin cobertura. 2) Negociar alianzas/contratos con proveedores satelitales. 3) Implementar pilotos. 4) Escalar con base en costo-efectividad."
      }
    ]
  },
  {
    area: AreaName.DeporteYCultura,
    propuestas: [
      {
        problema: "Sedentarismo, sobrepeso y obesidad, y baja integración del deporte en el desarrollo educativo.",
        solucion: "Programa de actualización y concientización docente para promover deporte y atacar sobrepeso/obesidad.",
        ejecucion: "1) Diseñar contenidos y certificación docente. 2) Implementar formación continua. 3) Integrar prácticas deportivas en rutina escolar. 4) Medir participación e indicadores de salud."
      },
      {
        problema: "Pocas opciones accesibles de recreación y cultura a nivel comunitario; impacto en salud física y mental.",
        solucion: "Cursos recreativos y culturales en salones comunales mediante alianzas con gobiernos locales y ONG.",
        ejecucion: "1) Identificar salones y oferta local. 2) Firmar alianzas y definir programación. 3) Ejecutar cursos por ciclos. 4) Evaluar participación y continuidad."
      },
      {
        problema: "La formación escolar puede ser poco integral (solo cursos formales).",
        solucion: "Horarios especiales en centros educativos para actividades deportivas y culturales (clubes estudiantiles).",
        ejecucion: "1) Ajustar horarios. 2) Definir oferta de clubes. 3) Asignar responsables y recursos. 4) Monitorear asistencia y logros."
      },
      {
        problema: "Baja conciencia sobre la importancia de actividad física/cultural.",
        solucion: "Campañas educativas e informativas apoyadas en tecnologías digitales y redes sociales.",
        ejecucion: "1) Diseñar mensajes y públicos objetivo. 2) Difundir por redes y medios. 3) Vincular campañas con eventos/servicios locales. 4) Medir alcance y cambios de participación."
      },
      {
        problema: "Limitaciones para desarrollar deporte de alto rendimiento y atraer inversión deportiva.",
        solucion: "Profesionalizar centros de alto rendimiento y transformar/expandir el sistema de becas e incentivos.",
        ejecucion: "1) Diagnóstico de centros y brechas. 2) Plan de profesionalización (gestión, entrenadores, ciencia del deporte). 3) Reformar criterios de becas para ampliar cobertura y acceso. 4) Evaluar resultados por disciplina."
      },
      {
        problema: "Talentos jóvenes, especialmente en zonas costeras, enfrentan barreras económicas para desarrollarse.",
        solucion: "Alianzas público-privadas para becas; impulso a becas específicas como las de la Federación de Surf para menores de 16 años en zonas costeras.",
        ejecucion: "1) Crear bolsa de becas y aliados. 2) Definir criterios transparentes. 3) Otorgar apoyos y seguimiento académico/deportivo. 4) Publicar resultados y auditoría."
      }
    ]
  },
  {
    area: AreaName.Pensiones,
    propuestas: [
      {
        problema: "Regímenes especiales ligados al presupuesto público presionan la sostenibilidad financiera.",
        solucion: "Reformas legales para fondear gradualmente y de manera autónoma las pensiones de regímenes especiales vinculadas al Ministerio de Hacienda.",
        ejecucion: "1) Identificar regímenes y necesidades actuariales. 2) Presentar reforma legal y esquema de fondeo. 3) Implementar transición gradual. 4) Monitorear sostenibilidad y ajustes."
      }
    ]
  },
  {
    area: AreaName.Agricultura,
    propuestas: [
      {
        problema: "Acceso lento y caro a insumos agrícolas modernos por procesos regulatorios duplicados.",
        solucion: "Homologación técnica acelerada de agroquímicos con registro automático basado en agencias regulatorias avanzadas; eliminar duplicidad de pruebas salvo riesgo tropical comprobado.",
        ejecucion: "1) Presentar ley de homologación. 2) Definir agencias de referencia y criterios técnicos. 3) Implementar plataforma digital de trazabilidad y solicitudes. 4) Aprobar automáticamente si no hay objeción técnica en 60 días."
      },
      {
        problema: "Productores enfrentan barreras logísticas para exportar y mover productos competitivamente.",
        solucion: "Impulsar infraestructura logística (p. ej., Canal Verde Interoceánico) para facilitar exportación y encadenamientos productivos.",
        ejecucion: "1) Declarar el proyecto de interés público. 2) Estructurar financiamiento (APP) y gobernanza. 3) Construir obras logísticas clave. 4) Vincular a productores con rutas de exportación y servicios."
      }
    ]
  },
  {
    area: AreaName.Telecomunicaciones,
    propuestas: [
      {
        problema: "Conectividad insuficiente y ejecución ineficiente de recursos para cerrar brecha digital.",
        solucion: "Invertir eficientemente recursos de FONATEL para banda ancha y 5G para hogares, escuelas y empresas; nutrir centros educativos con 5G y equipos/software.",
        ejecucion: "1) Establecer metas de cobertura (hogares/escuelas/empresas). 2) Priorizar territorios por brecha. 3) Ejecutar despliegue de fibra/5G y dotación de equipos. 4) Auditar inversión y resultados."
      },
      {
        problema: "Necesidad de mejorar desempeño y sostenibilidad del ICE en sus líneas de negocio.",
        solucion: "Encaminar la dirección del ICE hacia rentabilidad por línea de producto y cultura de eficiencia; promover innovación interna con incubación y analítica de datos; estrategias de cross-selling con sector público.",
        ejecucion: "1) Definir métricas de rentabilidad por producto/cliente. 2) Reorganizar gestión por márgenes y eficiencia. 3) Instalar procesos de incubación y analítica para innovación. 4) Implementar alianzas comerciales (cross-selling) bajo reglas de competencia y contratación."
      }
    ]
  },
  {
    area: AreaName.Turismo,
    propuestas: [
      {
        problema: "Regiones con potencial turístico enfrentan falta de articulación, infraestructura y certificaciones para consolidar oferta sostenible.",
        solucion: "Articular al ICT para declaratoria turística y certificación de sostenibilidad; integrar circuitos y rutas turísticas rurales con participación comunitaria.",
        ejecucion: "1) Identificar territorios y productos turísticos. 2) Tramitar declaratoria/certificación con ICT. 3) Diseñar rutas y encadenamientos locales (guías, artesanía, agro). 4) Promoción y seguimiento de beneficios locales."
      },
      {
        problema: "Conectividad aérea y marítima limita el crecimiento turístico y la diversificación regional.",
        solucion: "Construcción de aeropuertos internacionales (Limón y Osa), ampliación Daniel Oduber y proyectos como marina/terminal de cruceros en Limón.",
        ejecucion: "1) Priorizar proyectos por impacto regional. 2) Asegurar permisos/financiamiento. 3) Construir y operar con estándares de transparencia. 4) Conectar proyectos con cadenas de valor locales."
      }
    ]
  },
  {
    area: AreaName.Economia,
    propuestas: [
      {
        problema: "Baja confianza y necesidad de crecimiento sostenido para consumo e inversión.",
        solucion: "Promover política macroeconómica con enfoque estratégico y crecimiento progresivo que transmita confianza.",
        ejecucion: "1) Definir metas macro (crecimiento, inflación, deuda) coherentes. 2) Coordinar política fiscal/monetaria con reglas claras. 3) Comunicación transparente de metas. 4) Evaluación periódica y ajustes."
      },
      {
        problema: "Cambios arancelarios y asimetrías regulatorias pueden afectar la producción nacional.",
        solucion: "Comisión técnica para valorar qué aranceles agrícolas eliminar; condicionar cambios a homologación previa del registro de agroquímicos con estándares UE/EE. UU. y aplicar con 12 meses de anticipación.",
        ejecucion: "1) Crear comisión de expertos. 2) Evaluar rubros y riesgos. 3) Aprobar hoja de ruta con anticipación mínima de 12 meses. 4) Implementar cambios y monitorear efectos."
      },
      {
        problema: "Sistema tributario complejo y evasión favorecida por poca integración digital.",
        solucion: "Sistema tributario automatizado, inteligente y sencillo: simplificación tributaria, eliminar impuestos costosos de recaudar y optimizar Hacienda Digital integrando plataformas y datos.",
        ejecucion: "1) Presentar proyecto de ley de simplificación. 2) Identificar tributos de alto costo/ bajo rendimiento para eliminación. 3) Integrar Hacienda Digital con fuentes de datos. 4) Medir reducción de evasión y costos administrativos."
      },
      {
        problema: "Altos costos de factores de producción reducen competitividad.",
        solucion: "Plan para disminuir costos de electricidad, energía, combustibles y telecomunicaciones (meta 15% en 2 años; 20% en plazo posterior).",
        ejecucion: "1) Medir estructura de costos por factor. 2) Definir medidas regulatorias/operativas por sector. 3) Implementar por etapas con metas semestrales. 4) Verificar reducción efectiva y trasladabilidad."
      },
      {
        problema: "MiPymes tienen debilidades de gestión, asociatividad y acceso a apoyo efectivo.",
        solucion: "Fortalecer asociatividad (redes/clústeres), acompañamiento institucional según debilidades, capacitación (negocios, marketing, digitalización, ventas, gerencia) y fortalecimiento de fondos no reembolsables (PROCOMER).",
        ejecucion: "1) Diagnosticar brechas por sector/territorio. 2) Diseñar rutas de acompañamiento y capacitación. 3) Financiar con fondos no reembolsables y banca de desarrollo. 4) Fiscalizar y evaluar resultados por programa."
      }
    ]
  },
  {
    area: AreaName.Seguridad,
    propuestas: [
      {
        problema: "Criminalidad y crimen organizado requieren focalización y mejor uso de recursos.",
        solucion: "Usar inteligencia policial y tecnología en cuerpos policiales; modelo de denuncia dinámica vía teléfonos inteligentes.",
        ejecucion: "1) Implementar herramientas tecnológicas y analítica del delito. 2) Crear/fortalecer canales de denuncia digital. 3) Focalizar operativos por objetivos. 4) Evaluar reducción de delitos y tiempos de respuesta."
      },
      {
        problema: "Coordinación fragmentada entre cuerpos policiales reduce eficacia.",
        solucion: "Unificar policías a cargo del MSP para mayor eficacia, control de mando y coordinación por procesos; mejorar áreas administrativas clave y rehabilitar el Consejo de Seguridad con Observatorio del Delito.",
        ejecucion: "1) Rediseñar estructura de mando y procesos. 2) Integrar sistemas de información y coordinación operativa. 3) Reactivar Consejo de Seguridad y Observatorio. 4) Medir desempeño y rendición de cuentas."
      },
      {
        problema: "Ingresos ilegales y presiones migratorias por mar, aire o tierra.",
        solucion: "Diseñar e implementar una política migratoria eficaz para contención y erradicación del acceso ilegal.",
        ejecucion: "1) Diagnóstico de rutas y capacidades. 2) Coordinación interinstitucional (fronteras, guardacostas, vigilancia aérea). 3) Operativos focalizados y tecnología. 4) Evaluación continua."
      },
      {
        problema: "Sistema penitenciario no logra resocialización y enfrenta presión por crecimiento de población carcelaria.",
        solucion: "Transformar el modelo carcelario para convertir centros en espacios de resocialización y reinserción; invertir en infraestructura penitenciaria adecuada.",
        ejecucion: "1) Diagnóstico de hacinamiento y necesidades. 2) Plan de infraestructura con estándares. 3) Programas de resocialización y seguimiento. 4) Medición de reincidencia y control."
      }
    ]
  },
  {
    area: AreaName.Ambiente,
    propuestas: [
      {
        problema: "Gobernanza del agua desactualizada (Ley de Aguas de 1942) y baja cobertura de alcantarillado/tratamiento; presión climática.",
        solucion: "Reforma integral a la Ley de Aguas (gestión por cuencas, participación y corresponsabilidad), fortalecer infraestructura hídrica, reutilización y tratamiento de aguas residuales; fortalecer ASADAS y su organización regional.",
        ejecucion: "1) Presentar reforma legal moderna del agua. 2) Crear planificación por cuencas con participación. 3) Invertir en tratamiento/reutilización y apoyo técnico-financiero a ASADAS. 4) Monitorear calidad, cobertura y resiliencia."
      },
      {
        problema: "Estrés hídrico en zonas costeras amenaza salud y economía local.",
        solucion: "Inversión en desalinización alimentada por energía solar para agua potable en comunidades y sectores (hoteles, agricultura, parques nacionales).",
        ejecucion: "1) Identificar zonas críticas. 2) Evaluar viabilidad técnico-económica. 3) Implementar pilotos de desalinización solar. 4) Escalar con modelos de operación sostenibles."
      },
      {
        problema: "Necesidad de conservar ecosistemas y monetizar/valorar servicios ecosistémicos sin perder conservación.",
        solucion: "Incentivos a conservación privada y comunitaria; estrategia nacional de valorización de servicios ecosistémicos (carbono/agua/biodiversidad).",
        ejecucion: "1) Diseñar incentivos y reglas claras. 2) Medir/registrar servicios ecosistémicos. 3) Implementar mecanismos de pago. 4) Auditoría ambiental y social."
      },
      {
        problema: "Marco normativo ambiental con duplicidades y baja eficacia; presión sobre recursos naturales.",
        solucion: "Revisión integral del marco normativo ambiental eliminando duplicidades y fortaleciendo gestión pública; política de aprovechamiento de recursos con trazabilidad, control ambiental y retorno social; exploración/explotación racional bajo estándares de sostenibilidad y transparencia.",
        ejecucion: "1) Mapear duplicidades y cuellos de botella. 2) Proponer reformas legales y reglamentarias. 3) Implementar trazabilidad y control. 4) Publicar retornos y fiscalización."
      }
    ]
  },
  {
    area: AreaName.Infraestructura,
    propuestas: [
      {
        problema: "Rezago histórico en infraestructura y transporte público genera congestión, costos logísticos y menor competitividad.",
        solucion: "Modernización multimodal: TransGAM (reordenamiento del transporte público con nodos intermodales y ramales eléctricos), apoyo al sistema ferroviario e integración del tren.",
        ejecucion: "1) Diseñar el plan TransGAM y sectorización. 2) Construir nodos/terrapuertos e integración de rutas. 3) Electrificar ramales y coordinar operación. 4) Medir tiempos de viaje, emisiones y calidad del servicio."
      },
      {
        problema: "Conectividad aérea insuficiente limita desarrollo regional y turismo.",
        solucion: "Construcción de aeropuertos internacionales en Limón y Osa; ampliación de la terminal Daniel Oduber y fortalecimiento de conectividad aérea nacional.",
        ejecucion: "1) Definir priorización y demanda. 2) Permisos y modelo de financiamiento. 3) Construcción y puesta en operación. 4) Integración con transporte interno y promoción regional."
      },
      {
        problema: "Trámites lentos y duplicados frenan obras públicas y aumentan costos.",
        solucion: "Simplificar trámites y eliminar duplicidades con plataformas digitales y plazos definidos; aplicar principios OCDE y gobierno corporativo en compras, licitaciones y concesiones.",
        ejecucion: "1) Mapear trámites críticos. 2) Digitalizar y fijar plazos máximos. 3) Implementar transparencia y rendición de cuentas en contratación. 4) Auditoría y control ciudadano."
      },
      {
        problema: "Necesidad de un salto logístico para productividad nacional y reducción de desigualdades regionales.",
        solucion: "Canal Verde Interoceánico: mega puerto en cada litoral y conexiones viales/ferroviarias, financiado por APP.",
        ejecucion: "1) Declarar interés público. 2) Estructurar APP y estudios de factibilidad. 3) Construir puertos y conexiones. 4) Vincular a cadenas productivas y medir empleo/impacto."
      }
    ]
  },
  {
    area: AreaName.Vivienda,
    propuestas: [
      {
        problema: "Alto déficit habitacional, caída en bonos y estancamiento del sector; trámites lentos y planificación territorial débil.",
        solucion: "Política habitacional con nuevos instrumentos: arrendamiento con opción de compra vertical (sin prima inicial), ventanilla única digital para bonos/permisos/créditos, regeneración urbana y alianzas público-privadas.",
        ejecucion: "1) Identificar suelo/espacios urbanos ociosos y demanda objetivo. 2) Diseñar el programa de alquiler con opción de compra y financiamiento. 3) Implementar ventanilla única digital. 4) Ejecutar proyectos y evaluar acceso/tiempos/costos."
      },
      {
        problema: "Asentamientos informales con precariedad y falta de servicios básicos.",
        solucion: "Programa de regeneración urbana y hábitat comunitario para intervenir asentamientos y convertirlos en espacios dignos con servicios, áreas verdes y participación vecinal.",
        ejecucion: "1) Censo y priorización de asentamientos. 2) Diseño participativo del plan barrial. 3) Obras de servicios básicos y espacios públicos. 4) Seguimiento social y mantenimiento."
      },
      {
        problema: "Baja coordinación y marco legal insuficiente entre instituciones de vivienda y gobiernos locales.",
        solucion: "Reforma legal para mejorar articulación INVU-gobiernos locales, fortaleciendo autonomía municipal y gestión territorial.",
        ejecucion: "1) Diagnóstico de competencias y duplicidades. 2) Propuesta de reforma legal. 3) Protocolos de coordinación y planificación. 4) Monitoreo de resultados en proyectos y permisos."
      }
    ]
  },
  {
    area: AreaName.Salud,
    propuestas: [
      {
        problema: "Listas de espera altas y gestión clínica/administrativa con baja trazabilidad e integración de datos.",
        solucion: "Modernización sanitaria con tecnologías emergentes e IA: sistema integrado de datos CCSS-Ministerio de Salud-EBAIS; gestión inteligente para clasificar/depurar casos y reducir listas de espera.",
        ejecucion: "1) Integrar bases y sistemas de información entre instituciones. 2) Implementar herramientas de priorización inteligente por complejidad/tiempo. 3) Homologar criterios regionales de atención. 4) Medir reducción de espera y calidad."
      },
      {
        problema: "Capacidad resolutiva insuficiente y presión hospitalaria en especialidades críticas.",
        solucion: "Alianzas público-privadas responsables para complementar capacidad del sistema público con transparencia, eficiencia y control de calidad.",
        ejecucion: "1) Identificar especialidades con cuello de botella. 2) Definir reglas de contratación y control de calidad. 3) Ejecutar servicios complementarios con trazabilidad. 4) Evaluar costo-efectividad y resultados."
      },
      {
        problema: "Falta de incentivos alineados para mejorar productividad y reducción de listas de espera.",
        solucion: "Esquemas de incentivos institucionales y profesionales para equipos/centros que reduzcan listas de espera y eleven estándares de atención.",
        ejecucion: "1) Definir métricas verificables (tiempos, productividad, calidad). 2) Establecer incentivos y auditoría. 3) Implementar por unidades/servicios. 4) Publicar resultados y ajustar."
      },
      {
        problema: "Riesgos de sostenibilidad financiera y necesidad de modernización en la CCSS.",
        solucion: "Estrategia integral de sostenibilidad financiera; reestructuración institucional en la CCSS para modernizar gestión administrativa y clínica.",
        ejecucion: "1) Diagnóstico financiero-operativo. 2) Plan de reforma administrativa y clínica. 3) Implementación por fases con metas. 4) Seguimiento de sostenibilidad y satisfacción usuaria."
      }
    ]
  }
]
