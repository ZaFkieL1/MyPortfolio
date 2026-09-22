import type { CemCaseStudy } from "./cem-nicaragua.en";
import type { CaseStudyCta, CaseStudyHero, GridItem, ShotRecord, Tint } from "./types";

/**
 * The CEM Digital case study in Spanish — the language the app itself is written in, and
 * the one its students speak. Screenshot keys, the phone frame and the chart syntax are
 * shared with the English module; only the words change.
 */

const hero: CaseStudyHero = {
  status: "Producto en producción",
  kicker: "Caso de estudio: CEM Nicaragua",
  title: "Una sola app para un curso de medicina que corría en cinco plataformas.",
  lead:
    "CEM Nicaragua forma médicos en línea. Los anuncios, las preguntas diarias, los exámenes cronometrados y las clases grabadas ahora viven en una sola app en el teléfono del estudiante — y la clase en vivo queda a un toque.",
  action: { label: "Conversemos sobre un producto así", href: "/#contact" },
  architectureLink: { label: "Ver la arquitectura", href: "#cem-architecture" },
  facts: [
    { label: "Cliente", value: "CEM Nicaragua" },
    { label: "Periodo", value: "2026" },
    { label: "Rol", value: "Ingeniería de producto full-stack" },
  ],
  website: { label: "cemnicaragua.com", href: "https://www.cemnicaragua.com" },
  highlight: { label: "En producción", value: "Ene 2026" },
  note: { label: "Construido con", value: "PWA en Next.js, Django, PostgreSQL, Cloudflare R2" },
  visualCaption:
    "CEM Digital en el teléfono de un estudiante: un día del curso, capturado de la app en funcionamiento sobre datos de demostración.",
};

const sections = {
  sides: { title: "Una app, dos lados del curso" },
  loop: {
    title: "La pregunta del día, conservada y automatizada",
    lead: "El ritmo que el docente tenía en WhatsApp, sin publicar la respuesta a mano.",
  },
  simulators: {
    title: "Exámenes que abren solos",
    lead: "Microsoft Forms se volvió simuladores cronometrados que el equipo programa por adelantado.",
  },
  decisions: {
    title: "El trabajo técnico detrás de un curso puntual",
    lead: "Tres decisiones volvieron confiables los tiempos y los archivos.",
  },
  operations: {
    title: "Herramientas para el equipo que la opera",
    lead: "Redactar, calificar y dar soporte ocurre en la app, no en hojas de cálculo.",
  },
  architecture: {
    title: "Una app de teléfono sobre un stack pequeño y confiable",
    lead: "La app se instala desde el navegador; la API, la base de datos y los archivos hacen cada uno una sola cosa.",
  },
  evolution: {
    title: "Cómo creció el producto",
    lead: "La primera versión reemplazó los anuncios. El resto siguió, curso por curso.",
  },
  quality: {
    title: "Cómo se prueba",
    lead: "Los exámenes y sus tiempos son lo más probado, porque ahí un error le cuesta a un estudiante.",
  },
  method: { title: "Cómo trabajé" },
};

const labels = {
  addedAfterLaunch: "Agregado después del lanzamiento, en orden",
  coveredAreas: "Áreas cubiertas",
  technology: "Tecnología",
};

/**
 * Todas las capturas del teléfono comparten este marco: una pantalla tipo Pixel a tres
 * veces los píxeles del dispositivo. Se declara una sola vez para que cada fila reserve
 * su espacio antes de que lleguen las imágenes.
 */
const phoneFrame = { width: 1236, height: 2745 };

/**
 * El trío del encabezado — un solo día, en orden: la clase llega al feed, la pregunta del
 * día se responde y queda esperando, la respuesta se libera sola a la hora que eligió el
 * docente. Capturas de la app en funcionamiento, no una ilustración.
 */
const heroShots: ShotRecord[] = [
  {
    key: "feed",
    label: "El feed",
    alt:
      "El feed de anuncios de CEM Digital en un teléfono: la clase de hoy con un botón para entrar, y debajo el anuncio que lleva la grabación y la guía de lectura.",
  },
  {
    key: "waiting",
    label: "Respondida, esperando",
    alt:
      "La pregunta del día después de votar: la opción del estudiante queda marcada y una línea dice que el resultado se libera en 6 horas y 13 minutos.",
  },
  {
    key: "released",
    label: "La respuesta, a tiempo",
    alt:
      "La misma pregunta después de la hora de liberación: la opción del estudiante aparece en verde y una línea nombra la respuesta correcta.",
  },
];

