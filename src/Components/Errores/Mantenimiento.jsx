export default function Error_Mantenimiento() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-indigo-900 text-white">
      <div className="min-w-2xl max-w-4xl text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl">
        {/* <!-- Loader --> */}
        <div className="w-12 h-12 mx-auto mb-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>

        {/* <!-- Título --> */}
        <h1 className="text-3xl font-bold mb-4 uppercase">
          Estamos en Mantenimiento
        </h1>

        {/* <!-- Texto --> */}
        <p className="text-lg text-gray-200 mb-6">
          Estamos trabajando para mejorar tu experiencia.
          <br />
          Vuelve a intentarlo más tarde.
        </p>

        {/* <!-- Footer --> */}
        <footer className="text-sm text-gray-300">
          © {new Date().getFullYear()} - Kevin Issac LS
        </footer>
      </div>
    </div>
  );
}
