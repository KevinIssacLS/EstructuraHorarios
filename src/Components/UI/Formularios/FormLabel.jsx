// 📌 FormInput.jsx
export default function FormLabel({
  label,
  width,
  children
  // pattern
}) {
  return (
    <div className={`${width}`}>
      <label className="block text-gray-700 mb-2 font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}
