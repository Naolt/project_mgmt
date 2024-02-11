import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/auth/",
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url: `login`,
        method: "POST",
        body: data, // Pass the data object directly
        headers: {
          "content-type": "application/json",
        },
      }),
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: `register`,
        method: "POST",
        body: data, // Pass the data object directly
        headers: {
          "content-type": "application/json",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignInMutation, useSignUpMutation } = authApi;
