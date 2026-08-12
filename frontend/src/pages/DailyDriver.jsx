import { FiCalendar, FiCheck, FiClock, FiHome, FiMessageCircle, FiNavigation, FiUsers } from "react-icons/fi";
import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const clientTypes = [
  {
    title: "Individuals",
    icon: FiUsers,
  },
  {
    title: "Families",
    icon: FiHome,
  },
  {
    title: "Busy Professionals",
    icon: FiCalendar,
  },
  {
    title: "Event Attendees",
    icon: FiNavigation,
  },
  {
    title: "Visitors",
    icon: FiUsers,
  },
  {
    title: "Elderly Clients",
    icon: FiHome,
  },
  {
    title: "Private Clients",
    icon: FiUsers,
  },
  {
    title: "Anyone Who Prefers Not to Drive",
    icon: FiNavigation,
  },
];

const bookingOptions = [
  {
    name: "Single Trip",
    price: "30,000 RWF",
    description:
      "For one planned journey where you simply need a professional chauffeur.",
  },
  {
    name: "Half-Day",
    price: "35,000 RWF",
    description:
      "For appointments, errands or several stops during part of your day.",
  },
  {
    name: "Full-Day",
    price: "40,000 RWF",
    description:
      "A dedicated chauffeur available throughout your full day of planned movements.",
  },
  {
    name: "Weekly",
    price: "100,000 RWF",
    description:
      "For clients who need recurring chauffeur support across an agreed week.",
  },
  {
    name: "Monthly",
    price: "250,000 RWF",
    description:
      "For clients who want ongoing chauffeur support throughout the month.",
  },
];

const includedServices = [
  "Professional chauffeur",
  "Waiting time",
  "Multiple stops",
  "Flexible itinerary changes",
  "Home pickup and drop-off",
  "Chauffeur availability throughout the booked period",
];

const sampleDay = [
  {
    time: "08:00",
    title: "Pickup at Home",
    description:
      "Your chauffeur arrives and your day begins according to your schedule.",
  },
  {
    time: "10:00",
    title: "Appointment",
    description:
      "Travel comfortably while your chauffeur handles the route, parking and waiting.",
  },
  {
    time: "12:30",
    title: "Lunch",
    description:
      "Move to your next stop without reorganising transport.",
  },
  {
    time: "14:00",
    title: "Personal Errands",
    description:
      "Multiple stops can be handled within your booked period.",
  },
  {
    time: "16:30",
    title: "Event or Visit",
    description:
      "Your chauffeur remains available while your plans continue.",
  },
  {
    time: "18:00",
    title: "Return Home",
    description:
      "Finish the day with a comfortable journey back to your chosen destination.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Can I make several stops during the day?",
    answer:
      "Yes. Daily Driver is designed to accommodate multiple stops during your booked period.",
  },
  {
    question: "Does the chauffeur wait for me between appointments?",
    answer:
      "Yes. Waiting time is included while your chauffeur remains available during the booking.",
  },
  {
    question: "Can my plans change during the day?",
    answer:
      "Yes. Reasonable itinerary changes can be accommodated during the booked period.",
  },
  {
    question: "Can I use my own car?",
    answer:
      "Yes. The Chauffeur Package is designed for clients who provide their own vehicle.",
  },
  {
    question: "Can Echelon provide the vehicle?",
    answer:
      "Yes. Choose the Full Chauffeur Package and Echelon will provide both the chauffeur and vehicle.",
  },
  {
    question: "Can the chauffeur take me outside Kigali?",
    answer:
      "Yes. Let us know your planned itinerary when booking so we can arrange the journey appropriately.",
  },
  {
    question: "Can I book for an entire week or month?",
    answer:
      "Yes. Daily Driver can be arranged as a single trip, half-day, full-day, weekly or monthly service.",
  },
  {
    question: "Can I book on the same day?",
    answer:
      "Same-day requests may be accepted subject to chauffeur availability. We recommend booking at least 24 hours in advance.",
  },
  {
    question: "What tasks can I ask my chauffeur to perform?",
    answer:
      "The service is focused on professional driving and reasonable chauffeur-related assistance.",
  },
  {
    question: "Is the initial deposit refundable?",
    answer:
      "No. The initial deposit required to secure the booking is non-refundable.",
  },
];

