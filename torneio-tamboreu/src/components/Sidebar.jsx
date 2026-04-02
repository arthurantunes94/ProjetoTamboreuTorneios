import { NavLink } from "react-router-dom";
import "../css/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Tamboréu</h2>

      <nav>
        <NavLink to="/home" className="menu-item">
          🏠 <span>Home</span>
        </NavLink>

        <NavLink to="/torneios" className="menu-item">
          🏆 <span>Torneios</span>
        </NavLink>

        <NavLink to="/ranking" className="menu-item">
          📊 <span>Ranking</span>
        </NavLink>

        <NavLink to="/clubes" className="menu-item">
          🏢 <span>Clubes</span>
        </NavLink>

        <NavLink to="/fotos" className="menu-item">
          📸 <span>Fotos</span>
        </NavLink>
      </nav>
    </div>
  );
}
