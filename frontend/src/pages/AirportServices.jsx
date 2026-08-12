import { FiBriefcase,  FiCheck, FiMap, FiMapPin, FiMessageCircle, FiSend, FiShield, FiUsers } from "react-icons/fi";
import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const idealClients = [
  {
    title: "Business Exceutives",
    icon: FiBriefcase,
  },
  {
    title: "Tourists",
    icon: FiMap,
  },
  {
    title: "Family",
    icon: FiUsers,
  },
  {
    title: "Delegations",
    icon: FiShield,
  },
  {
    title: "Hotel Guests",
    icon: FiMapPin,
  },
  {
    title: "Returning residents",
    icon: FiSend,
  },
];

const includedServices = [
  "Flight monitoring",
  "Complimentary waiting time",
  "Luggage assistance",
  "Bottled water",
];

const airportSteps = [
  {
    number: "01",
    title: "Submit Booking Request for Chauffeur",
    description: "Share with us your travel details at least 24 hours before your journey.",
  },
  {
    number: "02",
    title: "Booking Confirmation",
    description: "Our team reviews your request and contacts you to confirm availability and journey details.",
  },
  {
    number: "03",
    title: "Flight Monitoring",
    description: "For arrivals, we monitor your flight and adjust the pickup time when necessary.",
  },
  {
    number: "04",
    title: "Meet & Greet",
    description: "The designated chauffeur meets you at the agreed location or inside arrivals with a name sign.",
  },
  {
    number: "05",
    title: "Luggage Assistance",
    description: "Your chauffeur assists with luggage and ensures your journey is comfortable.",
  },
  {
    number: "06",
    title: "Comfortable Journey",
    description: "Relax while your chauffeur manages the journey to your destination professionally.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Do you provide both airport pickup and drop-off?",
    answer:
      "Yes. Echelon Airport Services covers both arrivals and departures at Kigali International Airport.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "We monitor your flight and adjust the pickup time based on the updated arrival information.",
  },
  {
    question: "Can I make more than one stop?",
    answer:
      "Yes. Multiple stops can be arranged when they are included in your booking request.",
  },
  {
    question: "Can I book on the same day?",
    answer:
      "Yes, although same day requests are accepted only when chauffeur availability allows.",
  },
  {
    question: "Can I use my own vehicle?",
    answer:
      "Yes. Choose the Chauffeur Package and Echelon will provide the professional chauffeur.",
  },
  {
    question: "Can Echelon provide the vehicle too?",
    answer:
      "Yes. The Executive Chauffeur Package includes both the chauffeur and an executive vehicle.",
  },
  {
    question: "Will someone meet me inside the airport?",
    answer:
      "Yes. The chauffeur will meet you at arrivals with a name sign.",
  },
];

