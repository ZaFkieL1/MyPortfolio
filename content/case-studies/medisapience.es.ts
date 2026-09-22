import type { MedisapienceCaseStudy } from "./medisapience.en";
import type { CaseStudyCta, CaseStudyHero, GridItem, Tint } from "./types";

/**
 * The MediSapience case study in Spanish. Mermaid node labels are translated with it — a
 * diagram nobody on the page can read is not a diagram — while node ids, the chart syntax
 * and every product, stack and client name stay exactly as they are.
 */

const hero: CaseStudyHero = {
  status: "Producto en producción",
  kicker: "Caso de estudio: MediSapience",
  title: "Una sola plataforma para los bancos de preguntas médicas y el equipo detrás de ellos.",
  lead:
    "Los estudiantes practican, hacen exámenes cronometrados y ven qué estudiar después. El equipo publica contenido, administra accesos y revisa pagos — sin llamar a un desarrollador.",
  action: { label: "Conversemos sobre un producto así", href: "/#contact" },
  architectureLink: { label: "Ver la arquitectura", href: "#medisapience-architecture" },
  facts: [
    { label: "Cliente", value: "MediSapience" },
    { label: "Periodo", value: "2025–2026" },
    { label: "Rol", value: "Ingeniería de producto full-stack" },
  ],
  website: { label: "medisapience.com", href: "https://medisapience.com" },
  highlight: { label: "Lanzamiento", value: "7 ene 2026" },
  note: { label: "Construido con", value: "Next.js, Django, PostgreSQL, WooCommerce" },
  visualCaption:
    "Interfaz ilustrativa — una recreación animada y simplificada de la configuración de sesión, no una captura de producción.",
};

const sections = {
  sides: { title: "Un producto, dos realidades de operación" },
  loop: { title: "El ciclo útil más pequeño", lead: "El MVP hizo funcionar un camino completo de punta a punta." },
  decisions: {
    title: "El trabajo técnico detrás de una sesión de estudio creíble",
    lead: "Tres decisiones dieron forma al modelo de datos, a las sesiones y al checkout.",
  },
  operations: {
    title: "Herramientas para el equipo que la opera",
    lead: "Los pagos de rutina y el soporte se resuelven fuera de la base de datos y fuera de mi bandeja de entrada.",
  },
  architecture: {
    title: "Fronteras que mantienen confiable al sistema",
    lead: "El estudio, el checkout y el trabajo en segundo plano van separados, para que cada uno haga una sola cosa.",
  },
  evolution: {
    title: "Cómo creció el producto",
    lead: "El lanzamiento fue el inicio. La mayor parte del producto se construyó después, en producción.",
  },
  quality: {
    title: "Cómo se prueba",
    lead: "Las partes que mueven dinero o acceso tienen sus propias suites de pruebas.",
  },
  method: { title: "Cómo trabajé" },
};

const labels = {
  signalWeights: "Pesos de la recomendación",
  contentHierarchy: "Jerarquía de contenido",
  scopedToBank: "Acotado a cada banco",
  addedAfterLaunch: "Agregado después del lanzamiento, en orden",
  coveredAreas: "Áreas cubiertas",
  technology: "Tecnología",
};

const brief = {
  title: "Un banco de preguntas solo sirve si el estudiante puede volver a él",
  lead:
    "MediSapience es una plataforma de estudio para médicos de Nicaragua que se preparan para el examen de ingreso a las especialidades médicas y quirúrgicas.",
  body:
    "La idea: convertir un banco de preguntas de examen en un producto que los estudiantes compren, con el que estudien y al que vuelvan — y que el equipo pueda operar sin llamar a un desarrollador.",
};

const goals = [
  { title: "Practicar en condiciones de examen", body: "Un modo Examen cronometrado que reserva la retroalimentación hasta el final, como la prueba real." },
  { title: "Saber qué estudiar después", body: "Resultados por especialidad, materia y tema, en vez de un solo puntaje." },
  { title: "Mantener el contenido correcto", body: "Un banco que el equipo puede corregir y hacer crecer sin perder los intentos pasados." },
];

