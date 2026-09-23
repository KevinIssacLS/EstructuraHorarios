import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavBar(){
  const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav className="bg-theme-white shadow-lg fixed w-full z-50 border-b-1 border-b-theme-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* <!-- Logo --> */}
          <div className="flex-shrink-0 text-xl font-bold text-theme-black font-theme-logo uppercase">
            <div className="flex w-lg">
            {/* Kevin Issac LS */}
            {/* <img src="https://cdn.kevin-issac-ls.com/images/favicon.png" alt="KILS" className="max-h-8"/> */}
            <img src="https://www.saes.cet1.ipn.mx/Images/logos/17.png" alt="ESCA STO" className="max-h-8"/>
            <img src="https://www.saes.cet1.ipn.mx/Images/logos/Poli_XCH.png" alt="IPN" className="max-h-8"/>
            </div>
          </div>

          {/* <!-- Links de escritorio --> */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/Administrador"
              className="text-gray-700 hover:text-theme-black duration-250"
            >
              Inicio
            </Link>
            {/* <Link to='/Administrador/General' className="text-gray-700 hover:text-theme-black duration-250">General</Link> */}
            <Link
              to="/Administrador/Materias"
              className="text-gray-700 hover:text-theme-black duration-250"
            >
              Materias
            </Link>
            <Link
              to="/Administrador/Horarios"
              className="text-gray-700 hover:text-theme-black duration-250"
            >
              Horarios
            </Link>
            
            <Link
              to="/Administrador/Profesores"
              className="text-gray-700 hover:text-theme-black duration-250"
            >
              Profesores
            </Link>
            <Link>
            <i className="bi bi-box-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </nav>
    )
}