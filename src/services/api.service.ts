import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, AddUserBody, EditUserBody } from "./api.types";

const API_URL = import.meta.env.VITE_API_URL;

// Define a service using a base URL and expected endpoints
export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["users", "userById"],
  endpoints: (builder) => ({
    getUserById: builder.query<User, string>({
      query: (id) => `users/${id}`,
      providesTags: ["userById"],
    }),
    getUsers: builder.query<User[], void>({
      query: () => "users",
      providesTags: ["users"],
    }),
    addUser: builder.mutation<User, AddUserBody>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),
    editUser: builder.mutation<User, EditUserBody>({
      query: ({ id, ...body }) => ({
        url: `users/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useGetUsersQuery,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
} = apiService;
