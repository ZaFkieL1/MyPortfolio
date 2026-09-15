import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Navbar } from "@/components/navigation/navbar";

describe("Navbar", () => {
  it("exposes primary destinations and a direct contact action", () => {
    render(<Navbar />);

    expect(screen.getByRole("navigation", { name: /primary/i })).toBeVisible();
    expect(screen.getAllByRole("link", { name: /work/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /process/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /start a project/i })).toHaveAttribute(
      "href",
      "/#contact",
    );
  });

  it("opens and closes the mobile navigation with accessible state", () => {
    render(<Navbar />);

    const trigger = screen.getByRole("button", { name: /open menu/i });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("dialog", { name: /site menu/i })).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: /close menu/i }));
    expect(screen.queryByRole("dialog", { name: /site menu/i })).toBeNull();
  });
});
