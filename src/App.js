import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FilterProvider } from './contexts/FilterContext';
import './styles/tailwind.css';
import Routing from "./routes/Routing";
import {BrowserRouter} from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <FilterProvider>
                <BrowserRouter>
                    <Routing />
                </BrowserRouter>
            </FilterProvider>
        </QueryClientProvider>
    );
};

export default App;
