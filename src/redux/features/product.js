import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const url link
const POST_URL = "https://e-commerce-qubi.vercel.app";
// Function to get the authorization token from local storage
const getAuthToken = () => {
  // Retrieve the token from local storage
  return localStorage.getItem('token');
};
// create Product
export const createProduct = createAsyncThunk("createProduct", async (data) => {
  try {
    const authToken = getAuthToken().replace(/"/g, ''); 
    const response = await axios.post(`${POST_URL}/api/Product/createProduct`,data,
    {
      headers: {
        Authorization: `${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

// read Product
export const FetchProducts = createAsyncThunk("showProduct", async (currentPage) => {
  try {
    const authToken = getAuthToken().replace(/"/g, ''); 
    // const { pageNumber, limit } = data;  // Destructure data object to get pageNumber and limit
    // const response = await axios.get(
    //   `${POST_URL}/api/Product/getAllProducts?pageNumber=${pageNumber}&limit=${limit}`
    // );
    // const response = await axios.get(`${POST_URL}/product/getAllProductsUser?pageNumber=${currentPage}&limit=12`,
    const response = await axios.get(`${POST_URL}/api/user/product/getAllProductsUser?pageNumber=1&limit=5`,
    {
      headers: {
        Authorization: `${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});
// delete Product
export const getSingleProduct = createAsyncThunk("getSingleProduct", async (id) => {
  try {
    const authToken = getAuthToken().replace(/"/g, ''); 
    const response = await axios.get(
      `${POST_URL}/api/Product/findProductById/${id}`,
      {
        headers: {
          Authorization: `${authToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
  
});

// update Product
export const updateProduct = createAsyncThunk("updateProduct", async (data) => {
  const ProductData={
    ProductId:data._id,
    ProductName:data.ProductName
  }
  try {
    const authToken = getAuthToken().replace(/"/g, ''); 
    const response = await axios.post(
      `${POST_URL}/api/Product/updateProduct`,
      ProductData,
      {
        headers: {
          Authorization: `${authToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

// delete Product
export const deleteProduct = createAsyncThunk("deleteProduct", async (id) => {
  try {
    const authToken = getAuthToken().replace(/"/g, ''); 
    const response = await axios.delete(
      `${POST_URL}/api/Product/deleteProduct/${id}`,
      {
        headers: {
          Authorization: `${authToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
  
});