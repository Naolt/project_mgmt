import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const exportApi = createApi({
  reducerPath: "exportApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/export",
  }),
  endpoints: (builder) => ({
    export: builder.query({
      query: (data) => ({
        url: `/`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useExportQuery } = exportApi;
