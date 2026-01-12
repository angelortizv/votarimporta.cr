import { AreaName, AreaPropuestas, Propuesta } from "@/lib/data";

export const alvaroRamosPropuestas: AreaPropuestas[] = [
  {
    area: AreaName.Educacion,
    propuestas: [
      {
        problema: "La educación pública tiene una crisis estructural: baja inversión sostenida, desigualdad territorial, rezagos de aprendizaje e infraestructura física/digital insuficiente.",
        solucion: "Restablecer gradualmente la inversión pública hasta 8% del PIB y priorizar equidad territorial, infraestructura, calidad docente e inclusión.",
        ejecucion: "1) Definir metas anuales para subir inversión. 2) Priorizar regiones rurales/indígenas/costeras. 3) Dirigir recursos a infraestructura, calidad docente y programas de inclusión. 4) Medir avances por región y ajustar."
      },
      {
        problema: "No hay una visión unificada y sostenida de reforma educativa a largo plazo; los cambios son fragmentados.",
        solucion: "Formalizar un pacto multisectorial que unifique visión, blinde financiamiento y oriente reformas pedagógicas, curriculares y de gobernanza 2026–2050.",
        ejecucion: "1) Convocar sector público, privado, academia y comunidades. 2) Acordar visión y metas 2026–2050. 3) Establecer reglas de financiamiento estable. 4) Implementar y auditar reformas por fases."
      },
      {
        problema: "Brechas fuertes en infraestructura educativa y acceso a conectividad/dispositivos, especialmente fuera de la GAM.",
        solucion: "Impulsar conectividad universal: internet de alta velocidad y dispositivos en escuelas y colegios, priorizando zonas rurales e indígenas.",
        ejecucion: "1) Mapear centros sin conectividad/dispositivos. 2) Priorizar por vulnerabilidad. 3) Ejecutar despliegue de internet y entrega de dispositivos. 4) Dar soporte técnico y mantenimiento. 5) Medir uso y resultados."
      },
      {
        problema: "Deserción escolar y brechas (incluida de género) por falta de apoyos y detección temprana.",
        solucion: "Implementar el programa “Permanencia escolar” con alertas tempranas, becas y apoyos socioeconómicos.",
        ejecucion: "1) Crear sistema de alerta temprana (asistencia, notas, riesgo social). 2) Activar becas/apoyos al detectar riesgo. 3) Acompañar a familia/estudiante con equipos de apoyo. 4) Seguimiento mensual y ajustes."
      },
      {
        problema: "Brecha entre lo que enseña el sistema y lo que necesita el mercado laboral; falta de habilidades digitales/STEAM y empleabilidad.",
        solucion: "Crear una Ley Marco de Formación para la Empleabilidad y actualizar planes para competencias digitales/STEAM; además, fortalecer educación técnica.",
        ejecucion: "1) Diseñar marco legal con INA–MEP–Universidades–sector privado. 2) Definir rutas formativas por demanda laboral. 3) Actualizar planes con habilidades digitales/STEAM. 4) Ampliar oferta técnica y dual. 5) Evaluar inserción laboral."
      },
      {
        problema: "Baja competitividad y empleabilidad por falta de dominio funcional del inglés.",
        solucion: "Fomentar bilingüismo español–inglés como competencia transversal desde educación inicial hasta superior, con enfoque práctico y técnico (negocios, turismo, tecnología).",
        ejecucion: "1) Ajustar currículo por etapas. 2) Formar/contratar docentes. 3) Medir progreso con estándares. 4) Integrar vocabulario técnico por sector. 5) Programas de refuerzo en regiones con más rezago."
      }
    ]
  },
  {
    area: AreaName.Tecnologia,
    propuestas: [
      {
        problema: "El país necesita aumentar productividad y competitividad incorporando tecnología e IA, pero con reglas claras y desarrollo de talento.",
        solucion: "Acelerar adopción de tecnologías 4.0 e incorporar IA transversalmente (salud, educación, agroindustria), creando un Centro Nacional de IA Ética y Productiva y marcos de gobernanza de datos.",
        ejecucion: "1) Definir estrategia de adopción 4.0 por sectores. 2) Crear el Centro Nacional de IA Ética y Productiva. 3) Establecer reglas de datos y ética. 4) Capacitar talento 4.0. 5) Implementar pilotos y escalar."
      },
      {
        problema: "Trámites y permisos frenan la innovación, ensayos, importación de insumos y propiedad intelectual para I+D.",
        solucion: "Crear una Ventanilla Única de I+D (COMEX–MICITT–Salud–MEIC–MIDEPLAN) para agilizar permisos y procesos.",
        ejecucion: "1) Unificar requisitos y flujos entre instituciones. 2) Digitalizar trámites y seguimiento. 3) Definir plazos máximos por tipo de permiso. 4) Medir tiempos de respuesta y mejorar continuamente."
      },
      {
        problema: "Riesgos por ciberataques y baja preparación digital de ciudadanía/empresas.",
        solucion: "Crear formación técnica en ciberseguridad para MIPYMEs y un programa nacional de bienestar digital (alfabetización mediática y ciberseguridad personal).",
        ejecucion: "1) Diseñar malla de “ciberseguridad empresarial” enfocada en MIPYMEs. 2) Implementar con INA/aliados. 3) Lanzar programa escolar de bienestar digital (MEP) con módulos obligatorios. 4) Evaluar habilidades y ajustar."
      },
      {
        problema: "Telecomunicaciones e infraestructura digital requieren rectoría fuerte y modernización institucional para la transformación digital.",
        solucion: "Modernizar tecnológicamente el ICE, asegurar acceso universal a conectividad y reforzar rectoría del MICITT (incluida ciberseguridad).",
        ejecucion: "1) Definir hoja de ruta de modernización del ICE. 2) Asegurar seguridad jurídica del espectro/frecuencias. 3) Expandir conectividad universal. 4) Fortalecer MICITT para ciberseguridad y coordinación nacional."
      }
    ]
  },
  {
    area: AreaName.DeporteYCultura,
    propuestas: [
      {
        problema: "La cultura y el deporte aportan al desarrollo, pero hay crisis de salud pública por sedentarismo y carencias en infraestructura y gobernanza.",
        solucion: "Fortalecer gobernanza cultural/deportiva, integrar actividad física al sistema de salud (con CCSS), y ejecutar un plan nacional de infraestructura con censo y priorización de zonas vulnerables.",
        ejecucion: "1) Fortalecer institucionalidad y reglas de gobernanza. 2) Hacer Censo Nacional de infraestructura. 3) Crear Plan de Desarrollo y Mantenimiento por prioridades. 4) Coordinar con CCSS para prescripción/uso de actividad física. 5) Medir participación y salud."
      },
      {
        problema: "Falta de acceso amplio y continuo a actividad física en la población.",
        solucion: "Lanzar “Educación Física para Todos” y crear una red de “Centros de Vida Activa” (especialmente para adultos mayores).",
        ejecucion: "1) Diseñar programa con cobertura nacional. 2) Implementar en centros educativos y comunidades. 3) Abrir/adecuar espacios como Centros de Vida Activa. 4) Monitorear participación y resultados de bienestar."
      },
      {
        problema: "El sector cultural requiere mejores condiciones laborales y rol más activo en convivencia e inclusión.",
        solucion: "Crear condiciones dignas para trabajadores de la cultura y posicionar cultura como motor de convivencia, inclusión y prevención de violencia.",
        ejecucion: "1) Diagnóstico laboral del sector. 2) Definir políticas y financiamiento para condiciones dignas. 3) Programas culturales comunitarios con enfoque de prevención. 4) Evaluar impacto en participación y convivencia."
      }
    ]
  },
  {
    area: AreaName.Pensiones,
    propuestas: [
      {
        problema: "La inversión social y el sistema de protección social han retrocedido, y el sistema de pensiones está en riesgo.",
        solucion: "Rescatar y fortalecer la CCSS en salud y pensiones, y universalizar pensiones con una Pensión Básica Universal (PBU) de financiamiento mixto.",
        ejecucion: "1) Diagnóstico financiero/actuarial y de gobernanza. 2) Medidas de fortalecimiento de CCSS. 3) Diseñar PBU (monto, elegibilidad, financiamiento mixto). 4) Implementación gradual y evaluación anual."
      }
    ]
  },
  {
    area: AreaName.Agricultura,
    propuestas: [
      {
        problema: "El sector agro enfrenta crisis estructural: abandono, desorganización institucional, baja innovación y vulnerabilidad climática.",
        solucion: "Fortalecer el MAG como rector técnico ágil, integrar innovación digital/agricultura de precisión, y crear Ventanilla Única de Servicios Agroalimentarios.",
        ejecucion: "1) Reorganizar capacidades técnicas del MAG. 2) Implementar Ventanilla Única (trámites, asesoría, servicios). 3) Introducir herramientas de agricultura de precisión y buenas prácticas ambientales. 4) Seguimiento con métricas de productividad y adopción tecnológica."
      },
      {
        problema: "Productores carecen de financiamiento adecuado y apoyo para inversión y transición productiva.",
        solucion: "Impulsar inversión con líneas de crédito, cooperación, APP; y facilitar crédito/herramientas financieras para inversión y producción sostenible.",
        ejecucion: "1) Definir portafolio de financiamiento (crédito, concesional, cooperación, APP). 2) Canalizar recursos hacia inversión productiva. 3) Acompañar con asistencia técnica. 4) Medir acceso efectivo al crédito y resultados productivos."
      },
      {
        problema: "Baja integración generacional y pocas oportunidades para jóvenes, mujeres y personas con discapacidad en el agro.",
        solucion: "Crear incubadoras “en finca” y créditos especiales “Futuro Rural” para liderar transformación del campo.",
        ejecucion: "1) Identificar fincas/zonas para incubadoras. 2) Diseñar instrumentos de crédito y mentoría. 3) Selección de beneficiarios (jóvenes, mujeres, discapacidad). 4) Acompañamiento y medición de resultados (ingresos, productividad, permanencia)."
      },
      {
        problema: "Riesgo climático y necesidad de sostenibilidad del agro.",
        solucion: "Transitar a producción regenerativa y resistente al cambio climático; fortalecer resiliencia y gestión integral de riesgos.",
        ejecucion: "1) Definir estándares de prácticas regenerativas (suelo, agua, biodiversidad). 2) Incentivos y asistencia técnica. 3) Seguros y gestión de riesgos ante eventos climáticos. 4) Monitoreo de indicadores ambientales y productivos."
      },
      {
        problema: "Seguridad alimentaria vulnerable y necesidad de garantizar inocuidad.",
        solucion: "Priorizar seguridad alimentaria con enfoque de “Seguridad Alimentaria Inteligente” y un sello de calidad/inocuidad.",
        ejecucion: "1) Definir canasta prioritaria y capacidades de producción local. 2) Establecer estándares de inocuidad y sello. 3) Complementar con comercio internacional estratégico. 4) Auditorías e indicadores de abastecimiento."
      }
    ]
  },
  {
    area: AreaName.Telecomunicaciones,
    propuestas: [
      {
        problema: "Se requiere un ecosistema robusto de telecomunicaciones para competitividad, modernización y acceso ciudadano a soluciones seguras.",
        solucion: "Asegurar seguridad jurídica del espectro/frecuencias, modernizar tecnológicamente el ICE, garantizar conectividad universal como derecho y fortalecer rectoría del MICITT (ciberseguridad).",
        ejecucion: "1) Ordenar marco y seguridad jurídica de frecuencias. 2) Ejecutar modernización tecnológica del ICE. 3) Programas para acceso universal y equitativo. 4) Fortalecer MICITT y coordinación en ciberseguridad. 5) Medir cobertura/calidad y brechas."
      }
    ]
  },
  {
    area: AreaName.Turismo,
    propuestas: [
      {
        problema: "El turismo enfrenta pérdida de competitividad y riesgos climáticos; además se requiere más sostenibilidad y encadenamientos locales.",
        solucion: "Implementar “Turismo carbono cero positivo: Costa Rica 2030” (corredores biológicos, reforestación y fondo de compensación) y promover adopción del CST en micro y pequeñas empresas.",
        ejecucion: "1) Crear programa sectorial carbono-cero-positivo. 2) Financiar corredores biológicos y reforestación con fondo nacional. 3) Incentivar y acompañar adopción CST en MIPYMEs. 4) Campañas a turistas/comunidades. 5) Medir huella y adopción CST."
      },
      {
        problema: "Beneficios del turismo no siempre llegan a comunidades y falta modernización/digitalización de MIPYMEs turísticas.",
        solucion: "Fortalecer participación comunitaria, cadenas de valor locales y apoyar MIPYMEs con digitalización, financiamiento y formalización.",
        ejecucion: "1) Programas de encadenamiento local (compras a productores/artesanía/gastronomía). 2) Paquetes de digitalización para MIPYMEs. 3) Facilitar financiamiento y formalización. 4) Medir empleo local y compras locales."
      }
    ]
  },
  {
    area: AreaName.Economia,
    propuestas: [
      {
        problema: "MIPYMEs debilitadas sin financiamiento/acompañamiento y alta exclusión financiera (~40% fuera del sistema formal).",
        solucion: "Gestionar un crédito soberano de USD 500M canalizado por el SBD para créditos, avales, capital semilla, asistencia técnica, capacitación y articulación de encadenamientos (con figura del articulador).",
        ejecucion: "1) Negociar crédito soberano con banca multilateral. 2) Canalizar fondos vía SBD. 3) Definir componentes (crédito, avales, semilla, asistencia). 4) Implementar articuladores que conecten MIPYMEs con empresas ancla. 5) Medir colocación y resultados."
      },
      {
        problema: "Personas endeudadas quedan excluidas del crédito formal, limitando movilidad económica.",
        solucion: "Implementar un “Programa de Rehabilitación Crediticia” (no condonación) para reinclusión financiera coordinada con reguladores.",
        ejecucion: "1) Diseñar ruta de rehabilitación (pagos, reestructuración, educación financiera). 2) Alinear con reguladores y banca. 3) Implementar por fases. 4) Medir reinclusión y morosidad."
      },
      {
        problema: "Inestabilidad y pérdida de competitividad por política fiscal/monetaria y sesgo cambiario; además, debilitamiento institucional para inversión/productividad.",
        solucion: "Paquete macroeconómico: mejorar calidad del gasto y recaudación; mandato dual del Banco Central (inflación y uso de recursos); eliminar sesgo cambiario; y fortalecer atracción de IED (CINDE) y banca de desarrollo.",
        ejecucion: "1) Auditoría de gasto y modernización de recaudación. 2) Reforma del mandato del BCCR y medidas sobre encajes/reservas. 3) Acciones para reducir sesgo cambiario. 4) Reforzar CINDE y Banca para el Desarrollo. 5) Seguimiento de indicadores (empleo, inversión, competitividad)."
      },
      {
        problema: "Brecha de financiamiento enorme en infraestructura y baja ejecución histórica de proyectos.",
        solucion: "Modernizar el marco legal de APP (nueva ley) y ampliar su alcance a telecomunicaciones, electricidad, salud y obras portuarias; además crear capacidades internas (Project Finance).",
        ejecucion: "1) Aprobar ley marco APP y fortalecer CNC. 2) Crear unidad especializada de Project Finance en Hacienda. 3) Armar portafolio de proyectos con evaluación sistemática. 4) Ejecutar APP con transparencia y control."
      }
    ]
  },
  {
    area: AreaName.Seguridad,
    propuestas: [
      {
        problema: "Crecimiento de criminalidad vinculada a narcotráfico, homicidios, trata, armas, lavado, ciberataques y violencia contra mujeres.",
        solucion: "Implementar un Centro C5 para mejorar seguridad, blindar fronteras (aérea/terrestre/marítima) y potenciar respuesta a emergencias.",
        ejecucion: "1) Diseñar arquitectura y operación del C5. 2) Integrar cámaras/sensores/datos para fronteras y ciudades. 3) Conectar con policía y emergencias. 4) Capacitar operadores. 5) Medir tiempos de respuesta y reducción de incidentes."
      },
      {
        problema: "Capacidad insuficiente para contención del delito y presión sobre sistema penitenciario.",
        solucion: "Construir/habilitar más espacios carcelarios (Centro Multinivel para privados de libertad de bajo perfil) y mejorar infraestructura penitenciaria.",
        ejecucion: "1) Identificar necesidad de cupos por perfil. 2) Diseñar y construir centro multinivel. 3) Implementar mejoras graduales de infraestructura existente. 4) Evaluar impacto en hacinamiento y reincidencia."
      },
      {
        problema: "Déficit de personal y recursos operativos para seguridad y atención integral de violencia intrafamiliar.",
        solucion: "Crear 6.000 nuevas plazas policiales; reforzar flota (compra/reparación) y crear/operar patrullas especializadas (ej. “Patrullas Fucsia”).",
        ejecucion: "1) Plan de reclutamiento y distribución territorial. 2) Comprar/reparar vehículos y reasignar incautados. 3) Capacitar y desplegar patrullas especializadas. 4) Medir cobertura y tiempos de respuesta."
      },
      {
        problema: "Necesidad de evidencia forense y control del tráfico ilícito en puertos y fronteras.",
        solucion: "Crear un Laboratorio Balístico Biométrico (LABB) y comprar/instalar escáneres avanzados y sellos/precintos inteligentes para contenedores.",
        ejecucion: "1) Montar LABB con equipo y personal. 2) Instalar escáneres en puntos críticos. 3) Implementar sellos inteligentes con alertas de apertura. 4) Integrar datos con fiscalización e investigación."
      },
      {
        problema: "Prevención débil frente a narco-cultura y adicciones; poca educación digital y ciberseguridad personal.",
        solucion: "Programas educativos y preventivos (MEP/IAFA), más centros cívicos con oferta artística/deportiva, y programa nacional de bienestar digital con alfabetización mediática y ciberseguridad personal.",
        ejecucion: "1) Diseñar programas educativos (narco-cultura, adicciones, bienestar digital). 2) Implementar en escuelas/colegios con módulos obligatorios. 3) Fortalecer oferta de centros cívicos para la paz. 4) Evaluar cambios en conductas y reportes."
      }
    ]
  },
  {
    area: AreaName.Ambiente,
    propuestas: [
      {
        problema: "Retroceso institucional y de gobernanza ambiental; debilitamiento de entes técnicos y rezago climático.",
        solucion: "Fortalecer MINAE y entes (SINAC, SETENA, IMN, etc.), ratificar Escazú, crear Consejo de Gobernanza Marina y modernizar leyes ambientales.",
        ejecucion: "1) Reorganizar y financiar entes técnicos. 2) Ratificar Escazú y crear gobernanza marina. 3) Presentar reformas legales clave. 4) Medir desempeño (protección, fiscalización, metas climáticas)."
      },
      {
        problema: "Riesgo de actividades extractivas/contaminantes y falta de incentivos para conservar.",
        solucion: "Frenar proyectos extractivos usando digitalización de activos ambientales para compensar económicamente la no extracción; y crear un Banco Verde para canalizar fondos internacionales a gobiernos locales, PYMEs y comunidades.",
        ejecucion: "1) Definir metodología de activos ambientales y compensación. 2) Crear instrumentos financieros/transables con supervisión. 3) Crear y operar Banco Verde con criterios claros. 4) Asignar fondos a proyectos verificables."
      },
      {
        problema: "Transición lenta a economía circular y gestión deficiente de residuos sólidos.",
        solucion: "Diseñar Política Nacional de Economía Circular 2026–2035, alianzas público-privadas con municipalidades y tecnologías de valorización energética.",
        ejecucion: "1) Diseñar política 2026–2035 con metas. 2) Ejecutar pilotos con municipalidades y sector privado. 3) Introducir tecnologías (valorización energética, recuperación). 4) Medir reducción de residuos y aumento de recuperación."
      },
      {
        problema: "Deterioro en saneamiento/agua y proyectos estancados; fragmentación institucional.",
        solucion: "Rescatar proyectos (Orosi II y plantas), liberar uso del 100% de recursos de cánones, y ejecutar un plan de inversión por cuenca con visión mediano/largo plazo.",
        ejecucion: "1) Priorizar proyectos críticos y reactivar obras. 2) Liberar y dirigir fondos de cánones a inversiones. 3) Diseñar plan por cuenca con metas. 4) Monitorear continuidad/calidad/cobertura del servicio."
      }
    ]
  },
  {
    area: AreaName.Infraestructura,
    propuestas: [
      {
        problema: "Rezago en obra pública y lentitud en proyectos viales críticos; falta de herramientas técnicas para mantenimiento y priorización.",
        solucion: "Finalizar proyectos viales prioritarios y activar nuevos; modernizar marco legal (expropiaciones y APP) e implementar Sistema de Gestión de Activos Viales (SGAV) para CONAVI.",
        ejecucion: "1) Definir plan por proyecto con hitos y responsables. 2) Agilizar expropiaciones y mecanismos APP. 3) Implementar SGAV con datos bianuales (Lanamme-UCR). 4) Priorizar mantenimiento por evidencia. 5) Publicar avances."
      },
      {
        problema: "Transporte público masivo y ferrocarril requieren rectoría y modernización para movilidad y logística país.",
        solucion: "Crear/ajustar un ente rector del transporte público que sustituya CTP/Tribunal e incluya INCOFER; modernizar ferrocarril (GAM y periferia) para carga y pasajeros con intermodalidad.",
        ejecucion: "1) Reformar gobernanza del transporte público. 2) Diseñar plan ferroviario (carga/pasajeros) e infraestructura intermodal. 3) Implementar por fases con financiamiento y metas. 4) Medir tiempos de viaje, demanda y costo logístico."
      },
      {
        problema: "Sistema energético necesita nueva generación de políticas para mantener limpieza, seguridad y precios competitivos.",
        solucion: "Fortalecer rectoría del MINAE, modernizar gobernanza/planificación del ICE e incorporar almacenamiento, redes inteligentes y generación distribuida con marco regulatorio ágil.",
        ejecucion: "1) Ajustar rectoría y planificación energética. 2) Modernizar estructura y contratación del ICE. 3) Implementar almacenamiento/redes inteligentes y generación distribuida. 4) Convenios con universidades y fondos concursables para I+D. 5) Medir precio, confiabilidad y penetración tecnológica."
      }
    ]
  },
  {
    area: AreaName.Vivienda,
    propuestas: [
      {
        problema: "Déficits de vivienda digna, precariedad extrema y trámites lentos; necesidad de vivienda como política prioritaria y motor económico.",
        solucion: "Garantizar recursos y ritmo constructivo (coordinación Banhvi–SBD), atender precariedad extrema simplificando reglas y modernizar el sistema reduciendo tiempos; además, ley para clarificar rectoría del Ministerio de Vivienda también en planificación urbana/territorial.",
        ejecucion: "1) Alinear financiamiento Banhvi–SBD para metas anuales. 2) Simplificar reglas para soluciones en zonas precarizadas. 3) Eliminar trámites innecesarios y digitalizar procesos. 4) Reducir tiempos de espera con indicadores públicos. 5) Aprobar ley de rectoría clara."
      },
      {
        problema: "Ordenamiento territorial y planificación urbana fragmentados, con desigualdades regionales y baja coordinación.",
        solucion: "Promover una nueva Ley de Ordenamiento Territorial y reactivar/fortalecer el Sistema Nacional del Hábitat (SNH); impulsar plataforma interoperable de ordenamiento territorial con datos abiertos.",
        ejecucion: "1) Actualizar marco legal y rectoría. 2) Reactivar SNH y mesas temáticas. 3) Asistir a gobiernos locales en planes reguladores. 4) Implementar plataforma interoperable (catastro, registros, SIG). 5) Capacitar gobiernos locales y medir avance."
      }
    ]
  },
  {
    area: AreaName.Salud,
    propuestas: [
      {
        problema: "Sistema de salud con fragmentación, rigidez institucional, desigualdades territoriales y listas de espera; debilitamiento de gobernanza CCSS.",
        solucion: "Salud universal y expansión del primer nivel (EBAIS/clínicas) con más resolutividad; redes integradas; plan para listas de espera con metas anuales; y devolver autonomía a la CCSS con plan de pago del Estado.",
        ejecucion: "1) Definir paquete de salud primaria universal. 2) Expandir EBAIS/clínicas con protocolos. 3) Implementar redes integradas (primaria–especializada). 4) Metas anuales para listas de espera y gestión de citas. 5) Plan de pago Estado–CCSS y mejora de gobernanza."
      },
      {
        problema: "Crisis de salud mental y falta de servicios en regiones; brechas de personal de salud.",
        solucion: "Reforzar salud mental (atención obligatoria en hospitales regionales, CECOSAM, capacitación) y realizar diagnóstico de brechas de talento humano para formar y retener personal.",
        ejecucion: "1) Diagnóstico nacional de brechas de personal. 2) Programas de formación/retención. 3) Crear CECOSAM y exigir atención en hospitales regionales. 4) Capacitar personal. 5) Medir cobertura y tiempos de atención en salud mental."
      },
      {
        problema: "Incorporación lenta o poco eficiente de tecnologías sanitarias y gestión de datos clínicos.",
        solucion: "Crear comité de evaluación tecnológica basado en evidencia y costo-efectividad, y fortalecer digitalización/uso de analítica para orientar políticas.",
        ejecucion: "1) Instalar comité técnico con criterios claros. 2) Evaluar medicamentos/equipos con evidencia y costo-efectividad. 3) Implementar sistemas de información con protección de privacidad. 4) Usar analítica para decisiones y monitoreo."
      }
    ]
  }
]
