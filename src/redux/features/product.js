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
export const FetchProducts = createAsyncThunk(
  "showProduct",
  async (productData) => {
    try {
      const { currentPage, categoryIds, brandIds, priceMax, priceMin } =
        productData;
      console.log(productData, "productData in FetchProducts");
      const category = categoryIds?.categoryIds;
      const sortedCategory = category?.join(",");
      const brand = brandIds?.brandIds;
      const sortedBrand = brand?.join(",");
      
      if (sortedCategory && currentPage) {
        const response = await axios.get(
          `${POST_URL}/api/user/product/getAllProductsUser?pageNumber=${currentPage}&limit=5&categoryIds=${sortedCategory}`
        );
        return response.data;
      } else if (sortedBrand && currentPage) {
        const response = await axios.get(
          `${POST_URL}/api/user/product/getAllProductsUser?pageNumber=${currentPage}&limit=5&brandIds=${sortedBrand}`
        );
        return response.data;
      } else if (priceMax) {
        const response = await axios.get(
          `${POST_URL}/api/user/product/getAllProductsUser?pageNumber=${currentPage}&limit=5&priceMax=${priceMax}`
        );
        return response.data;
      } else if (priceMin) {
        const response = await axios.get(
          `${POST_URL}/api/user/product/getAllProductsUser?pageNumber=${currentPage}&limit=5&priceMax=${priceMin}`
        );
        return response.data;
      } 
    
      else {
        const response = await axios.get(
          `${POST_URL}/api/user/product/getAllProductsUser?pageNumber=${currentPage}&limit=10`
        );
        return response.data;
      }
    } catch (error) {
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
