function FeatureCard({icon: Icon, title, description}){
  return (
    <article className="border-l border-ech-gold bg-white p-8">
      <Icon className="text-3xl text-ech-gold" aria-hidden="true"/>

      <h3 className="mt-5 text-xl font-semibold text-ech-navy">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-ech-charcoal">
        {description}
      </p>
    </article>
  );
}

export default FeatureCard;