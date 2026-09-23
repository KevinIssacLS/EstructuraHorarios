// export default function FormCheck({ name, checked, onChange, label }) {
//   return (
//     <button
//       type="button"
//       role="checkbox"
//       aria-checked={checked}
//       onClick={() =>
//         onChange({
//           target: {
//             name,
//             type: "checkbox",
//             checked: !checked,
//           },
//         })
//       }
//       className={`
//         h-10 w-full rounded-full transition-colors
//         ${checked ? "bg-green-600 text-white" : "bg-gray-400 text-gray-100"}
//       `}
//     >
//       {label}
//     </button>
//   );
// }

export default function FormCheck ({
  label,
  name,
  checked,
  onChange,
  required = false,
  disabled = false,
  error = "",
})  {
  return (
    <div className="flex flex-col gap-1 py-1">
      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className="peer hidden"
        />

        {/* Caja visual */}
        <div
          className={`
            w-5 h-5 rounded border-2 flex items-center justify-center
            transition-all duration-200
            ${
              checked
                ? "bg-theme-accent border-theme-accent"
                : "bg-white border-gray-400"
            }
            peer-disabled:bg-gray-200 peer-disabled:border-gray-300
          `}
        >
          {checked && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>

        {/* Texto */}
        <span
          className={`text-sm ${
            disabled ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </label>

      {/* Error */}
      {error && (
        <span className="text-xs text-red-500">{error}</span>
      )}
    </div>
  );
};

// export default FormCheckbox;

