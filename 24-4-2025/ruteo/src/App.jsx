// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* Menú de navegación */}
        <nav>
          <ul>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/clientes">Clientes</Link>
            </li>
          </ul>
        </nav>

        {/* Configuración de las rutas */}
        <Routes>
          <Route path="/productos" element={<Productos />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </div>
    </Router>
  );
}

// Componente de "Productos"
function Productos() {
  return <h1>Esta es la página de Productos</h1>;
}

// Componente de "Clientes"
function Clientes() {
  return <h1>Esta es la página de Clientes</h1>;
}

export default App;