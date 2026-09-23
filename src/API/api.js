import axios from "axios";
import { API_URL } from "../Components/Config/GlobalConfig";
const URL = `${API_URL}`;
// console.log(URL)

export const ListaGrupos = async () => {
  try {
    const response = await axios.get(`${URL}/administrador/lista/grupos`, {
      withCredentials: true,
    });

    // console.log("respuesta backend: ", response.data);
    return response.data.Grupos || [];
  } catch (err) {
    console.error(
      "Error al obtener grupos:",
      err.response?.status,
      err.response?.data,
    );
    return []; // fallback a array vacío
  }
};

export const ListaMaterias = async () => {
  try {
    const response = await axios.get(`${URL}/administrador/lista/materias`, {
      withCredentials: true,
    });

    // console.log("respuesta backend: ", response.data);
    return response.data.Materias || [];
  } catch (err) {
    console.error(
      "Error al obtener materias:",
      err.response?.status,
      err.response?.data,
    );
    return []; // fallback a array vacío
  }
};

export const ListaMateriasGrupos = async (Grupo) => {
  try {
    const response = await axios.get(
      `${URL}/administrador/lista/materias-grupos`,
      {
        params: { Grupo },
        withCredentials: true,
      },
    );

    // console.log("respuesta backend: ", response.data);
    return response.data.Respuesta || [];
  } catch (err) {
    console.error(
      "Error al obtener materias:",
      err.response?.status,
      err.response?.data,
    );
    return []; // fallback a array vacío
  }
};

export const ListaProfesores = async (Grupo) => {
  try {
    const response = await axios.get(`${URL}/administrador/lista/profesores`, {
      params: { Grupo },
      withCredentials: true,
    });

    // console.log("respuesta backend: ", response.data);
    return response.data.Profesores || [];
  } catch (err) {
    console.error(
      "Error al obtener Profesores:",
      err.response?.status,
      err.response?.data,
    );
    return []; // fallback a array vacío
  }
};

export const ListaSalones = async (Salon) => {
  if (Salon == "General") {
    try {
      const response = await axios.get(`${URL}/administrador/lista/salones`, {
        // params:{Grupo},
        withCredentials: true,
      });

      // console.log("respuesta backend: ", response.data);
      return response.data.Salones || [];
    } catch (err) {
      console.error(
        "Error al obtener Salones:",
        err.response?.status,
        err.response?.data,
      );
      return []; // fallback a array vacío
    }
  } else {
    try {
      const response = await axios.get(`${URL}/administrador/lista/salon`, {
        params:{Salon},
        withCredentials: true,
      });

      // console.log("respuesta backend: ", response.data);
      return response.data.Salones || [];
    } catch (err) {
      console.error(
        "Error al obtener Salón:",
        err.response?.status,
        err.response?.data,
      );
      return []; // fallback a array vacío
    }
  }
};

export const ListaHorarios = async (Grupo) => {
  try {
    const response = await axios.get(`${URL}/administrador/lista/horarios`, {
      params: { Grupo },
      withCredentials: true,
    });

    // console.log("respuesta backend: ", response.data);
    return response.data.Horarios || [];
    // console.log(response.data.Horarios);
  } catch (err) {
    console.error(
      "Error al obtener materias:",
      err.response?.status,
      err.response?.data,
    );
    return []; // fallback a array vacío
  }
};

export const ListaHorariosInicio = async (Salon) => {
  if (Salon == "General") {
    try {
      const response = await axios.get(
        `${URL}/administrador/lista/horarios-inicio`,
        {
          params: { Salon },
          withCredentials: true,
        },
      );

      // console.log("respuesta backend: ", response.data);
      return response.data.Horarios || [];
      // console.log(response.data.Horarios);
    } catch (err) {
      console.error(
        "Error al obtener materias:",
        err.response?.status,
        err.response?.data,
      );
      return []; // fallback a array vacío
    }
  } else {
    try {
      const response = await axios.get(
        `${URL}/administrador/lista/horarios-inicio-salon`,
        {
          params: { Salon },
          withCredentials: true,
        },
      );

      // console.log("respuesta backend: ", response.data);
      return response.data.Horarios || [];
      // console.log(response.data.Horarios);
    } catch (err) {
      console.error(
        "Error al obtener materias:",
        err.response?.status,
        err.response?.data,
      );
      return []; // fallback a array vacío
    }
  }
};
