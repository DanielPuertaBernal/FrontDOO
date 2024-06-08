import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import messages from './mensajes';

const LoginCard = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = messages.usernameRequired;
    if (!password) newErrors.password = messages.passwordRequired;
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      if (username === 'admin' && password === '0000') {
        navigate('registrarEstudiante.js');
      } else {
        setErrors({ general: 'Usuario o contraseña incorrectos' });
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <LoginCard>
      <h2>Iniciar Sesión</h2>
      <Form onSubmit={handleSubmit}>
        <Label>
          Usuario:
          <Input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </Label>
        <Label>
          Contraseña:
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </Label>
        {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}
        <Button type="submit">Iniciar Sesión</Button>
      </Form>
    </LoginCard>
  );
};

export default Login;
