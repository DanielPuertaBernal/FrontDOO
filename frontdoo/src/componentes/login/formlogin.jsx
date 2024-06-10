import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";

function login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación
    console.log("Usuario:", usuario, "Contraseña:", contrasena);
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="usuario">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="contrasena">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
      </Form>
    </div>
  );
}

export default login;
