import React, { useState } from 'react';
import { 
    registrarUsuario} from '../../../services/ApiService';
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
    const [pais, setPais] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [error, setError] = useState('');
    const [tipoDocumentoList] = useState([]);
    const [paisList] = useState([]);
    const [departamentoList] = useState([]);
    const [ciudadList] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!tipoDocumento || !numeroDocumento || !nombres || !apellidos || !correoElectronico || !contrasena || !telefono || !fechaNacimiento || !pais || !departamento || !ciudad) {
            setError('Por favor, completa todos los campos');
            return;
        }
        setError('');
        try {
            const userData = await registrarUsuario({ tipoDocumento, numeroDocumento, nombres, apellidos, correoElectronico, contrasena, telefono, fechaNacimiento, pais, departamento, ciudad });
            onRegistrar(userData);
        } catch (error) {
            setError('Error al registrar usuario');
        }
    };

    const handleTipoDocumentoChange = (e) => {
        setTipoDocumento(e.target.value);
    };

    const handleNumeroDocumentoChange = (e) => {
        setNumeroDocumento(e.target.value);
    };

    const handleNombresChange = (e) => {
        setNombres(e.target.value);
    };

    const handleApellidosChange = (e) => {
        setApellidos(e.target.value);
    };

    const handleCorreoElectronicoChange = (e) => {
        setCorreoElectronico(e.target.value);
    };

    const handleContrasenaChange = (e) => {
        setContrasena(e
        .target.value);
    }

    const handleTelefonoChange = (e) => {
        setTelefono(e.target.value);
    }

    const handleFechaNacimientoChange = (e) => {
        setFechaNacimiento(e.target.value);
    }

    const handlePaisChange = (e) => {
        setPais(e.target.value);
    }

    const handleDepartamentoChange = (e) => {
        setDepartamento(e.target.value);
    }

    const handleCiudadChange = (e) => {
        setCiudad(e.target.value);
    }


    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label htmlFor="tipoDocumento">Tipo Documento:</label>
                    <select
                        id="tipoDocumento"
                        value={tipoDocumento}
                        onChange={handleTipoDocumentoChange}>
                        <option value=''>Seleccionar</option>
                        {tipoDocumentoList.map((tipoDocumento) => (
                            <option key={tipoDocumento.id} value={tipoDocumento.id}>{tipoDocumento.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="numeroDocumento">Numero Documento:</label>
                    <input
                        id="numeroDocumento"
                        type="text"
                        value={numeroDocumento}
                        onChange={handleNumeroDocumentoChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nombres">Nombres:</label>
                    <input
                        id="nombres"
                        type="text"
                        value={nombres}
                        onChange={handleNombresChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Apellidos:</label>
                    <input
                        id="apellidos"
                        type="text"
                        value={apellidos}
                        onChange={handleApellidosChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="correoElectronico">Correo Electrónico:</label>
                    <input
                        id="correoElectronico"
                        type="text"
                        value={correoElectronico}
                        onChange={handleCorreoElectronicoChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contrasena">Contraseña:</label>
                    <input
                        id="contrasena"
                        type="password"
                        value={contrasena}
                        onChange={handleContrasenaChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        id="telefono"
                        type="text"
                        value={telefono}
                        onChange={handleTelefonoChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fechaNacimiento">Fecha Nacimiento:</label>
                    <input
                        id="fecha
                        Nacimiento"
                        type="date"
                        value={fechaNacimiento}
                        onChange={handleFechaNacimientoChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pais">País:</label>
                    <select
                        id="pais"
                        value={pais}
                        onChange={handlePaisChange}>
                        <option value=''>Seleccionar</option>
                        {paisList.map((pais) => (
                            <option key={pais.id} value={pais.id}>{pais.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="departamento">Departamento:</label>
                    <select
                        id="departamento"
                        value={departamento}
                        onChange={handleDepartamentoChange}>
                        <option value=''>Seleccionar</option>
                        {departamentoList.map((departamento) => (
                            <option key={departamento.id} value={departamento.id}>{departamento.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="ciudad">Ciudad:</label>
                    <select
                        id="ciudad"
                        value={ciudad}
                        onChange={handleCiudadChange}>
                        <option value=''>Seleccionar</option>
                        {ciudadList.map((ciudad) => (
                            <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn">Registrar Usuario</button>
            </form>
        </div>
    );
}

export default FormularioRegistrarUsuarios;
