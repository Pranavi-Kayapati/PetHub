import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/LandingPage/Pages/Home"
import Signup from "./LoginSingupPage/Signup";
import Login from "./LoginSingupPage/Login";
import ProductPage from "./ProductPage/ProductPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/petPage" element={<ProductPage/>}/>
    </Routes>
  );
};

export default AllRoutes;