function DailyDriver(){
  return (
    <>
      <section className="bg-ech-navy py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ech-gold sm:text-sm sm:tracking-[0.3em]">
              Daily Driver
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-ech-cream sm:text-5xl lg:text-6xl">
              Your day, without the driving.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Whether you're managing appointments, errands, events, family
              plans or simply prefer not to drive, Echelon provides a
              professional chauffeur who works around your schedule.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button to="/booking">
                Request a Daily Driver
              </Button>

              <Button to="/contact" variant="secondaryLight">
                Contact Echelon
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Who It Is For"
            title="For the days when driving should be one less thing to think about"
            description="Daily Driver is designed for clients who want convenience, flexibility and professional chauffeur support throughout their day."
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

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Packages"
            title="Choose the support that fits your day"
            description="Use your own vehicle and book an Echelon chauffeur, or choose the complete package with both chauffeur and vehicle provided."
            align="center"
          />

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
            <article className="flex flex-col border border-ech-gray bg-ech-cream p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ech-gold">
                Chauffeur Package
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-ech-navy">
                Your vehicle. Our chauffeur.
              </h2>

              <p className="mt-4 leading-7 text-ech-charcoal">
                Designed for clients who already have a vehicle and want a
                professional chauffeur available around their personal
                schedule.
              </p>

              <div className="mt-8 divide-y divide-ech-gray border-y border-ech-gray">
                {bookingOptions.map((option) => (
                  <div
                    key={option.name}
                    className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-start"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-ech-navy">
                        {option.name}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-ech-charcoal">
                        {option.description}
                      </p>
                    </div>

                    <p className="font-semibold text-ech-gold sm:text-right">
                      {option.price}
                    </p>
                  </div>
                ))}
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
                Complete convenience for your day.
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                Echelon provides both the professional chauffeur and vehicle,
                giving you a complete service designed around your itinerary.
              </p>

              <div className="mt-8 border-y border-white/15 py-6">
                <p className="text-3xl font-semibold text-ech-cream">
                  Tailored quotation
                </p>

                <p className="mt-3 max-w-lg text-sm leading-6 text-gray-400">
                  Pricing depends on duration, distance, vehicle requirements
                  and your planned itinerary.
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

      <section className="bg-ech-navy py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ech-gold">
                Your Day With Echelon
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight text-ech-cream sm:text-5xl">
                One chauffeur. Your schedule.
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-gray-300">
                Your plans don't need to fit around transport. Your chauffeur
                remains available throughout the booked period while you focus
                on your day.
              </p>
            </div>

            <div className="relative">
              <div
                className="absolute bottom-0 left-[2.45rem] top-0 hidden w-px bg-ech-gold/40 sm:block"
                aria-hidden="true"
              />

              <div className="space-y-8">
                {sampleDay.map((item) => (
                  <article
                    key={`${item.time}-${item.title}`}
                    className="relative grid gap-4 sm:grid-cols-[5rem_1fr]"
                  >
                    <div className="relative z-10">
                      <span className="inline-flex min-w-[5rem] justify-center bg-ech-gold px-3 py-2 text-sm font-semibold text-ech-navy">
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

      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionTitle
              eyebrow="Booking Information"
              title="Flexible enough for real life"
              description="Daily Driver is designed to work around your plans while keeping the service professional and clearly arranged."
            />

            <div className="divide-y divide-ech-gray border-y border-ech-gray">
              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Advance booking
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  We recommend requesting Daily Driver at least 24 hours in
                  advance.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Same-day requests
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Same-day requests may be accepted subject to chauffeur
                  availability.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Flexible itinerary
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Reasonable changes can be made during the booking period to
                  accommodate your plans.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Service area
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Your journey is not limited to Kigali. Tell us where your day
                  takes you and we will arrange the service around your
                  itinerary.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Chauffeur responsibilities
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Daily Driver covers professional driving and reasonable
                  chauffeur-related assistance only.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Initial deposit
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  The initial deposit required to secure the booking is
                  non-refundable.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Frequently Asked Questions"
            title="A chauffeur service built around your day"
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

      <section className="bg-ech-navy py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <FiClock
              className="mx-auto text-3xl text-ech-gold"
              aria-hidden="true"
            />

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-ech-gold">
              Daily Driver
            </p>

            <h2 className="mt-5 text-4xl font-semibold text-ech-cream sm:text-5xl">
              Your time belongs to you.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
              From the first pickup to the final stop, Echelon handles the
              driving so you can give your attention to everything else your
              day requires.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button to="/booking">
                Request a Daily Driver
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

export default DailyDriver;