function Input({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
}){
  return(
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ech-navy">
        {label}
      </label>

      <input 
        id={id} 
        name={name} 
        type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        required={required} 
        className="w-full border border-ech-gray bg-white px-4 py-3 text-ech-charcoal outline-none transition duration-300 focus:border-ech-gold"/>
    </div>
  );
}

export default Input;