const brief = {
  title: "Un curso repartido en cinco apps",
  lead:
    "CEM Nicaragua — Cursos Especializados de Medicina — imparte cursos en línea para médicos, en vivo por Zoom.",
  body:
    "Cada curso vivía en cinco lugares: Classroom para los anuncios, Microsoft Forms para los exámenes, Drive para los archivos y las grabaciones, Zoom para la clase y WhatsApp para los recordatorios y las preguntas durante el día. Varios inicios de sesión, varias facturas, cinco lugares que revisar.",
};

const goals = [
  { title: "Un solo lugar donde mirar", body: "Anuncios, preguntas, exámenes y grabaciones en una sola app, en el teléfono que los estudiantes ya cargan." },
  { title: "Conservar el ritmo del docente", body: "Una pregunta diaria y la respuesta a una hora fija, como en WhatsApp — sin publicarla a mano." },
  { title: "Exámenes que abren a tiempo", body: "Simuladores redactados por adelantado que aparecen a la hora que eligió el equipo, con el cronómetro ya configurado." },
];

// Antes → después, según lo descrito por CEM. Zoom se queda: la clase en vivo ahora está a un toque.
const tools = {
  title: "Cuatro herramientas fuera, una que se queda",
  lead: "Zoom sigue alojando la clase. Todo lo demás alrededor se mudó a CEM Digital.",
  listLabel: "Herramientas reemplazadas por CEM Digital",
  retired: [
    { before: "Google Classroom", job: "Anuncios", after: "Feed de anuncios con push" },
    { before: "WhatsApp", job: "Recordatorios y preguntas diarias", after: "Pregunta del día, respuesta programada" },
    { before: "Microsoft Forms", job: "Cuestionarios y exámenes", after: "Simuladores cronometrados dentro de la app" },
    { before: "Google Drive", job: "Archivos y clases grabadas", after: "Repositorio del curso con vista previa de video" },
  ],
  kept: {
    before: "Zoom",
    job: "Clases en vivo",
    after: "Se queda — el anuncio lleva un botón para entrar a la clase, y el recordatorio abre la reunión",
  },
};

const sides: Array<{ title: string; tint: Tint; chips: string[] }> = [
  {
    title: "Para los estudiantes",
    tint: "sky",
    chips: ["Leer anuncios", "Entrar a la clase en vivo", "Responder la pregunta del día", "Hacer simuladores cronometrados", "Ver grabaciones", "Recibir recordatorios"],
  },
  {
    title: "Para el equipo de CEM",
    tint: "peach",
    chips: ["Publicar a un curso", "Programar la respuesta", "Importar cuestionarios desde Word", "Programar la apertura de exámenes", "Subir clases y archivos", "Matricular estudiantes"],
  },
];

const day = [
  {
    label: "Por la mañana",
    title: "El docente publica la pregunta",
    body: "La opción correcta se marca al momento de escribirla, y el docente elige cuándo se libera. 6:00 PM salvo que la cambie.",
  },
  {
    label: "Durante el día",
    title: "Los estudiantes votan desde el feed",
    body: "Un voto por persona. Hasta la liberación, una cuenta regresiva muestra cuándo llega su resultado.",
  },
  {
    label: "A la hora elegida",
    title: "La respuesta se libera sola",
    body: "Todos ven si acertaron, y quienes votaron reciben un push. Nadie tiene que estar en línea para publicarla.",
  },
];

const release = {
  title: "La respuesta llega a tiempo, aunque nada esté corriendo",
  body:
    "La hora de liberación se guarda junto con la pregunta. Cada vez que un teléfono la pide, el servidor compara esa hora con el momento actual — así la respuesta aparece a las 6:00 PM aunque el programador se atrase. El programador solo envía la notificación.",
  timelineLabel: "Un día de ejemplo",
  timeline: [
    { time: "8:00 AM", event: "Pregunta publicada, liberación fijada para las 6:00 PM" },
    { time: "11:46 AM", event: "María vota — “Tu resultado se libera en 6h 14m”" },
    { time: "6:00 PM", event: "La respuesta aparece para todos; quienes votaron reciben un push" },
  ],
};

