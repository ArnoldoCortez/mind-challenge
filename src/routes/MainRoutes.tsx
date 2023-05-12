import MainLayout from "../layouts/MainLayout";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <h1>Profile</h1>,
    },
    {
      path: "/users",
      element: <h1>Users</h1>,
    },
    {
      path: "/accounts",
      element: <h1>Accounts</h1>,
    },
    {
      path: "/logs",
      element: <h1>Logs</h1>,
    },
  ],
};

export default MainRoutes;
