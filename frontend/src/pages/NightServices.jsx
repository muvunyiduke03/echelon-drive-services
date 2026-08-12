import {
  FiCalendar,
  FiCheck,
  FiClock,
  FiMapPin,
  FiMessageCircle,
  FiMoon,
  FiUsers,
} from "react-icons/fi";

import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const clientTypes = [
  {
    title: "Dinner Guests",
    icon: FiUsers,
  },
  {
    title: "Wedding Guests",
    icon: FiCalendar,
  },
  {
    title: "Concert & Event Attendees",
    icon: FiCalendar,
  },
  {
    title: "Nightlife Clients",
    icon: FiMoon,
  },
  {
    title: "Late Business Travellers",
    icon: FiClock,
  },
  {
    title: "Hotel Guests",
    icon: FiMapPin,
  },
  {
    title: "Airport Arrivals",
    icon: FiMapPin,
  },
  {
    title: "Anyone Who Prefers Not to Drive",
    icon: FiUsers,
  },
];

const includedServices = [
  "Professional chauffeur",
  "Waiting time",
  "Multiple stops",
  "Event pickup",
  "Late-night return",
  "Chauffeur availability throughout the booked night",
];

const nightTimeline = [
  {
    time: "19:00",
    title: "Pickup",
    description:
      "Your chauffeur arrives at the agreed location and your night begins on schedule.",
  },
  {
    time: "20:00",
    title: "Dinner or Event",
    description:
      "Travel comfortably while your chauffeur handles the driving and remains available.",
  },
  {
    time: "22:30",
    title: "Second Stop",
    description:
      "Move between locations without reorganising transport or finding another driver.",
  },
  {
    time: "00:30",
    title: "Late-Night Pickup",
    description:
      "Your chauffeur is ready when you are, helping keep the end of your evening simple.",
  },
  {
    time: "01:00",
    title: "Return Home",
    description:
      "Finish the night with a calm and professionally handled journey home.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Can I book a chauffeur on the same night?",
    answer:
      "Yes. Same-night requests are accepted subject to chauffeur availability.",
  },
  {
    question: "Does the chauffeur wait while I am at an event?",
    answer:
      "Yes. Waiting time is included for the booked night.",
  },
  {
    question: "Can we visit several places during the night?",
    answer:
      "Yes. Multiple stops can be included within your booking.",
  },
  {
    question: "Will the chauffeur take me home after the event?",
    answer:
      "Yes. Late-night return is included as part of the Night Service.",
  },
  {
    question: "Can I use my own vehicle?",
    answer:
      "Yes. Choose the Chauffeur Package and Echelon will provide the professional chauffeur.",
  },
  {
    question: "Can Echelon provide the vehicle as well?",
    answer:
      "Yes. Choose the Full Chauffeur Package and Echelon will provide both the vehicle and chauffeur.",
  },
  {
    question: "Where is Night Service currently available?",
    answer:
      "Night Services currently operate within Kigali.",
  },
  {
    question: "Is the initial deposit refundable?",
    answer:
      "No. The 8,300 RWF initial deposit required to secure the Chauffeur Package is non-refundable.",
  },
];

