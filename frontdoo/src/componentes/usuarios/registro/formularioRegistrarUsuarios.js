import React, { useState } from 'react';
import { registrarUsuario } from '../../../services/ApiService';
import './formularioRegistrarUsuarios.css';

const FormularioRegistrarUsuarios = ({ onRegistrar }) => {
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [direccion, setDireccion] = useState('');
    const [institucion, setInstitucion] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!tipoDocumento || !numeroDocumento || !nombres || !apellidos || !correoElectronico || !contrasena || !telefono || !fechaNacimiento || !tipoUsuario || !direccion || !institucion) {
            setError('Por favor, completa todos los campos');
            return;
        }
        setError('');
        try {
            const userData = await registrarUsuario({ tipoDocumento, numeroDocumento, nombres, apellidos, correoElectronico, contrasena, telefono, fechaNacimiento, tipoUsuario, direccion, institucion });
            onRegistrar(userData);
        } catch (error) {
            setError('Error al registrar usuario');
        }
    };

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label htmlFor="tipoDocumento">Tipo Documento:</label>
                    <input id="tipoDocumento" type="text" value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="numeroDocumento">Numero Documento:</label>
                    <input id="numeroDocumento" type="text" value={numeroDocumento} onChange={(e) => setNumeroDocumento(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombres">Nombres:</label>
                    <input id="nombres" type="text" value={nombres} onChange={(e) => setNombres(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Apellidos:</label>
                    <input id="apellidos" type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="correoElectronico">Correo Electrónico:</label>
                    <input id="correoElectronico" type="email" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="contrasena">Contraseña:</label>
                    <input id="contrasena" type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input id="telefono" type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="fechaNacimiento">Fecha Nacimiento:</label>
                    <input id="fechaNacimiento" type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="tipoUsuario">Tipo Usuario:</label>
                    <input id="tipoUsuario" type="text" value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">Dirección:</label>
                    <input id="direccion" type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="institucion">Institución:</label>
                    <input id="institucion" type="text" value={institucion} onChange={(e) => setInstitucion(e.target.value)} />
                </div>
                <button type="submit" className="btn">Registrar Usuario</button>
            </form>
        </div>
    );
}

export default FormularioRegistrarUsuarios;
