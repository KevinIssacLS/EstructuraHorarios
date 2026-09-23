// 📌 FormInput.jsx
export default function FormInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  width,
  required=false,
  disabled=false,
  autocomplete="off",
  error,
}) {
  return (
    <div className={`${width}`}>
      <label className="block text-gray-700 mb-2 font-medium">
        {label}
      </label>
      {/* <label className="block text-gray-500 mb-2 font-light text-sm">{ejemplo}</label> */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-theme-primary focus:outline-none"
        required={required}
        disabled={disabled}
        autoComplete={autocomplete}
      />
      <label className="text-xs text-red-900">{error}</label>
    </div>
  );
}
