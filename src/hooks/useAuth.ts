import { useMemo } from "react";
import { currentUserSelector } from "../store/auth/auth.selectors";
import { useAppSelector } from "../store/hooks";

export const useAuth = () => {
  const user = useAppSelector(currentUserSelector);

  return useMemo(() => ({ user }), [user]);
};
