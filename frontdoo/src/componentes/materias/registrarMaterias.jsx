import React, { useState, useEffect } from 'react';
import { registrarMateria, obtenerInstitucion } from '../../services/ApiService';
import './materias.css';

const FormularioRegistrarMateria = () => {
    const [instituciones, setInstituciones] = useState([]);
    const [institucionSeleccionada, setInstitucionSeleccionada] = useState('');
    const [nombreMateria, setNombreMateria] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await obtenerInstitucion();
                setInstituciones(data);
            } catch (error) {
                setError('Error al cargar las instituciones');
            }
        };
        fetchData();
    }, []);

    const handleInstitucionChange = (e) => {
        setInstitucionSeleccionada(e.target.value);
    };

    const handleNombreMateriaChange = (e) => {
        setNombreMateria(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!institucionSeleccionada || !nombreMateria) {
            setError('Por favor, completa todos los campos');
            return;
        }
        setError('');
        try {
            await registrarMateria({ institucion: institucionSeleccionada, nombre: nombreMateria });
            // Lógica para mostrar mensaje de éxito
        } catch (error) {
            setError('Error al registrar la materia');
        }
    };

    return (
        <div className="card">
            {error && <p className="error">{error}</p>}
            <h2>Registrar Materia</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="institucion">Institución:</label>
                    <select
                        id="institucion"
                        value={institucionSeleccionada}
                        onChange={handleInstitucionChange}>
                        <option value=''>Seleccionar</option>
                        {instituciones.map((institucion) => (
                            <option key={institucion.id} value={institucion.id}>{institucion.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="nombreMateria">Nombre de la Materia:</label>
                    <input
                        id="nombreMateria"
                        type="text"
                        value={nombreMateria}
                        onChange={handleNombreMateriaChange}
                    />
                </div>
                <button type="submit" className="btn">Registrar Materia</button>
            </form>
        </div>
    );
}

export default FormularioRegistrarMateria;