function NightServices() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ech-navy py-20 sm:py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-gradient-to-br from-ech-navy via-ech-navy-dark to-black/90"
          aria-hidden="true"
        />

        <div
          className="absolute right-[-8rem] top-[-8rem] h-72 w-72 rounded-full border border-ech-gold/10 sm:h-96 sm:w-96"
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ech-gold sm:text-sm sm:tracking-[0.3em]">
              Night Services
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-ech-cream sm:text-5xl lg:text-6xl">
              Enjoy the night. We’ll handle the drive.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Echelon provides professional night chauffeur services for
              dinners, weddings, concerts, nightlife, late meetings, hotel
              guests, airport arrivals and anyone who would rather not drive at
              night.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button to="/booking">
                Request Night Chauffeur
              </Button>

              <Button to="/contact" variant="secondaryLight">
                Contact Echelon
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Audience */}
      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Who It Is For"
            title="For evenings when the journey should feel effortless"
            description="Night Services are designed for clients who want dependable transport without having to think about the drive home."
            align="center"
          />

          <div className="mt-12 grid gap-px overflow-hidden border border-ech-gray bg-ech-gray sm:grid-cols-2 lg:grid-cols-4">
            {clientTypes.map((client) => {
              const Icon = client.icon;

              return (
                <article
                  key={client.title}
                  className="bg-white p-6 text-center sm:p-8"
                >
                  <Icon
                    className="mx-auto text-2xl text-ech-gold"
                    aria-hidden="true"
                  />

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
          <SectionTitle
            eyebrow="Packages"
            title="Choose how you want your night handled"
            description="Use your own vehicle and let Echelon provide the chauffeur, or choose the complete package with both chauffeur and vehicle."
            align="center"
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
            <article className="flex flex-col border border-ech-gray bg-ech-cream p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ech-gold">
                Chauffeur Package
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-ech-navy">
                Your vehicle. Our chauffeur.
              </h2>

              <p className="mt-4 leading-7 text-ech-charcoal">
                Ideal for clients who already have a vehicle and want a
                professional chauffeur available throughout the night.
              </p>

              <div className="mt-8">
                <span className="text-4xl font-semibold text-ech-navy">
                  25,000
                </span>

                <span className="ml-2 text-sm font-semibold uppercase tracking-[0.15em] text-ech-gold">
                  RWF
                </span>

                <p className="mt-2 text-sm leading-6 text-ech-charcoal">
                  Full-night chauffeur service.
                </p>
              </div>

              <div className="mt-8 border-y border-ech-gray py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ech-gold">
                  Booking Deposit
                </p>

                <p className="mt-2 text-2xl font-semibold text-ech-navy">
                  8,300 RWF
                </p>

                <p className="mt-2 text-sm leading-6 text-ech-charcoal">
                  Required to secure the booking and non-refundable.
                </p>
              </div>

              <div className="mt-8 flex-1 space-y-4">
                {includedServices.map((item) => (
                  <div key={item} className="flex gap-3">
                    <FiCheck
                      className="mt-1 shrink-0 text-ech-gold"
                      aria-hidden="true"
                    />

                    <p className="leading-6 text-ech-charcoal">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <Button to="/booking" className="mt-9 w-full">
                Request Chauffeur Package
              </Button>
            </article>

            <article className="flex flex-col border border-ech-gold bg-ech-navy p-7 text-ech-cream sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ech-gold">
                Full Chauffeur Package
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-ech-cream">
                The complete night arrangement.
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                Echelon provides both the chauffeur and vehicle, allowing you
                to enjoy the night while we manage the transportation.
              </p>

              <div className="mt-8 border-y border-white/15 py-6">
                <p className="text-3xl font-semibold text-ech-cream">
                  Tailored quotation
                </p>

                <p className="mt-3 max-w-lg text-sm leading-6 text-gray-400">
                  Pricing depends on the vehicle, distance, duration, number of
                  stops and your evening itinerary.
                </p>
              </div>

              <div className="mt-8 flex-1 space-y-4">
                {includedServices.map((item) => (
                  <div key={item} className="flex gap-3">
                    <FiCheck
                      className="mt-1 shrink-0 text-ech-gold"
                      aria-hidden="true"
                    />

                    <p className="leading-6 text-gray-300">
                      {item}
                    </p>
                  </div>
                ))}

                <div className="flex gap-3">
                  <FiCheck
                    className="mt-1 shrink-0 text-ech-gold"
                    aria-hidden="true"
                  />

                  <p className="leading-6 text-gray-300">
                    Vehicle provided by Echelon
                  </p>
                </div>
              </div>

              <Button to="/booking" className="mt-9 w-full">
                Request Full Package
              </Button>
            </article>
          </div>
        </Container>
      </section>

      {/* Night experience */}
      <section className="relative overflow-hidden bg-ech-navy py-20 lg:py-28">
        <div
          className="absolute inset-0 bg-gradient-to-b from-ech-navy to-ech-navy-dark"
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <FiMoon
                className="text-3xl text-ech-gold"
                aria-hidden="true"
              />

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-ech-gold">
                Your Night With Echelon
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight text-ech-cream sm:text-5xl">
                Your night stays yours.
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-gray-300">
                Your chauffeur remains available throughout the booked period,
                handling the driving, waiting and movement between locations
                while you focus on enjoying your plans.
              </p>
            </div>

            <div className="relative">
              <div
                className="absolute bottom-0 left-[2.45rem] top-0 hidden w-px bg-ech-gold/40 sm:block"
                aria-hidden="true"
              />

              <div className="space-y-8">
                {nightTimeline.map((item) => (
                  <article
                    key={`${item.time}-${item.title}`}
                    className="relative grid gap-4 sm:grid-cols-[5rem_1fr]"
                  >
                    <div className="relative z-10">
                      <span className="inline-flex min-w-[5rem] justify-center border border-ech-gold bg-ech-navy-dark px-3 py-2 text-sm font-semibold text-ech-gold">
                        {item.time}
                      </span>
                    </div>

                    <div className="border-l border-ech-gold/40 pl-5 sm:border-l-0 sm:pl-0">
                      <h3 className="text-2xl font-semibold text-ech-cream">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-xl leading-7 text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Booking information */}
      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionTitle
              eyebrow="Booking Information"
              title="Flexible enough for spontaneous nights"
              description="Night Services can be arranged in advance or on the same night when chauffeur availability allows."
            />

            <div className="divide-y divide-ech-gray border-y border-ech-gray">
              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Booking notice
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Night Services can be requested at any time.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Same-night requests
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Same-night bookings are accepted subject to chauffeur
                  availability.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Full-night service
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  The Chauffeur Package is arranged as a full-night service
                  rather than an hourly booking.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Service area
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Night Services currently operate within Kigali.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Multiple stops
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Multiple locations can be included throughout your booked
                  night.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Waiting time
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Waiting time is included while your chauffeur remains
                  available during the booking.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Initial deposit
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  An 8,300 RWF non-refundable deposit is required to secure the
                  Chauffeur Package.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Frequently Asked Questions"
            title="Everything you need to know before the night begins"
            align="center"
          />

          <div className="mx-auto mt-12 max-w-4xl divide-y divide-ech-gray border-y border-ech-gray">
            {frequentlyAskedQuestions.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-ech-navy">
                  <span>{item.question}</span>

                  <span className="shrink-0 text-2xl font-normal text-ech-gold transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="max-w-3xl pt-4 leading-7 text-ech-charcoal">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ech-navy py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <FiMoon
              className="mx-auto text-3xl text-ech-gold"
              aria-hidden="true"
            />

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-ech-gold">
              Night Services
            </p>

            <h2 className="mt-5 text-4xl font-semibold text-ech-cream sm:text-5xl">
              Enjoy the night. Leave the driving to us.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
              From the first pickup to the late-night return, Echelon keeps
              your transport calm, reliable and professionally handled.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button to="/booking">
                Request Night Chauffeur
              </Button>

              <a
                href="https://wa.me/250788537967"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ech-cream px-6 py-3 font-semibold text-ech-cream transition duration-300 hover:bg-ech-cream hover:text-ech-navy"
              >
                <FiMessageCircle />
                WhatsApp Echelon
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default NightServices;