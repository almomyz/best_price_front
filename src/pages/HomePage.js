import React from "react";
import { useCategories, useStores } from "../hooks/useFetch";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeSlider from "../components/HomeSlider";
import CategoryCard from "../components/CategoryCard";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../contexts/FilterContext";
import { BASE_URL_IMAGE } from "../utils/constants";

const HomePage = () => {
    // Query hooks for data fetching
    const { data: categories, isLoading: categoriesLoading } = useCategories();
    const { data: stores, isLoading: storesLoading } = useStores();

    // State and dispatch from context
    // for store section
    const { state, dispatch } = useFilter();
    const navigate = useNavigate();

    // Handler function
    const handleStoreClick = (storeId) => {
        dispatch({ type: "SET_SELECTED_STORES", payload: [storeId] });
        navigate("/product");
    };

    // Check if any data is loading
    if (
        //bannersLoading ||
        categoriesLoading ||
        storesLoading
    ) {
        return <div>Loading...</div>;
    }

    // Flatten all SubcategoriesLevel2 with images into a single array
    const subcategories = categories.flatMap((category) =>
        category.SubcategoriesLevel1.flatMap((subcategory1) =>
            subcategory1.SubcategoriesLevel2.filter(
                (subcategory2) => subcategory2.Image,
            ),
        ),
    );

    return (
        <div className="font-heading">
            {/* Header */}
            <Header />

            {/* Main Banner */}
            <HomeSlider />

            {/* Main Categories */}
            <section className="container mx-auto px-4 py-8">
                <h2 className="mb-8 text-2xl text-primary-green">
                    Main Categories
                </h2>

                {/* category cards */}
                <div className="grid grid-cols-1 gap-4 max-md:mx-[5.6rem] max-sm:mx-1 md:grid-cols-2 lg:grid-cols-3">
                    {subcategories.map((subcategory, index) => (
                        <CategoryCard
                            key={subcategory.id}
                            subcategory={subcategory}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            {/* Main Stores */}
            <section className="container mx-auto bg-white px-4 py-8">
                <div className="mb-8 text-center text-2xl text-primary-green md:text-start">
                    Main Stores
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {stores.map((store) => (
                        <div
                            key={store.id}
                            onClick={() => handleStoreClick(store.id)}
                            className="cursor-pointer"
                        >
                            <div className="flex h-full flex-col items-center">
                                <div className="mb-4 h-32 w-52 rounded-xl border border-neutral-200 bg-white p-4 shadow-md">
                                    <img
                                        className="h-full w-full object-contain"
                                        src={BASE_URL_IMAGE + store.Logo}
                                        alt={store.Name}
                                    />
                                </div>
                                <div className="text-center font-heading text-xl font-medium leading-relaxed text-body-font">
                                    {store.Name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePage;
