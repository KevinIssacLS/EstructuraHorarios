import { useEffect, useState } from "react";
import {
  ListaGrupos,
  ListaHorarios,
  ListaHorariosInicio,
  ListaSalones,
} from "../API/api";
import { Link } from "react-router-dom";
import FormSelect from "../Components/UI/Formularios/FormSelect";

export default function InicioAdmin() {
  const [Grupos, EstablecerGrupos] = useState([]);
  const [Horarios, EstablecerHorarios] = useState([]);
  const [Salones, EstablecerSalones] = useState([]);
  const [form, setForm] = useState({Salon:"General"});
  const Horas = [
    "07:00:00",
    "08:00:00",
    "09:00:00",
    "10:00:00",
    "11:00:00",
    "12:00:00",
    "13:00:00",
    "14:00:00",
    "15:00:00",
    "16:00:00",
    "17:00:00",
    "18:00:00",
    "19:00:00",
    "20:00:00",
    "21:00:00",
  ];

  useEffect(() => {
    async function ObtenerGrupos() {
      const response = await ListaGrupos();
      EstablecerGrupos(response);
      // console.log(response);
    }
    async function ObtenerSalones() {
      const response = await ListaSalones(form.Salon);
      EstablecerSalones(response);
      // console.log(response);
    }
    async function ObtenerHorarios() {
      const response = await ListaHorariosInicio(form.Salon);
      EstablecerHorarios(response);
      // console.log(response);
    }
    ObtenerGrupos();
    ObtenerHorarios();
    ObtenerSalones();
  }, []);

  const CalcularDuracion = (inicio, fin) => {
    if (typeof inicio !== "string" || typeof fin !== "string") {
      return "";
    }

    const [h1, m1] = inicio.split(":").map(Number);
    const [h2, m2] = fin.split(":").map(Number);

    if (isNaN(h1) || isNaN(h2)) return "";

    const minutosInicio = h1 * 60 + m1;
    const minutosFin = h2 * 60 + m2;

    const duracionMin = minutosFin - minutosInicio;

    if (duracionMin <= 0) return "";

    const horas = Math.floor(duracionMin / 60);
    const minutos = duracionMin % 60;

    return minutos === 0 ? `${horas} h` : `${horas} h ${minutos} min`;
  };

  const ObtenerHorarioSalones = (HoraInicio, Salon, Dia) => {
    const diaHorarios = Horarios[Dia] || [];

    return diaHorarios.filter(
      (h) => h.HoraInicio === HoraInicio && h.Salon === Salon,
    );
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm({
      ...form,
      [name]: type === "file" ? files[0] : value, // si es archivo, guardamos el File
    });
  };

  useEffect;
  return (
    <div>
      <h1 className="text-center uppercase font-bold text-2xl">
        Listado de Horarios por Salón
      </h1>
      <h2 className="text-center font-medium uppercase text-2xl">
        semestre 27-1
      </h2>
      <form>
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <FormSelect
              name={`Salon`}
              onChange={handleChange}
            >
              <option value="General">Seleccione un Salón:</option>
              {Salones.map((Salon, index) => (
                <option key={index + 1} value={Salon.Aula}>
                  {Salon.Aula}
                </option>
              ))}
            </FormSelect>
          </div>
          {/* <div className="col-span-1"><Link to={``} className="text-center w-full border-theme-accent border-1 p-2 rounded-md">Agregar</Link></div> */}
        </div>
      </form>

      {Salones.map((Salón, index) => (
        <div className="py-5">
          <h2 className="text-theme-secondary uppercase font-medium">
            {Salón.Aula}
          </h2>
          <table className="w-full border-collapse text-sm">
            <thead className="sticky top-11 bg-gray-700 text-white z-10">
              <tr>
                {[
                  "Hora",
                  "Lunes",
                  "Martes",
                  "Miércoles",
                  "Jueves",
                  "Viernes",
                ].map((titulo, i) => (
                  <th
                    key={i}
                    className="p-2 border border-gray-400 font-semibold text-center"
                  >
                    {titulo}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Horas.map((Hora, index) => (
                <tr
                  key={index}
                  className="odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  <td className="border border-gray-400 p-1 text-center">
                    {Hora}
                  </td>
                  {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map(
                    (dia) => (
                      <td
                        key={dia}
                        className="border border-gray-400 p-1 text-center"
                      >
                      {
                        ObtenerHorarioSalones(Hora, Salón.Aula,dia).map((h,i)=>(
                          <>
                        <span className="font-bold">
                          {h.Materia}
                        </span>{" "}
                        <br />{" "}
                        {h.Profesor}
                        <br />{" "}
                        {h.Grupo}
                        <br />{" "}
                        <span>
                          {CalcularDuracion(h.HoraInicio, h.HoraFin)}
                        </span>
                        <br />
                        </>
                      ),
                    )}
                      </td>
                      ))
                      }
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
