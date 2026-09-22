import type { PortfolioContent, Project, SideProject } from "./types";

/**
 * Spanish is not a translation of the English page word for word: it is the same claims
 * written the way they would be said to a Spanish-speaking client. Proper nouns, product
 * names, stack names, figures and sources stay verbatim — a metric's source has to match
 * what the client published, in whatever language they published it.
 */

const projects: Project[] = [
  {
    slug: "medisapience",
    index: "01",
    name: "MediSapience",
    shortName: "MS",
    category: "SaaS de educación médica",
    status: "En producción",
    platform: "Aplicación web",
    role: "Ingeniería de producto full-stack",
    year: "2025–2026",
    summary:
      "Una plataforma en producción que reúne el estudio, las evaluaciones, la administración y los reportes médicos en un solo producto coherente.",
    overview:
      "MediSapience convierte un banco de preguntas de examen en un producto que los estudiantes compran, con el que estudian y al que vuelven: práctica con retroalimentación inmediata, exámenes cronometrados, resultados por materia y tema, y un panel de operación que el equipo maneja sin llamar a un desarrollador.",
    clientContext:
      "MediSapience es una plataforma de estudio para médicos de Nicaragua que se preparan para el examen de ingreso a las especialidades médicas y quirúrgicas. Henry construyó la plataforma de punta a punta —del modelo de datos a producción— y la sigue desarrollando.",
    challenge:
      "La educación médica combina contenido extenso con evaluaciones de alto riesgo y mucha administración. El producto tenía que volver esos flujos claros para quien estudia y, al mismo tiempo, dar al equipo un control confiable por detrás.",
    solution:
      "Un solo motor que sirve muchos bancos de preguntas: la compra se traduce en acceso por banco, las sesiones se arman en el servidor, el contenido de cada pregunta se versiona para que las correcciones no invaliden los intentos pasados, y los pagos, las importaciones y el soporte ocurren en el panel de administración.",
    features: [
      {
        title: "Modo Práctica y modo Examen",
        description:
          "En Práctica el estudiante ve la retroalimentación, su razonamiento y la página que debe leer sobre la marcha; el modo Examen lo reserva todo hasta el final.",
      },
      {
        title: "Qué estudiar hoy",
        description:
          "Un puntaje transparente ordena cada tema por tasa de error, fallos, tiempo e intentos, y enlaza los más débiles con las páginas que hay que leer.",
      },
      {
        title: "Muchos bancos de preguntas, un solo motor",
        description:
          "Un banco nuevo es configuración, no un despliegue: contenido, planes, acceso, pagos y estadísticas quedan acotados a él.",
      },
      {
        title: "Un panel de operación para el equipo",
        description:
          "Preguntas, importaciones desde Excel, versiones, reportes, usuarios, planes y revisión de pagos — todo sin tocar la base de datos.",
      },
    ],
    engineering: [
      {
        title: "Conservar la historia de un banco que cambia",
        description:
          "Claves de pregunta estables, contenido versionado y respuestas que registran la versión que se vio, para que una corrección nunca invalide los intentos anteriores.",
      },
      {
        title: "Armar las sesiones cerca de los datos",
        description:
          "El servidor filtra por acceso y plan de estudios y devuelve solo la sesión, en vez de mandar un banco entero al navegador.",
      },
      {
        title: "Que una compra signifique el acceso correcto",
        description:
          "Las órdenes completadas de WooCommerce se mapean a un plan, y cada plan a un banco; los productos sin mapear esperan revisión en lugar de adivinar.",
      },
    ],
    architecture: [
      { label: "Navegador", detail: "Interfaz de estudiante y administración en Next.js y React, entregada por Vercel" },
      { label: "API", detail: "Django REST Framework en Railway, que acota cada petición al banco activo" },
      { label: "Datos y archivos", detail: "PostgreSQL, Google Cloud Storage y un CDN de imágenes en Cloudflare Worker" },
      { label: "Trabajo en segundo plano", detail: "Un worker de pagos aparte que lee los comprobantes de transferencia con OCR" },
    ],
    results:
      "En producción desde el 7 de enero de 2026, hoy sirve varios bancos de preguntas con reportes, recomendaciones de estudio y soporte para un estudio de investigación. Toda cifra publicada aparece abajo en los registros de métricas, cada una con su fuente.",
    technologies: [
      "Next.js", "React", "TypeScript", "Django", "Django REST Framework",
      "PostgreSQL", "WooCommerce", "Vercel", "Railway", "Cloudflare",
    ],
    // Publicado por MediSapience en medisapience.com y aprobado para este portafolio.
    metrics: [
      {
        value: "20,641+",
        label: "Respuestas registradas",
        source: "Publicado por MediSapience en medisapience.com",
        approved: true,
      },
      {
        value: "310+",
        label: "Suscriptores",
        source: "Publicado por MediSapience en medisapience.com",
        approved: true,
      },
      {
        value: "41%",
        label: "Suscriptores Premium que aprobaron",
        context: "El examen de ingreso a especialidades",
        source: "Publicado por MediSapience en medisapience.com",
        approved: true,
      },
      {
        value: "1 año",
        label: "En servicio",
        source: "Lanzada el 7 de enero de 2026",
        approved: true,
      },
    ],
    testimonial: {
      quote:
        "Cuando empezamos, yo tenía clara la visión del producto pero no cómo construirlo. Henry no se limitó a programar lo que le pedía: cuestionó alternativas, investigó soluciones y me ayudó a decidir pensando en el futuro del producto. Podemos partir de una idea, un documento o un mockup, y él lo convierte en una implementación que funciona. MediSapience pasó de un prototipo simple a una plataforma multibanco con estudio personalizado y analítica, sin perder los datos que ya habíamos generado.",
      highlight:
        "Encontré a alguien que no solo ejecuta una idea, sino que se involucra en entenderla, cuestionarla y encontrar la mejor forma de hacerla realidad.",
      name: "Dr. Yasser Silva Morales",
      role: "Fundador, MediSapience",
      initials: "YS",
      profile: {
        href: "https://www.linkedin.com/in/doctoryassersilvamorales/",
        label: "Ver el perfil del Dr. Yasser Silva Morales en LinkedIn",
      },
      approved: true,
    },
    testimonialSection: {
      title: "Lo dice el cliente.",
      intro:
        "Cómo fue construir MediSapience juntos, desde la primera versión hasta la plataforma que es hoy.",
    },
    liveUrl: "https://medisapience.com",
    media: [
      {
        kind: "screenshot",
        label: "Retroalimentación en modo Práctica",
        caption:
          "Modo Práctica: retroalimentación inmediata, el razonamiento detrás de ella y un enlace a la página que lo explica.",
      },
      {
        kind: "screenshot",
        label: "Qué estudiar hoy",
        caption:
          "Cinco temas prioritarios ordenados por desempeño, cada uno con preguntas para repasar y bibliografía recomendada.",
      },
    ],
  },
  {
    slug: "cem-nicaragua",
    index: "02",
    name: "CEM Digital",
    shortName: "CEM",
    category: "App de educación médica",
    status: "En producción",
    platform: "App web mobile-first (PWA)",
    role: "Ingeniería de producto full-stack",
    year: "2026",
    summary:
      "Una app mobile-first que reunió en un solo lugar los anuncios, las preguntas diarias, los exámenes cronometrados y las clases grabadas de CEM Nicaragua.",
    overview:
      "CEM Digital es la app que los estudiantes de CEM Nicaragua instalan en su teléfono para seguir un curso: anuncios con el enlace a la clase en vivo, pregunta del día, simuladores cronometrados y un repositorio de archivos y grabaciones.",
    clientContext:
      "CEM Nicaragua (Cursos Especializados de Medicina) imparte cursos en línea para médicos, en vivo por Zoom.",
    challenge:
      "Cada curso estaba repartido entre Google Classroom, Microsoft Forms, Google Drive, Zoom y WhatsApp, con inicios de sesión distintos, costos distintos y cinco lugares que revisar.",
    solution:
      "Una sola app instalable reemplazó cuatro de esas herramientas. Los anuncios, la pregunta del día con respuesta programada, los simuladores que abren a una hora fija y los archivos del curso comparten un mismo feed y un mismo sistema de notificaciones; Zoom queda a un toque.",
    features: [
      {
        title: "Feed de anuncios",
        description:
          "Anuncios del curso con notificaciones push, adjuntos y un botón para entrar a la clase en vivo.",
      },
      {
        title: "Pregunta del día",
        description:
          "Una encuesta con respuesta correcta que se libera a la hora que elige el docente, con un push para todos los que votaron.",
      },
      {
        title: "Simuladores cronometrados",
        description:
          "Exámenes que abren a una hora programada, corren sobre un reloj del servidor y se autoguardan en el teléfono.",
      },
      {
        title: "Repositorio del curso",
        description:
          "Archivos y clases grabadas que se suben directo a Cloudflare R2 y se ven dentro de la app.",
      },
    ],
    engineering: [
      {
        title: "Reglas de tiempo en cada petición",
        description:
          "La liberación de respuestas y la apertura de exámenes se verifican contra las fechas guardadas, así ocurren a tiempo aunque un job se atrase.",
      },
      {
        title: "Una cola de notificaciones duradera",
        description:
          "Publicar escribe un trabajo de push que se envía después de confirmar el guardado y que un barrido reintenta.",
      },
      {
        title: "Subidas directas",
        description:
          "Las grabaciones pesadas van del navegador al almacenamiento de objetos por partes, nunca a través de la API.",
      },
    ],
    architecture: [
      { label: "App en el teléfono", detail: "PWA en Next.js con service worker para modo sin conexión y push" },
      { label: "API", detail: "Django REST Framework en Railway" },
      { label: "Datos y archivos", detail: "PostgreSQL y Cloudflare R2" },
      { label: "Programador", detail: "Recordatorios de clase, respuestas liberadas y apertura de exámenes" },
    ],
    results:
      "Classroom, Microsoft Forms, Google Drive y WhatsApp quedaron fuera; solo permanece Zoom. Las cifras de uso están pendientes de aprobación del cliente.",
    technologies: ["Next.js", "React", "TypeScript", "Django", "PostgreSQL", "Cloudflare R2"],
    // Todavía no hay métricas publicadas: CEM no ha aprobado cifras de uso.
    metrics: [],
    testimonial: null,
    liveUrl: "https://www.cemnicaragua.com",
    media: [
      {
        kind: "illustration",
        label: "Pregunta del día",
        caption: "Interfaz ilustrativa — una recreación simplificada de la app móvil CEM Digital.",
      },
    ],
  },
];

