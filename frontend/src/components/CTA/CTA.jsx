import Button from "../Button/Button";
import Container from "../Container/Container";

function CTA(){
  return(
    <section className="bg-ech-navy py-24">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ech-gold">
            You have a Journey?
          </p>

          <h2 className="mt-5 font-display text-4xl font-semibold text-ech-cream sm:text-5xl">
            Every Journey, <span className="italic text-ech-gold">We Elevate</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Book your chauffeur with us today and experience executive transportation designed for your comfort and schedule.
          </p>

          <div className="mt-10">
            <Button to="/booking">
             Book a Chauffeur
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;