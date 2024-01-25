// App.js
import React from "react";
import "./index.css";
import Home from "../src/Components/Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Loginscreen/Loginform";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer";
import Forgotpassword from "./Components/Pages/Forgotscreen/Forgotpassword";
import Securitypage from "./Components/Pages/Otpscreen/Securty";
import AboutPage from "./Components/Pages/Aboutus/About";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../src/Components/Theme/Theme";
import Contactpage from "../src/Components/Pages/ContactUs/Contact";
import Singleproduct from "../src/Components/Pages/Singleproduct/Singleproduct";
import Productpage from "../src/Components/Pages/Product/Product";
import Shoppingcartpage from "../src/Components/Pages/Shippingcart/Shippingcart";
import Orderhistory from "../src/Components/Pages/Orderhistory/Orderhistory";
import Editprofile from "../src/Components/Pages/Editprofile/Editprofile";
import Forgotemail from "../src/Components/Pages/Forgotpassword-2/Forgot-2";
import Changepassword from "../src/Components/Pages/Changepassword/Changepassword";
import PrivateRoute from "./Route/PrivateRoute";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />
            <Route path="/forgotemail" element={<Forgotemail />} />
            <Route path="/securitypage" element={<Securitypage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/product" element={<Productpage />} />
            <Route path="/singleproduct" element={<Singleproduct />} />

            {/* private routes start from here*/}
            <Route
              path="/editprofile"
              element={<PrivateRoute element={<Editprofile />} />}
            />
            <Route
              path="/changepassword"
              element={<PrivateRoute element={<Changepassword />} />}
            />
            <Route
              path="/orderhistory"
              element={<PrivateRoute element={<Orderhistory />} />}
            />
            <Route
              path="/shoppingcartpage"
              element={<PrivateRoute element={<Shoppingcartpage />} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
