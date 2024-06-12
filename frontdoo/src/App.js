import React from "react";
import FormularioRegistrarMateria from "./componentes/materias/registrarMaterias";
import FormularioConsultarMateria from "./componentes/materias/consutarMaterias";;
import LoginForm from "./componentes/usuarios/login/formularioLogin";
import FormularioRegistrarUsuario from "./componentes/usuarios/registro/formularioRegistrarUsuarios";

function App() {
  return (
    <div className="App">
      <FormularioRegistrarUsuario />
    </div>
  );
}

export default App;