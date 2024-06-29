import React from "react";
import { useFilter } from "../contexts/FilterContext";

const SearchBar = () => {
    // Use custom hook to access state and dispatch function
    const { state, dispatch } = useFilter();

    // Function to handle changes in the search input
    const handleSearchChange = (e) => {
        dispatch({ type: "SET_SEARCH", payload: e.target.value });
    };

    return (
        <input
            type="text"
            value={state.search}
            placeholder="Search products..."
            onChange={handleSearchChange}
            className="rounded border border-gray-300 p-2 pl-10 outline-none"
            style={{
                borderRadius: "25px",
                borderColor: "#F28F3B",
                maxWidth: "100%",
                width: "100%",
                boxSizing: "border-box",
            }}
        />
    );
};

export default SearchBar;
