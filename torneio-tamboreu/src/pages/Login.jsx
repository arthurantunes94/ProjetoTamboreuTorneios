import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import "../css/login.css";

export default function Login() {
  // Acessa a função de login do contexto de autenticação
  const { login } = useAuth();
  const navigate = useNavigate();

  // Estados locais para armazenar o email, senha e mensagens de erro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Função para lidar com o envio do formulário de login
  function handleSubmit(e) {
    e.preventDefault();

    const success = login(email, password);

    // Se o login for bem-sucedido, redireciona para a página inicial; caso contrário, exibe uma mensagem de erro
    if (success) {
      navigate("/home");
    } else {
      setError("Email ou senha inválidos");
    }
  }

  // Renderiza o formulário de login com campos para email e senha, e exibe mensagens de erro quando necessário
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Bem-vindo</h2>
        <p>Faça login para continuar</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <span className="error">{error}</span>}

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
