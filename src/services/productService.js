import axios from "axios";

const fetchProducts = async (filters, page, sortBy, order) => {
    const {
        selectedBrands,
        selectedCategories,
        selectedStores,
        priceRange,
        search,
    } = filters;

    const res = await axios.get("/api/products", {
        params: {
            brands: selectedBrands,
            categories: selectedCategories,
            stores: selectedStores,
            priceRange,
            search,
            page,
            limit: 10,
            sortBy,
            order,
        },
    });
    return res.data;
};

export { fetchProducts };
