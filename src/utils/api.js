import axios from "axios";

export const fetchCategories = async () => {
    const { data } = await axios.get("/api/products/categories");
    return data;
};

export const fetchStores = async () => {
    const { data } = await axios.get("/api/products/stores");
    return data;
};

// TODO: implement get banner in the backend
/*
    export const fetchBanner = async () => {
        const { data } = await axios.get("/api/products/banners");
        return data;
    };
*/
