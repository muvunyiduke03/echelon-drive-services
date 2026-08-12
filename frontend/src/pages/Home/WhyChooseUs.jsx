import Container from "../../components/Container/Container";
import FeatureCard from "../../components/Card/FeatureCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { features } from "../../data/homeData";

function WhyChooseUs(){
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionTitle eyebrow="Why Echelon" title="A higher standard of chauffeur service" description="Our service is built around the details that matter most: punctuality, discretion, professionalism and personal attention." align="center"/>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature}/>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;