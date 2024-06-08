import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/componentes/login';
import StudentRegistration from '../src/componentes/registrarEstudiante';
import InstitutionCreation from '../src/componentes/registrarIntritucion';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<StudentRegistration />} />
          <Route path="/create-institution" element={<InstitutionCreation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
