import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  User,
  AddUserBody,
  EditUserBody,
  Account,
  AddAccountBody,
  EditAccountBody,
} from "./api.types";

const API_URL = import.meta.env.VITE_API_URL;

// Define a service using a base URL and expected endpoints
export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["users", "userById", "accounts", "accountById"],
  endpoints: (builder) => ({
    // ---USERS---
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
    // ---ACCOUNTS---
    getAccountById: builder.query<Account, string>({
      query: (id) => `accounts/${id}`,
      providesTags: ["accountById"],
    }),
    getAccounts: builder.query<Account[], void>({
      query: () => "accounts",
      providesTags: ["accounts"],
    }),
    addAccount: builder.mutation<Account, AddAccountBody>({
      query: (body) => ({
        url: "accounts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["accounts"],
    }),
    editAccount: builder.mutation<Account, EditAccountBody>({
      query: ({ id, ...body }) => ({
        url: `accounts/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["accounts"],
    }),
    deleteAccount: builder.mutation<void, string>({
      query: (id) => ({
        url: `accounts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["accounts"],
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
  useGetAccountByIdQuery,
  useLazyGetAccountByIdQuery,
  useGetAccountsQuery,
  useAddAccountMutation,
  useEditAccountMutation,
  useDeleteAccountMutation,
} = apiService;
