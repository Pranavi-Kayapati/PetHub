import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./LoginSingupPage/Signup";
import Login from "./LoginSingupPage/Login";
import ProductPage from "./ProductPage/ProductPage";
import Services from "./Service Page/Services";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/petPage" element={<ProductPage />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default AllRoutes;
