import { Outlet } from "react-router-dom";

export const LayoutPublic = () => {
  return (
    <div className="container">
      <Outlet />
      <footer>Este es el footer</footer>
    </div>
  );
};

// outlet nos permite establecer un slot o espacio vacío dentro de un componente, donde podemos renderizar el resultado de una ruta. Esto es muy útil cuando tenemos un layout compartido por varias rutas, pero que tiene una sección que cambia.