const feedBand = {
  title: "Todo lo demás pasa por el mismo feed",
  body:
    "Los enlaces de clase, las grabaciones, los archivos y los simuladores nuevos también son anuncios, cada uno con un push a los estudiantes de ese curso.",
};

/** El examen tal como lo encuentra el estudiante: primero las reglas, luego el reloj del servidor. */
const simulatorShots: ShotRecord[] = [
  {
    key: "brief",
    label: "Antes de empezar",
    alt:
      "La pantalla inicial del simulador: cantidad de preguntas y límite de tiempo, y las reglas — las respuestas se guardan sobre la marcha, se puede cerrar la página y volver, y el intento se envía solo cuando se acaba el tiempo.",
  },
  {
    key: "running",
    label: "El reloj es del servidor",
    alt:
      "El simulador en curso: el tiempo restante corre en la cabecera, junto al número de pregunta y cuántas van respondidas.",
  },
];
const simulatorShotsCaption =
  "El estudiante ve las reglas antes de que arranque el reloj, y el reloj mismo le pertenece al servidor.";

/** Con lo que trabaja el equipo de CEM, en el mismo teléfono. */
const teamShots: ShotRecord[] = [
  {
    key: "panel",
    label: "El panel del equipo",
    alt:
      "El panel de administración: cursos, usuarios, anuncios, horarios, simuladores y recursos, cada uno una fila con su propia descripción.",
  },
  {
    key: "question",
    label: "Redactando la pregunta del día",
    alt:
      "El formulario de anuncio en modo encuesta: la hora de liberación viene en 6:00 PM por defecto, las opciones se escriben ahí mismo y la correcta se marca al momento de redactarla.",
  },
  {
    key: "simulators",
    label: "Programando un examen",
    alt:
      "La lista de simuladores del equipo: uno publicado y contestable, otro programado con la fecha y la hora en que abre.",
  },
];
const teamShotsCaption =
  "El mismo teléfono opera el curso: la hora de la respuesta se fija al redactar la pregunta, y un examen se publica con la hora en que abre.";

const simulators: GridItem[] = [
  {
    title: "Apertura programada",
    body: "Un simulador se puede publicar con una hora de apertura. Hasta entonces los estudiantes no lo ven ni pueden empezarlo, y reciben un push cuando abre.",
  },
  {
    title: "Un reloj que le pertenece al servidor",
    body: "Cada intento recibe su fecha límite al empezar. El teléfono cuenta contra la hora del servidor y envía al llegar a cero.",
  },
  {
    title: "Nada se pierde en un teléfono",
    body: "Las respuestas se autoguardan sobre la marcha y al salir de la página, con un borrador local que vuelve al recargar.",
  },
];

const decisions: GridItem[] = [
  {
    title: "Reglas de tiempo sin confiar en un programador",
    details: [
      { label: "Problema", value: "Las respuestas y los exámenes tienen que aparecer a una hora exacta, aunque un job en segundo plano se atrase." },
      { label: "Enfoque", value: "Las horas de liberación y de apertura se guardan en UTC y se verifican en cada petición. El programador solo envía las notificaciones, y marca cada una como enviada." },
    ],
  },
  {
    title: "Publicar sin perder velocidad",
    details: [
      { label: "Problema", value: "Enviar los push dentro de la petición de publicación volvía lento y frágil publicar a un curso grande." },
      { label: "Enfoque", value: "Publicar escribe un trabajo en una cola duradera. Se envía después de confirmar el guardado, y un barrido reintenta lo que haya quedado atrás." },
    ],
  },
  {
    title: "Clases grabadas sin un servidor grande",
    details: [
      { label: "Problema", value: "Las grabaciones de clase son archivos pesados; pasarlas por la API la dejaría ocupada." },
      { label: "Enfoque", value: "El navegador sube directo a Cloudflare R2 por partes, con URLs firmadas. Cada subida queda auditada." },
    ],
  },
];

