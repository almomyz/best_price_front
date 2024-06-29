import React, { useEffect, useState } from "react";
import { useFilters } from "../hooks/useFilters";
import { useFilter } from "../contexts/FilterContext";
import MultiSlider from "./MultiSlider";

const Filters = () => {
    const { state, dispatch } = useFilter();
    const { data, isLoading, error } = useFilters();

    // for accordant state
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [isBrandOpen, setIsBrandOpen] = useState(true);
    const [isStoreOpen, setIsStoreOpen] = useState(true);
    const [isPriceOpen, setIsPriceOpen] = useState(true);

    const toggleCategory = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    const toggleBrand = () => {
        setIsBrandOpen(!isBrandOpen);
    };

    const toggleStore = () => {
        setIsStoreOpen(!isStoreOpen);
    };

    const togglePrice = () => {
        setIsPriceOpen(!isPriceOpen);
    };

    useEffect(() => {
        if (data) {
            dispatch({ type: "SET_BRANDS", payload: data.brands });
            dispatch({ type: "SET_CATEGORIES", payload: data.categories });
            dispatch({ type: "SET_STORES", payload: data.stores });
        }
    }, [data, dispatch]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleBrandChange = (brandId) => {
        const newSelectedBrands = state.selectedBrands.includes(brandId)
            ? state.selectedBrands.filter((id) => id !== brandId)
            : [...state.selectedBrands, brandId];
        dispatch({ type: "SET_SELECTED_BRANDS", payload: newSelectedBrands });
    };

    const handleCategoryChange = (categoryId) => {
        const newSelectedCategories = state.selectedCategories.includes(
            categoryId,
        )
            ? state.selectedCategories.filter((id) => id !== categoryId)
            : [...state.selectedCategories, categoryId];
        dispatch({
            type: "SET_SELECTED_CATEGORIES",
            payload: newSelectedCategories,
        });
    };

    const handleStoreChange = (storeId) => {
        const newSelectedStores = state.selectedStores.includes(storeId)
            ? state.selectedStores.filter((id) => id !== storeId)
            : [...state.selectedStores, storeId];
        dispatch({ type: "SET_SELECTED_STORES", payload: newSelectedStores });
    };

    const handlePriceRangeChange = (newRange) => {
        dispatch({ type: "SET_PRICE_RANGE", payload: newRange });
    };

    return (
        // <aside className="col-span-3 hidden md:block lg:col-span-4">
        <aside className="hidden col-span-3 max-md:col-span-4 md:block">
            {/* price filter */}
            <div className="mb-4 rounded-md border p-2">
                <ul className="mb-4 p-2 pb-0 text-body-font">
                    <li
                        className="text-blue mb-2 flex cursor-pointer items-center justify-between font-semibold"
                        onClick={togglePrice}
                    >
                        <span className="text-[17px]">Price</span>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="rotate-180"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                        </svg>
                    </li>

                    <div
                        className={`transition-max-height overflow-hidden duration-500 ${isPriceOpen ? "max-h-screen" : "max-h-0"}`}
                    >
                        {/* [1189, 5411] */}
                        <MultiSlider
                            range={[state.priceRange[0], state.priceRange[1]]}
                            onChange={handlePriceRangeChange}
                        />
                    </div>
                </ul>
            </div>

            {/* new filter */}
            {/* category filter */}
            <ul className="pb-0 text-zinc-500">
                <li className="mb-4 rounded-md border p-2">
                    <ul className="p-2 pb-2 text-body-font">
                        <li
                            className="text-blue mb-3 flex cursor-pointer items-center justify-between border-b pb-2 font-semibold"
                            onClick={toggleCategory}
                        >
                            <span className="text-[17px]">Category</span>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className={`transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : ""}`}
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                            </svg>
                        </li>

                        <div
                            className={`transition-max-height overflow-hidden duration-500 ${isCategoryOpen ? "max-h-screen" : "max-h-0"}`}
                        >
                            {data.categories.map((category) => (
                                <li
                                    key={category.id}
                                    className="mb-3 flex items-center hover:text-primary-green"
                                >
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 cursor-pointer rounded border"
                                        value={category.id}
                                        checked={state.selectedCategories.includes(
                                            category.id,
                                        )}
                                        onChange={() =>
                                            handleCategoryChange(category.id)
                                        }
                                    />
                                    <label
                                        htmlFor={category.id}
                                        className="mx-2 line-clamp-1 cursor-pointer"
                                    >
                                        {category.Name}
                                    </label>
                                </li>
                            ))}
                        </div>
                    </ul>
                </li>
            </ul>

            {/* brand filter */}
            <ul className="pb-0 text-zinc-500">
                <li className="mb-4 rounded-md border p-2">
                    <ul className="p-2 text-body-font">
                        <li
                            className="text-blue mb-3 flex cursor-pointer items-center justify-between font-semibold"
                            onClick={toggleBrand}
                        >
                            <span className="text-[17px]">Brand</span>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className={`transition-transform duration-300 ${isBrandOpen ? "rotate-180" : ""}`}
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                            </svg>
                        </li>

                        <div
                            className={`transition-max-height overflow-hidden duration-500 ${isBrandOpen ? "max-h-fit" : "max-h-0"}`}
                        >
                            {data.brands.map((brand) => (
                                <li
                                    key={brand.id}
                                    className="mb-3 flex items-center hover:text-primary-green"
                                >
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 cursor-pointer rounded border"
                                        id={brand.id}
                                        value={brand.id}
                                        checked={state.selectedBrands.includes(
                                            brand.id,
                                        )}
                                        onChange={() =>
                                            handleBrandChange(brand.id)
                                        }
                                    />
                                    <label
                                        htmlFor={brand.id}
                                        className="mx-2 cursor-pointer"
                                    >
                                        {brand.Name}
                                    </label>
                                </li>
                            ))}
                        </div>
                    </ul>
                </li>
            </ul>

            {/* stores filter */}
            <ul className="pb-0 text-zinc-500">
                <li className="mb-4 rounded-md border p-2">
                    <ul className="p-2 text-body-font">
                        <li
                            className="text-blue mb-3 flex cursor-pointer items-center justify-between font-semibold"
                            onClick={toggleStore}
                        >
                            <span className="text-[17px]">Store</span>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className={`transition-transform duration-300 ${isStoreOpen ? "rotate-180" : ""}`}
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                            </svg>
                        </li>

                        <div
                            className={`transition-max-height overflow-hidden duration-500 ${isStoreOpen ? "max-h-screen" : "max-h-0"}`}
                        >
                            {data.stores.map((store) => (
                                <li
                                    key={store.id}
                                    className="mb-3 flex items-center hover:text-primary-green"
                                >
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 cursor-pointer rounded border"
                                        id={store.id}
                                        value={store.id}
                                        checked={state.selectedStores.includes(
                                            store.id,
                                        )}
                                        onChange={() =>
                                            handleStoreChange(store.id)
                                        }
                                    />
                                    <label
                                        htmlFor={store.id}
                                        className="mx-2 cursor-pointer"
                                    >
                                        {store.Name}
                                    </label>
                                </li>
                            ))}
                        </div>
                    </ul>
                </li>
            </ul>

            {/* stores filter */}
        </aside>
    );
};

export default Filters;
