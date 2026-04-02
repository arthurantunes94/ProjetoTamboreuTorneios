import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Torneios from "./pages/Torneios";
import Ranking from "./pages/Ranking";
import Clubes from "./pages/Clubes";
import Fotos from "./pages/Fotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/torneios"
          element={
            <ProtectedRoute>
              <Layout>
                <Torneios />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/ranking"
          element={
            <ProtectedRoute>
              <Layout>
                <Ranking />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/clubes"
          element={
            <ProtectedRoute>
              <Layout>
                <Clubes />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/fotos"
          element={
            <ProtectedRoute>
              <Layout>
                <Fotos />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
