import axios from "axios";
import { postMethodUrl } from "../models/endpointDirectory";

export const login = async (data) => {
  const url = postMethodUrl + '8080/zbank/login';
  try {
    const respuesta = await axios.post(url, data);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

export const enviarDatos = async (data) => {
  return true;
};

export const obtenerDatosDivisas = async() => {
  return true;
}

export const obtenerDatosTiposDocumentos= async() => {
  return true;
}