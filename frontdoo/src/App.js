import React from "react";
import FormularioRegistrarMateria from "./componentes/materias/registrarMaterias";
import FormularioConsultarMateria from "./componentes/materias/consutarMaterias";
import FormularioEditarMateria from "./componentes/materias/editarMaterias";
import LoginForm from "./componentes/usuarios/login/formularioLogin";
import FormularioRegistrarUsuario from "./componentes/usuarios/registro/formularioRegistrarUsuarios";
import FormularioRegistrarInstitucion from "./componentes/instituciones/registrarInstitucion";

function App() {
  return (
    <div className="App">
      <FormularioConsultarMateria />
    </div>
  );
}

export default App;