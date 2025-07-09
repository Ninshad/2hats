import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface AuthResponse {
    token: string;
}

interface AuthRequest {
    email: string;
    password: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/'}),
    endpoints: (builder) => ({
        loginUser: builder.mutation<AuthResponse, AuthRequest>({
            query: (data) => ({
                url: 'login',
                method: 'POST',
                body: data
            })
        }),
        registerUser: builder.mutation<AuthResponse, AuthRequest>({
            query: (credentials) => ({
                url: 'register', 
                method: 'POST',
                body: credentials
            })
        })
    })
})

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;