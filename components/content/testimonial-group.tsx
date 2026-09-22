type Testimonial = {
  quote: string;
  name: string;
  role: string;
  approved: true;
};

export function TestimonialGroup({
  testimonials,
  title,
}: {
  testimonials: readonly Testimonial[];
  title: string;
}) {
  const approved = testimonials.filter((item) => item.approved).slice(0, 3);
  if (approved.length === 0) return null;

  return (
    <section className="testimonial-section container" aria-labelledby="testimonial-title">
      <h2 id="testimonial-title">{title}</h2>
      <div className="testimonial-grid" data-count={approved.length}>
        {approved.map((testimonial) => (
          <figure key={`${testimonial.name}-${testimonial.quote}`}>
            <blockquote>“{testimonial.quote}”</blockquote>
            <figcaption><strong>{testimonial.name}</strong><span>{testimonial.role}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
