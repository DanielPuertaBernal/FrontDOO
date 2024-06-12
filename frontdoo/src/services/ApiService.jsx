import axios from "axios";

const baseUrl = 'http://localhost:8080/materia';

// Registrar Materia
export const registrarMateria = async (data) => {
  const url = `${baseUrl}/crearmateria`;
  try {
    const respuesta = await axios.post(url, data);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

// Consultar Materias
export const consultarMateria = async () => {
  const url = `${baseUrl}/materias`; 
  try {
    const respuesta = await axios.get(url);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

// Registrar Usuario
export const registrarUsuario = async (data) => {
  const url = `${baseUrl}/crearusuario`;
  try {
      const respuesta = await axios.post(url, data);
      return respuesta.data;
  } catch (error) {
      throw error;
  }
};

// Consultar Usuarios
export const consultarUsuario = async () => {
  const url = `${baseUrl}/usuarios`;
  try {
      const respuesta = await axios.get(url);
      return respuesta.data;
  } catch (error) {
      throw error;
  }
};
