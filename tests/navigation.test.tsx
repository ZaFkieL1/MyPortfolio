import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Navbar } from "@/components/navigation/navbar";

describe("Navbar", () => {
  it("exposes primary destinations and a direct contact action", () => {
    render(<Navbar locale="en" />);

    expect(screen.getByRole("navigation", { name: /primary/i })).toBeVisible();
    expect(screen.getAllByRole("link", { name: /work/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /process/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /start a project/i })).toHaveAttribute(
      "href",
      "/en#contact",
    );
  });

  it("opens and closes the mobile navigation with accessible state", () => {
    render(<Navbar locale="en" />);

    const trigger = screen.getByRole("button", { name: /open menu/i });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("dialog", { name: /site menu/i })).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: /close menu/i }));
    expect(screen.queryByRole("dialog", { name: /site menu/i })).toBeNull();
  });

  it("speaks Spanish and keeps every link inside the Spanish tree", () => {
    render(<Navbar locale="es" />);

    expect(screen.getByRole("navigation", { name: /navegación principal/i })).toBeVisible();
    expect(screen.getByRole("link", { name: /empezar un proyecto/i })).toHaveAttribute(
      "href",
      "/es#contact",
    );
    expect(screen.getByRole("link", { name: "Trabajo" })).toHaveAttribute("href", "/es#work");
  });

  it("offers the other language without leaving the page", () => {
    render(<Navbar locale="en" />);

    const group = screen.getByRole("group", { name: /language/i });
    const spanish = screen.getByRole("link", { name: /switch to español/i });
    expect(group).toContainElement(spanish);
    expect(spanish).toHaveAttribute("href", "/es");
    expect(spanish).toHaveAttribute("hreflang", "es");

    // The current language stays present, marked, and is not offered as a switch.
    expect(screen.getByText("EN")).toHaveAttribute("aria-current", "true");
  });
});
