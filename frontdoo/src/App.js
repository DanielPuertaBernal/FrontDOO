import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormularioRegistrarMateria from "./componentes/materias/registrarMaterias";
import FormularioConsultarMateria from "./componentes/materias/consutarMaterias";
import LoginForm from "./componentes/usuarios/login/formularioLogin";
import FormularioRegistrarUsuario from "./componentes/usuarios/registro/formularioRegistrarUsuarios";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registrarse" element={<FormularioRegistrarUsuario />} />
          <Route path="/registrar-materia" element={<FormularioRegistrarMateria />} />
          <Route path="/consultar-materia" element={<FormularioConsultarMateria />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
