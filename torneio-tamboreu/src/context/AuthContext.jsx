import { createContext, useState } from "react";

// Contexto de autenticação para gerenciar o estado do usuário
const AuthContext = createContext();

// Provedor de autenticação para envolver a aplicação
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Função de login (simulada, depois conectaremos com o backend)
  function login(email, password) {
    // Simulação (depois ligamos com backend)
    if (email === "admin@admin.com" && password === "123") {
      setUser({ email });
      return true;
    }
    return false;
  }

  // Função de logout
  function logout() {
    setUser(null);
  }

  // Fornece o estado do usuário e as funções de login/logout para os componentes filhos
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
