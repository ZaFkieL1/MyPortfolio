import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("leads with the product-engineering proposition and real work", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /digital products businesses can depend on/i,
      }),
    ).toBeVisible();

    const work = document.querySelector("#work");
    expect(work).not.toBeNull();
    expect(within(work as HTMLElement).getByRole("heading", { name: "MediSapience" })).toBeVisible();
    expect(within(work as HTMLElement).getByRole("heading", { name: "CEM Digital" })).toBeVisible();
  });

  it("contains commercial services, process, about, and contact sections", () => {
    render(<Home />);

    for (const id of ["services", "process", "about", "contact"]) {
      expect(document.querySelector(`#${id}`)).not.toBeNull();
    }
    expect(screen.getByRole("heading", { name: /what i build/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: /have a product in mind/i })).toBeVisible();
  });

  it("labels preview media and does not render fabricated testimonials", () => {
    render(<Home />);

    expect(screen.getAllByText(/illustrative product ui/i).length).toBeGreaterThan(0);
    expect(screen.queryByRole("region", { name: /testimonials/i })).toBeNull();
  });
});
