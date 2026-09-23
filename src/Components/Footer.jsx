import packageJSON from "../../package.json";
export default function Footer(){
    return(
        // <footer className="bg-gray-900 text-theme-white py-10">
        <footer className="bg-theme-black text-theme-white py-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <!-- Logo o nombre --> */}
        <div>
            <h3 className="text-2xl font-bold mb-2 font-theme-logo uppercase">Estructura 27-1</h3>
            <p className="text-sm text-gray-400 font-theme-service uppercase">Jefatura de Unidades de Aprendizaje del Área Humanística</p>
        </div>

        {/* <!-- Enlaces --> */}
        <div>
            <h4 className="text-xl font-semibold mb-2">Navegación</h4>
            <ul className="space-y-2 text-gray-300">
                {/* <li><a href="/" className="hover:underline">Inicio</a></li> */}
                {/* <li><a href="/" className="hover:underline">Primer Semestre</a></li>
                <li><a href="/" className="hover:underline">Segundo Semestre</a></li>
                <li><a href="/" className="hover:underline">Tercer Semestre</a></li>
                <li><a href="/" className="hover:underline">Cuarto Semestre</a></li>
                <li><a href="/" className="hover:underline">Quinto Semestre</a></li>
                <li><a href="/" className="hover:underline">Sexto Semestre</a></li>
                <li><a href="/" className="hover:underline">Séptimo Semestre</a></li> */}
            </ul>
        </div>

        {/* <!-- Contacto --> */}
        <div>
            <h4 className="text-xl font-semibold mb-2">Contacto</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
                {/* <li>Email: <a href="mailto:contact@kevin-issac-ls.com" className="hover:underline">contact@kevin-issac-ls.com</a></li> */}
                {/* <!-- <li>Tel: <a href="tel:+521234567890" className="hover:underline">+52 123 456 7890</a></li> --> */}
                {/* <li>Ubicación: México</li> */}
            </ul>
        </div>
    </div>

    {/* <!-- Línea inferior --> */}
    <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; 2025 Kevin Issac LS. Todos los derechos reservados. <br /> Versión de la aplicación: {packageJSON.version}
    </div>
</footer>
    )
}