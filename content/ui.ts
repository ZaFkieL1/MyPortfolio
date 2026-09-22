import type { Locale } from "./i18n";

/**
 * Interface chrome: the words components own rather than the content modules — navigation,
 * buttons, accessible names, and the few labels the bento kit prints around content it is
 * given. Published copy still lives in `portfolio.*.ts` and `case-studies/`; this is only
 * what the shell says.
 *
 * Both languages sit in one file on purpose. A key added to one and forgotten in the other
 * is a type error here, not an English string on a Spanish page.
 */
export type UiStrings = {
  skipToContent: string;
  nav: {
    primaryLabel: string;
    mainLinksLabel: string;
    menuLabel: string;
    openMenu: string;
    closeMenu: string;
    /** Accessible name for the brand mark, which is two letters on screen. */
    home: (name: string) => string;
    cta: string;
    links: Array<{ href: string; key: "work" | "services" | "process" | "about" | "contact"; label: string }>;
  };
  language: {
    /** Names the control for screen readers; the button face shows only "EN"/"ES". */
    label: string;
    /** Accessible name of each option, e.g. "Switch to Spanish". */
    switchTo: (language: string) => string;
  };
  hero: {
    viewWork: string;
    startProject: string;
    inputsLabel: string;
    outputsLabel: string;
  };
  footer: {
    viewWork: string;
    stepsLabel: string;
    availableWorldwide: string;
  };
  project: {
    viewCaseStudy: string;
    viewScreenshots: string;
    sourceCode: string;
  };
  sideProject: {
    visitSite: string;
    sourceCode: string;
    backToWork: string;
    screensTitle: string;
    stackTitle: string;
    technologyLabel: string;
    /** "Credit-management SaaS, in development." — the kind and status as one line. */
    stackLead: (kind: string, status: string) => string;
    ctaTitle: string;
    ctaBody: string;
    ctaAction: string;
    nextProject: string;
  };
  caseStudy: {
    websiteLabel: string;
    nextCaseStudy: string;
    publishedResultsLabel: string;
    evidenceLabel: string;
    /** Accessible name for a rendered Mermaid figure. */
    diagramLabel: (title: string) => string;
  };
  testimonials: {
    title: string;
  };
  /**
   * Words inside the two product illustrations. They are invented interface copy, not
   * claims about a client's product, but a Spanish reader should still be able to read
   * the screen being illustrated — so they are translated like anything else on the page.
   */
  illustration: {
    sessionSetup: {
      /** The whole figure's accessible description; the inner markup is `aria-hidden`. */
      alt: string;
      heading: string;
      subheading: string;
      stepMode: string;
      stepContent: string;
      examMode: string;
      examModeDetail: string;
      practiceMode: string;
      practiceModeDetail: string;
      timeLimit: string;
      startSession: string;
      selectTopicWarning: string;
      searchPlaceholder: string;
      topicsSelected: string;
      ready: string;
      /**
       * The rows the cursor walks. `pick` is the checking order and maps to a `.pick-N`
       * keyframe in the CSS, so it stays with the row rather than with its name.
       */
      specialties: Array<{ name: string; count: string; pick?: 1 | 2 | 3 }>;
    };
    productVisual: {
      alt: (product: string) => string;
      preview: string;
      fallbackCaption: (product: string) => string;
      /** The illustration comes in two flavours; each labels its panels differently. */
      medical: ProductVisualPanels;
      education: ProductVisualPanels;
    };
  };
};

export type ProductVisualPanels = {
  overview: string;
  overviewValue: string;
  action: string;
  panelMeta: string;
  panelState: string;
  panelTitle: string;
  panelBody: string;
  statLabel: string;
  statValue: string;
  listLabel: string;
};