const releaseDiagram = {
  title: "Liberación programada de la respuesta",
  description: "Una pregunta diaria mantiene su respuesta oculta hasta la hora de liberación, verificada en cada petición.",
  chart: String.raw`
flowchart TB
  A[El docente publica la pregunta y la hora de liberación] --> B[El servidor resuelve las próximas 6:00 PM de Managua y las guarda en UTC]
  B --> C[Los estudiantes votan, un voto cada uno]
  C --> D{¿La petición llega después de la hora de liberación?}
  D -->|No| E[Ocultar la opción correcta y mostrar una cuenta regresiva]
  D -->|Sí| F[Devolver la opción correcta y el resultado del estudiante]
  G[Programador, cada minuto] --> H[Enviar los resultados a quienes votaron, una sola vez]
`,
  steps: [
    "El docente publica la pregunta con su opción correcta y una hora de liberación.",
    "El servidor resuelve la siguiente ocurrencia de esa hora en Managua y la guarda en UTC.",
    "Los estudiantes votan una sola vez cada uno.",
    "Antes de la hora de liberación, la API oculta la opción correcta y el cliente muestra una cuenta regresiva.",
    "Después de esa hora, la API devuelve la opción correcta y si cada estudiante acertó.",
    "Un programador que corre cada minuto envía los resultados a quienes votaron, una sola vez.",
  ],
};

const operations: GridItem[] = [
  {
    title: "Cuestionarios desde un archivo de Word",
    body: "Se sube un .docx donde la opción resaltada es la correcta. Regresa como borrador para revisar antes de publicar.",
  },
  {
    title: "Resultados por pregunta",
    body: "Tasa de acierto de cada pregunta, cómo se repartieron las opciones, quiénes no han empezado, y una exportación CSV que abre en Excel.",
  },
  {
    title: "Una segunda oportunidad, a propósito",
    body: "El personal puede reabrir un intento con minutos extra cuando un estudiante perdió la conexión.",
  },
  {
    title: "Permisos por curso",
    body: "Los instructores publican anuncios y horarios; cada curso tiene su propia carpeta, y los estudiantes solo ven las carpetas que se les dieron.",
  },
];

const architectureDiagram = {
  title: "Arquitectura del sistema CEM Digital",
  description: "Fronteras de producción según la auditoría del frontend, el backend, el almacenamiento y el despliegue.",
  chart: String.raw`
flowchart LR
  subgraph Phone[Teléfono del estudiante y del equipo]
    PWA[PWA en Next.js 16 + React 19]
    SW[Service worker: sin conexión + push]
  end

  VERCEL[Entrega por Vercel]
  subgraph Railway[Railway]
    API[Django 6 + DRF]
    CRON[Programador, cada minuto]
  end

  DB[(PostgreSQL)]
  R2[(Cloudflare R2)]
  PUSH[Web Push]
  MAIL[Códigos por correo con Resend]
  ZOOM[Clase en vivo por Zoom]

  VERCEL --> PWA
  PWA <-->|Autenticación por token| API
  PWA -->|Subida directa por partes| R2
  R2 -->|URLs firmadas| PWA
  API <--> DB
  API --> R2
  API --> MAIL
  CRON <--> DB
  CRON --> PUSH
  API --> PUSH
  PUSH --> SW
  SW -->|Toque en el recordatorio de clase| ZOOM
`,
  steps: [
    "Vercel entrega la app en Next.js y React, que los estudiantes instalan en su pantalla de inicio como PWA.",
    "Un service worker mantiene la app usable sin conexión y recibe las notificaciones push.",
    "La API REST de Django en Railway autentica cada petición y guarda cursos, anuncios, preguntas e intentos en PostgreSQL.",
    "Los archivos y las clases grabadas se suben directo del navegador a Cloudflare R2 y se reproducen mediante URLs firmadas.",
    "Un programador que corre cada minuto envía por Web Push los recordatorios de clase, los resultados liberados y la apertura de simuladores.",
    "Tocar el último recordatorio de clase abre la reunión de Zoom directamente.",
    "Resend entrega los códigos por correo que se usan para activar cuentas y restablecer contraseñas.",
  ],
};

const reminders = [
  { value: "30 · 10 · 0 min", label: "Recordatorios push antes de cada clase en vivo; el último abre Zoom" },
  { value: "15 s", label: "Margen para las respuestas enviadas justo cuando el cronómetro llega a cero" },
];