const sides: Array<{ title: string; tint: Tint; chips: string[] }> = [
  {
    title: "Para los estudiantes",
    tint: "sky",
    chips: ["Elegir un banco", "Práctica o Examen", "Repasar respuestas", "Ver el progreso", "Seguir estudiando"],
  },
  {
    title: "Para el equipo de MediSapience",
    tint: "peach",
    chips: ["Redactar y revisar", "Importar desde Excel", "Administrar planes", "Revisar pagos", "Dar soporte"],
  },
];

const loop = [
  {
    label: "Compra",
    title: "Empezar con el banco correcto",
    body: "Una orden completada se convierte en la cuenta, el banco y el periodo de acceso correctos.",
  },
  {
    label: "Estudio",
    title: "Práctica y Examen no son la misma experiencia",
    body: "En Práctica la retroalimentación aparece sobre la marcha. El modo Examen la reserva hasta el final.",
  },
  {
    label: "Repaso",
    title: "Hacer que el resultado sirva",
    body: "Los puntajes por materia y tema señalan qué estudiar después.",
  },
];

const practiceScreenshot = {
  width: 1648,
  height: 890,
  alt:
    "MediSapience en modo Práctica: el estudiante eligió una opción incorrecta, la respuesta correcta aparece resaltada y el panel de retroalimentación explica por qué, con una fuente bibliográfica y un enlace a la página exacta que hay que leer.",
  caption: "Modo Práctica: retroalimentación inmediata, el razonamiento detrás de ella y un enlace a la página que lo explica.",
};

const studyToday = {
  title: "Qué estudiar hoy",
  body:
    "Un puntaje transparente ordena cada tema por cuatro señales y enlaza los más débiles directo a las páginas que hay que leer. Empieza después de 50 respuestas o de un examen diagnóstico.",
  signals: [
    ["Tasa de error", "45%"],
    ["Fallos", "20%"],
    ["Tiempo", "20%"],
    ["Intentos", "15%"],
  ] as Array<[string, string]>,
  // El peso más alto, usado para escalar las barras.
  signalScale: 45,
  screenshot: {
    width: 1904,
    height: 890,
    alt:
      "La pantalla Qué estudiar hoy: cinco temas prioritarios ordenados por desempeño, cada uno con preguntas para repasar, bibliografía recomendada y botones para leer o practicar.",
  },
};

/** Otra captura de la app en funcionamiento, sobre datos de demostración: lo que ve el estudiante al repasar. */
const statisticsScreenshot = {
  width: 1648,
  height: 890,
  alt:
    "La pantalla de Estadísticas en un mes: precisión, brecha de autoevaluación, tiempo, preguntas y simulacros como cifras principales, los hábitos de estudio abajo y una gráfica de línea de la precisión a lo largo de cuatro semanas.",
  caption:
    "Repaso: el mes en cinco cifras, luego los hábitos detrás de ellas y la curva que movieron. Cuenta de demostración — las cifras son un historial de estudio sembrado, no el de un estudiante real.",
};

const operatingBand = {
  title: "El panel de operación mantiene el banco en movimiento",
  body: "Preguntas, importaciones, versiones, reportes, usuarios, planes y pagos — todo sin tocar la base de datos.",
};

const banks = {
  title: "Un motor, muchos bancos de preguntas",
  lead: "Un banco nuevo es una fila de configuración, no un despliegue nuevo.",
  levels: ["Banco", "Especialidad", "Materia", "Tema", "Pregunta"],
  scoped: ["Planes", "Acceso Premium", "Sesiones de examen", "Biblioteca de estudio", "Pagos", "Estadísticas de aprendizaje"],
  migrationNote:
    "El producto de un solo banco pasó a multibanco con una sola migración: el contenido existente se movió a un banco base, y las viejas banderas de premium se volvieron acceso por banco.",
  mechanics: [
    {
      title: "Cada petición sabe a qué banco pertenece",
      body: "Un interceptor en el cliente agrega el banco activo a cada llamada a la API. El servidor lo verifica y cae al banco base si no viene.",
    },
    {
      title: "Premium es por banco",
      body: "Comprar un banco nunca desbloquea otro. Cada producto de la tienda se mapea a un plan, y cada plan pertenece a un banco.",
    },
    {
      title: "Los bancos privados se abren por enlace",
      body: "Los bancos no listados quedan ocultos hasta que alguien llega con un código de invitación opaco. Escribir el nombre de un banco oculto en una petición no logra nada: el servidor solo honra los bancos que fueron desbloqueados.",
    },
  ],
};

