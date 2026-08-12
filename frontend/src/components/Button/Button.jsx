import { Link } from "react-router-dom";

const variants = {
    primary: "bg-ech-gold text-ech-navy hover:opacity-90",
    secondary: "border border-ech-navy text-ech-navy hover:bg-ech-navy hover:text-ech-cream",
    ghost: "text-ech-gold hover:underline",
    secondaryLight: "border border-ech-cream text-ech-cream hover:bg-ech-cream hover:text-ech-navy",
  };

function Button({
  children,
  to,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}){

  const classes = ["inline-flex items-center justify-center px-6 py-3 font-semibold transition duration-300", variants[variant] ?? variants.primary, className,].join(" ");

  if (to){
    return(
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;