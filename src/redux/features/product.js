import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const url link
const POST_URL = "https://e-commerce-qubi.vercel.app";
// Function to get the authorization token from local storage
const getAuthToken = () => {
  // Retrieve the token from local storage
  return localStorage.getItem("token");
};
// create Product
export const createProduct = createAsyncThunk("createProduct", async (data) => {
  try {
    const authToken = getAuthToken().replace(/"/g, "");
    const response = await axios.post(
      `${POST_URL}/api/Product/createProduct`,
      data,
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

// read Product
// Define the asynchronous thunk to fetch products
export const FetchProducts = createAsyncThunk(
  'products/fetch',
  async (productData) => {
    try {
      const { currentPage, categoryIds, brandIds } = productData;

      // Set default limit
      const limit = 10;

      // Build the API endpoint based on parameters
      let endpoint = `${POST_URL}/api/user/product/getAllProductsUser?pageNumber=${currentPage}&limit=${limit}`;

      if (categoryIds?.length > 0) {
        const sortedCategories = categoryIds.join(',');
        endpoint += `&categoryIds=${sortedCategories}`;
      } else if (brandIds?.length > 0) {
        const sortedBrands = brandIds.join(',');
        endpoint += `&brandIds=${sortedBrands}`;
      }

      // Make the API request
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      // Handle errors gracefully
      throw error;
    }
  }
);
// delete Product
export const getSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (id) => {
    try {
      // const authToken = getAuthToken().replace(/"/g, '');
      const response = await axios.get(
        `${POST_URL}/api/user/product/findProductUserById/${id}`
        // {
        //   headers: {
        //     Authorization: `${authToken}`,
        //   },
        // }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// update Product
export const updateProduct = createAsyncThunk("updateProduct", async (data) => {
  const ProductData = {
    ProductId: data._id,
    ProductName: data.ProductName,
  };
  try {
    const authToken = getAuthToken().replace(/"/g, "");
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
    const authToken = getAuthToken().replace(/"/g, "");
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

export const FetchCategory = createAsyncThunk(
  "showCategory",
  async (currentPage) => {
    try {
      // const response = await axios.get(`${POST_URL}/product/getAllProductsUser?pageNumber=${currentPage}&limit=12`,
      const response = await axios.get(
        `${POST_URL}/api/user/product/getAllUserCategorys?pageNumber=${currentPage}&limit=5`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const FetchBrand = createAsyncThunk("showBrand", async (currentPage) => {
  try {
    // const response = await axios.get(`${POST_URL}/product/getAllProductsUser?pageNumber=${currentPage}&limit=12`,
    const response = await axios.get(
      `${POST_URL}/api/user/product/getAllUserBrands?pageNumber=${currentPage}&limit=5`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});
