export type MetricRecord = {
  value: string;
  label: string;
  context?: string;
  source: string | null;
  approved: boolean;
};

export function selectApprovedMetrics(metrics: readonly MetricRecord[]) {
  return metrics.filter(
    (metric): metric is MetricRecord & { approved: true; source: string } =>
      metric.approved === true && Boolean(metric.source?.trim()),
  );
}

export function MetricGroup({
  metrics,
  variant = "result",
}: {
  metrics: readonly MetricRecord[];
  variant?: "inline" | "large" | "result";
}) {
  const approved = selectApprovedMetrics(metrics);
  if (approved.length === 0) return null;

  return (
    <dl className={`metric-group metric-group--${variant}`} data-variant={variant}>
      {approved.map((metric) => (
        <div key={`${metric.value}-${metric.label}`}>
          <dd>{metric.value}</dd>
          <dt>{metric.label}</dt>
          {metric.context ? <span>{metric.context}</span> : null}
        </div>
      ))}
    </dl>
  );
}
