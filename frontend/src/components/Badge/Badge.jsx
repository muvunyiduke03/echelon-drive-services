function Badge({ children }){
  return (
    <span className="inline-flex items-center border border-ech-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-ech-gold">
      {children}
    </span>
  );
}

export default Badge;