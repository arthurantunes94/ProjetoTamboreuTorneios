import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  // Estado para armazenar o usuário autenticado, inicializado a partir do localStorage para persistência
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  function login(email, password) {
    if (email === "admin@admin.com" && password === "123") {
      const userData = { email };

      setUser(userData);

      // 🔥 salva no localStorage
      localStorage.setItem("user", JSON.stringify(userData));

      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);

    // 🔥 remove do localStorage
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