const milestones = [
  { date: "Ene 2026", title: "En producción", body: "Cursos, usuarios y anuncios, una semana después del primer commit." },
  { date: "Mar 2026", title: "Pregunta del día", body: "Encuestas con respuesta correcta y liberación programada." },
  { date: "May 2026", title: "Una app en el teléfono", body: "Subidas directas a R2, instalación como app, onboarding y push." },
  { date: "Ago 2026", title: "Simuladores en la app", body: "Los exámenes cronometrados, el historial de intentos y los filtros reemplazaron los formularios externos." },
];

const afterLaunch = [
  "Restablecer contraseña por correo", "Pregunta del día", "Respuestas programadas", "Subidas directas a R2",
  "Instalación como app", "Onboarding", "Rediseño del horario", "Búsqueda", "Inicio de sesión con códigos por correo",
  "Simuladores en la app", "Historial de intentos", "Cola de push duradera",
];

const quality = {
  stats: [
    { value: "93", label: "Pruebas de backend repartidas en cinco módulos" },
    { value: "37", label: "Pruebas de navegador de punta a punta, escritorio y teléfono" },
  ],
  testedAreas: [
    "Cronómetro del examen", "Autoguardado y recuperación", "Envío duplicado", "Apertura programada", "Importación desde Word",
    "Resultados y exportación", "Notificaciones", "Modo sin conexión", "Envío desde un teléfono",
  ],
};

const method = [
  { title: "Construido en torno a cómo enseña CEM", body: "La pregunta diaria y la respuesta a las 6:00 PM eran la costumbre del docente. La app la conserva y se encarga de publicarla." },
  { title: "Probado como lo usan los estudiantes", body: "Las pruebas de punta a punta corren todo el stack en un perfil de teléfono, en hora de Managua y en español." },
  { title: "Comentarios que explican el porqué", body: "Cada corrección registra el incidente que la originó, para que la próxima persona pueda cambiar el código con seguridad." },
];

const outcome = {
  title: "Qué cambió para CEM",
  lead: "Classroom, Forms, Drive y WhatsApp quedaron fuera. Solo permanece Zoom, a un toque de la app.",
  body:
    "Los estudiantes siguen un curso desde una sola app instalable. El equipo publica, programa y califica desde el mismo lugar.",
  // Nada de esto es una afirmación nuestra: cada fila dice qué está publicado y qué sigue pendiente.
  evidence: [
    ["Médicos formados por CEM", "Más de 500, publicado en cemnicaragua.com"],
    ["Estudiantes y uso en la app", "Pendiente de aprobación del cliente"],
    ["Capturas de producción", "Pendiente de aprobación del cliente"],
    ["Testimonio del cliente", "Pendiente"],
  ] as Array<[string, string]>,
};

const closing = {
  title: "Un curso se sigue más fácil desde un solo lugar",
  intro:
    "Los anuncios, las preguntas, los simuladores y los archivos comparten un feed, un inicio de sesión y un solo sistema de notificaciones.",
  technology: [
    "Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "PWA + Web Push", "Django 6",
    "Django REST Framework", "PostgreSQL", "Cloudflare R2", "Resend", "Vercel", "Railway", "Playwright",
  ],
};

const cta: CaseStudyCta = {
  title: "¿Tus cursos corren en demasiadas herramientas?",
  body: "Construyo aplicaciones web que reúnen lo que ven los estudiantes y el trabajo que hay detrás en un solo lugar.",
  action: { label: "Hablemos de tu proyecto", href: "/#contact" },
  next: { title: "MediSapience", href: "/work/medisapience" },
};

export const esCemCaseStudy: CemCaseStudy = {
  hero,
  sections,
  labels,
  phoneFrame,
  heroShots,
  simulatorShots,
  simulatorShotsCaption,
  teamShots,
  teamShotsCaption,
  brief,
  goals,
  tools,
  sides,
  day,
  release,
  feedBand,
  simulators,
  decisions,
  releaseDiagram,
  operations,
  architectureDiagram,
  reminders,
  milestones,
  afterLaunch,
  quality,
  method,
  outcome,
  closing,
  cta,
};
