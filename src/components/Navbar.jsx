import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="btn btn-outline-primary" to="/">
          Inicio
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/contacto">
          Contacto
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/blog">
          Blog
        </NavLink>
      </div>
    </div>
  );
};

// NavLink agrega la clase 'active' (siempre y cuando se use Bootstrap? *Revisar si funciona con Tailwind)
