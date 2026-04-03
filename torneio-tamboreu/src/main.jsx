import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

// Renderiza a aplicação, envolvendo-a com o AuthProvider para fornecer o contexto de autenticação a todos os componentes
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          borderRadius: "10px",
          background: "#0f172a",
          color: "#fff",
        },
      }}
    />
  </AuthProvider>,
);
