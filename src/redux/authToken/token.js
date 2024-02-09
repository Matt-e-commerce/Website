// get the token from the local host to authenticate the user

const getAuthToken = () => {
    try {
      const token = localStorage.getItem("token");
      return token ? token.replace(/"/g, "") : null;
    } catch (error) {
      console.error("Error retrieving authentication token:", error);
      return null;
    }
  };
  
  export const authToken = getAuthToken();
  