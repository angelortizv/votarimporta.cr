import { AreaName, AreaPropuestas, Propuesta } from "@/lib/data";

export const juanCarlosHidalgoPropuestas: AreaPropuestas[] = [
  {
    area: AreaName.Educacion,
    propuestas: [
      {
        problema: "Muchos estudiantes avanzan sin dominar lectura, escritura y matemáticas, y las brechas se acumulan desde primaria.",
        solucion: "Reorientar el sistema hacia logros básicos medibles y recuperar aprendizajes con planes focalizados por centro educativo.",
        ejecucion: "1) Definir metas claras de aprendizaje por ciclo. 2) Aplicar diagnósticos periódicos. 3) Implementar refuerzos y tutorías donde haya rezago. 4) Dar seguimiento con indicadores públicos por escuela/colegio."
      },
      {
        problema: "La educación y la formación para el trabajo no están suficientemente conectadas con habilidades STEAM, idiomas y demanda productiva.",
        solucion: "Fortalecer formación técnica y habilidades STEAM/bilingüismo con coordinación entre MEP, INA y sector productivo.",
        ejecucion: "1) Identificar perfiles laborales demandados por región. 2) Ajustar currículos y programas técnicos. 3) Expandir oferta de idiomas y STEAM. 4) Medir inserción laboral y ajustar anualmente."
      },
      {
        problema: "El acceso y permanencia educativa se dificulta para hogares vulnerables por costos indirectos y brechas territoriales.",
        solucion: "Mejorar apoyos y mecanismos de permanencia con focalización y coordinación interinstitucional.",
        ejecucion: "1) Unificar y depurar padrones de beneficiarios. 2) Priorizar territorios y poblaciones con mayor abandono. 3) Simplificar trámites y pagos. 4) Evaluar impacto (asistencia, promoción, graduación)."
      }
    ]
  },
  {
    area: AreaName.Tecnologia,
    propuestas: [
      {
        problema: "Brechas de conectividad y exclusión digital: centros educativos y hogares de bajos ingresos sin internet de alta velocidad.",
        solucion: "Cerrar brecha digital con expansión de cobertura y subsidio al acceso a internet para hogares en pobreza.",
        ejecucion: "1) Mapear zonas sin cobertura/velocidad adecuada. 2) Priorizar inversión y despliegue en zonas rurales, costeras e indígenas. 3) Usar subsidios a hogares vulnerables. 4) Medir cobertura, velocidad y uso efectivo."
      },
      {
        problema: "El Estado digital avanza lento: trámites fragmentados y baja interoperabilidad entre instituciones.",
        solucion: "Acelerar la digitalización del Estado e interoperabilidad para que trámites y servicios funcionen de forma integrada.",
        ejecucion: "1) Definir estándares comunes (identidad, firma, datos). 2) Integrar plataformas y eliminar duplicidades. 3) Priorizar trámites de mayor impacto ciudadano. 4) Publicar métricas (tiempos y costos)."
      },
      {
        problema: "Ciberamenazas crecientes y respuesta nacional poco coordinada.",
        solucion: "Crear/fortalecer capacidades 24/7 y coordinación interinstitucional para prevenir, detectar y responder a incidentes.",
        ejecucion: "1) Establecer centro operativo 24/7. 2) Protocolos unificados de respuesta. 3) Capacitar talento especializado. 4) Auditorías y simulacros periódicos."
      }
    ]
  },
  {
    area: AreaName.DeporteYCultura,
    propuestas: [
      {
        problema: "Débil acceso territorial a programas culturales y poca articulación entre instituciones, gobiernos locales y comunidad.",
        solucion: "Implementar un Plan Nacional de Recuperación Cultural para reactivar programas en todo el territorio.",
        ejecucion: "1) Actualizar política cultural. 2) Articular MCJ, gobiernos locales, comunidad y sector privado. 3) Relanzar programas y circuitos culturales por región. 4) Monitorear cobertura y participación."
      },
      {
        problema: "El sector artístico-creativo opera con alta informalidad y poco acceso a financiamiento y mercados.",
        solucion: "Programa de formalización y desarrollo: capacitación, crédito y acceso a instrumentos del Sistema de Banca para el Desarrollo.",
        ejecucion: "1) Diseñar ruta de formalización (trámites simples). 2) Capacitación en gestión y comercialización. 3) Acceso a crédito y acompañamiento. 4) Apoyo a exportación cultural y redes de mercados."
      },
      {
        problema: "Baja actividad física, infraestructura deportiva con mantenimiento irregular y desigualdad territorial en acceso al deporte.",
        solucion: "Masificar deporte y actividad física usando instalaciones educativas y comunitarias, con programación regular y seguridad.",
        ejecucion: "1) Garantizar educación física y oferta extraescolar en escuelas/colegios. 2) Abrir instalaciones fuera de horario lectivo (incluyendo universidades). 3) Programar actividades gratuitas con comités cantonales. 4) Medir participación y mantenimiento."
      },
      {
        problema: "Infraestructura deportiva (canchas, ciclovías, Estadio Nacional, sedes de Juegos Nacionales) con deterioro y poco uso planificado.",
        solucion: "Plan de mantenimiento y recuperación del legado deportivo + expansión de infraestructura estratégica.",
        ejecucion: "1) Inventariar infraestructura y necesidades. 2) Contratos por desempeño y calendarios públicos de mantenimiento. 3) Convenios municipio-comités para sostener sedes. 4) Prefactibilidad y concesiones para nuevas obras (p.ej., gimnasio nacional)."
      }
    ]
  },
  {
    area: AreaName.Pensiones,
    propuestas: [
      {
        problema: "Sistemas de pensiones enfrentan presiones de sostenibilidad y percepción de inequidades entre regímenes.",
        solucion: "Revisar y modernizar reglas para mejorar sostenibilidad y equidad entre regímenes, protegiendo pensiones bajas.",
        ejecucion: "1) Diagnóstico actuarial por régimen. 2) Propuesta de ajustes paramétricos y de gobernanza. 3) Transición gradual con protección a pensiones mínimas. 4) Transparencia y rendición de cuentas periódica."
      }
    ]
  },
  {
    area: AreaName.Agricultura,
    propuestas: [
      {
        problema: "Productores enfrentan altos costos, tramitología, baja productividad y poca coordinación institucional efectiva.",
        solucion: "Fortalecer la rectoría del MAG, simplificar trámites y coordinar instituciones (crédito, riego, semillas, sanidad, extensión) con metas medibles.",
        ejecucion: "1) Definir líneas de mando y coordinación sectorial liderada por MAG. 2) Simplificar trámites y asegurar seguridad jurídica. 3) Establecer metas por región (productividad y empleo). 4) Evaluar resultados con indicadores públicos."
      },
      {
        problema: "Bajo valor agregado e innovación limitada en la producción agropecuaria, con retos de resiliencia climática y seguridad alimentaria.",
        solucion: "Desarrollar clústeres de biotecnología y agricultura tropical para innovar en insumos, materiales y soluciones productivas.",
        ejecucion: "1) Identificar cadenas y regiones prioritarias. 2) Vincular academia-empresa-productores. 3) Financiar I+D aplicada y pilotos. 4) Escalar adopción y medir productividad."
      },
      {
        problema: "Acceso insuficiente a financiamiento, seguros y apoyo diferenciado para pequeños/medianos productores, mujeres y jóvenes.",
        solucion: "Consolidar un sistema de financiamiento y seguros con instrumentos específicos y trato diferenciado.",
        ejecucion: "1) Diseñar productos financieros sectoriales (crédito/seguros). 2) Acciones afirmativas para poblaciones prioritarias. 3) Acompañamiento técnico para elegibilidad. 4) Monitorear colocación, mora y resultados productivos."
      },
      {
        problema: "Limitaciones de infraestructura productiva y logística rural (riego, caminos, almacenamiento, mercados y conectividad).",
        solucion: "Desplegar infraestructura productiva y logística con mantenimiento asegurado y coordinación interinstitucional.",
        ejecucion: "1) Priorizar proyectos por región. 2) Asegurar financiamiento y mantenimiento en presupuesto. 3) Ejecutar con coordinación INDER y otras instituciones. 4) Evaluar impacto en costos, pérdidas y acceso a mercados."
      }
    ]
  },
  {
    area: AreaName.Telecomunicaciones,
    propuestas: [
      {
        problema: "Implementación de 5G lenta/limitada y riesgo de procesos politizados en concesiones del espectro.",
        solucion: "Acelerar 5G con libre competencia, neutralidad tecnológica, seguridad y procesos técnicos y transparentes.",
        ejecucion: "1) Establecer reglas claras de despliegue 5G. 2) Asignación/renovación de espectro con criterios técnicos y transparencia. 3) Protección de infraestructura crítica. 4) Seguimiento de cobertura y calidad."
      },
      {
        problema: "Brecha digital en zonas rurales, costeras e indígenas y hogares vulnerables.",
        solucion: "Ampliar cobertura de alta velocidad y subsidiar acceso a internet a hogares pobres vía FONATEL.",
        ejecucion: "1) Identificar zonas rezagadas. 2) Expandir redes. 3) Otorgar subsidios focalizados. 4) Medir cobertura, uso y resultados (educación/telemedicina/trámites)."
      },
      {
        problema: "Regulación lenta para innovación (nuevos modelos de negocio) y falta de evidencia regulatoria.",
        solucion: "Implementar al menos un sandbox regulatorio para probar innovaciones con protección al usuario y competencia leal.",
        ejecucion: "1) Diseñar el sandbox (alcance, reglas, métricas). 2) Seleccionar pilotos. 3) Evaluar resultados. 4) Ajustar regulación basada en evidencia."
      }
    ]
  },
  {
    area: AreaName.Turismo,
    propuestas: [
      {
        problema: "El turismo requiere mejores condiciones de seguridad, conectividad e infraestructura para sostener y ampliar la llegada de visitantes.",
        solucion: "Integrar seguridad turística con operativos territoriales y mejoras en corredores estratégicos y transporte.",
        ejecucion: "1) Definir puntos críticos turísticos. 2) Operativos coordinados (carreteras, contrabando, robos, sicariato). 3) Sincronizar con obras viales/infraestructura logística. 4) Evaluar incidencias y percepción de seguridad."
      },
      {
        problema: "La competitividad turística se frena por rezagos de infraestructura vial, aeroportuaria y portuaria y servicios de transporte público.",
        solucion: "Modernizar infraestructura y transporte con planificación, financiamiento claro y alianzas público-privadas.",
        ejecucion: "1) Priorizar obras por impacto turístico y productivo. 2) Asegurar fuentes de financiamiento antes de iniciar. 3) Ejecutar con APP/concesiones donde aplique. 4) Medir tiempos de traslado, costos y experiencia del usuario."
      }
    ]
  },
  {
    area: AreaName.Economia,
    propuestas: [
      {
        problema: "Alta informalidad (más de 40%) y trámites excesivos que frenan empleo formal y crecimiento de sectores rezagados.",
        solucion: "'Emparejar la cancha' con reglas claras, competencia efectiva, instituciones ágiles y políticas que premien productividad y reduzcan costos.",
        ejecucion: "1) Identificar principales cuellos de botella regulatorios. 2) Simplificar trámites y digitalizarlos. 3) Fortalecer competencia y clima de inversión. 4) Medir creación de empleo formal y productividad por sector/región."
      },
      {
        problema: "Asignación de recursos públicos sin prioridades claras, mientras áreas críticas (seguridad, cuido, educación) requieren refuerzo.",
        solucion: "Recomponer el gasto público para redirigir recursos hacia prioridades nacionales.",
        ejecucion: "1) Definir prioridades y metas. 2) Reasignar partidas desde rubros menos prioritarios. 3) Proteger límites macro de sostenibilidad fiscal. 4) Publicar seguimiento anual de reasignación y resultados."
      }
    ]
  },
  {
    area: AreaName.Seguridad,
    propuestas: [
      {
        problema: "Crisis de seguridad requiere recursos extraordinarios, pero la interpretación de la regla fiscal limita inversión en seguridad.",
        solucion: "Flexibilizar la regla fiscal para permitir más recursos a seguridad, compensados con ahorros en áreas menos prioritarias.",
        ejecucion: "1) Ajustar interpretación/reglas de aplicación. 2) Definir montos extraordinarios y destinos. 3) Compensar con recortes/ahorros en otros rubros. 4) Auditoría y publicación de resultados."
      },
      {
        problema: "Policías sin equipamiento suficiente y falta de inversión sostenida en tecnología, infraestructura y capacitación.",
        solucion: "Crear un Fondo de Seguridad Nacional financiado con venta de activos estatales y subejecución presupuestaria.",
        ejecucion: "1) Crear legalmente el fondo y su gobernanza. 2) Definir fuentes (venta de activos y traslados de subejecución). 3) Invertir en tecnología, comunicaciones, centros de comando, equipo y capacitación. 4) Reportes periódicos de ejecución."
      },
      {
        problema: "Crimen organizado y delitos violentos requieren mejor control territorial e inteligencia coordinada.",
        solucion: "Operativos policiales territoriales + centro conjunto de inteligencia policial para intercambio de información entre fuerzas del orden.",
        ejecucion: "1) Definir corredores y sitios estratégicos. 2) Desplegar operativos coordinados (armas, drogas, contrabando, órdenes, migración irregular). 3) Crear centro de inteligencia y conectar con ciberseguridad y analítica de datos. 4) Ajustar despliegues según resultados."
      },
      {
        problema: "Ganancias del mercado ilegal de cannabis alimentan al crimen organizado (si el consumo personal ya es legal).",
        solucion: "Legalizar la comercialización del cannabis para uso recreativo, actualizando el marco legal.",
        ejecucion: "1) Reformar marco legal (incluyendo el medicinal). 2) Crear regulación de producción/venta y controles. 3) Supervisión y sanciones. 4) Medir impacto en crimen organizado y salud pública."
      }
    ]
  },
  {
    area: AreaName.Ambiente,
    propuestas: [
      {
        problema: "Riesgos en agua potable y saneamiento; proyectos críticos pendientes afectan calidad y disponibilidad.",
        solucion: "Impulsar proyectos de agua y saneamiento (p.ej., Agua para Guanacaste, Orosi II, tratamiento de aguas residuales) y fortalecer ASADAS.",
        ejecucion: "1) Priorizar proyectos por riesgo/impacto. 2) Asegurar financiamiento y cronogramas. 3) Ejecutar obras y sistemas de tratamiento. 4) Fortalecer capacidades y gobernanza de ASADAS con seguimiento de calidad/cobertura."
      },
      {
        problema: "Modelo productivo necesita integrar sostenibilidad, economía circular y resiliencia climática sin dejar atrás territorios rurales.",
        solucion: "Agenda de economía circular y energía limpia: regularizar recicladores, generar energía con residuos, NAMAS 2.0 y cogestión de parques nacionales.",
        ejecucion: "1) Marco normativo y metas por sector. 2) Formalización de recicladores y cadenas de valor. 3) Proyectos de valorización energética de residuos y movilidad eléctrica. 4) Modelos de cogestión y monitoreo en parques nacionales."
      },
      {
        problema: "Necesidad de coordinación y ciencia aplicada para enfrentar riesgos climáticos y acceder a finanzas de adaptación.",
        solucion: "Fortalecer capacidades institucionales y crear un Nodo Nacional de Ciencia Climática, impulsando mecanismos financieros y seguros climáticos.",
        ejecucion: "1) Diseñar gobernanza del nodo y coordinación interinstitucional. 2) Producir información útil para políticas y sectores productivos. 3) Gestionar financiamiento internacional y seguros climáticos. 4) Evaluar reducción de riesgos y pérdidas."
      }
    ]
  },
  {
    area: AreaName.Infraestructura,
    propuestas: [
      {
        problema: "Rezago en infraestructura y dispersión institucional en transporte: duplicidades y baja eficiencia en planificación/ejecución.",
        solucion: "Dividir el MOPT en dos entes (Infraestructura y Movilidad/Gestión Urbana) para administraciones más fuertes y focalizadas.",
        ejecucion: "1) Diseñar reforma institucional y funciones. 2) Aprobar cambios legales/organizacionales. 3) Implementar transición y reasignación de competencias. 4) Medir tiempos de ejecución y calidad de proyectos."
      },
      {
        problema: "Proyectos se atrasan por falta de estructuración para APP/concesiones y debilidades del modelo de concesiones.",
        solucion: "Transformar el Consejo Nacional de Concesiones en una Agencia Nacional de Infraestructura con gobernanza público-privada.",
        ejecucion: "1) Reforma institucional del CNC. 2) Crear gobernanza y reglas de estructuración. 3) Priorizar proyectos usando el banco de MIDEPLAN. 4) Preparar proyectos completos (preinversión) para atraer inversión y concesiones."
      },
      {
        problema: "Transporte público insuficiente y congestión: falta de soluciones masivas y modernización tecnológica.",
        solucion: "Desarrollar transporte masivo (BTR y tren eléctrico urbano) con financiamiento sostenible y alianzas público-privadas; modernizar flotas y sectorización.",
        ejecucion: "1) Estudios de demanda y trazados prioritarios. 2) Estructurar APP/financiamiento. 3) Implementar sectorización y renovación/electrificación de flotas. 4) Integrar control y plataformas digitales reguladas."
      }
    ]
  },
  {
    area: AreaName.Vivienda,
    propuestas: [
      {
        problema: "Sistema institucional fragmentado (MIVAH/INVU/BANHVI) y tramitología redundante que encarece y retrasa permisos de construcción.",
        solucion: "Reestructurar el ecosistema: fusionar MIVAH e INVU y fortalecer BANHVI; simplificar y digitalizar permisos con plazos exigibles.",
        ejecucion: "1) Proyecto de ley de fusión institucional. 2) Programa de transición con comité y capacitación. 3) Digitalizar trámites y eliminar redundancias interinstitucionales. 4) Establecer control de plazos y costos por municipalidad."
      },
      {
        problema: "Dificultad de acceso a vivienda para clase media y persistencia de precarios con necesidades específicas.",
        solucion: "Crear un Fondo Nacional de Vivienda de Clase Media (FONAVI-CM) movilizando recursos de fondos de pensiones, y fortalecer el Bono Colectivo para asentamientos precarios.",
        ejecucion: "1) Diseñar esquema regulado del fondo (riesgos y retornos). 2) Ajustar normativa para canalizar recursos. 3) Aumentar recursos del Bono Colectivo y adecuar reglas para casos específicos. 4) Supervisar asignación y resultados (unidades, tiempos, calidad)."
      },
      {
        problema: "Déficit cualitativo: muchas viviendas requieren mejoras y reparaciones para condiciones dignas.",
        solucion: "Financiar reparación y mejora de viviendas existentes para reducir déficit cualitativo habitacional.",
        ejecucion: "1) Identificar viviendas prioritarias (criterios técnicos/sociales). 2) Diseñar financiamiento/subsidios según perfil. 3) Ejecutar obras con control de calidad. 4) Verificar mejoras y condiciones de habitabilidad."
      }
    ]
  },
  {
    area: AreaName.Salud,
    propuestas: [
      {
        problema: "Servicios de salud enfrentan presión por demanda, tiempos de espera y necesidades de modernización de gestión y capacidad instalada.",
        solucion: "Fortalecer gestión y capacidad del sistema (incluyendo redes de atención primaria y mejor administración de recursos).",
        ejecucion: "1) Diagnóstico de cuellos de botella (listas de espera y capacidad). 2) Reordenar procesos y priorización clínica. 3) Mejorar coordinación de redes y uso de tecnología. 4) Monitorear tiempos de espera e indicadores de atención."
      },
      {
        problema: "Acceso limitado a servicios digitales esenciales en zonas rurales (p.ej., telemedicina y trámites).",
        solucion: "Expandir servicios digitales esenciales en zonas rurales, garantizando accesibilidad y calidad.",
        ejecucion: "1) Asegurar conectividad y equipos. 2) Capacitar personal y usuarios. 3) Implementar telemedicina y servicios digitales prioritarios. 4) Medir uso, satisfacción y resultados en salud."
      }
    ]
  }
]
