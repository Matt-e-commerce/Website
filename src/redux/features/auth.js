// authService.js
import axios from "axios";
// const url link
const POST_URL = "https://e-commerce-qubi.vercel.app";
// Function to get the authorization token from local storage
const getAuthToken = () => {
  // Retrieve the token from local storage
  return localStorage.getItem("token");
};
export const signIn = async (userData) => {
  try {
    const response = await axios.post(
      `${POST_URL}/api/auth/user/login`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signUp = async (userData) => {
  try {
    const response = await axios.post(
      `${POST_URL}/api/auth/user/register`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const forgetPassword = async (userData) => {
  try {
    const response = await axios.post(
      `${POST_URL}/api/auth/user/userForgetpassword`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const updatePassword = async (userData) => {
  try {
    const response = await axios.put(
      `${POST_URL}/api/auth/user/userUpdatePassword?token=${userData?.token}`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const verify = async (userData) => {
  try {
    const response = await axios.post(
      `${POST_URL}/api/auth/user/userAccontVerification`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const resendOtp = async (userData) => {
  try {
    const response = await axios.post(
      `${POST_URL}/api/auth/user/userResendOtp`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getUser = async (id) => {
  try {
    const authToken = getAuthToken().replace(/"/g, "");
    const response = await axios.get(`${POST_URL}/api/auth/user/getUserById`, {
      headers: {
        Authorization: `${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const profileSetup = async (userDataFromSubmission) => {
  console.log(userDataFromSubmission, "userdata in the profile setup ==>");
  const address = JSON.stringify({
    state: userDataFromSubmission?.state,
    zipCode: userDataFromSubmission?.zipCode,
    country: userDataFromSubmission?.country,
    city: userDataFromSubmission?.country,
    streetAddress: userDataFromSubmission?.streetAddress,
    shippingAddress: userDataFromSubmission?.shippingAddress,
  });
  const userData = JSON.stringify({
    firstName: userDataFromSubmission?.firstName,
    lastName: userDataFromSubmission?.lastName,
    email: userDataFromSubmission?.email,
    phoneNumber: userDataFromSubmission?.phoneNumber,
  });
  // Create a FormData object
  const formData = new FormData();
  // Append user data to formData
  formData.append("address", address);
  formData.append("userData", userData);
  // Append profile picture file to formData
  if (userDataFromSubmission?.profilePic) {
    formData.append("profilePic", userDataFromSubmission?.profilePic);
  }
  try {
    const authToken = getAuthToken().replace(/"/g, "");
    const response = await axios.put(
      `${POST_URL}/api/auth/user/profile/setup`,
      formData,

      {
        headers: {
          Authorization: `${authToken}`,
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const changePassword = async (userData) => {
  try {
    const authToken = getAuthToken().replace(/"/g, "");
    const response = await axios.post(`${POST_URL}/api/auth/user/userChangepassword`,
    userData,
    {
      headers: {
        Authorization: `${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
