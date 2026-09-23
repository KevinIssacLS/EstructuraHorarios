import { useEffect, useState } from "react";
import FormFormat from "../Components/UI/Formularios/FormFormat";
import FormSelect from "../Components/UI/Formularios/FormSelect";
import {
  ListaGrupos,
  ListaHorarios,
  ListaMateriasGrupos,
  ListaProfesores,
  ListaSalones,
} from "../API/api";
import { Link } from "react-router-dom";
import FormInput from "../Components/UI/Formularios/FormInput";
import axios from "axios";
import { API_URL } from "../Components/Config/GlobalConfig";

export default function AgregarHorariosAdmin() {
  const [Grupos, EstablecerGrupos] = useState([]);
  const [Materias, EstablecerMaterias] = useState([]);
  const [form, setForm] = useState({ Grupo: "2IM01" });
  const [Profesores, EstablecerProfesores] = useState([]);
  const [Horarios, EstablecerHorarios] = useState([]);
  const [Salones, EstablecerSalones] = useState([]);

  const Días = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  //   const [mensaje, setMensaje]=useState();
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm({
      ...form,
      [name]: type === "file" ? files[0] : value, // si es archivo, guardamos el File
    });
  };

  const handleChangeProfesores = (Materia, Grupo, e) => {
    const value = e.target.value;

    EstablecerProfesores((prev) => {
      const existe = prev.find(
        (p) => p.Materia === Materia && p.Grupo === Grupo,
      );

      if (existe) {
        return prev.map((p) =>
          p.Materia === Materia && p.Grupo === Grupo
            ? { ...p, Profesor: value }
            : p,
        );
      }

      return [...prev, { Materia, Grupo, Profesor: value }];
    });
  };

  const handleChangeHorarios = (Materia, Grupo, Dia, campo, value) => {
    EstablecerHorarios((prev) => {
      const existe = prev.find(
        (h) => h.Materia === Materia && h.Grupo === Grupo && h.Dia === Dia,
      );

      if (existe) {
        return prev.map((h) =>
          h.Materia === Materia && h.Grupo === Grupo && h.Dia === Dia
            ? { ...h, [campo]: value }
            : h,
        );
      }

      return [
        ...prev,
        {
          Materia,
          Grupo,
          Dia,
          HoraInicio: campo === "HoraInicio" ? value : "",
          HoraFin: campo === "HoraFin" ? value : "",
          Salon: campo === "Salon" ? value : "",
        },
      ];
    });
  };

  //   console.log(Profesores);

  //   const handleChange = (e) => {
  //     const { name, value, type, files } = e.target;
  //     setForm({
  //       ...form,
  //       [name]: type === "file" ? files[0] : value, // si es archivo, guardamos el File
  //     });
  //   };

  useEffect(() => {
    async function ObtenerListaGrupos() {
      const response = await ListaGrupos();
      EstablecerGrupos(response);
      //   console.log(response);
    }
    async function ObtenerListaSalones() {
      const response = await ListaSalones();
      EstablecerSalones(response);
      // console.log(response);
    }

    ObtenerListaGrupos();
    ObtenerListaSalones();
  }, []);

  useEffect(() => {
    async function ObtenerListaMateriasGrupos() {
      const response = await ListaMateriasGrupos(form.Grupo);
      EstablecerMaterias(response);
      //   console.log(response);
    }

    async function ObtenerListaProfesores() {
      const response = await ListaProfesores(form.Grupo);
      EstablecerProfesores(response);
    }

    async function ObtenerListaHorarios() {
      const response = await ListaHorarios(form.Grupo);
      EstablecerHorarios(response);
      // console.log(response);
    }

    ObtenerListaMateriasGrupos();
    ObtenerListaProfesores();
    ObtenerListaHorarios();
  }, [form.Grupo]);

  const ObtenerProfesor = (Materia, Grupo) => {
    const encontrado = Profesores.find(
      (p) => p.Materia === Materia && p.Grupo === Grupo,
    );

    return encontrado ? encontrado.Profesor : "";
  };

  const ObtenerHorario = (Materia, Grupo, Dia, campo) => {
    const encontrado = Horarios.find(
      (h) => h.Materia === Materia && h.Grupo === Grupo && h.Dia === Dia,
    );

    return encontrado ? encontrado[campo] : "";
  };

  const ActualizarProfesores = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(Profesores).forEach(([key, value]) => {
        if (value !== null) formData.append(key, value);
      });

      const res = await axios.post(
        `${API_URL}/administrador/actualizar/profesores`,
        { Profesores: Profesores },
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      //   console.log(form);
      //   console.log(formData);
      if (res.data.ok) {
        setMensaje("Materia agregada exitosamente");
        setForm({
          Materia: "",
          Abreviatura: "",
          Profesor: "",
          ID: "",
          Semestre: "Primero",
          Periodo: "3",
        });
      } else {
        setMensaje("❌ " + res.data.msg);
      }
    } catch (err) {
      console.error("Error al registrar materia:", err);
      setMensaje("⚠️ Error en el servidor");
    }
  };

  const ActualizarHorarios = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(Horarios).forEach(([key, value]) => {
        if (value !== null) formData.append(key, value);
      });

      const res = await axios.post(
        `${API_URL}/administrador/actualizar/horarios`,
        { Horarios },
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      //   console.log(form);
      //   console.log(formData);
      if (res.data.ok) {
        setMensaje("Materia agregada exitosamente");
        setForm({
          Materia: "",
          Abreviatura: "",
          Profesor: "",
          ID: "",
          Semestre: "Primero",
          Periodo: "3",
        });
      } else {
        setMensaje("❌ " + res.data.msg);
      }
    } catch (err) {
      console.error("Error al registrar materia:", err);
      setMensaje("⚠️ Error en el servidor");
    }
  };
  {
    // console.log(Horarios);
  }

  return (
    <div>
      <div className="py-5">
        <FormSelect onChange={handleChange} name={`Grupo`} label="Grupo">
          <option>Seleccione una opción</option>
          {Grupos.map((Grupo, index) => (
            <option value={Grupo.Grupo} key={index + 1}>
              {Grupo.Grupo}
            </option>
          ))}
        </FormSelect>

        <form onSubmit={ActualizarProfesores}>
          <div className="my-5 grid grid-cols-2 gap-10">
            {Materias.map((Materia, index) => (
              <div
                className="grid grid-cols-3 content-center items-center"
                key={index + 1}
              >
                <div className="col-span-1">{Materia.Materia}</div>
                <div className="col-span-2">
                  <FormInput
                    onChange={(e) =>
                      handleChangeProfesores(Materia.Materia, form.Grupo, e)
                    }
                    value={ObtenerProfesor(Materia.Materia, form.Grupo)}
                  ></FormInput>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center content-center justify-center">
            <button
              type="submit"
              className="rounded border border-gray-600 hover:bg-gray-600 hover:text-white duration-250 px-2 py-2"
            >
              Guardar cambios en profesores
            </button>
          </div>
        </form>

        <form onSubmit={ActualizarHorarios}>
          <div className="mt-5">
            <div className="grid grid-cols-6 border-b border-b-gray-300 text-center sticky top-11 bg-gray-700 text-white z-10">
              <p className="p-2 border border-gray-400 font-semibold text-center py-2">
                Materia
              </p>
              <p className="p-2 border border-gray-400 font-semibold text-center py-2">
                Lunes
              </p>
              <p className="p-2 border border-gray-400 font-semibold text-center py-2">
                Martes
              </p>
              <p className="p-2 border border-gray-400 font-semibold text-center py-2">
                Miércoles
              </p>
              <p className="p-2 border border-gray-400 font-semibold text-center py-2">
                Jueves
              </p>
              <p className="p-2 border border-gray-400 font-semibold text-center py-2">
                Viernes
              </p>
            </div>
            {Materias.map((Materia, index) => (
              <div
                key={index + 1}
                className="grid grid-cols-6 odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                <div className="border border-gray-400 p-1">
                  {Materia.Materia}
                </div>
                {Días.map((Dia) => (
                  <div
                    className="border border-gray-400 p-1 grid grid-cols-2"
                    key={Dia}
                  >
                    <FormInput
                      name={Dia}
                      label={`Inicio`}
                      type="time"
                      onChange={(e) =>
                        handleChangeHorarios(
                          Materia.Materia,
                          form.Grupo,
                          Dia,
                          "HoraInicio",
                          e.target.value,
                        )
                      }
                      value={ObtenerHorario(
                        Materia.Materia,
                        form.Grupo,
                        Dia,
                        "HoraInicio",
                      )}
                    ></FormInput>
                    <FormInput
                      name={Dia}
                      label={`Fin`}
                      type="time"
                      onChange={(e) =>
                        handleChangeHorarios(
                          Materia.Materia,
                          form.Grupo,
                          Dia,
                          "HoraFin",
                          e.target.value,
                        )
                      }
                      value={ObtenerHorario(
                        Materia.Materia,
                        form.Grupo,
                        Dia,
                        "HoraFin",
                      )}
                    ></FormInput>
                    <FormSelect
                      name={Dia}
                      width="col-span-2"
                      value={
                        ObtenerHorario(
                          Materia.Materia,
                          form.Grupo,
                          Dia,
                          "Salon",
                        ) || ""
                      }
                      onChange={(e) =>
                        handleChangeHorarios(
                          Materia.Materia,
                          form.Grupo,
                          Dia,
                          "Salon",
                          e.target.value,
                        )
                      }
                    >
                      <option value="">Seleccione una opción</option>

                      {Salones.map((Salon) => (
                        <option key={Salon.Aula} value={Salon.Aula}>
                          {Salon.Aula}
                        </option>
                      ))}
                    </FormSelect>
                  </div>
                ))}
              </div>
            ))}

            <div className="flex items-center content-center justify-center pt-5">
              <button
                type="submit"
                className="rounded border border-gray-600 hover:bg-gray-600 hover:text-white duration-250 px-2 py-2"
              >
                Guardar cambios en horarios
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
