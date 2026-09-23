// 📌 FormInput.jsx
export default function FormSelect({
  label="",
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  width,
  required=false,
  disabled=false,
  children
}) {
  return (
    <div className={`${width}`}>
      <label className="block text-gray-700 mb-2 font-medium">
        {label}
      </label>
      {/* <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-theme-primary)] focus:outline-none"
        required={required}
        disabled={disabled}
        autoComplete={autocomplete}
      /> */}
      <select name={name} value={value} onChange={onChange} required={required} disabled={disabled} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--color-theme-primary)] focus:outline-none">
        {/* <option >Seleccione una opción</option> */}
        {children}
      </select>
    </div>
  );
}
