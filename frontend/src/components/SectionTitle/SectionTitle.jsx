function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}){
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-ech-gold">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-semibold leading-tight text-ech-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-ech-charcoal sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;