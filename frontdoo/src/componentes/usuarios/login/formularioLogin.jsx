import React, { useState } from 'react';
import { login } from '../../../services/ApiService';
import './formularioLogin.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }
    setError('');
    try {
      const userData = await login({ username, password });
      onLogin(userData);
    } catch (error) {
      setError('Error al iniciar sesión');
    }
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