const en: UiStrings = {
  skipToContent: "Skip to content",
  nav: {
    primaryLabel: "Primary navigation",
    mainLinksLabel: "Main links",
    menuLabel: "Site menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: (name) => `${name}, home`,
    cta: "Start a project",
    links: [
      { href: "/#work", key: "work", label: "Work" },
      { href: "/#services", key: "services", label: "Services" },
      { href: "/#process", key: "process", label: "Process" },
      { href: "/#about", key: "about", label: "About" },
      { href: "/#contact", key: "contact", label: "Contact" },
    ],
  },
  language: {
    label: "Language",
    switchTo: (language) => `Switch to ${language}`,
  },
  hero: {
    viewWork: "View my work",
    startProject: "Start a project",
    inputsLabel: "What you bring",
    outputsLabel: "What ships",
  },
  footer: {
    viewWork: "View my work",
    stepsLabel: "How a project starts",
    availableWorldwide: "Available worldwide",
  },
  project: {
    viewCaseStudy: "View case study",
    viewScreenshots: "View screenshots",
    sourceCode: "Source code",
  },
  sideProject: {
    visitSite: "Visit the site",
    sourceCode: "Source code",
    backToWork: "Back to work",
    screensTitle: "What it looks like",
    stackTitle: "How it is built",
    technologyLabel: "Technology",
    stackLead: (kind, status) => `${kind}, ${status.toLowerCase()}.`,
    ctaTitle: "Building something like this?",
    ctaBody: "I build web apps end to end, from the data model to what the team runs it from.",
    ctaAction: "Let's talk about your project",
    nextProject: "Next project",
  },
  caseStudy: {
    websiteLabel: "Website",
    nextCaseStudy: "Next case study",
    publishedResultsLabel: "Published results",
    evidenceLabel: "Evidence and content status",
    diagramLabel: (title) => `${title} visual diagram`,
  },
  testimonials: {
    title: "What clients say.",
  },
  illustration: {
    sessionSetup: {
      alt:
        "Animated, simplified recreation of the MediSapience session setup: the student picks Practice mode, selects three specialties and starts the session.",
      heading: "Set up your session",
      subheading: "Pick a mode and the topics to study.",
      stepMode: "Choose a mode",
      stepContent: "Customize the content",
      examMode: "Exam mode",
      examModeDetail: "Timed. Results at the end.",
      practiceMode: "Practice mode",
      practiceModeDetail: "No timer. Feedback as you go.",
      timeLimit: "Time limit (min)",
      startSession: "Start session",
      selectTopicWarning: "Select at least one topic.",
      searchPlaceholder: "Search specialty, subject or topic…",
      topicsSelected: "topics selected",
      ready: "Practice session ready",
      specialties: [
        { name: "General Surgery", count: "1 subject", pick: 3 },
        { name: "Obstetrics & Gynecology", count: "6 subjects" },
        { name: "Community Medicine", count: "1 subject" },
        { name: "Internal Medicine", count: "5 subjects", pick: 1 },
        { name: "Pediatrics", count: "1 subject", pick: 2 },
      ],
    },
    productVisual: {
      alt: (product) => `Illustrative product UI for ${product}`,
      preview: "Preview",
      fallbackCaption: (product) =>
        `Illustrative product UI — replace with an approved ${product} capture.`,
      medical: {
        overview: "Learning overview",
        overviewValue: "Clinical foundations",
        action: "Continue",
        panelMeta: "Current module",
        panelState: "In progress",
        panelTitle: "Applied assessment",
        panelBody: "Review material and continue your assessment workflow.",
        statLabel: "Learning paths",
        statValue: "Active",
        listLabel: "Recent activity",
      },
      education: {
        overview: "Program overview",
        overviewValue: "Active courses",
        action: "Manage",
        panelMeta: "This week",
        panelState: "Scheduled",
        panelTitle: "Program activity",
        panelBody: "Courses, schedules, and notices in one operational view.",
        statLabel: "Resources",
        statValue: "Ready",
        listLabel: "Upcoming schedule",
      },
    },
  },
};

