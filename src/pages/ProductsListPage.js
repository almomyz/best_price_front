import React from "react";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductsListPage = () => {
    return (
        <div>
            <Header />

            <div className="mx-6 sm:ms-0">
                <div className="mt-6 grid grid-cols-12 gap-4 max-sm:mx-4">
                    <Filters />
                    <ProductList />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductsListPage;
