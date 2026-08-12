import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { testimonials } from "../../data/homeData";

function Testimonials(){
  return(
    <section className="bg-ech-cream py-20 lg:py-28">
      <Container>
        <SectionTitle eyebrow="Client Experience" title="Service remembered for the right reasons" align="center"/>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.quote} className="border border-ech-gray bg-white p-8 sm:p-10">
              <div className="text-sm tracking-[0.25em] text-ech-gold" aria-label="Five star rating">★★★★★</div>

              <p className="mt-6 text-xl leading-8 text-ech-navy">"{testimonial.quote}"</p>

              <footer className="mt-8 border-t border-ech-gray pt-5">
                <p className="font-semibold text-ech-navy">{testimonial.name}</p>

                <p className="mt-1 text-sm text-ech-charcoal">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;