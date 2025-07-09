import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
    id: number;
    first_name: string;
    avatar: string;
}

interface ProductResponse {
    data: Product[];
}

export const productApi = createApi({
    reducerPath: 'productApi', 
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/'}),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductResponse, void>({
            query: () => ({
                url: 'products',
                method: 'GET',
            })
        })
    })
});

export const { useGetProductsQuery } = productApi;