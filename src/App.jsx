import InicioAdmin from "./Administrador/Inicio.jsx";
import InicioSecretaria from "./Secretaria/Inicio.jsx";
import MateriasAdmin from "./Administrador/Materias.jsx";
import BuscarAdmin from "./Administrador/Buscar.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
// import RegistroTutorias from "./Registro.jsx";
import PrivateRoute from "./Components/UserSession/PrivateRoute.jsx";
import Inicio from "./Inicio.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AgregarMateriasAdmin from "./Administrador/AgregarMaterias.jsx";
import HorariosAdmin from "./Administrador/Horarios.jsx";
import AgregarHorariosAdmin from "./Administrador/AgregarHorarios.jsx";
import AdministradorProfesores from "./Administrador/Profesores.jsx";
import Error_Mantenimiento from "./Components/Errores/Mantenimiento.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Error_Mantenimiento></Error_Mantenimiento>}></Route>
    </Routes>
    // <div>
    //   <NavBar></NavBar>

    //   {/* CONTENIDO DE LA PÁGINA 
    //   <div className="min-h-screen py-15 px-5">
    //     <Routes>
    //       {/* <Route path="/" element={<RegistroTutorias></RegistroTutorias>}></Route> */}
    //       <Route path="/" element={<Inicio></Inicio>}></Route>
    //       <Route
    //         path="/Administrador"
    //         element={
    //           <PrivateRoute Cargos={["Administrador"]}>
    //             <InicioAdmin></InicioAdmin>
    //             {/* <MateriasAdmin></MateriasAdmin> */}
    //           </PrivateRoute>
    //         }
    //       ></Route>
    //       <Route
    //         path="/Administrador/Materias"
    //         element={
    //           <PrivateRoute Cargos={["Administrador"]}>
    //             <MateriasAdmin></MateriasAdmin>
    //           </PrivateRoute>
    //         }
    //       ></Route>
    //       <Route
    //         path="/Administrador/Materias/Agregar"
    //         element={
    //           <PrivateRoute Cargos={["Administrador"]}>
    //             <AgregarMateriasAdmin></AgregarMateriasAdmin>
    //           </PrivateRoute>
    //         }
    //       ></Route>
    //       <Route
    //         path="/Administrador/Horarios"
    //         element={
    //           <PrivateRoute Cargos={["Administrador"]}>
    //             <HorariosAdmin></HorariosAdmin>
    //           </PrivateRoute>
    //         }
    //       ></Route>
    //       <Route
    //         path="/Administrador/Horarios/Agregar"
    //         element={
    //           <PrivateRoute Cargos={["Administrador"]}>
    //             <AgregarHorariosAdmin></AgregarHorariosAdmin>
    //           </PrivateRoute>
    //         }
    //       ></Route>
    //       <Route
    //         path="/Administrador/Buscar"
    //         element={<BuscarAdmin></BuscarAdmin>}
    //       ></Route>
    //       <Route
    //         path="/Administrador/Profesores"
    //         element={<AdministradorProfesores></AdministradorProfesores>}
    //       ></Route>
    //       <Route
    //         path="/Secretaria"
    //         element={<InicioSecretaria></InicioSecretaria>}
    //       ></Route>
    //     </Routes>
    //   </div>

    //   {/* FOOTER 
    //   <Footer></Footer>
    // </div>
  );
}
