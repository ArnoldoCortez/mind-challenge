import { RootState } from "../store";

export const currentUserSelector = (state: RootState) => state.auth.user;
