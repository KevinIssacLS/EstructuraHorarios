import { useState } from "react";
import FormFormat from "../Components/UI/Formularios/FormFormat";
import FormInput from "../Components/UI/Formularios/FormInput";
import FormSelect from "../Components/UI/Formularios/FormSelect";
import axios from "axios";
import { API_URL } from "../Components/Config/GlobalConfig";
import { useNavigate, useNavigation } from "react-router-dom";


export default function AgregarMateriasAdmin(){
    const [form, setForm]=useState({
        Materia:"",
        Semestre:"",
        Carrera:"",
        Area:"",
    })
    const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm({
      ...form,
      [name]: type === "file" ? files[0] : value, // si es archivo, guardamos el File
    });
  };
  const NavTo=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value !== null) formData.append(key, value);
      });

      const res = await axios.post(
        `${API_URL}/administrador/registrar/materia`,
        formData,
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
          Semestre: "",
          Carrera: "",
          Area: "",
        });
        NavTo("/Administrador/Materias");
      } else {
        setMensaje("❌ " + res.data.msg);
      }
    } catch (err) {
      console.error("Error al registrar materia:", err);
      setMensaje("⚠️ Error en el servidor");
    }
  };
    return(
        <div>
            {/* <h1 className="text-center uppercase font-bold text-2xl">
        Agregar Materia
      </h1>
      <h2 className="text-center font-medium uppercase text-2xl">
        semestre 27-1
      </h2> */}

<form action="" onSubmit={handleSubmit}>
      <FormFormat Width="w-6xl" Title="Agregar Materia">
        <FormSelect name={`Semestre`} onChange={handleChange} label="Semestre" required>
            <option selected={form.Semestre==""}>Seleccione una opción</option>
            <option value="2">Segundo</option>
            <option value="4">Cuarto</option>
            <option value="6">Sexto</option>
        </FormSelect>
        <FormSelect name={`Carrera`} onChange={handleChange} label="Carrera" required>
            <option selected={form.Carrera==""}>Seleccione una opción</option>
            <option value="Tronco Común">Tronco Común</option>
            <option value="Automatización y Control Eléctrico Industrial">Automatización y Control Eléctrico Industrial</option>
            <option value="Redes de Cómputo">Redes de Cómputo</option>
            <option value="Sistemas Automotrices">Sistemas Automotrices</option>
            <option value="Sistemas Constructivos Asistidos por Computadora">Sistemas Constructivos Asistidos por Computadora</option>
            <option value="Sistemas Mecánicos Industriales">Sistemas Mecánicos Indsutriales</option>
        </FormSelect>
        <FormSelect name={`Area`} onChange={handleChange} label="Área">
            <option selected={form.Area==""}>Seleccione una opción</option>
            <option value="Básicas">Básicas</option>
            <option value="Humanísticas">Humanísticas</option>
            <option value="Tecnológicas">Tecnológicas</option>
        </FormSelect>
        <FormInput label={`Materia`} name={`Materia`} onChange={handleChange} value={form.Materia} required type="text"></FormInput>
        <div className="flex items-center content-center justify-center">
            <button type="submit" className="px-3 py-2 border border-gray-600 rounded hover:bg-gray-600 hover:text-white duration-250 cursor-pointer">Agregar Materia</button>
        </div>
      </FormFormat>
      </form>
        </div>
    )
}