import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MediSapiencePage from "@/app/work/medisapience/page";
import CemPage from "@/app/work/cem-nicaragua/page";

describe.each([
  [
    "MediSapience",
    MediSapiencePage,
    /from a medical qbank mvp/i,
    [/overview/i, /the challenge/i, /the solution/i, /how the product works/i, /engineering challenges/i, /system architecture/i, /results/i, /technology/i],
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
    expect(screen.queryByText(/subscribers|answers recorded|professionals served/i)).toBeNull();
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
        name: /from a medical qbank mvp to a platform students can study with/i,
      }),
    ).toBeVisible();
    expect(screen.getByRole("heading", { name: /for students/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /for the team behind medisapience/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /practice with feedback that teaches/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /an admin experience for the actual work/i })).toBeVisible();
    expect(screen.queryByText(/content needed/i)).toBeNull();
    expect(screen.queryByText(/17 paying premium users/i)).toBeNull();
    expect(screen.queryByText(/replace with|still needed|until .* approves/i)).toBeNull();
  });

  it("presents the two technical flows with accessible descriptions", () => {
    render(<MediSapiencePage />);

    expect(screen.getByRole("figure", { name: /server-side session assembly/i })).toBeVisible();
    expect(screen.getByRole("figure", { name: /medisapience system architecture/i })).toBeVisible();
    expect(screen.getByText(/filter by bank, access and curriculum/i)).toBeVisible();
    expect(screen.getAllByText(/woocommerce sends completed orders/i).length).toBeGreaterThan(0);
  });
});
