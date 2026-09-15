type ProductVisualProps = {
  project: "medisapience" | "cem-nicaragua";
  caption?: string;
  compact?: boolean;
};

function Bar({ width }: { width: string }) {
  return <span className="ui-bar" style={{ width }} />;
}

export function ProductVisual({ project, caption, compact = false }: ProductVisualProps) {
  const medical = project === "medisapience";
  const title = medical ? "MediSapience" : "CEM Digital";

  return (
    <figure className={`product-visual product-visual--${medical ? "medical" : "education"} ${compact ? "product-visual--compact" : ""}`.trim()}>
      <div className="product-window" role="img" aria-label={`Illustrative product UI for ${title}`}>
        <div className="product-window__chrome">
          <span />
          <span />
          <span />
          <p>{title}</p>
          <span className="product-window__status">Preview</span>
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
                <span>{medical ? "Learning overview" : "Program overview"}</span>
                <strong>{medical ? "Clinical foundations" : "Active courses"}</strong>
              </div>
              <i>{medical ? "Continue" : "Manage"}</i>
            </div>
            <div className="product-canvas__grid">
              <div className="product-main-panel">
                <div className="product-main-panel__meta">
                  <span>{medical ? "Current module" : "This week"}</span>
                  <span>{medical ? "In progress" : "Scheduled"}</span>
                </div>
                <strong>{medical ? "Applied assessment" : "Program activity"}</strong>
                <p>{medical ? "Review material and continue your assessment workflow." : "Courses, schedules, and notices in one operational view."}</p>
                <div className="product-progress"><span /></div>
              </div>
              <div className="product-stat-panel">
                <span>{medical ? "Learning paths" : "Resources"}</span>
                <strong>{medical ? "Active" : "Ready"}</strong>
                <div className="product-spark" aria-hidden="true">
                  <i /><i /><i /><i /><i />
                </div>
              </div>
              <div className="product-list-panel">
                <span>{medical ? "Recent activity" : "Upcoming schedule"}</span>
                {[0, 1, 2].map((item) => (
                  <div key={item}><i /><Bar width={`${76 - item * 13}%`} /></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>{caption ?? `Illustrative product UI — replace with an approved ${title} capture.`}</figcaption>
    </figure>
  );
}