const es: UiStrings = {
  skipToContent: "Saltar al contenido",
  nav: {
    primaryLabel: "Navegación principal",
    mainLinksLabel: "Enlaces principales",
    menuLabel: "Menú del sitio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    home: (name) => `${name}, inicio`,
    cta: "Empezar un proyecto",
    links: [
      { href: "/#work", key: "work", label: "Trabajo" },
      { href: "/#services", key: "services", label: "Servicios" },
      { href: "/#process", key: "process", label: "Proceso" },
      { href: "/#about", key: "about", label: "Sobre mí" },
      { href: "/#contact", key: "contact", label: "Contacto" },
    ],
  },
  language: {
    label: "Idioma",
    switchTo: (language) => `Cambiar a ${language}`,
  },
  hero: {
    viewWork: "Ver mi trabajo",
    startProject: "Empezar un proyecto",
    inputsLabel: "Lo que traés",
    outputsLabel: "Lo que se entrega",
  },
  footer: {
    viewWork: "Ver mi trabajo",
    stepsLabel: "Cómo empieza un proyecto",
    availableWorldwide: "Disponible en todo el mundo",
  },
  project: {
    viewCaseStudy: "Ver el caso de estudio",
    viewScreenshots: "Ver capturas",
    sourceCode: "Código fuente",
  },
  sideProject: {
    visitSite: "Visitar el sitio",
    sourceCode: "Código fuente",
    backToWork: "Volver al trabajo",
    screensTitle: "Cómo se ve",
    stackTitle: "Cómo está construido",
    technologyLabel: "Tecnología",
    stackLead: (kind, status) => `${kind}, ${status.toLowerCase()}.`,
    ctaTitle: "¿Estás construyendo algo así?",
    ctaBody: "Construyo aplicaciones web de punta a punta, del modelo de datos al panel desde el que las opera el equipo.",
    ctaAction: "Hablemos de tu proyecto",
    nextProject: "Siguiente proyecto",
  },
  caseStudy: {
    websiteLabel: "Sitio web",
    nextCaseStudy: "Siguiente caso de estudio",
    publishedResultsLabel: "Resultados publicados",
    evidenceLabel: "Evidencia y estado del contenido",
    diagramLabel: (title) => `Diagrama de ${title}`,
  },
  testimonials: {
    title: "Lo que dicen los clientes.",
  },
  illustration: {
    sessionSetup: {
      alt:
        "Recreación animada y simplificada de la configuración de sesión de MediSapience: el estudiante elige el modo Práctica, selecciona tres especialidades e inicia la sesión.",
      heading: "Configurá tu sesión",
      subheading: "Elegí un modo y los temas que vas a estudiar.",
      stepMode: "Elegí un modo",
      stepContent: "Personalizá el contenido",
      examMode: "Modo examen",
      examModeDetail: "Cronometrado. Resultados al final.",
      practiceMode: "Modo práctica",
      practiceModeDetail: "Sin cronómetro. Retroalimentación sobre la marcha.",
      timeLimit: "Límite de tiempo (min)",
      startSession: "Iniciar sesión de estudio",
      selectTopicWarning: "Seleccioná al menos un tema.",
      searchPlaceholder: "Buscar especialidad, materia o tema…",
      topicsSelected: "temas seleccionados",
      ready: "Sesión de práctica lista",
      specialties: [
        { name: "Cirugía General", count: "1 materia", pick: 3 },
        { name: "Ginecología y Obstetricia", count: "6 materias" },
        { name: "Medicina Comunitaria", count: "1 materia" },
        { name: "Medicina Interna", count: "5 materias", pick: 1 },
        { name: "Pediatría", count: "1 materia", pick: 2 },
      ],
    },
    productVisual: {
      alt: (product) => `Interfaz ilustrativa de ${product}`,
      preview: "Vista previa",
      fallbackCaption: (product) =>
        `Interfaz ilustrativa — reemplazar con una captura aprobada de ${product}.`,
      medical: {
        overview: "Resumen de aprendizaje",
        overviewValue: "Fundamentos clínicos",
        action: "Continuar",
        panelMeta: "Módulo actual",
        panelState: "En curso",
        panelTitle: "Evaluación aplicada",
        panelBody: "Repasá el material y continuá con tu evaluación.",
        statLabel: "Rutas de aprendizaje",
        statValue: "Activas",
        listLabel: "Actividad reciente",
      },
      education: {
        overview: "Resumen del programa",
        overviewValue: "Cursos activos",
        action: "Administrar",
        panelMeta: "Esta semana",
        panelState: "Programado",
        panelTitle: "Actividad del programa",
        panelBody: "Cursos, horarios y avisos en una sola vista de operación.",
        statLabel: "Recursos",
        statValue: "Listos",
        listLabel: "Próximo horario",
      },
    },
  },
};

const dictionaries: Record<Locale, UiStrings> = { en, es };

export function getUi(locale: Locale): UiStrings {
  return dictionaries[locale];
}
