//PrivateRoute.jsx

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext"

// Componente opcional para mostrar un spinner
function LoadingSpinner() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <div className="spinner" />
      <p>Cargando sesión...</p>
      <style>{`
        .spinner {
          border: 4px solid rgba(0,0,0,0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: #4caf50;
          animation: spin 1s linear infinite;
          margin: auto;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// Componente opcional para acceso denegado
function NoAccess() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Acceso denegado</h2>
      <p>No tienes permiso para ver esta página.</p>
    </div>
  );
}

function PrivateRoute({ children, Cargos }) {

//   const context = useContext(UserContext);
// console.log("UserContext:", context); // <- revisa qué devuelve
// const { user, loading } = context;

  const { user, loading } = useContext(UserContext);

  if (loading) return <LoadingSpinner />;

  if (!user) return <Navigate to="/" replace />;

  if (Cargos) {
    const cargosLower = Cargos.map((c) => c.toLowerCase());
    const userCargoLower = user.rol?.toLowerCase(); // ⚡ usar ?. para prevenir undefined

    if (!userCargoLower || !cargosLower.includes(userCargoLower))
      return <NoAccess />;
  }

  return children;
}

export default PrivateRoute;
