import { useState } from "react";
import { FiCalendar, FiMail, FiMessageCircle, FiPhone } from "react-icons/fi";
import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import CTA from "../components/CTA/CTA";
import { Link } from "react-router-dom";

const initialFormData = {
  fullName: "",
  phone: "",
  email: "",
  message: "",
};

const contactMethods = [
  {
    title: "WhatsApp",
    description: "Start a quick conversation with the Echelon team.",
    actionLabel: "Chat on WhatsApp",
    href: "https://wa.me/250788537967",
    icon: FiMessageCircle,
    external: true,
  },
  {
    title: "Phone call",
    description: "Speak directly with us about any enquiry on your journey.",
    actionLabel: "Give us a call",
    href: "tel:+250788537967",
    icon: FiPhone,
  },
  {
    title: "Email",
    description: "Send us a general enquiry or business request.",
    actionLabel: "Send us an email",
    href: "mailto:drivechelon@gmail.com",
    icon: FiMail,
  },
  {
    title: "Book a Chauffeur",
    description: "Send us your journey details when booking with us.",
    actionLabel: "Book a Chauffeur",
    href: "/booking",
    icon: FiCalendar,
    internal: true,
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Do I need to book in advance?",
    answer:
      "We recommend submitting your request as early as possible so that availability and journey details can be confirmed ahead of time.",
  },
  {
    question: "Do you provide airport services?",
    answer:
      "Yes. Echelon provides professional airport pickups and drop-offs arranged around your travel schedule.",
  },
  {
    question: "Do you travel outside Kigali?",
    answer:
      "Yes. We provide private chauffeur services within Kigali and for journeys across Rwanda.",
  },
  {
    question: "Can I request a chauffeur for the entire day?",
    answer:
      "Yes. Our Daily Driver service is suitable for clients who require a chauffeur for several appointments or journeys during the day.",
  },
];

function Contact(){
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event){
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData, [name]: value,
    }));
  }

  function handleSubmit(event){
    event.preventDefault();

    //This is a frontend-only temporary behaviour
    console.log("Enquiry submitted:", formData);

    setIsSubmitted(true);
    setFormData(initialFormData);
  }

  return (
    <>
      <section className="bg-ech-navy py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ech-gold sm:text-sm sm:tracking-[0.3em]">
              Contact Echelon
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-ech-cream sm:text-5xl lg:text-6xl">
              Let us help plan your next journey
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Contact us for general enquiries, service information or to help you choose the right chauffeur service for your journey.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow="Contact options" title="Choose the most convenient way to reach us" description="For detailed journey request, use the booking page. For quick questions, contact us directly via whatsapp, phone or email." align="center"/>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              const cardClasses =  [
                "group flex min-w-0 flex-col",
                "border border-ech-gold",
                "bg-ech-navy p-7 sm:p-8",
                "text-ech-cream",
                "transition-all duration-300",
                "hover:-translate-y-1",
                "hover:bg-ech-gold",
                "hover:text-ech-navy",
                "hover:shadow-lg",
              ].join(" ");
              const content = (
                <>
                  <div className="flex h-14 w-14 items-center justify-center border border-ech-gold text-2xl text-ech-gold transition duration-300 group-hover:border-ech-navy group-hover:text-ech-navy">
                    <Icon aria-hidden="true"/>
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold">
                    {method.title}
                  </h2>

                  <p className="mt-4 flex-1 leading-7 text-gray-300 transition duration-300 group-hover:text-ech-navy">
                    {method.description}
                  </p>

                  <span className="mt-7 break-words text-sm font-semibold text-ech-gold transition duration-300 group-hover:text-ech-navy">
                    {method.actionLabel} →
                  </span>
                </>
              );

              if (method.internal){
                return(
                  <Link key={method.title} to={method.href} className={cardClasses}>
                    {content}
                  </Link>
                );
              }

              return(
                <a key={method.title} href={method.href} target={method.external ? "_blank" : undefined} rel={method.external ? "noreferrer" : undefined} className={cardClasses}>
                  {content}
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionTitle eyebrow="General Enquiry" title="Tell us how we can assist you" description="Send us a short message and a member of the Echelon team will contact you shortly."/>

              <div className="mt-10 border-l-2 border-ech-gold pl-5">
                <p className="font-semibold text-ech-navy">
                  Available by appointment and confirmed reservation.
                </p>

                <p className="mt-3 leading-7 text-ech-charcoal">
                  Same day and urgent bookings are considered based on chauffeur availability.
                </p>
              </div>
            </div>

            <div className="border border-ech-gray bg-ech-cream p-6 sm:p-8 lg:p-10">
              {isSubmitted ? (
                <div className="flex min-h-[440px] flex-col items-center justify-center text-center" role="status">
                  <div className="flex h-16 w-16 items-center justify-center border border-ech-gold text-3xl text-ech-gold">
                    ✓
                  </div>

                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-ech-gold">
                    Thank you
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold text-ech-navy sm:text-4xl">
                    We have received your enquiry.
                  </h2>

                  <p className="mt-5 max-w-lg leading-8 text-ech-charcoal">
                    A member of the Echelon team will soon contact you to assist you.
                  </p>

                  <button type="button" onClick={() => setIsSubmitted(false)} className="mt-8 border border-ech-navy px-6 py-3 font-semibold text-ech-navy transition duration-300 hover:bg-ech-navy hover:text-ech-cream">
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-ech-navy">
                        Full name
                      </label>

                      <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} autoComplete="name" required className="w-full min-w-0 border border-ech-gray bg-white px-4 py-3 text-ech-charcoal outline-none transition duration-300 focus:border-ech-gold"/>
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ech-navy">
                        Phone number
                      </label>
                      <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} autoComplete="tel" required className="w-full min-w-0 border border-ech-gray bg-white px-4 py-3 text-ech-charcoal outline-none transition duration-300 focus:border-ech-gold"/>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-ech-navy">
                        Email address{" "}
                        <span className="font-normal text-gray-500">
                          (optional)
                        </span>
                      </label>
                      <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" className="w-full min-w-0 border border-ech-gray bg-white px-4 py-3 text-ech-charcoal outline-none transition duration-300 focus:border-ech-gold"/>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-ech-navy">
                        How can we assist you?
                      </label>
                      <textarea id="message" name="message" rows="10" value={formData.message} onChange={handleChange} required placeholder="Tell us what you would like to enquire about..." className="w-full min-w-0 resize-y border border-ech-gray bg-white px-4 py-3 text-ech-charcoal outline-none transition duration-300 placeholder:text-gray-400 focus:border-ech-gold"/>
                    </div>
                  </div>

                  <Button type="submit" className="mt-8 w-full sm:w-auto">
                    Send Enquiry
                  </Button>

                  <p className="mt-4 text-sm leading-6 text-ech-charcoal">
                    For journey dates, pickup location and destination, please use our booking request form.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ech-cream py-20 lg:py-28">
        <Container>
          <SectionTitle eyebrow="Frequently Asked Questions" title="Helpful information for you" align="center"/>

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

      <CTA />
    </>
  );
}

export default Contact;