const otherProjects: SideProject[] = [
  {
    index: "03",
    slug: "credora",
    name: "Credora",
    kind: "SaaS de gestión de crédito",
    status: "En desarrollo",
    description: [
      "Una plataforma para instituciones de crédito en Nicaragua que cierra todo el ciclo del préstamo en un solo sistema: solicitud, aprobación, desembolso, plan de cuotas, ruta de cobro, mora, reestructuración y castigo.",
      "Por detrás están las sesiones de caja, la contabilidad, la conciliación bancaria, la clasificación de cartera y una bitácora de auditoría — con aprobación de cuatro ojos en las operaciones que mueven dinero, y permisos que varían por institución, sucursal, rol y campo.",
    ],
    note: "Es un proyecto personal. Los repositorios son privados y todavía no hay un despliegue público. Las capturas de abajo son de la app en funcionamiento sobre una financiera de demostración sembrada — prestatarios, clientes y saldos inventados, no una cartera real.",
    technologies: ["Django", "Django REST Framework", "PostgreSQL", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    screenshots: [
      {
        src: "/work/credora-solicitudes.png",
        alt:
          "La bandeja de Credora: la cartera desglosada por estado de la solicitud —borrador, enviada, en revisión, aprobada, devuelta, desembolsada, rechazada y cancelada—, con el monto que espera una decisión al lado y las últimas solicitudes abajo.",
        caption:
          "Cada solicitud cae en una sola bandeja, contada por el estado en el que realmente está.",
      },
      {
        src: "/work/credora-prestamos.png",
        alt:
          "Un préstamo desembolsado de Credora: plazo, tasa mensual, cómo y cuándo se entregó, quién lo entregó y contra qué solicitud, y luego el plan de pagos completo con interés, capital y total de cada una de las diez cuotas.",
        caption:
          "El desembolso genera el plan de pagos sobre el que corre después todo el ciclo de cobro.",
      },
      {
        src: "/work/credora-cobranza.png",
        alt:
          "La cartera vencida de Credora: tres préstamos con sus días de mora, la zona, la fecha de la próxima cuota y el monto adeudado con la mora incluida.",
        caption:
          "La ruta de cobro se arma con lo que de verdad está vencido, por zona y por días de mora.",
      },
      {
        src: "/work/credora-caja.png",
        alt:
          "Una sesión de caja abierta en Credora: apertura, cobros en efectivo, desembolsos en efectivo, devoluciones y egresos que suman lo que debería haber en la caja, los movimientos de esa sesión, y las cajas cerradas con su diferencia contada.",
        caption:
          "El efectivo cae en una sesión abierta que tiene que cuadrar antes de poder cerrarse.",
      },
      {
        src: "/work/credora-cartera.png",
        alt:
          "El cierre de periodo de Credora: cartera, mora, cartera en riesgo y provisión requerida, y luego los préstamos y saldos clasificados en las categorías A, B y D con la provisión que carga cada una.",
        caption:
          "Cerrar una fecha clasifica cada préstamo y fija la provisión sobre la que se arman los reportes.",
      },
    ],
  },
  {
    index: "04",
    slug: "kiseki-no-oto",
    name: "Kiseki no Oto",
    kind: "Sitio de un net-label",
    status: "En producción",
    description: [
      "El sitio de un net-label colombiano que publica J-Core, construido como un sistema que arranca: la secuencia de carga entrega el control a la interfaz en lugar de quedarse delante de ella.",
      "Los lanzamientos son escenas, no una rejilla de tarjetas — cada uno se toma la pantalla y retiñe todo el chasis con un tono muestreado de su portada. La reproducción sobrevive a la navegación, la barra dibuja la onda real decodificada de la pista, y el sello captura su catálogo en una consola privada detrás del inicio de sesión con Google.",
    ],
    technologies: ["Astro", "React", "TypeScript", "Firestore", "Cloudflare R2", "Cloudflare Workers"],
    siteUrl: "https://kiseki-no-oto.com",
    sourceUrl: "https://github.com/ZaFkieL1/Kiseki-No-Oto-Website",
    screenshots: [
      {
        src: "/work/kiseki-boot.png",
        alt: "La secuencia de arranque de Kiseki no Oto: LABEL_OS revisa el motor de audio, el motor visual y la base de lanzamientos, y reporta sistema listo.",
        caption: "El sitio arranca en vez de cargar, y entrega el control solo — no hay nada que presionar.",
      },
      {
        src: "/work/kiseki-system.png",
        alt: "La página de identidad de Kiseki no Oto: el logotipo y la declaración del sello a la izquierda, el disco cargado a la derecha.",
        caption: "La identidad y el disco cargado conviven, así el reproductor nunca es una página aparte.",
      },
      {
        src: "/work/kiseki-catalogue.png",
        alt: "Un lanzamiento de Kiseki no Oto ocupando toda la pantalla, con la portada tiñendo la interfaz alrededor.",
        caption: "Cada lanzamiento se queda con una pantalla y retiñe el chasis con un tono muestreado de su portada.",
      },
      {
        src: "/work/kiseki-kernel.png",
        alt: "La consola KERNEL donde el sello captura su catálogo, detrás del inicio de sesión con Google.",
        caption: "KERNEL: la consola privada desde la que el sello administra el catálogo, en un bundle aparte que la página pública nunca carga.",
      },
    ],
  },
];

export const esPortfolio: PortfolioContent = {
  person: {
    name: "Henry Gonzalez",
    mark: "HG",
    title: "Desarrollador Full-Stack / Ingeniero de Producto",
    location: "Nicaragua",
    availability: "Disponible para proyectos freelance seleccionados",
    email: "hjosuegm0@gmail.com",
    linkedin: "https://www.linkedin.com/in/henry-gonzalez-a20258268/",
    github: "https://github.com/ZaFkieL1",
    bio: "Construyo aplicaciones web en producción para empresas y organizaciones, cubriendo todo el camino: desde los requerimientos y la estructura del producto hasta el frontend, el backend, el despliegue y la mejora continua.",
  },
  hero: {
    statement: "Construyo productos digitales en los que una empresa puede confiar.",
    supporting:
      "Ingeniería de producto full-stack para plataformas SaaS, herramientas internas y aplicaciones web a la medida—de los requerimientos a producción.",
    system: {
      inputs: [
        { icon: "idea", title: "Tu idea", detail: "Objetivos y límites" },
        { icon: "workflow", title: "Tus procesos", detail: "Cómo trabaja tu equipo" },
        { icon: "data", title: "Tus datos", detail: "Registros, reglas, sistemas" },
      ],
      hub: {
        title: "Ingeniería de producto",
        stages: ["Diseño", "Frontend", "Backend", "Despliegue"],
      },
      outputs: [
        { icon: "browser", title: "Aplicación web", detail: "Rápida, accesible, tipada" },
        { icon: "dashboard", title: "Herramientas internas", detail: "Paneles y administración" },
        { icon: "plug", title: "APIs e integraciones", detail: "Conectadas a tu stack" },
      ],
    },
  },
  contact: {
    title: "¿Tenés un producto en mente?",
    titleMuted: "Convirtamos el proceso real en un producto.",
    body: "Contame el problema, quiénes están involucrados y qué tiene que lograr una primera versión útil.",
    action: "Empezar una conversación",
    steps: [
      { title: "Contame el problema", detail: "El proceso, la gente, el objetivo" },
      { title: "Definir una primera versión", detail: "Lo que tiene que hacer desde el día uno" },
      { title: "Lanzar y mejorar", detail: "En producción, y luego iterar" },
    ],
  },
  about: {
    title: "Hola, soy Henry.",
    note: [
      "Los dos productos de esta página siguen en producción. MediSapience está en línea desde enero de 2026 y pasó de un solo banco de preguntas a varios; CEM Digital reemplazó cuatro de las cinco herramientas sobre las que corría un curso.",
      "Trabajo tanto en las decisiones de producto como en el detalle de la implementación, y me quedo con el producto después del lanzamiento — en los dos casos de estudio, la mayor parte del trabajo ocurrió después de la primera versión.",
    ],
    facts: [
      { label: "Ubicación", value: "Nicaragua (UTC−6)" },
      { label: "Trabajo con", value: "Equipos internacionales y remotos" },
      { label: "Enfoque", value: "Productos, plataformas y software a la medida" },
    ],
    elsewhereLabel: "En otros lados",
  },
  home: {
    work: { title: "Trabajo seleccionado." },
    services: {
      title: "Lo que construyo.",
      lead: "Ingeniería de producto enfocada, para software que tiene un trabajo real que hacer.",
    },
    process: {
      title: "De la idea a producción.",
      lead: "Un camino directo del contexto del negocio a software que la gente pueda usar y un equipo pueda operar.",
    },
    technology: {
      title: "Herramientas a la medida del producto.",
      lead: "El stack sostiene el trabajo; no es el trabajo.",
    },
    figuresSource: "MediSapience, en producción. Cifras publicadas en medisapience.com.",
    featuredScreenshotAlt:
      "MediSapience en modo Práctica: retroalimentación inmediata, el razonamiento detrás de la respuesta y un enlace a la página que hay que leer.",
  },
  otherProjects,
  services: [
    {
      title: "Aplicaciones web a la medida",
      description:
        "Herramientas internas, portales para clientes, sistemas de gestión y software hecho a la forma en que trabaja tu negocio.",
    },
    {
      title: "Productos SaaS",
      description:
        "MVPs y plataformas en producción con la arquitectura de producto, los permisos, las integraciones y las bases de operación que necesitan.",
    },
    {
      title: "Plataformas de negocio",
      description:
        "Sistemas conectados que reemplazan formularios sueltos, hojas de cálculo y traspasos manuales por una única fuente de verdad.",
    },
    {
      title: "Desarrollo sobre productos existentes",
      description:
        "Entrega de funcionalidades, integraciones, mejoras de arquitectura y soporte confiable a largo plazo para productos que ya están en marcha.",
    },
  ],
  process: [
    { title: "Entender", description: "Requerimientos, usuarios, procesos, restricciones y el problema real del negocio." },
    { title: "Diseñar", description: "Estructura del producto, experiencia, arquitectura del sistema y modelo de datos." },
    { title: "Construir", description: "Frontend, backend, integraciones, pruebas y entrega lista para producción." },
    { title: "Lanzar y mejorar", description: "Despliegue, monitoreo, mantenimiento e iteración enfocada." },
  ],
  technology: [
    { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { label: "Backend", items: ["Python", "Django", "Django REST Framework"] },
    { label: "Datos", items: ["PostgreSQL", "Almacenamiento de objetos"] },
    { label: "Entrega", items: ["Cloudflare", "Vercel", "Railway", "GitHub"] },
    { label: "Calidad", items: ["Playwright", "Pytest", "Verificaciones automatizadas"] },
  ],
  testimonials: [],
  projects,
  metadata: {
    siteTitle: "Henry Gonzalez — Ingeniero de Producto Full-Stack",
    titleTemplate: "%s — Henry Gonzalez",
    description:
      "Ingeniería de producto full-stack para plataformas SaaS, herramientas internas y aplicaciones web a la medida.",
    applicationName: "Portafolio de Henry Gonzalez",
    keywords: [
      "Desarrollador full-stack",
      "Ingeniero de producto",
      "Desarrollo SaaS",
      "Aplicaciones web a la medida",
    ],
    openGraphDescription: "Productos digitales construidos desde los requerimientos hasta producción.",
    caseStudyTitle: (name) => `Caso de estudio: ${name}`,
  },
};
