import React, { useState, useEffect } from 'react';
import { registrarInstitucion, obtenerTipoDocumento } from '../../services/ApiService';
import './formularioRegistrarInstitucion.css';

const FormularioRegistrarInstitucion = () => {
    const [tipoDocumentoList, setTipoDocumentoList] = useState([]);
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [nombreInstitucion, setNombreInstitucion] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTipoDocumento = async () => {
            try {
                const data = await obtenerTipoDocumento();
                setTipoDocumentoList(data);
            } catch (error) {
                setError('Error al cargar los tipos de documento');
            }
        };
        fetchTipoDocumento();
    }, []);

    const handleTipoDocumentoChange = (e) => {
        setTipoDocumento(e.target.value);
    };

    const handleNumeroDocumentoChange = (e) => {
        setNumeroDocumento(e.target.value);
    };

    const handleNombreInstitucionChange = (e) => {
        setNombreInstitucion(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!tipoDocumento || !numeroDocumento || !nombreInstitucion) {
            setError('Por favor, completa todos los campos');
            return;
        }
        setError('');
        try {
            await registrarInstitucion({ tipoDocumento, numeroDocumento, nombre: nombreInstitucion });
            // Lógica para mostrar mensaje de éxito
        } catch (error) {
            setError('Error al registrar la institución');
        }
    };

    return (
        <div className="card">
            {error && <p className="error">{error}</p>}
            <h2>Registrar Institución</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="tipoDocumento">Tipo de Documento:</label>
                    <select
                        id="tipoDocumento"
                        value={tipoDocumento}
                        onChange={handleTipoDocumentoChange}>
                        <option value=''>Seleccionar</option>
                        {tipoDocumentoList.map((tipo) => (
                            <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="numeroDocumento">Número de Documento:</label>
                    <input
                        id="numeroDocumento"
                        type="text"
                        value={numeroDocumento}
                        onChange={handleNumeroDocumentoChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nombreInstitucion">Nombre de la Institución:</label>
                    <input
                        id="nombreInstitucion"
                        type="text"
                        value={nombreInstitucion}
                        onChange={handleNombreInstitucionChange}
                    />
                </div>
                <button type="submit" className="btn">Registrar Institución</button>
            </form>
        </div>
    );
}

export default FormularioRegistrarInstitucion;
