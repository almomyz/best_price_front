import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsListPage from "../pages/ProductsListPage";
import ProductDetails from "../pages/ProductDetails";
import HomePage from "../pages/HomePage";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductsListPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
}

export default Routing;
