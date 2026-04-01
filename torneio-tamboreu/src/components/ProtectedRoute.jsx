import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

// Componente de rota protegida para garantir que apenas usuários autenticados possam acessar certas rotas
export default function ProtectedRoute({ children }) {
  // Acessa o estado de autenticação do usuário
  const { user } = useAuth();

  // Se o usuário não estiver autenticado, redireciona para a página de login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
