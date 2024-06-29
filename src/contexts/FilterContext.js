import React, { createContext, useReducer, useContext } from "react";

// Create a context to hold the state and dispatch function
const FilterContext = createContext();

/*
    Reducer function to manage state changes
    its takes the current state and an action 
    and returns a new state based on the action type
*/
const filterReducer = (state, action) => {
    switch (action.type) {
        case "SET_BRANDS":
            return { ...state, brands: action.payload };
        case "SET_SELECTED_BRANDS":
            return { ...state, selectedBrands: action.payload, page: 1 };
        case "SET_CATEGORIES":
            return { ...state, categories: action.payload };
        case "SET_SELECTED_CATEGORIES":
            return { ...state, selectedCategories: action.payload, page: 1 };
        case "SET_STORES":
            return { ...state, stores: action.payload };
        case "SET_SELECTED_STORES":
            return { ...state, selectedStores: action.payload, page: 1 };
        case "SET_PRICE_RANGE":
            return { ...state, priceRange: action.payload, page: 1 };
        case "SET_SEARCH":
            return { ...state, search: action.payload, page: 1 };
        case "SET_PAGE":
            return { ...state, page: action.payload };
        default:
            return state;
    }
};

// initialize the state object
const initialState = {
    brands: [],
    selectedBrands: [],
    categories: [],
    selectedCategories: [],
    stores: [],
    selectedStores: [],
    // TODO: get the initial value form the api
    priceRange: [0,1000000],
    search: "",
    page: 1,
};

// Provider component to provide state and dispatch function to children
export const FilterProvider = ({ children }) => {

    // Use useReducer hook to manage state, It accepts a reducer function and an initial state
    const [state, dispatch] = useReducer(filterReducer, initialState);

    // Provide state and dispatch function to children components via context
    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

// Custom hook to access state and dispatch function from context
export const useFilter = () => useContext(FilterContext);
