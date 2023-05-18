import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  User,
  AddUserBody,
  EditUserBody,
  Account,
  AddAccountBody,
  EditAccountBody,
  TeamMovement,
  TeamMovementBody,
  RemoveUserFromAccount,
  LoginRequest,
  LoginResponse,
} from "./api.types";
import { RootState } from "../store/store";

const API_URL = import.meta.env.VITE_API_URL;

// Define a service using a base URL and expected endpoints
export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["users", "userById", "accounts", "accountById", "movements"],
  endpoints: (builder) => ({
    //---AUTH---
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "signin",
        method: "POST",
        body: credentials,
      }),
    }),
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
    // ---TEAM MOVEMENTS---
    getTeamMovements: builder.query<TeamMovement[], void>({
      query: () => "movements",
      providesTags: ["movements"],
    }),
    addUserToAccount: builder.mutation<TeamMovement, TeamMovementBody>({
      query: (body) => ({
        url: "movements",
        method: "POST",
        body,
      }),
      invalidatesTags: ["accountById"],
    }),
    removeUserFromAccount: builder.mutation<void, RemoveUserFromAccount>({
      query: (body) => ({
        url: "removeFromAccount",
        method: "POST",
        body,
      }),
      invalidatesTags: ["accountById", "movements"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginMutation,
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
  useGetTeamMovementsQuery,
  useAddUserToAccountMutation,
  useRemoveUserFromAccountMutation,
} = apiService;
