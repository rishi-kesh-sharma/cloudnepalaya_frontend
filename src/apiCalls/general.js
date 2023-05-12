import axios from "axios";
import { SERVER_BASE_URL } from "../constants/general";

export const createDocument = async (type, values) => {
  try {
    const response = axios.post(`${SERVER_BASE_URL}/${type}`, values, {
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};
export const getDocuments = async (type) => {
  console.log(type);
  try {
    const response = axios.get(`${SERVER_BASE_URL}/${type}`, {
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};
export const getDocument = async (type, _id) => {
  try {
    const response = axios.get(`${SERVER_BASE_URL}/${type}/${_id}`, {
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    return response;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};
export const updateDocument = async (type, _id, values) => {
  try {
    const response = axios.put(`${SERVER_BASE_URL}/${type}/${_id}`, values, {
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};
export const deleteDocument = async (type, _id) => {
  try {
    const response = axios.delete(`${SERVER_BASE_URL}/${type}/${_id}`, {
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};
