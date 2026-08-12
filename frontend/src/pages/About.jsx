import { FiClock, FiShield, FiStar, FiUserCheck } from "react-icons/fi";
import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import FeatureCard from "../components/Card/FeatureCard";
import CTA from "../components/CTA/CTA";

const values = [
  {
    title: "Professionalism",
    description: "Every interaction is handled with respect, preparation and attention to detail.",
    icon: FiUserCheck,
  },
  {
    title: "Punctuality",
    description: "We coordinate and communicate clearly so every journey is on-time.",
    icon: FiClock,
  },
  {
    title: "Discretion",
    description: "Privacy of our client and personal information are treated with complete confidentiality.",
    icon: FiShield,
  },
  {
    title: "Excellence",
    description: "We aim to deliver consistent refined experience from booking to arrival to destination.",
    icon: FiStar,
  },
];

const standards = [
  "Professional and presentable chauffeurs",
  "Clear communication before every journey",
  "Respect for client privacy and personal space",
  "Careful planning around time and destination",
  "Clean, comfortable and well prepared vehicles",
  "Reliable service within Kigali and across Rwanda",
];

function About(){
  return (
    <>
      <section className="bg-ech-navy py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ech-gold sm:text-sm sm:tracking-[0.3em]">
              About Echelon
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-ech-cream sm:text-5xl lg:text-6xl">
              Private Chauffeur service built around trust
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Echelon Driver Services provides professional, discreet and
              dependable transportation for clients who value comfort,
              punctuality and peace of mind.
            </p>

            <div className="mt-8">
              <Button to="/booking">Book a Chauffeur</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle eyebrow="Our Story" title="A higher standard of chauffeur service" description="Echelon was created to offer more than a journey from one location to another. Our aim is to provide a calm, organised and professional service clients can trust."/>

              <p className="mt-6 leading-8 text-ech-charcoal">
                We approach every booking with care. We consider the client's schedule, destination, comfort and privacy
                so the experience feels seamless from the first converstion to the final destination.
              </p>

              <p className="mt-5 leading-8 text-ech-charcoal">
                Whether the travel is a business journey, airport transfer, a night service or up-country journey, our focus
                remains the same: Professional service delivered with attention to detail.
              </p>
            </div>

            <div className="border border-ech-gold bg-white p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ech-gold">
                Our Promise
              </p>

              <blockquote className="mt-6 font-display text-3xl leading-tight text-ech-navy sm:text-4xl">
                "Every journey should feel prepared, comfortable and effortless."
              </blockquote>

              <p className="mt-6 leading-7 text-ech-charcoal">
                This promise guides how we communicate, prepare and serve every client.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow="Our Values" title="The principles behind every journey" description="Our standards are designed to create confidence before, during and after every trip." align="center"/>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <FeatureCard key={value.title} {...value}/>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ech-navy py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ech-gold">
                Mission and Vision
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight text-ech-cream sm:text-5xl">
                Building trust through exceptional service
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <article className="border-l border-ech-gold pl-6">
                <h3 className="text-2xl font-semibold text-ech-cream">
                  Our Mission
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  To provide reliable, luxurious, and discreet chauffeur services that prioritize professionalism, punctuality, comfort, and client confidence.
                </p>
              </article>

              <article className="border-l border-ech-gold pl-6">
                <h3 className="text-2xl font-semibold text-ech-cream">
                  Our Vision
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  To become Rwanda's most trusted executive chauffeur service and expand across East Africa as the benchmark for private transportation excellence.
                </p>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionTitle eyebrow="Professional Standards" title="What clients can expect from Echelon" description="Consistency builds trust. These standards guide every service we provide."/>

            <div className="grid gap-px overflow-hidden border border-ech-gray bg-ech-gray sm:grid-cols-2">
              {standards.map((standard, index) => (
                <div key={standard} className="flex min-w-0 gap-4 bg-white p-6 sm:p-8">
                  <span className="shrink-0 text-sm font-semibold text-ech-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="leading-7 text-ech-navy">{standard}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CTA/>
    </>
  );
}

export default About;