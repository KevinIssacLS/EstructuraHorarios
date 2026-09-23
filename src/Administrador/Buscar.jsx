import { useState } from "react";

export default function BuscarAdmin() {
  const [boleta, setBoleta] = useState("");
  const [Alumno, setAlumno] = useState([]);

  const handleBuscar = async () => {
    try {
      const res = await fetch(`http://localhost:3001/buscar/alumno/${boleta}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
        // console.log(data);

      if (data.ok) {
        setAlumno(data.Resultado); // 🔥 ahora guardamos un solo objeto alumno
      } else {
        alert("Acceso denegado: " + data.msg);
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error al obtener resultados: ", error);
    }
  };

  return (
    <div>
      <h1 className="text-center uppercase font-bold text-2xl">
        Registros a tutorías de regularización y Recuperación
      </h1>
      <h2 className="text-center font-medium uppercase text-2xl">
        semestre 26-1
      </h2>

      {/* Barra de búsqueda */}
      <div className="grid grid-cols-12 mb-5 gap-5">
        <div className="col-span-10">
          <input
            type="text"
            className="border-1 border-gray-400 w-full p-1 rounded-md"
            placeholder="NÚMERO DE BOLETA"
            value={boleta}
            onChange={(e) => setBoleta(e.target.value)}
          />
        </div>
        <div className="col-span-2">
          <button
            className="border-theme-primary border-1 w-full h-full rounded-sm hover:bg-theme-primary hover:text-theme-white duration-250"
            onClick={handleBuscar} // ✅ usamos la función correcta
          >
            Buscar
          </button>
        </div>
      </div>

      {/* Resultado */}
      {Array.isArray(Alumno) && Alumno.length > 0 ? (
        Alumno.map((Resultado, idx) => (
          <div key={idx} className="space-y-10">
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1 font-medium uppercase text-right">Boleta:</div>
              <div className="col-span-2 uppercase">{Resultado.Boleta}</div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1 font-medium uppercase text-right">Apellidos:</div>
              <div className="col-span-2 uppercase">{Resultado.Apellidos}</div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1 font-medium uppercase text-right">Nombre:</div>
              <div className="col-span-2 uppercase">{Resultado.Nombre}</div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1 font-medium uppercase text-right">Correo:</div>
              <div className="col-span-2">{Resultado.Correo}</div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1 font-medium uppercase text-right">Celular:</div>
              <div className="col-span-2 uppercase">{Resultado.Celular}</div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1 font-medium uppercase text-right">Dictamen:</div>
              <div className="col-span-2 uppercase">{Resultado.Dictamen}</div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1 font-medium uppercase text-right">Materias:</div>
              <div className="col-span-2 uppercase">{Resultado.Celular}</div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1 font-medium uppercase text-right">Materias:</div>
              <div className="col-span-2 uppercase">{Resultado.Celular}</div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">
          No se encontró ningún alumno con esa boleta.
        </p>
      )}
    </div>
  );
}
