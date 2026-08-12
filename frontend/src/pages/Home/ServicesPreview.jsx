import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/Card/ServiceCard";
import { services } from "../../data/homeData";

function ServicesPreview(){
  return (
    <section className="bg-ech-cream py-20 lg:py-28">
      <Container>
        <SectionTitle eyebrow="Our Services" title="Chauffeur services designed around your journey" description="From airport pickups to corporate and private travel, Echelon provides dependable service with comfort and professionalism."/>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service) => (
            <ServiceCard
              key={service.title} 
              {...service}
              to={
                service.slug === "airport-services" ||
                service.slug === "corporate-services" ||
                service.slug === "daily-driver" ||
                service.slug === "night-services"
                  ? `/services/${service.slug}`
                  : "/services"
              }
              />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesPreview;