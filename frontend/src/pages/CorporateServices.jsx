import { FiBriefcase, FiCalendar, FiCheck, FiMapPin, FiMessageCircle, FiUsers, } from "react-icons/fi";
import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const clientTypes = [
  {
    title: "Executives",
    icon: FiBriefcase,
  },
  {
    title: "Companies",
    icon: FiUsers,
  },
  {
    title: "NGOs & Embassies",
    icon: FiMapPin,
  },
  {
    title: "Delegations",
    icon: FiUsers,
  },
  {
    title: "Event Organizers",
    icon: FiCalendar,
  },
  {
    title: "Hotels",
    icon: FiMapPin,
  },
  {
    title: "Business Travellers",
    icon: FiBriefcase,
  },
  {
    title: "Corporate Guests",
    icon: FiUsers,
  },
];

const bookingOptions = [
  {
    name: "Single Trip",
    price: "30,000 RWF",
    description:
      "For a single meeting transfer, airport movement or one business journey.",
  },
  {
    name: "Half-Day",
    price: "35,000 RWF",
    description:
      "Ideal for several meetings or scheduled movements within part of the day.",
  },
  {
    name: "Full-Day",
    price: "40,000 RWF",
    description:
      "A dedicated chauffeur available throughout your working day.",
  },
  {
    name: "Monthly",
    price: "250,000 RWF",
    description:
      "For recurring chauffeur support arranged around an agreed monthly schedule.",
  },
];

const includeServices = [
  "Professional chauffeur",
  "Waiting time",
  "Multiple stops",
  "Bottled water",
  "Luggage assistance",
  "Airport pickup when required",
  "Flexible schedule changes",
];

const corporateSteps = [
  {
    number: "01",
    title: "Share Your Schedule",
    description:
      "Provide your meeting times, locations, airport movements and any other journey requirements.",
  },
  {
    number: "02",
    title: "Echelon Plans the Movement",
    description:
      "We organise the chauffeur arrangement around your business schedule.",
  },
  {
    number: "03",
    title: "Your Chauffeur Is Ready",
    description:
      "Your chauffeur arrives prepared, punctual and ready to support the day ahead.",
  },
  {
    number: "04",
    title: "Move Between Commitments",
    description:
      "Meetings, hotels, airport transfers, events and multiple stops are handled throughout the booking period.",
  },
  {
    number: "05",
    title: "Schedule Changes Are Managed",
    description:
      "Reasonable changes are accommodated where possible, subject to chauffeur and vehicle availability.",
  },
  {
    number: "06",
    title: "Focus on Business",
    description:
      "You focus on meetings and responsibilities while Echelon handles the transport.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Can I book a chauffeur for only one meeting?",
    answer:
      "Yes. Corporate Services can be arranged for a single business journey.",
  },
  {
    question: "Can I book for half a day or a full day?",
    answer:
      "Yes. Both half-day and full-day chauffeur arrangements are available.",
  },
  {
    question: "Can my company book a chauffeur for an entire month?",
    answer:
      "Yes. Monthly arrangements can be created around your organisation's schedule and requirements.",
  },
  {
    question: "Can we use our own company vehicle?",
    answer:
      "Yes. The Chauffeur Package is designed for clients who already have their own vehicle.",
  },
  {
    question: "Can Echelon provide the vehicle as well?",
    answer:
      "Yes. The Executive Corporate Package includes both the chauffeur and an executive vehicle.",
  },
  {
    question: "Can the chauffeur make several stops?",
    answer:
      "Yes. Multiple stops can be planned around your schedule.",
  },
  {
    question: "Can airport transfers be included?",
    answer:
      "Yes. Airport pickup or drop-off can be incorporated into your corporate booking.",
  },
  {
    question: "What happens if my meeting schedule changes?",
    answer:
      "We aim to accommodate reasonable changes during the booking period, subject to availability.",
  },
  {
    question: "How early should I book?",
    answer:
      "Corporate bookings should ideally be submitted at least 48 hours in advance.",
  },
  {
    question: "Is the initial deposit refundable?",
    answer:
      "No. The initial deposit is non-refundable.",
  },
];

function CorporateServices() {
  return (
    <>
      <section className="bg-ech-navy py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ech-gold sm:text-sm sm:tracking-[0.3em]">
              Corporate Services
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-ech-cream sm:text-5xl lg:text-6xl">
              Move through your business day without thinking about transport.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Echelon provides professional chauffeur service for executives, companies, embassies, delegations, 
              hotels and business clients who require punctual, discreet and flexible transport.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button to="/booking">
                Request a Corporate Chauffeur
              </Button>

              <Button to="/contact" variant="secondaryLight">
                Discuss an Arrangement
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow="Who It Is For" title="Professional mobility for modern business" description="Designed for organisations and individuals who need transport to work quietly in the background while the business day moves forward." align="center" />

          <div className="mt-12 grid gap-px overflow-hidden border border-ech-gray bg-ech-gray sm:grid-cols-2 lg:grid-cols-4">
            {clientTypes.map((client) => {
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

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow="Packages" title="Choose how you want Echelon to support your working day" description="Use your own vehicle and book a professional chauffeur, or let Echelon provide the complete chauffeur and vehicle experience." align="center" />
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
            <article className="flex flex-col border border-ech-gray bg-ech-cream p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ech-gold">
                Chauffeur Package
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-ech-navy">
                Your vehicle. Our chaffeur.
              </h2>

              <p className="mt-4 leading-7 text-ech-charcoal">
                Ideal for companies and executives who already have a vehicle and need a professional chaffeur to manage the day's movements.
              </p>

              <div className="mt-8 divide-y divide-ech-gray border-y border-ech-gray">
                {bookingOptions.map((option) => (
                  <div key={option.name} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-start">
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
                {includeServices.map((item) => (
                  <div key={item} className="flex gap-3">
                    <FiCheck className="mt-1 shrink-0 text-ech-gold" aria-hidden="true" />

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
                Executive Corporate Package
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-ech-cream">
                Complete executive mobility.
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                Echelon provides both the professional chauffeur and executive vehicle, 
                arranged around your schedule and business requirements.
              </p>

              <div className="mt-8 border-y border-white/15 py-6">
                <p className="text-3xl font-semibold text-ech-cream">
                  Tailored quotation
                </p>

                <p className="mt-3 max-w-lg text-sm leading-6 text-gray-400">
                  Pricing depends on duration, distance, vehicle requirements, number of days and othe business needs.
                </p>
              </div>

              <div className="mt-8 flex-1 space-y-4">
                {includeServices.map((item) => (
                  <div key={item} className="flex gap-3">
                    <FiCheck className="mt-1 shrink-0 text-ech-gold" aria-hidden="true" />
                    <p className="leading-6 text-gray-300">
                      {item}
                    </p>
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
                    Journey planning around business commitments
                  </p>
                </div>
              </div>

              <Button to="/booking" className="mt-9 w-full">
                Request Executive Package
              </Button>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-ech-navy py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ech-gold">
              The Corporate Experience
            </p>

            <h2 className="mt-5 text-4xl font-semibold text-ech-cream sm:text-5xl">
              Your schedule stays demanding. Your transport should not.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {corporateSteps.map((step) => (
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

      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionTitle eyebrow="Booking Information" title="Built for schedules that keep moving" description="We plan with you corporate journeys in advance, while still allowing reasonable flexibility when business priorities change." />

            <div className="divide-y divide-ech-gray border-y border-ech-gray">
              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Advance booking
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Corporate bookings should be requested at least 48 hours in advance.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Flexible schedule changes
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Reasonable changes can be accomodated depending on chauffeur and vehicle availability.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Monthly arrangements
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Recurring corporate chauffeur requirements can be organized around an agreed monthly schedule.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-xl font-semibold text-ech-navy">
                  Initial deposit
                </h3>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  The initial deposit required to secure a booking is non-refundable.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow="Frequently Asked Questions" title="Corporate travel, clearly arranged" align="center" />

          <div className="mx-auto mt-12 max-w-4xl divide-y divide-ech-gray border-y border-ech-gray">
            {frequentlyAskedQuestions.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-ech-navy">
                  <span>{item.question}</span>

                  <span className="shrink-0 text-2xl font-normal text-ech-gold transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="shrink-0 text-2xl font-normal text-ech-gold transition duration-300 group-open:rotate-45">
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
            <FiBriefcase className="mx-auto text-3xl text-ech-gold" aria-hidden="true" />

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-ech-gold">
              Corporate Services
            </p>

            <h2 className="mt-5 text-4xl font-semibold text-ech-cream sm:text-5xl">
              Your schedule deserves transport that keeps up.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
              From one meeting to an entire month of executive travel, Echelon will provide
              professional chauffeur support designed around your working day.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button to="/booking">
                Request Corporate Chauffeur
              </Button>

              <a href="https://wa.me/250788537967" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-ech-cream px-6 py-3 font-semibold text-ech-cream transition duration-300 hover:bg-ech-cream hover:text-ech-navy">
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

export default CorporateServices;