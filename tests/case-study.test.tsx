import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MediSapiencePage from "@/app/[lang]/work/medisapience/page";
import CemPage from "@/app/[lang]/work/cem-nicaragua/page";
import type { JSX } from "react";
import type { Locale } from "@/content/i18n";

/** Pages take their language from the route, so a test awaits one before rendering it. */
type CaseStudyPage = (props: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) => Promise<JSX.Element>;

async function renderPage(Page: CaseStudyPage, lang: Locale = "en") {
  render(await Page({ params: Promise.resolve({ lang }), searchParams: Promise.resolve({}) }));
}

describe.each([
  [
    "MediSapience",
    MediSapiencePage,
    /one platform for medical question banks and the team behind them/i,
    [
      /a question bank is only useful when students can return to it/i,
      /one product, two operating realities/i,
      /the smallest useful loop/i,
      /the technical work behind a credible study session/i,
      /boundaries that keep the system reliable/i,
      /what changed after launch/i,
      /a product has to work for the people running it/i,
      /technology/i,
    ],
    // Its hero is still a CSS recreation, and says so.
    /illustrative product ui/i,
  ],
  [
    "CEM Digital",
    CemPage,
    /one app for a medical course that ran on five platforms/i,
    [
      /a course spread across five apps/i,
      /four tools retired, one kept/i,
      /one app, two sides of the course/i,
      /the daily question, kept and automated/i,
      /exams that open on their own/i,
      /the technical work behind a punctual course/i,
      /a phone app on a small, dependable stack/i,
      /what changed for cem/i,
      /a course is easier to follow from one place/i,
      /technology/i,
    ],
    // Its hero is a real capture, so the caption says where the data came from.
    /captured from the running app on demonstration data/i,
  ],
])("%s case study", (name, Page, heading, sectionHeadings, visualLabel) => {
  it("renders the full evidence-led narrative without invented proof", async () => {
    await renderPage(Page as CaseStudyPage);

    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    for (const sectionHeading of sectionHeadings) {
      expect(screen.getByRole("heading", { name: sectionHeading })).toBeVisible();
    }
    // Only client-published figures may appear; invented sample metrics never do.
    expect(screen.queryByText(/answers recorded|professionals served/i)).toBeNull();
    // Every product visual states what it is: a recreation, or a capture and of what.
    expect(screen.getAllByText(visualLabel).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /discuss a similar product/i })).toHaveAttribute(
      "href",
      "/en#contact",
    );
  });
});

describe("MediSapience case-study narrative", () => {
  it("explains the student and operator product without publishing editorial notes", async () => {
    await renderPage(MediSapiencePage);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /one platform for medical question banks and the team behind them/i,
      }),
    ).toBeVisible();
    expect(screen.getByRole("heading", { name: /for students/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /for the team behind medisapience/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /practice and exam are not the same experience/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /the operating surface keeps the bank moving/i })).toBeVisible();
    expect(screen.queryByText(/content needed/i)).toBeNull();
    expect(screen.queryByText(/17 paying premium users/i)).toBeNull();
    expect(screen.queryByText(/replace with|still needed|until .* approves/i)).toBeNull();
  });

  it("publishes only the client-approved results, with their source", async () => {
    await renderPage(MediSapiencePage);

    for (const heading of [
      /a question bank is only useful when students can return to it/i,
      /one product, two operating realities/i,
      /the smallest useful loop/i,
      /the technical work behind a credible study session/i,
      /boundaries that keep the system reliable/i,
      /what changed after launch/i,
      /a product has to work for the people running it/i,
    ]) {
      expect(screen.getByRole("heading", { name: heading })).toBeVisible();
    }

    const results = screen.getByLabelText("Published results");
    for (const [label, value] of [
      ["Answer attempts", "20,641+"],
      ["Subscribers", "310+"],
      ["Premium subscribers who passed", "41%"],
      ["In service", "1 year"],
    ]) {
      expect(within(results).getByText(label).nextElementSibling).toHaveTextContent(value);
    }
    expect(screen.getByText(/figures published by medisapience on medisapience\.com/i)).toBeVisible();
    expect(screen.queryByText(/adoption metrics|role attribution|pending verification/i)).toBeNull();
    expect(screen.getByRole("link", { name: /medisapience\.com/i })).toHaveAttribute("href", "https://medisapience.com");
    expect(screen.getByText("Founder, MediSapience")).toBeVisible();
    expect(screen.getByText(/doesn’t just execute an idea/i)).toBeVisible();
    expect(screen.queryByText(/lorem ipsum/i)).toBeNull();
    expect(screen.getByRole("link", { name: /view dr\. yasser silva morales on linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/doctoryassersilvamorales/",
    );
    // Any other percentage would be an unapproved figure; recommendation weights are parameters.
    const unapprovedFigures = screen
      .queryAllByText(/\d+%|17 paying/i)
      .filter(
        (element) =>
          !element.closest('[aria-label="Recommendation weights"]') &&
          !element.closest('[aria-label="Published results"]') &&
          !/41% of Premium subscribers/.test(element.textContent ?? ""),
      );
    expect(unapprovedFigures).toHaveLength(0);
  });

  it("presents the two technical flows with accessible descriptions", async () => {
    await renderPage(MediSapiencePage);

    expect(screen.getByRole("figure", { name: /server-side session assembly/i })).toBeVisible();
    expect(screen.getByRole("figure", { name: /medisapience system architecture/i })).toBeVisible();
    expect(screen.getByText(/filter by bank, access and curriculum/i)).toBeVisible();
    expect(screen.getAllByText(/woocommerce sends completed orders/i).length).toBeGreaterThan(0);
  });
});

