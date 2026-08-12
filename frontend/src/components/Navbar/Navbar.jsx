import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../Logo/Logo";

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu(){
    setIsMenuOpen(false);
  }

  function getNavLinkClasses({ isActive }){
    return [
      "relative py-2 text-sm font-medium transition-colors",
      "after:absolute after:bottom-0 after:left-0 after:h-px",
      "after:bg-ech-gold after:transition-all after:duration-300",
      isActive
        ? "text-ech-gold after:w-full"
        : "text-ech-navy after:w-0 hover:text-ech-gold hover:after:w-full",
    ].join(" ");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ech-gray bg-ech-cream/95 backdrop-blur">
      <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:px-12" aria-label="Main navigation">
        <div className="min-w-0">
          <Logo/>
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === "/"} className={getNavLinkClasses}>
              {link.name}
            </NavLink>
          ))}

          <NavLink to="/login" className="text-sm font-medium text-ech-navy transition hover:text-ech-gold">Login</NavLink>
          <NavLink to="/booking" className="bg-ech-gold px-6 py-3 text-sm font-semibold text-ech-navy transition hover:opacity-90">Book A Chauffeur</NavLink>
        </div>

        <button type="button" className="flex h-11 w-11 items-center justify-center text-2xl text-ech-navy lg:hidden" onClick={() => setIsMenuOpen((currentValue) => !currentValue)} aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-ech-gray bg-ech-cream px-5 py-6 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigationLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  [
                    "border-l-2 px-4 py-3 text-sm font-medium transition",
                    isActive
                      ? "border-ech-gold bg-ech-gold/10 text-ech-gold"
                      : "border-transparent text-ech-navy hover:border-ech-gold hover:bg-ech-gray/40",
                  ].join(" ")
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink to="/login" onClick={closeMenu} className="border-l-2 border-transparent px-4 py-3 text-sm font-medium text-ech-navy hover:border-ech-gold">Login</NavLink>
            <NavLink to="/booking" onClick={closeMenu} className="mt-3 bg-ech-gold px-6 py-3 text-center text-sm font-semibold text-ech-navy">Book A Chauffeur</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;