const decisions: GridItem[] = [
  {
    title: "Conservar la historia de un banco que cambia",
    details: [
      { label: "Problema", value: "Las preguntas se corrigen después de que los estudiantes ya las respondieron." },
      { label: "Enfoque", value: "Claves de pregunta estables, contenido versionado y respuestas que registran la versión que se vio." },
    ],
  },
  {
    title: "Armar las sesiones cerca de los datos",
    details: [
      { label: "Problema", value: "La primera versión descargaba un banco entero para escoger unas pocas preguntas." },
      { label: "Enfoque", value: "El servidor filtra por acceso y plan de estudios y manda solo la sesión." },
    ],
  },
  {
    title: "Que una compra signifique el acceso correcto",
    details: [
      { label: "Problema", value: "WooCommerce sabe qué se pagó, no qué desbloquea." },
      { label: "Enfoque", value: "Las órdenes se mapean a un plan, y cada plan a un banco. Los productos sin mapear esperan revisión." },
    ],
  },
];

const sessionDiagram = {
  title: "Armado de la sesión en el servidor",
  description: "Una petición se convierte en una sesión acotada y persistida antes de que las preguntas lleguen al navegador.",
  chart: String.raw`
flowchart TB
  A[Petición de sesión] --> B[Autenticar y resolver el banco]
  B --> C[Filtrar por acceso y plan de estudios]
  C --> D[Garantizar cobertura de temas]
  D --> E[Agregar sondas de investigación pendientes]
  E --> F[Crear ExamSession]
  F --> G[Devolver las preguntas seleccionadas]
`,
  steps: [
    "Autenticar al estudiante y resolver el banco seleccionado.",
    "Filtrar por banco, acceso y plan de estudios.",
    "Garantizar la cobertura de los temas seleccionados.",
    "Reservar las sondas de investigación pendientes sin exponer sus marcadores.",
    "Persistir la ExamSession y devolver solo las preguntas seleccionadas.",
  ],
};

const operations = [
  {
    title: "Transferencias bancarias, verificadas con OCR",
    body: "Un worker aparte lee cada comprobante y verifica monto, moneda, fecha, cuenta y referencia. La decisión final la toma el personal, y una referencia solo puede acreditarse una vez.",
  },
  {
    title: "Ver la app como un estudiante gratuito",
    body: "Un interruptor permite a un administrador previsualizar el producto tal como lo ve un usuario gratuito, sin tocar su propio acceso.",
  },
  {
    title: "Soporte con la historia completa de la cuenta",
    body: "Cada usuario tiene una línea de tiempo de compras, accesos otorgados y cambios, y el personal puede otorgar acceso banco por banco.",
  },
];

const architectureDiagram = {
  title: "Arquitectura del sistema MediSapience",
  description: "Fronteras de producción según la auditoría del frontend, el backend, el almacenamiento y el despliegue.",
  chart: String.raw`
flowchart LR
  subgraph Browser[Navegador del estudiante y del administrador]
    UI[Next.js 15 + React 19]
    PDF[Lector PDF.js]
    AUTH[SDK de Firebase Auth]
  end

  VERCEL[Entrega por Vercel]
  subgraph Railway[Railway]
    API[Django 5 + DRF]
    WORKER[Worker de pagos + OCR]
  end

  DB[(PostgreSQL)]
  STORE[(Google Cloud Storage)]
  CDN[CDN de imágenes en Cloudflare]
  WOO[WooCommerce]
  MAIL[Correo + Web Push]

  VERCEL --> UI
  UI <-->|X-Bank-Slug| API
  UI --> PDF
  AUTH --> API
  API <--> DB
  API <--> STORE
  STORE --> CDN --> UI
  WOO -->|Webhook de orden completada| API
  WORKER <--> DB
  WORKER --> STORE
  API --> MAIL
`,
  steps: [
    "Vercel entrega al navegador la interfaz de estudiante y administración hecha en Next.js y React.",
    "PDF.js lee los recursos de estudio externos, y Firebase verifica la identidad antes de que Django cree la sesión de la aplicación.",
    "Cada petición lleva el banco activo; la API REST de Django en Railway acota a él los datos de producto y de estudio en PostgreSQL.",
    "WooCommerce envía las órdenes completadas a la API mediante un webhook.",
    "Google Cloud Storage guarda las imágenes de las preguntas y los comprobantes privados; un CDN en Cloudflare Worker sirve las imágenes de las preguntas.",
    "Un worker aparte en Railway lee los registros de pago, procesa los comprobantes de transferencia con apoyo de OCR y usa el almacenamiento gestionado.",
    "La API envía correos transaccionales y notificaciones web push.",
  ],
};