function AirportServices(){
  return(
    <>
      {/* Hero */}
      <section className="bg-ech-navy py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ech-gold sm:text-sm sm:tracking-[0.3em]">
              Airport Services
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-ech-cream sm:text-5xl lg:text-6xl">
              From touchdown to destination, every detail is handled.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Whether you are arriving or departing at the Kigali International Airport, Echelon provides a calm, 
              coordinated and professional chauffuer experience from pickup to destination.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button to="/booking">
                Request Airport Chauffeur
              </Button>

              <Button to="/contact" variant="secondaryLight">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Audience */}
      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow="Who It Is For" title="Airport service for your journey" description="Designed for travellers who value reliable communication, professional service and peace of mind." align="center" />
          <div className="mt-12 grid gap-px overflow-hidden border border-ech-gray bg-ech-gray sm:grid-cols-2 lg:grid-cols-4">
            {idealClients.map((client) => {
              const Icon = client.icon;

              return(
                <article key={client.title} className="bg-white p-6 text-center sm:p-8">
                  <Icon className="mx-auto text-2xl text-ech-gold" aria-hidden="true" />

                  <h2 className="mt-4 text-xl font-semibold text-ech-navy">
                    {client.title}
                  </h2>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow="Packages" title="Choose the airport experience that suits your journey" description="Both packages are designed around professionalism, punctuality and attention to details." align="center" />

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
            <article className="flex flex-col border border-ech-gray bg-ech-cream p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ech-gold">
                Chauffeur Package
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-ech-navy">
                Your vehicle. Our chauffeur.
              </h2>

              <p className="mt-4 leading-7 text-ech-charcoal">
                Ideal for clients who already have their own vehicle and need a professional chauffeur for the airport journey.
              </p>

              <div className="mt-8">
                <span className="text-4xl font-semibold text-ech-navy">
                  30,000
                </span>

                <span className="ml-2 text-sm font-semibold uppercase tracking-[0.15em] text-ech-gold">RWF</span>
              </div>

              <div className="mt-8 flex-1 space-y-4">
                {includedServices.map((item) => (
                  <div key={item} className="flex gap-3">
                    <FiCheck className="mt-1 shrink-0 text-ech-gold" aria-hidden="true"/>

                    <p className="leading-6 text-ech-charcoal">{item}</p>
                  </div>
                ))}

                <div className="flex gap-3">
                  <FiCheck className="mt-1 shrink-0 text-ech-gold" aria-hidden="true"/>

                  <p className="leading-6 text-ech-charcoal">
                    Meet & Greet at the arrival section
                  </p>
                </div>
              </div>

              <Button to="/booking" className="mt-9 w-full">Request Chauffeur Package</Button>
            </article>

            <article className="flex flex-col border border-ech-gold bg-ech-navy p-7 text-ech-cream sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ech-gold">
                Executive Chauffeur Package
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-ech-cream">
                Complete chauffeur Experience
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                Designed for clients who want Echelon to provide both the professional chauffeur and executive vehicle.
              </p>

              <div className="mt-8">
                <span className="text-3xl font-semibold text-ech-cream">
                  Tailored quotation
                </span>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Pricing depends on journey requirements and service details.
                </p>
              </div>

              <div className="mt-8 flex-1 space-y-4">
                {includedServices.map((item) => (
                  <div key={item} className="flex gap-3">
                    <FiCheck className="mt-1 shrink-0 text-ech-gold" aria-hidden="true" />
                    <p className="leading-6 text-gray-300">{item}</p>
                  </div>
                ))}

                <div className="flex gap-3">
                  <FiCheck className="mt-1 shrink-0 text-ech-gold" aria-hidden="true" />
                  <p className="leading-6 text-gray-300">
                    Executive vehicle provided by Echelon
                  </p>
                </div>

                <div className="flex gap-3">
                  <FiCheck className="mt-1 shrink-0 text-ech-gold" aria-hidden="true" />
                  <p className="leading-6 text-gray-300">
                    Full arrivals section Meet & Greet with a name sign
                  </p>
                </div>
              </div>

              <Button to="/booking" className="mt-9 w-full">Request Executive Package</Button>
            </article>
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="bg-ech-navy py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ech-gold">
              The Echelon Airport Experience
            </p>

            <h2 className="mt-5 text-4xl font-semibold text-ech-cream sm:text-5xl">
              Simple before departure. Effortless after arrival.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {airportSteps.map((step) => (
              <article key={step.number} className="border-t border-ech-gold pt-6">
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

      {/* Booking information */}
      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionTitle eyebrow="Booking Information" title="Designed around your flight schedule." description="We plan carefully so changes in your flight do not become additional stress." />

            <div className="divide-y divide-ech-gray border-y border-ech-gray">
              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Advance booking
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Requests should be submitted at least 24 hours before your flight time.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Same day bookings
                </h3>
                
                <p className="mt-3 leading-7 text-ech-charcoal">
                  Same day bookings are confirmed subject to chauffeur availability.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Flight delays
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Your flight is monitored and pickup time is adjusted when the arrival time changes.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Complimentary waiting time
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Waiting time is included as part of your package experience.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Booking protection
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  A portion of the package fee is non-refundable. Cancellation terms will be communicated during booking confirmation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow="Frequently Asked Questions" title="Key information to know about before your journey" align="center" />

          <div className="mx-auto mt-12 max-w-4xl divide-y divide-ech-gray border-y border-ech-gray">
            {frequentlyAskedQuestions.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-ech-navy">
                  <span>{item.question}</span>
                  <span className="shrink-0 text-2xl font-normal text-ech-gold transition duration-300 group-open:rotate-45">+</span>
                </summary>

                <p className="max-w-3xl pt-4 leading-7 text-ech-charcoal">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-ech-navy py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <FiSend className="mx-auto text-3xl text-ech-gold" aria-hidden="true"/>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-ech-gold">
              Airport Services
            </p>

            <h2 className="mt-5 text-4xl font-semibold text-ech-cream sm:text-5xl">
              Arrive with confidence
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
              Whether you are landing in Kigali or departing, 
              Echelon ensures that the journey around your flight feels calm, organised and professional.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button to="/booking">
                Request Airport Chauffeur
              </Button>

              <a href="https://wa.me/250788537967" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-ech-cream px-6 py-3 font-semibold text-ech-cream transition duration-300 hover:bg-ech-cream hover:text-ech-navy">
                <FiMessageCircle/>
                WhatsApp Echelon
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default AirportServices;