import React, { useState, useEffect } from 'react';
import { consultarMateria, obtenerInstitucion } from '../../services/ApiService';
import './materias.css';

const FormularioConsultarMateria = () => {
    const [materias, setMaterias] = useState([]);
    const [instituciones, setInstituciones] = useState([]);
    const [selectedInstitucion, setSelectedInstitucion] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const institucionesData = await obtenerInstitucion();
                setInstituciones(institucionesData);
            } catch (error) {
                setError('Error al obtener instituciones');
            }
        };

        fetchData();
    }, []);

    const handleChangeInstitucion = (e) => {
        setSelectedInstitucion(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedInstitucion) {
                const materiaData = await consultarMateria(selectedInstitucion);
                setMaterias(materiaData);
            } else {
                setError('Por favor, selecciona una institución');
            }
        } catch (error) {
            setError('Error al consultar las materias');
        }
    };

    return (
        <div className="card formulario-consultar-materia">
            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label htmlFor="institucion">Institución:</label>
                    <select id="institucion" value={selectedInstitucion} onChange={handleChangeInstitucion}>
                        <option value=''>Seleccionar</option>
                        {instituciones.map((institucion) => (
                            <option key={institucion.id} value={institucion.id}>{institucion.nombre}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Consultar Materias</button>
                <ul>
                    {materias.map((materia) => (
                        <li key={materia.id}>{materia.nombre}</li>
                    ))}
                </ul>
            </form>
        </div>
    );
};

export default FormularioConsultarMateria;
