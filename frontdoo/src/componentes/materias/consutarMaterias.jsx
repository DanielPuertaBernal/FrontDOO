import React, { useState, useEffect } from 'react';
import { consultarMateria, obtenerInstitucion } from '../../services/ApiService';
import './materias.css';

const FormularioConsultarMateria = () => {
    const [materias, setMaterias] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMaterias = async () => {
            try {
                const materiaData = await consultarMateria();
                setMaterias(materiaData);
            } catch (error) {
                setError('Error al consultar las materias');
            }
        };

        fetchMaterias();
    }, []);

    return (
        <div className="card formulario-consultar-materia">
            {error && <p className="error">{error}</p>}
            <ul>
                {materias.map((materia) => (
                    <li key={materia.id}>{materia.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default FormularioConsultarMateria;
