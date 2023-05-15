import MainLayout from "../layouts/MainLayout";
import ProfilePage from "../pages/Profile";
import UsersPage from "../pages/Users";
import AccountsPage from "../pages/Accounts";
import TeamLogsPage from "../pages/TeamLogs";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <ProfilePage />,
    },
    {
      path: "/users",
      element: <UsersPage />,
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
