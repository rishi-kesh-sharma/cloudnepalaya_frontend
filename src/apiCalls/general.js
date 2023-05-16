import axios from "axios";

export const createDocument = async (type, values) => {
  try {
    const response = axios.post(
      `${process.env.SERVER_BASE_URL}/${type}`,
      values,
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    return response;
  } catch (err) {
    return err.response;
  }
};
export const getDocuments = async (type) => {
  console.log(type);
  try {
    const response = axios.get(`${process.env.SERVER_BASE_URL}/${type}`, {
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
    const response = axios.get(
      `${process.env.SERVER_BASE_URL}/${type}/${_id}`,
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};
export const updateDocument = async (type, _id, values) => {
  try {
    const response = axios.put(
      `${process.env.SERVER_BASE_URL}/${type}/${_id}`,
      values,
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    return response;
  } catch (err) {
    return err.response;
  }
};
export const deleteDocument = async (type, _id) => {
  try {
    const response = axios.delete(
      `${process.env.SERVER_BASE_URL}/${type}/${_id}`,
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    return response;
  } catch (err) {
    return err.response;
  }
};
