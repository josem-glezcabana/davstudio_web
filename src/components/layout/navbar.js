import { Link, NavLink } from "react-router-dom";
import davstudioLogo from "../../assets/davstudio_logo_sin_relleno.jpeg";

export default function Navbar() {
  return (
    <header className="p-2 mb-3">
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        {/* Logo */}
        <Link to="/" className="px-5 py-5 w-3">
          <img src={davstudioLogo} alt="Estudio de Interiorismo" style={{ width: "100%"}}/>
        </Link>

        {/* Navegacion */}
        <nav className="flex" style={{ gap: "2rem" }}>
          <NavLink to="/products" className="px-5 py-3 no-underline text-900 text-xl font-bold uppercase">
            Productos
          </NavLink>

          <NavLink to="/contact" className="px-5 py-3 no-underline text-900 text-xl font-bold uppercase">
            Contacto
          </NavLink>

          <NavLink to="/about" className="px-5 py-3 no-underline text-900 text-xl font-bold uppercase">
            Sobre nosotros
          </NavLink>
        </nav>
      </div>
    </header>
  );
};