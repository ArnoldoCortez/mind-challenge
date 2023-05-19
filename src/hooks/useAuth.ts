import { currentUserSelector } from "../store/auth/auth.selectors";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { reset, setCredentials } from "../store/auth/auth.slice";
import { useLoginMutation } from "../services/api.service";
import { LoginRequest } from "../services/api.types";
import { UserRoles } from "../constants/user.constants";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(currentUserSelector);
  const isAuthenticated = user !== null;
  const isAdmin = user?.role === UserRoles.ADMIN;
  const isSuperAdmin = user?.role === UserRoles.SUPER_ADMIN;

  const [login, { isLoading }] = useLoginMutation();

  const signIn = async (data: LoginRequest) => {
    const credentials = await login(data).unwrap();
    dispatch(setCredentials(credentials));
  };

  const signOut = () => {
    dispatch(reset());
  };

  return {
    user,
    signIn,
    signOut,
    isLoading,
    isAuthenticated,
    isAdmin,
    isSuperAdmin,
  };
};
