import { Link } from "react-router-dom";
import Logo from "../Logo/logo";

function Footer(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ech-navy text-ech-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div className="md:col-span-2 lg:col-span-1">
          <Logo light />

          <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300">
            Professional private chauffeur services built for your comfort and schedule.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ech-gold">
            Navigation
          </h2>

          <div className="mt-5 flex flex-col gap-3 text-sm text-gray-300">
            <Link className="hover:text-ech-gold" to="/">Home</Link>
            <Link className="hover:text-ech-gold" to="/services">Services</Link>
            <Link className="hover:text-ech-gold" to="/about">About</Link>
            <Link className="hover:text-ech-gold" to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ech-gold">
            Services
          </h2>

          <div className="mt-5 flex flex-col gap-3 text-sm text-gray-300">
            <span>Airport Services</span>
            <span>Night Services</span>
            <span>Daily Driver</span>
            <span>Up-Country Drive</span>
            <span>Wedding Service</span>
            <span>Corporate Services</span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ech-gold">
            Contact
          </h2>

          <div className="mt-5 flex flex-col gap-3 text-sm leading-6 text-gray-300">
            <span>Kigali, Rwanda</span>
            <a className="hover:text-ech-gold" href="tel:+250788537967">
              +250788537967
            </a>
            <a className="break-words hover:text-ech-gold" href="mailto:drivechelon@gmail.com">
              drivechelon@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            © {currentYear} Echelon Drivers Services. All rights reserved.
          </p>

          <p>Every Journey, We Elevate</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;