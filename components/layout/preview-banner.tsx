import { portfolioContent } from "@/content/portfolio";

export function PreviewBanner() {
  if (portfolioContent.readiness !== "mock") return null;

  return (
    <div className="preview-banner" role="status">
      <span>Content preview</span>
      <p>Provisional copy and illustrative UI. This build is blocked from indexing and launch.</p>
    </div>
  );
}
