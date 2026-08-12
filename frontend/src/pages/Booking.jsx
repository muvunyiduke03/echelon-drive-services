import { useState } from "react";
import { FiCheck, FiMessageCircle, FiPhone } from "react-icons/fi";
import Button from "../components/Button/Button";
import Container from "../components/Container/Container";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  serviceType: "",
  pickupLocation: "",
  destination: "",
  pickupDate: "",
  pickupTime: "",
  passengers: 1,
  additionalDetails: "",
};

const services = [
  { value: "airport", label: "Airport Service" },
  { value: "night", label: "Night Service" },
  { value: "daily", label: "Daily Driver" },
  { value: "up-country", label: "Up-Country Drive" },
  { value: "wedding", label: "Wedding Service" },
  { value: "corporate", label: "Corporate Service" },
];

function Booking(){
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  function handleChange(event){
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event){
    event.preventDefault();

    setIsSubmitting(true);

    //Temporary frontend-only behaviour.
    setTimeout(() => {
      console.log("Booking request:", formData);

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  }

  function resetForm(){
    setFormData(initialFormData);
    setIsSubmitted(false);
  }

  return(
    <section className="bg-ech-cream">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left column */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ech-gold">
              Book a Chauffeur
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ech-navy sm:text-5xl">
              Plan your journey with Echelon
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-ech-charcoal">
              Tell us about your journey. We will review your request and
              we will personally contact you to confirm final details and
              our drivers availability.
            </p>

            <div className="mt-10 space-y-4 border-l-2 border-ech-gold pl-5">
              <p className="font-semibold text-ech-navy">
                Do you need assistance?
              </p>

              <a href="https://wa.me/250788537967" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-ech-gold transition hover:text-ech-navy">
                <FiMessageCircle/>
                Whatsapp
              </a>

              <a href="tel:+250788537967" className="flex items-center gap-3 text-ech-gold transition hover:text-ech-navy">
                <FiPhone/>
                +250 788 537 967
              </a>
            </div>

            <div className="mt-10 border border-ech-gray bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ech-gold">
                How booking works
              </p>

              <div className="mt-5 space-y-4 text-sm leading-6 text-ech-charcoal">
                <p>
                  <span className="font-semibold text-ech-navy">01.</span>
                  Fill the request form with your journey details.
                </p>

                <p>
                  <span className="font-semibold text-ech-navy">02.</span>
                  Submit your journey request form.
                </p>

                <p>
                  <span className="font-semibold text-ech-navy">03.</span>
                  Echelon team will review your request and availability.
                </p>

                <p>
                  <span className="font-semibold text-ech-navy">04.</span>
                  Echelon team contact you to confirm booking and details.
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="border border-ech-gray bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {isSubmitted ? (
              <div className="flex min-h-[600px] flex-col items-center justify-center text-center" role="status">
                <div className="flex h-16 w-16 items-center justify-center border border-ech-gold text-3xl text-ech-gold">
                  <FiCheck/>
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-ech-gold">
                  Request Received
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-ech-navy sm:text-4xl">
                  Thank you for choosing Echelon.
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-ech-charcoal">
                  We have received your booking request. Our team will review
                  your journey details and we will contact you shortly to confirm
                  the final details and availability.
                </p>

                <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
                  <a href="https://wa.me/250788537967" target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 bg-ech-gold px-5 py-3 font-semibold text-ech-navy transition hover:opacity-90">
                    <FiMessageCircle/>
                    Whatsapp
                  </a>

                  <a href="tel:+250788537967" className="flex flex-1 items-center justify-center gap-2 border border-ech-navy px-5 py-3 font-semibold text-ech-navy transition hover:bg-ech-navy hover:text-ech-cream">
                    <FiPhone/>
                    Call Us
                  </a>
                </div>

                <button type="button" onClick={resetForm} className="mt-7 text-sm font-semibold text-ech-gold hover:underline">
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Journey details */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ech-gold">
                    Journey Details
                  </p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="serviceType" className="mb-2 block text-sm font-medium text-ech-navy">Service</label>

                      <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full min-w-0 border border-ech-gray bg-white px-4 py-3 outline-none transition focus:border-ech-gold" required>
                        <option value="">Select a service</option>

                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="passengers" className="mb-2 block text-sm font-medium text-ech-navy">Passengers</label>
                      <input id="passengers" name="passengers" type="number" min="1" max="7" value={formData.passengers} onChange={handleChange} className="w-full min-w-0 border border-ech-gray bg-white px-4 py-3 outline-none transition focus:border-ech-gold" required />
                    </div>

                    <div>
                      <label htmlFor="pickupLocation" className="mb-2 block text-sm font-medium text-ech-navy">Pickup location</label>
                      <input id="pickupLocation" name="pickupLocation" type="text" value={formData.pickupLocation} onChange={handleChange} className="w-full min-w-0 border border-ech-gray bg-white px-4 py-3 outline-none transition focus:border-ech-gold" required />
                    </div>

                    <div>
                      <label htmlFor="destination" className="mb-2 block text-sm font-medium text-ech-navy">Destination</label>
                      <input id="destination" name="destination" type="text" value={formData.destination} onChange={handleChange} className="w-full min-w-0 border border-ech-gray bg-white px-4 py-3 outline-none transition focus:border-ech-gold" required />
                    </div>

                    <div>
                      <label htmlFor="pickupDate" className="mb-2 block text-sm font-medium text-ech-navy">Pickup date</label>
                      <input id="pickupDate" name="pickupDate" type="date" min={today} value={formData.pickupDate} onChange={handleChange} className="w-full min-w-0 border border-ech-gray bg-white px-4 py-3 outline-none transition focus:border-ech-gold" required />
                    </div>

                    <div>
                      <label htmlFor="pickupTime" className="mb-2 block text-sm font-medium text-ech-navy">Pickup Time</label>
                      <input id="pickupTIme" name="pickupTime" type="time" value={formData.pickupTime} onChange={handleChange} className="w-full min-w-0 border border-ech-gray bg-white px-4 py-3 outline-none transition focus:border-ech-gold" required />
                    </div>
                  </div>
                </div>

                {/* Client details */}
                <div className="mt-10 border-t border-ech-gray pt-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ech-gold">
                    Your Details
                  </p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-ech-navy">Full name</label>
                      <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} autoComplete="name" className="w-full min-w-0 border border-ech-gray bg-white px-4 py-3 outline-none transition focus:border-ech-gold" required />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ech-navy">Phone number</label>
                      <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} autoComplete="tel" className="w-full min-w-0 border border-ech-gray bg-white px-4 py-3 outline-none transition focus:border-ech-gold" required />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-ech-navy">Email address{" "}
                        <span className="font-normal text-gray-500">
                          (optional)
                        </span>
                      </label>

                      <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" className="w-full min-w-0 border border-ech-gray bg-white px-4 py-3 outline-none transition focus:border-ech-gold"/>
                    </div>
                  </div>
                </div>

                {/* Additional information */}
                <div className="mt-10 border-t border-ech-gray pt-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ech-gold">
                    Additional Information
                  </p>

                  <div className="mt-6">
                    <label htmlFor="additionalDetails" className="mb-2 block text-sm font-medium text-ech-navy">Any additional details?</label>
                    <textarea id="additionalDetails" name="additionalDetails" rows="8" value={formData.additionalDetails} onChange={handleChange} placeholder="Flight number, luggage, special requests, return journey, event details..." className="w-full min-w-0 resize-y border border-ech-gray bg-white px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-ech-gold"/>
                  </div>
                </div>

                <Button type="submit" disabled={isSubmitting} className="mt-10 w-full disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? "Sending Request..." : "Request Booking"}
                </Button>

                <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                  This form creates a booking request. Your journey is confirmed only after our team contacts you for confirmation.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Booking;