const performance = [
  { value: "1.16 → 0.22 MB", label: "Una carga útil de 400 preguntas después de comprimir con GZip" },
  { value: "1 año", label: "Caché inmutable de las imágenes de preguntas servidas por Cloudflare" },
];

const milestones = [
  { date: "Oct 2025", title: "Primer modelo de datos", body: "Preguntas, respuestas y sesiones de examen." },
  { date: "7 ene 2026", title: "Lanzamiento del MVP", body: "Compra, estudio y administración funcionando de punta a punta." },
  { date: "Jun 2026", title: "Multibanco", body: "Una sola migración convirtió un banco en muchos." },
  { date: "Sep 2026", title: "Dónde está hoy", body: "67 migraciones de base de datos y 74 versiones del frontend después." },
];

const afterLaunch = [
  "Versionado de preguntas", "Biblioteca por banco", "Transferencias con OCR", "Premium por banco",
  "CRM de soporte", "Estadísticas", "Qué estudiar hoy", "Estudio de investigación", "Sesiones en el servidor",
  "Comparación con pares", "Captura de errores y alertas push",
];

const quality = {
  stats: [
    { value: "23", label: "Módulos de pruebas del backend, uno por área" },
    { value: "20", label: "Pruebas de navegador de punta a punta con Playwright" },
  ],
  testedAreas: [
    "Pagos", "Webhook de la tienda", "Vencimiento de Premium", "Armado de sesiones", "Invitaciones a bancos",
    "Estadísticas", "Estudio de investigación", "Herramientas de soporte", "Autenticación y permisos",
  ],
};

const method = [
  { title: "Un changelog en cada versión", body: "Cada versión registra qué cambió y por qué, para que el cliente pueda seguir el producto sin leer código." },
  { title: "Pruebas antes de producción", body: "Un entorno de pruebas aparte replica producción; los cambios aterrizan ahí primero." },
  { title: "Comentarios que explican el porqué", body: "El código registra el razonamiento detrás de cada decisión, para que la próxima persona pueda cambiarlo con seguridad." },
];

const outcome = {
  title: "Qué cambió después del lanzamiento",
  lead: "El 41% de los suscriptores Premium aprobó el examen de ingreso a especialidades.",
  body:
    "Desde el MVP, la plataforma sumó más bancos, retroalimentación más rica, reportes, recomendaciones de estudio y soporte para un estudio de investigación.",
  source: "Cifras publicadas por MediSapience en medisapience.com.",
};

const closing = {
  title: "Un producto tiene que funcionar para quien lo opera",
  intro:
    "El versionado, el acceso por banco, las importaciones y la revisión de pagos permiten que cada banco siga cambiando sin romper los intentos pasados.",
  technology: [
    "Next.js 15", "React 19", "TypeScript", "Django 5", "Django REST Framework",
    "PostgreSQL", "WooCommerce", "PDF.js", "Vercel", "Railway", "Cloudflare Worker",
  ],
};

const cta: CaseStudyCta = {
  title: "¿Estás construyendo un producto así?",
  body: "Construyo aplicaciones web que conectan lo que ve el cliente con la operación que hay detrás.",
  action: { label: "Hablemos de tu proyecto", href: "/#contact" },
  next: { title: "CEM Digital", href: "/work/cem-nicaragua" },
};

export const esMedisapienceCaseStudy: MedisapienceCaseStudy = {
  hero,
  sections,
  labels,
  statisticsScreenshot,
  brief,
  goals,
  sides,
  loop,
  practiceScreenshot,
  studyToday,
  operatingBand,
  banks,
  decisions,
  sessionDiagram,
  operations,
  architectureDiagram,
  performance,
  milestones,
  afterLaunch,
  quality,
  method,
  outcome,
  closing,
  cta,
};
