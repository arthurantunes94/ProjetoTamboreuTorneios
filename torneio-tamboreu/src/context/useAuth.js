import { useContext } from "react";
import { AuthContext } from "./AuthContext";

// Hook personalizado para acessar o contexto de autenticação
export function useAuth() {
  return useContext(AuthContext);
}