describe("CEM Digital case-study narrative", () => {
  it("maps each retired tool to what replaced it, keeping Zoom", async () => {
    await renderPage(CemPage);

    const tools = screen.getByRole("list", { name: /tools replaced by cem digital/i });
    for (const tool of ["Google Classroom", "WhatsApp", "Microsoft Forms", "Google Drive", "Zoom"]) {
      expect(within(tools).getByText(tool)).toBeVisible();
    }
    expect(within(tools).getByText(/join class button/i)).toBeVisible();
    expect(screen.getByRole("heading", { name: /the answer releases itself/i })).toBeVisible();
    expect(screen.getByRole("link", { name: /cemnicaragua\.com/i })).toHaveAttribute(
      "href",
      "https://www.cemnicaragua.com",
    );
  });

  it("labels every pending result instead of inventing one", async () => {
    await renderPage(CemPage);

    const evidence = screen.getByLabelText("Evidence and content status");
    expect(within(evidence).getByText("Students and usage in the app").nextElementSibling).toHaveTextContent(
      "Pending client approval",
    );
    expect(within(evidence).getByText(/published on cemnicaragua\.com/i)).toBeVisible();
    expect(screen.queryByLabelText("Published results")).toBeNull();
    // No quote is approved, so the testimonial section is omitted rather than filled.
    expect(screen.queryByText(/placeholder text/i)).toBeNull();
    expect(screen.queryByText(/lorem ipsum/i)).toBeNull();
    expect(screen.queryByRole("heading", { name: /from the client/i })).toBeNull();
    expect(screen.queryAllByText(/\d+%/)).toHaveLength(0);
  });

  it("presents the release flow and architecture with accessible descriptions", async () => {
    await renderPage(CemPage);

    expect(screen.getByRole("figure", { name: /scheduled answer release/i })).toBeVisible();
    expect(screen.getByRole("figure", { name: /cem digital system architecture/i })).toBeVisible();
    expect(screen.getByRole("img", { name: /question of the day/i })).toBeVisible();
  });
});

/**
 * The Spanish case studies are separate content files; these check that both pages are
 * whole in Spanish — the same sections, the same evidence rules, no English left over.
 */
describe("case studies in Spanish", () => {
  it("renders the MediSapience study in Spanish, figures and sources intact", async () => {
    await renderPage(MediSapiencePage, "es");

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /una sola plataforma para los bancos de preguntas médicas/i,
      }),
    ).toBeVisible();
    for (const heading of [
      /un banco de preguntas solo sirve si el estudiante puede volver a él/i,
      /un producto, dos realidades de operación/i,
      /el ciclo útil más pequeño/i,
      /fronteras que mantienen confiable al sistema/i,
      /qué cambió después del lanzamiento/i,
    ]) {
      expect(screen.getByRole("heading", { name: heading })).toBeVisible();
    }

    // The published figures are the same numbers, under translated labels.
    const results = screen.getByLabelText("Resultados publicados");
    for (const [label, value] of [
      ["Respuestas registradas", "20,641+"],
      ["Suscriptores", "310+"],
      ["Suscriptores Premium que aprobaron", "41%"],
    ]) {
      expect(within(results).getByText(label).nextElementSibling).toHaveTextContent(value);
    }
    // A source names where a figure was published, so it still points at the same place.
    expect(screen.getAllByText(/medisapience\.com/i).length).toBeGreaterThan(0);
    expect(screen.queryByRole("heading", { name: /how the product grew/i })).toBeNull();
  });

  it("renders the CEM study in Spanish and still withholds unapproved results", async () => {
    await renderPage(CemPage, "es");

    expect(
      screen.getByRole("heading", { level: 1, name: /una sola app para un curso de medicina/i }),
    ).toBeVisible();
    expect(screen.getByRole("heading", { name: /cuatro herramientas fuera, una que se queda/i })).toBeVisible();

    const evidence = screen.getByLabelText("Evidencia y estado del contenido");
    expect(
      within(evidence).getByText("Estudiantes y uso en la app").nextElementSibling,
    ).toHaveTextContent("Pendiente de aprobación del cliente");
    expect(screen.queryByLabelText("Resultados publicados")).toBeNull();
    // Still no approved quote, in either language.
    expect(screen.queryByRole("heading", { name: /lo dice el cliente/i })).toBeNull();
  });
});
