import { useQuery } from "react-query";
import { fetchCategories, fetchStores } from "../utils/api";

export const useCategories = () => {
    return useQuery("categories", fetchCategories);
};

export const useStores = () => {
    return useQuery("stores", fetchStores);
};

// TODO: implement get banner in the backend
/*
    export const useBanners = () => {
        return useQuery("banners", fetchBanner);
    };
*/
