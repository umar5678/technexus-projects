import axios from "axios";

const url = import.meta.env.VITE_BASE_URI;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const signupService = async (data) => {
  try {
    const response = await axios.post(`${url}/auth/register`, data);
    return response;
  } catch (error) {
    console.log("service", error);
    throw error;
  }
};

export const loginService = async (data) => {
  try {
    const response = await axios.post(`${url}/auth/login`, data , config);
    return response;
  } catch (error) {
    console.error("Login error", error);
    throw error;
  }
};


export const logoutService = async () => {
    try {
        const response = await axios.get(`${url}/auth/logout`, {
          withCredentials: true,
        });
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
} 