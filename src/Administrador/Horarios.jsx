import { Link } from "react-router-dom";

export default function HorariosAdmin() {
  return (
    <div>
      <h1 className="text-center uppercase font-bold text-2xl">
        Listado de Horarios por Grupo
      </h1>
      <h2 className="text-center font-medium uppercase text-2xl">
        semestre 27-1
      </h2>

      <div className="flex w-full items-center content-center justify-center">
        <Link
          to={`/Administrador/Horarios/Agregar`}
          className="py-2 px-3 hover:bg-gray-600 hover:text-white duration-250 rounded border border-gray-600"
        >
          Agregar Horario
        </Link>
      </div>

    </div>
  );
}
