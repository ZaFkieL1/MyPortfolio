import type { UiStrings } from "@/content/ui";

type ProductVisualProps = {
  project: "medisapience" | "cem-nicaragua";
  caption?: string;
  compact?: boolean;
  /** Every word on the illustrated screen, in the page's language. */
  strings: UiStrings["illustration"]["productVisual"];
};

function Bar({ width }: { width: string }) {
  return <span className="ui-bar" style={{ width }} />;
}

export function ProductVisual({ project, caption, compact = false, strings }: ProductVisualProps) {
  const medical = project === "medisapience";
  const title = medical ? "MediSapience" : "CEM Digital";
  const panels = medical ? strings.medical : strings.education;

  return (
    <figure className={`product-visual product-visual--${medical ? "medical" : "education"} ${compact ? "product-visual--compact" : ""}`.trim()}>
      <div className="product-window" role="img" aria-label={strings.alt(title)}>
        <div className="product-window__chrome">
          <span />
          <span />
          <span />
          <p>{title}</p>
          <span className="product-window__status">{strings.preview}</span>
        </div>
        <div className="product-window__body">
          <aside className="product-sidebar">
            <strong>{medical ? "M" : "C"}</strong>
            {["64%", "82%", "53%", "73%", "46%"].map((width) => (
              <Bar key={width} width={width} />
            ))}
          </aside>
          <div className="product-canvas">
            <div className="product-canvas__heading">
              <div>
                <span>{panels.overview}</span>
                <strong>{panels.overviewValue}</strong>
              </div>
              <i>{panels.action}</i>
            </div>
            <div className="product-canvas__grid">
              <div className="product-main-panel">
                <div className="product-main-panel__meta">
                  <span>{panels.panelMeta}</span>
                  <span>{panels.panelState}</span>
                </div>
                <strong>{panels.panelTitle}</strong>
                <p>{panels.panelBody}</p>
                <div className="product-progress"><span /></div>
              </div>
              <div className="product-stat-panel">
                <span>{panels.statLabel}</span>
                <strong>{panels.statValue}</strong>
                <div className="product-spark" aria-hidden="true">
                  <i /><i /><i /><i /><i />
                </div>
              </div>
              <div className="product-list-panel">
                <span>{panels.listLabel}</span>
                {[0, 1, 2].map((item) => (
                  <div key={item}><i /><Bar width={`${76 - item * 13}%`} /></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>{caption ?? strings.fallbackCaption(title)}</figcaption>
    </figure>
  );
}
