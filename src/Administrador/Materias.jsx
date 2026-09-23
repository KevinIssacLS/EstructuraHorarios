import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListaGrupos, ListaMaterias } from "../API/api";

export default function MateriasAdmin() {
  const [Materias, EstablecerMaterias] = useState([]);
  useEffect(() => {
    async function ObtenerListaMaterias() {
      const response = await ListaMaterias();
      EstablecerMaterias(response);
      // console.log(response);
    }

    ObtenerListaMaterias();
  }, []);
  return (
    <div>
      <h1 className="text-center uppercase font-bold text-2xl">
        Lista de Materias por semestre
      </h1>
      <h2 className="text-center font-medium uppercase text-2xl">
        semestre 27-1
      </h2>

      <div className="flex w-full items-center content-center justify-center">
        <Link
          to={`/Administrador/Materias/Agregar`}
          className="py-2 px-3 hover:bg-gray-600 hover:text-white duration-250 rounded border border-gray-600"
        >
          Agregar Materia
        </Link>
      </div>

      <div className="py-5">
        {/* <h2 className="text-theme-secondary uppercase font-medium"></h2> */}
        <table className="w-full border-collapse text-sm">
          <thead className="sticky top-11 bg-gray-700 text-white z-10">
            <tr>
              {["Semestre", "Materia", "Carrera", "Acciones"].map(
                (titulo, i) => (
                  <th
                    key={i}
                    className="p-2 border border-gray-400 font-semibold text-center"
                  >
                    {titulo}
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody>
            {Materias.map((Materia, index) => (
              <tr
                key={index}
                className="odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                <td className="border border-gray-400 p-1 text-center">
                  {Materia.Semestre}
                </td>

                <td className="border border-gray-400 p-1">
                  {Materia.Materia}
                </td>

                <td className="border border-gray-400 p-1">
                  {Materia.Carrera}
                </td>

                <td className="border border-gray-400 p-1 text-center space-x-2 space-y-2">
                  {/* <Link
                      to={`/Administrador/Actividades/Editar/${Actividad.IDSistema}`}
                      className="bg-theme-primary hover:bg-theme-secondary duration-250 p-2 text-white rounded-md inline-block"
                    >
                      <i className="bi bi-pen"></i>
                    </Link>

                    <Link
                      to={`/Administrador/Actividades/PDF/${Actividad.IDSistema}`}
                      className="bg-red-900 hover:bg-red-950 p-2 duration-250 text-white rounded-md inline-block"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>
                    </Link> */}

                  {/* <Link
                    to={`/Administrador/Actividades/DOCX/${Actividad.IDSistema}`}
                    className="bg-red-900 hover:bg-red-950 p-2 duration-250 text-white rounded-md inline-block"
                  >
                    <i className="bi bi-file-word"></i>
                  </Link> */}

                  {/* <Link
                      to={`/Administrador/Actividades/Ver/${Actividad.IDSistema}`}
                      className="bg-theme-primary hover:bg-theme-secondary p-2 duration-250 text-white rounded-md inline-block"
                    >
                      <i className="bi bi-eye"></i>
                    </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
