// import { useEffect, useRef } from "react";

// export default function EditorTexto({ value, onChange, name }) {
//   const editorRef = useRef(null);
//   const quillInstance = useRef(null);

//   useEffect(() => {
//     if (!editorRef.current || quillInstance.current) return;

//     // Crear el editor
//     quillInstance.current = new window.Quill(editorRef.current, {
//       theme: "snow",
//       placeholder: "Escribe tu documento aquí...",
//       modules: {
//         toolbar: [
//           [{ header: [2,3,4,5,6, false] }],
//           ["bold", "italic", "underline"],
//           ["blockquote"],
//           [{ list: "ordered" }, { list: "bullet" }],
//           ["link"],
//           ["clean"],
//         ],
//       },
//     });

//     // Escuchar cambios en el contenido
//     quillInstance.current.on("text-change", () => {
//       const contenido = editorRef.current.querySelector(".ql-editor").innerHTML;
//       onChange?.(contenido);
//     });

//     // Si hay contenido inicial
//     if (value) {
//       quillInstance.current.root.innerHTML = value;
//     }
//   }, []);

//   return (
//     <div className="bg-white">
//       <div ref={editorRef} style={{ minHeight: "200px" }} />
//     </div>
//   );
// }

import { useEffect, useRef } from "react";

export default function FormEditor({
  value = "",
  onChange,
  name,
  label,
  placeholder = "Escribe tu documento aquí...",
  // width = "100%"
}) {
  const editorRef = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (!editorRef.current || quillInstance.current) return;

    // Inicializar Quill
    quillInstance.current = new window.Quill(editorRef.current, {
      theme: "snow",
      placeholder: placeholder,
      modules: {
        toolbar: [
          [{ header: [2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike", "background"],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link"],
          ["clean"],
        ],
      },
    });

    // Escuchar cambios
    quillInstance.current.on("text-change", () => {
      const contenido = editorRef.current.querySelector(".ql-editor").innerHTML;
      onChange?.({
        target: {
          name,
          value: contenido,
        },
      });
    });

    // Contenido inicial
    if (value) {
      quillInstance.current.root.innerHTML = value;
    }
  }, []); // solo al montar

  // Si el valor cambia externamente
  useEffect(() => {
    if (
      quillInstance.current &&
      value !== quillInstance.current.root.innerHTML
    ) {
      quillInstance.current.root.innerHTML = value || "";
    }
  }, [value]);

  return (
    <div className={`flex flex-col gap-2`}>
      {label && <label className="">{label}</label>}
      <div
        ref={editorRef}
        style={{
          minHeight: "200px",
          backgroundColor: "white",
          borderRadius: "0.5rem",
        }}
      />
    </div>
  );
}

// import { useEffect, useRef } from "react";

// export default function FormEditor({
//   value = "",
//   onChange,
//   name,
//   placeholder = "Escribe tu documento aquí...",
// }) {
//   const editorRef = useRef(null);
//   const quillInstance = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (
//         window.Quill &&
//         window.Quill.import &&
//         window.QuillBetterTable &&
//         editorRef.current &&
//         !quillInstance.current
//       ) {
//         clearInterval(interval);

//         const Quill = window.Quill;
//         const QuillBetterTable = window.QuillBetterTable;

//         // Registrar módulo
//         Quill.register(
//           {
//             "modules/better-table": QuillBetterTable,
//           },
//           true
//         );

//         // Importar módulo (NECESARIO)
//         const TableModule = Quill.import("modules/better-table");
//         const KeyboardBindings = QuillBetterTable.keyboardBindings;

//         // Inicializar editor
//         quillInstance.current = new Quill(editorRef.current, {
//           theme: "snow",
//           placeholder,
//           modules: {
//             table: false, // desactiva tabla nativa
//             "better-table": {
//               operationMenu: {
//                 items: {
//                   insertColumnRight: true,
//                   insertColumnLeft: true,
//                   insertRowUp: true,
//                   insertRowDown: true,
//                   deleteColumn: true,
//                   deleteRow: true,
//                   deleteTable: true,
//                 },
//               },
//             },
//             keyboard: {
//               bindings: KeyboardBindings,
//             },
//             toolbar: [
//               [{ header: [2, 3, 4, 5, 6, false] }],
//               ["bold", "italic", "underline"],
//               ["blockquote"],
//               [{ list: "ordered" }, { list: "bullet" }],
//               ["link"],
//               ["clean"],
//               ["table"], // si quieres botón de tabla (opcional)
//             ],
//           },
//         });

//         // Evento cambios
//         quillInstance.current.on("text-change", () => {
//           const content = quillInstance.current.root.innerHTML;
//           onChange?.({
//             target: { name, value: content },
//           });
//         });

//         // Valor inicial
//         if (value) {
//           quillInstance.current.clipboard.dangerouslyPasteHTML(value);
//         }
//       }
//     }, 40);

//     return () => clearInterval(interval);
//   }, []);

//   // Actualizar desde afuera
//   useEffect(() => {
//     if (!quillInstance.current) return;

//     if (value !== quillInstance.current.root.innerHTML) {
//       quillInstance.current.clipboard.dangerouslyPasteHTML(value || "");
//     }
//   }, [value]);

//   return (
//     <div>
//       <div
//         ref={editorRef}
//         style={{
//           minHeight: "200px",
//           borderRadius: "8px",
//           backgroundColor: "white",
//         }}
//       ></div>
//     </div>
//   );
// }
