import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ServiceCard from "../components/Card/ServiceCard";
import { services } from "../data/homeData";

const serviceBenefits = [
  "Proffessional and presentable chauffeurs",
  "Clear confirmation before every journey",
  "Flexible arrangements based on your schedule",
  "Discreet and respectful client service",
  "Transport within Kigali and across Rwanda",
  "Support for private and corporate bookings",
];

function Services(){
  return (
    <>
      <section className="bg-ech-navy py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ech-gold sm:text-sm sm:tracking-[0.3em]">
              Our Services
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-ech-cream sm:text-5xl lg:text-6xl">
              Chauffeur services shaped for your journeys
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              When you are travelling for business, attending an event or planning and up-country journey, Echelon is here to provide proffessional chaffeur service designed for your comfort and schedule.
            </p>

            <div className="mt-8">
              <Button to="/booking">Book a Chauffeur</Button>
            </div>
          </div>
        </Container>        
      </section>

      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow="Available Services" title="Professional transport for every important occasion" description="Choose chauffeur service for your journey. We review every request before confirmation."/>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} title={service.title} description={service.description} icon={service.icon} to={`/services/${service.slug}`}/>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionTitle eyebrow="The Echelon Standard" title="More than transportation" description="Our clients are not only booking chauffeur. They are trusting us with their time and privacy."/>

            <div className="grid gap-px overflow-hidden border border-ech-gray bg-ech-gray sm:grid-cols-2">
              {serviceBenefits.map((benefit, index) =>(
                <div key={benefit} className="flex min-w-0 gap-4 bg-white p-6 sm:p-8">
                  <span className="shrink-0 text-sm font-semibold text-ech-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="leading-7 text-ech-navy">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow="Service Details" title="Explore what each service includes" align="center"/>

          <div className="mx-auto mt-14 max-w-5xl divide-y divide-ech-gray border-y border-ech-gray">
            {services.map((service) => {
              const Icon = service.icon;

              return(
                <article id={service.slug} key={service.slug} className="scroll-mt-28 py-10 sm:py-12">
                  <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
                    <div className="flex h-14 w-14 items-center justify-center border border-ech-gold text-2xl text-ech-gold">
                      <Icon aria-hidden="true"/>
                    </div>

                    <div>
                      <h2 className="text-3xl font-semibold text-ech-navy">
                        {service.title}
                      </h2>

                      <p className="mt-4 max-w-2xl leading-7 text-ech-charcoal">
                        {service.details}
                      </p>
                    </div>

                    <Button to="/booking" variant="secondary" className="w-full md:w-auto">
                      Book a Chauffeur
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Services;