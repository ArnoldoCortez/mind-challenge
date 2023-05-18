import { useRoutes } from "react-router-dom";

import MainRoutes from "./MainRoutes";
import LoginRoutes from "./LoginRoutes";

function Routes() {
  return useRoutes([MainRoutes, LoginRoutes]);
}

export default Routes;
