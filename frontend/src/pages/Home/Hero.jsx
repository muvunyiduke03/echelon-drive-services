import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import heroImage from "../../assets/images/DriverHero.jpg";

function Hero(){
  return (
    <section className="relative w-full min-w-0 overflow-hidden bg-ech-navy">
      <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover object-center"/>

      <div className="absolute inset-0 bg-ech-navy/75" aria-hidden="true"/>

      <div className="absolute inset-0 bg-gradient-to-r from-ech-navy via-ech-navy/85 to-ech-navy/30" aria-hidden="true"/>

      <Container className="relative flex min-h-[620px] items-center py-20 sm:min-h-[680px] sm:py-28 lg:min-h-[760px] lg:py-36">
        <div className="w-full min-w-0 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ech-gold sm:text-sm sm:tracking-[0.3em]">
            Private Chauffeur Services
          </p>

          <h1 className="mt-6 max-w-full break-words font-display text-4xl font-semibold leading-[1.05] text-ech-cream sm:text-5xl md:text-6xl lg:text-7xl">
            Every Journey,
            <span className="block italic text-ech-gold">
              We Elevate.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
            Professional and top-notch chauffeur services designed for your comfort, schedule and peace of mind.
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button to="/booking" className="w-full whitespace-normal text-center sm:w-auto">
              Book a Chauffeur
            </Button>

            <Button to="/services" variant="secondaryLight" className="w-full whitespace-normal text-center sm:w-auto">
              Explore Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;