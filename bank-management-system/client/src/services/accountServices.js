import axios from "axios";

const url = import.meta.env.VITE_BASE_URI;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const sendMoney = async (data) => {
  try {
    const response = await axios.post(`${url}/transactions`, data, config);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllTransactions = async () => {
  try {
    const response = await axios.get(`${url}/transactions`, config);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addReview = async (data) => {
  try {
    const response = await axios.post(`${url}/reviews`, data, config);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getReviews = async () => {
  try {
    const response = await axios.get(`${url}/reviews`, config);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const refresh = async () => {
  try {
    const resposne = await axios.get(`${url}/auth/verify`, config);
    return resposne;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
