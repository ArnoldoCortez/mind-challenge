import MainLayout from "../layouts/MainLayout";
import ProfilePage from "../pages/Profile";
import UsersPage from "../pages/Users";
import AccountsPage from "../pages/Accounts";
import TeamLogsPage from "../pages/TeamLogs";
import UsersCreateUpdate from "../pages/UsersCreateUpdate";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <ProfilePage />,
    },
    {
      path: "/users",
      element: <UsersPage />,
    },
    {
      path: "/users/:action",
      element: <UsersCreateUpdate />,
    },
    {
      path: "/users/:id/:action",
      element: <UsersCreateUpdate />,
    },
    {
      path: "/accounts",
      element: <AccountsPage />,
    },
    {
      path: "/team-logs",
      element: <TeamLogsPage />,
    },
  ],
};

export default MainRoutes;
