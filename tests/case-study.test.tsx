import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MediSapiencePage from "@/app/work/medisapience/page";
import CemPage from "@/app/work/cem-nicaragua/page";

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
  ],
  [
    "CEM Digital",
    CemPage,
    "CEM Digital",
    [/overview/i, /the challenge/i, /the solution/i, /key features/i, /engineering challenges/i, /system architecture/i, /results/i, /technology/i],
  ],
])("%s case study", (name, Page, heading, sectionHeadings) => {
  it("renders the full evidence-led narrative without invented proof", () => {
    render(<Page />);

    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    for (const sectionHeading of sectionHeadings) {
      expect(screen.getByRole("heading", { name: sectionHeading })).toBeVisible();
    }
    // Only client-published figures may appear; invented sample metrics never do.
    expect(screen.queryByText(/answers recorded|professionals served/i)).toBeNull();
    expect(screen.getAllByText(/illustrative product ui/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /discuss a similar product/i })).toHaveAttribute(
      "href",
      "/#contact",
    );
  });
});

describe("MediSapience case-study narrative", () => {
  it("explains the student and operator product without publishing editorial notes", () => {
    render(<MediSapiencePage />);

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

  it("publishes only the client-approved results, with their source", () => {
    render(<MediSapiencePage />);

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
    expect(screen.getByText(/placeholder text/i)).toBeVisible();
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

  it("presents the two technical flows with accessible descriptions", () => {
    render(<MediSapiencePage />);

    expect(screen.getByRole("figure", { name: /server-side session assembly/i })).toBeVisible();
    expect(screen.getByRole("figure", { name: /medisapience system architecture/i })).toBeVisible();
    expect(screen.getByText(/filter by bank, access and curriculum/i)).toBeVisible();
    expect(screen.getAllByText(/woocommerce sends completed orders/i).length).toBeGreaterThan(0);
  });
});
