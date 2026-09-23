// UserContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import { API_URL } from "../Config/GlobalConfig";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 👈 nuevo estado

  useEffect(() => {
    fetch(`${API_URL}/me`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) setUser(data.user);
        // console.log(data);
      })
      .finally(() => setLoading(false)); // 👈 dejamos de cargar aunque falle
  }, []);
  // console.log(user;
  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}
