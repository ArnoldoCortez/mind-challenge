import { useRoutes } from "react-router-dom";

import MainRoutes from "./MainRoutes";

function Routes() {
  return useRoutes([MainRoutes]);
}

export default Routes;
