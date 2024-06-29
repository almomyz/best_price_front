import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../services/productService";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { useFilter } from "../contexts/FilterContext";

const ProductList = () => {
    const { state, dispatch } = useFilter();
    const [sortBy, setSortBy] = useState("id");
    const [order, setOrder] = useState("ASC");

    const { data, isLoading, error } = useQuery(["products", state], () =>
        fetchProducts(state, state.page, sortBy, order),
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handlePageChange = (newPage) => {
        dispatch({ type: "SET_PAGE", payload: newPage });
    };

    return (
        // <div className="col-span-12 md:col-span-8">
        <div className="col-span-9 max-md:col-span-8 max-sm:col-span-12">
            {/* <div className="grid grid-cols-2 gap-2"> */}
            {/* <div className="max-md:grid-cols-2 max-lg:grid-cols-3"> */}
            <div className="gap-x-4 gap-y-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {data.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="mt-4">
                <Pagination
                    currentPage={state.page}
                    totalPages={Math.ceil(data.total / 10)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ProductList;
