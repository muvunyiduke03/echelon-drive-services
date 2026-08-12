import Container from "../../components/Container/Container";
import { steps } from "../../data/homeData";

function HowItWorks(){
  return(
    <section className="bg-ech-navy py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ech-gold">How It Works</p>
          
          <h2 className="mt-4 text-4xl font-semibold text-ech-cream sm:text-5xl">
            Simple booking. Top notch service.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="text-center">
              <span className="text-sm font-semibold tracking-[0.25em] text-ech-gold">
                {step.number}
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-ech-cream">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                {step.description}
              </p>

            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;