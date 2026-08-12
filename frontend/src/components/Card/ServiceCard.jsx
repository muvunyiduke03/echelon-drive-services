import Button from "../Button/Button";

function ServiceCard({title, description, icon: Icon, to="/services",}){
  return (
    <article className="group flex h-full min-w-0 flex-col border border-ech-gray bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ech-gold sm:p-8">
      <div className="flex h-12 w-12 items-center justify-center border border-ech-gold text-2xl text-ech-gold">
        <Icon aria-hidden="true"/>
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-ech-navy">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-ech-charcoal">
        {description}
      </p>

      <div className="mt-8">
        <Button variant="ghost" to={to}>
          Learn More
        </Button>
      </div>
    </article>
  );
}

export default ServiceCard;