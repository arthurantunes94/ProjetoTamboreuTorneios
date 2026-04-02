import { NavLink } from "react-router-dom";
import "../css/Sidebar.css";
import { Home, Trophy, BarChart3, Building2, Image } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Tamboréu</h2>

      <nav>
        <NavLink to="/home" className="menu-item">
          <Home size={18} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/torneios" className="menu-item">
          <Trophy size={18} />
          <span>Torneios</span>
        </NavLink>

        <NavLink to="/ranking" className="menu-item">
          <BarChart3 size={18} />
          <span>Ranking</span>
        </NavLink>

        <NavLink to="/clubes" className="menu-item">
          <Building2 size={18} />
          <span>Clubes</span>
        </NavLink>

        <NavLink to="/fotos" className="menu-item">
          <Image size={18} />
          <span>Fotos</span>
        </NavLink>
      </nav>
    </div>
  );
}
