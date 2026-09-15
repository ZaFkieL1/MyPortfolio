import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MetricGroup, selectApprovedMetrics } from "@/components/content/metric-group";
import { TestimonialGroup } from "@/components/content/testimonial-group";

describe("evidence components", () => {
  it("excludes unapproved or incomplete metrics", () => {
    const selected = selectApprovedMetrics([
      { value: "42", label: "Approved", source: "Client report", approved: true },
      { value: "99", label: "No source", source: null, approved: true },
      { value: "100", label: "Not approved", source: "Dashboard", approved: false },
    ]);
    expect(selected.map((metric) => metric.label)).toEqual(["Approved"]);
  });

  it("renders nothing when verified metrics are absent", () => {
    const { container } = render(<MetricGroup metrics={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it.each(["inline", "large", "result"] as const)(
    "exposes the %s metric presentation without changing evidence rules",
    (variant) => {
      render(
        <MetricGroup
          variant={variant}
          metrics={[{ value: "42", label: "Approved", source: "Client report", approved: true }]}
        />,
      );
      expect(screen.getByText("Approved").closest("dl")).toHaveAttribute(
        "data-variant",
        variant,
      );
    },
  );

  it("renders zero to three testimonials without a filler shell", () => {
    const { container, rerender } = render(<TestimonialGroup testimonials={[]} />);
    expect(container).toBeEmptyDOMElement();

    rerender(
      <TestimonialGroup
        testimonials={[{ quote: "Clear and reliable.", name: "Client", role: "Director", approved: true }]}
      />,
    );
    expect(screen.getByText(/Clear and reliable\./)).toBeVisible();
  });
});
