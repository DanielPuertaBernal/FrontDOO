import axios from "axios";

const postMethodUrl = 'http://localhost:'

export const login = async (data) => {
  const url = postMethodUrl + '8080/'; //Colocar la url del controlador
  try {
    const respuesta = await axios.post(url, data);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
};
export const obtenerTipoDocumento= async() => {
  const url = postMethodUrl + '8080/'; //Colocar la url del controlador
  try {
    const respuesta = await axios.get(url);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

export const obtenerPais= async() => {
  const url = postMethodUrl + '8080/'; //Colocar la url del controlador
  try {
    const respuesta = await axios.get(url);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

export const obtenerDepartamento= async() => {
  const url = postMethodUrl + '8080/'; //Colocar la url del controlador
  try {
    const respuesta = await axios.get(url);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

export const obtenerCiudad= async() => {
  const url = postMethodUrl + '8080/'; //Colocar la url del controlador
  try {
    const respuesta = await axios.get(url);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

export const registrarUsuario = async (data) => {
  const url = postMethodUrl + '8080/'; //Colocar la url del controlador
  try {
    const respuesta = await axios.post(url, data);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
};

export const registrarInstitucion = async (data) => {
  const url = postMethodUrl + '8080/'; //Colocar la url del controlador
  try {
    const respuesta = await axios.post(url, data);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

export const obtenerInstitucion = async () => {
  const url = postMethodUrl + '8080/'; //Colocar la url del controlador
  try {
    const respuesta = await axios.get(url);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

export const registrarMateria = async (data) => {
  const url = postMethodUrl + '8080/'; //Colocar la url del controlador
  try {
    const respuesta = await axios.post(url, data);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

export const consultarMateria = async () => {
  const url = postMethodUrl + '8080/'; //Colocar la url del controlador
  try {
    const respuesta = await axios.get(url);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

export const editarMateria = async (data) => {
  const url = postMethodUrl + '8080/'; //Colocar la url del controlador
  try {
    const respuesta = await axios.put(url, data);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}


