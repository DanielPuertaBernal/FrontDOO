import React, { useState, useEffect } from 'react';
import { editarMateria, obtenerInstitucion, consultarMateria } from '../../services/ApiService';
import './materias.css';

const FormularioEditarMateria = () => {
    const [instituciones, setInstituciones] = useState([]);
    const [materias, setMaterias] = useState([]);
    const [institucionSeleccionada, setInstitucionSeleccionada] = useState('');
    const [materiaSeleccionada, setMateriaSeleccionada] = useState('');
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchInstituciones = async () => {
            try {
                const data = await obtenerInstitucion();
                setInstituciones(data);
            } catch (error) {
                setError('Error al cargar las instituciones');
            }
        };
        fetchInstituciones();
    }, []);

    const handleInstitucionChange = async (e) => {
        const institucionId = e.target.value;
        setInstitucionSeleccionada(institucionId);
        try {
            const data = await consultarMateria(institucionId);
            setMaterias(data);
        } catch (error) {
            setError('Error al cargar las materias');
        }
    };

    const handleMateriaChange = (e) => {
        setMateriaSeleccionada(e.target.value);
    };

    const handleNuevoNombreChange = (e) => {
        setNuevoNombre(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editarMateria({ id: materiaSeleccionada, nombre: nuevoNombre });
            // Lógica para mostrar mensaje de éxito
        } catch (error) {
            setError('Error al editar la materia');
        }
    };

    return (
        <div className="card">
            {error && <p className="error">{error}</p>}
            <h2>Editar Materia</h2>
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
                    <label htmlFor="materia">Materia:</label>
                    <select
                        id="materia"
                        value={materiaSeleccionada}
                        onChange={handleMateriaChange}>
                        <option value=''>Seleccionar</option>
                        {materias.map((materia) => (
                            <option key={materia.id} value={materia.id}>{materia.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="nuevoNombre">Nuevo Nombre de la Materia:</label>
                    <input
                        id="nuevoNombre"
                        type="text"
                        value={nuevoNombre}
                        onChange={handleNuevoNombreChange}
                    />
                </div>
                <button type="submit">Editar Materia</button>
            </form>
        </div>
    );
};

export default FormularioEditarMateria;
