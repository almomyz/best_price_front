import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchCategories = async () => {
    const { data } = await axios.get("/api/products/categories");
    return data;
};

export default function Navigation() {
    const { data: categories, isLoading: categoriesLoading } = useQuery(
        ["categories"],
        fetchCategories,
    );

    const [expandedCategory, setExpandedCategory] = useState(1);

    if (categoriesLoading) {
        return <div>Loading...</div>;
    }

    const handleCategoryClick = (id) => {
        setExpandedCategory(expandedCategory === id ? null : id);
    };

    return (
        <div className="flex space-x-10">
            <a href="/" className="text-primary-orange hover:underline">
                Home
            </a>

            <a href="/deals" className="text-gray-600 hover:underline">
                Deals & Offers
            </a>

            {/* All categories */}
            <div className="relative">
                <div className="flex items-center justify-center">
                    <button
                        className="text-gray-600 hover:underline me-1"
                        // null
                        onClick={() => handleCategoryClick(0)}
                    >
                        Categories{" "}
                    </button>

                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-gray-600 rotate-0 transition-all duration-500 group-hover:rotate-180"
                        height="1.2rem"
                        width="1.2rem"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                    </svg>
                </div>
                <div
                    style={{ zIndex: "2" }}
                    className={`absolute mt-2 w-48 rounded border bg-white shadow-lg ${
                        expandedCategory === null ? "block" : "hidden"
                    }`}
                >
                    {categories.map((category) => (
                        <div key={category.id}>
                            <button
                                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                {category.Name}
                            </button>
                            <div
                                className={`pl-4 ${
                                    expandedCategory === category.id
                                        ? "block"
                                        : "hidden"
                                }`}
                            >
                                {category.Subcategories &&
                                    category.Subcategories.map((sub) => (
                                        <a
                                            key={sub.id}
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            {sub.Name}
                                        </a>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <a href="/stores" className="text-gray-600 hover:underline">
                Stores
            </a>
            <a href="/about" className="text-gray-600 hover:underline">
                About Us
            </a>
        </div>
    );
}
