import { Link } from "react-router-dom";

function Logo({ light = false, compact = false }){
  const mainTextColor = light ? "text-ech-cream" : "text-ech-navy";

  return(
    <Link to="/" className="inline-flex min-w-0 items-center gap-3" aria-label="Echelon Driver Services home">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ech-gold sm:h-12 sm:w-12" aria-hidden="true">
        <span className="font-display text-2xl font-semibold leading-none text-ech-gold sm:text-3xl">E</span>
      </span>

      {!compact && (
        <span className="flex min-w-0 flex-col">
          <span className={`truncate font-display text-base font-semibold uppercase leading-none tracking-[0.14em] sm:text-lg sm:tracking-[0.18em] ${mainTextColor}`}>Echelon</span>
          <span className="mt-1 truncate text-[0.5rem] font-medium uppercase tracking-[0.16em] text-ech-gold sm:text-[0.6rem] sm:tracking-[0.22em]">Driver Services</span>
        </span>
      )}
    </Link>
  );
}

export default Logo;