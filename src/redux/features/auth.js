// authService.js
import axios from 'axios';
// const url link
const POST_URL = "https://e-commerce-qubi.vercel.app";

export const signIn = async (userData) => {
  try {
    const response = await axios.post(`${POST_URL}/api/auth/user/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signUp = async (userData) => {
  
  try {
    const response = await axios.post(`${POST_URL}/api/auth/user/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const forgetPassword = async (userData) => {
  
  try {
    const response = await axios.post(`${POST_URL}/api/auth/user/userForgetpassword`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const updatePassword = async (userData) => {
  
  try {
    const response = await axios.put(`${POST_URL}/api/auth/user/userUpdatePassword?token=${userData?.token}`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};