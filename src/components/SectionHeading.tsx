interface Props {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ label, title, description, center = true, light = false }: Props) => (
  <div className={`max-w-2xl mb-12 ${center ? "mx-auto text-center" : ""}`}>
    {label && (
      <span className="inline-block text-accent font-heading font-semibold text-sm tracking-wide uppercase mb-3">
        {label}
      </span>
    )}
    <h2 className={`font-heading font-bold text-3xl md:text-4xl leading-tight mb-4 ${light ? "text-hero-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`text-lg leading-relaxed ${light ? "text-hero-muted" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
