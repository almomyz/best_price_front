import { useQuery } from 'react-query';
import axios from 'axios';

const fetchFilters = async () => {
    const [brands, categories, stores] = await Promise.all([
        axios.get('/api/products/brands'),
        axios.get('/api/products/categories'),
        axios.get('/api/products/stores'),
    ]);
    return {
        brands: brands.data,
        categories: categories.data,
        stores: stores.data,
    };
};

export const useFilters = () => {
    return useQuery('filters', fetchFilters);
};
