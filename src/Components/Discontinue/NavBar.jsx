import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-theme-white shadow-lg fixed w-full z-50 border-b-1 border-b-theme-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* <!-- Logo --> */}
          <div className="flex-shrink-0 text-xl font-bold text-theme-black font-theme-logo uppercase">
            Tutorías 26-1
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
              to="/Administrador/Buscar"
              className="text-gray-700 hover:text-theme-black duration-250"
            >
              Buscar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
