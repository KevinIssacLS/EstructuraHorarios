export default function Footer(){
    return(
        <footer className="bg-theme-accent text-theme-white py-10">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* <!-- Logo o nombre --> */}
    <div>
      <h3 className="text-2xl font-bold mb-2 font-theme-logo uppercase">Tutorias 26-1</h3>
      <p className="text-sm text-gray-200 font-theme-service uppercase">Unidades de Aprendizaje del área Humanística</p>
    </div>

    {/* <!-- Enlaces --> */}
    <div>
      <h4 className="text-xl font-semibold mb-2">Navegación</h4>
      <ul className="space-y-2 text-gray-300">
        <li><a href="/" className="hover:underline">Inicio</a></li>
        <li><a href="/Web" className="hover:underline">Servicios Web</a></li>
        <li><a href="/Producciones" className="hover:underline">Producciones (Próximamente)</a></li>
        <li><a href="/Contacto" className="hover:underline">Contacto</a></li>
      </ul>
    </div>

    {/* <!-- Contacto --> */}
    <div>
      <h4 className="text-xl font-semibold mb-2">ÚLTIMA ACTUALIZACIÓN</h4>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li>Fecha: <b>16/07/2025</b></li>
        <li>Hora: <b>11:12</b></li>
      </ul>
    </div>
  </div>

  {/* <!-- Línea inferior --> */}
  {/* <!-- <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4"> --> */}
  <div className="mt-10 text-center text-gray-300 text-sm border-t border-gray-600 pt-4">
    &copy; {new Date().getFullYear()} Kevin Issac LS. Todos los derechos reservados.
  </div>
</footer>
    )
}