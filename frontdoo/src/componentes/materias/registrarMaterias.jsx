import React, { useState } from 'react';
import { registrarMateria } from '../../services/ApiService';
import './materias.css';

const FormularioRegistrarMateria = () => {
    const [institucion, setInstitucion] = useState('');
    const [nombreMateria, setNombreMateria] = useState('');
    const [error, setError] = useState('');

    const handleInstitucionChange = (e) => {
        setInstitucion(e.target.value);
    };

    const handleNombreMateriaChange = (e) => {
        setNombreMateria(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!institucion || !nombreMateria) {
            setError('Por favor, completa todos los campos');
            return;
        }
        setError('');
        try {
            await registrarMateria({ institucion, nombre: nombreMateria });
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
                    <input
                        id="institucion"
                        type="text"
                        value={institucion}
                        onChange={handleInstitucionChange}
                    />
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
