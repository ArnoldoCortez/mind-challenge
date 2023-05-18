import MainLayout from "../layouts/MainLayout";
import ProfilePage from "../pages/Profile";
import UsersPage from "../pages/Users";
import AccountsPage from "../pages/Accounts";
import TeamLogsPage from "../pages/TeamLogs";
import UsersCreateUpdate from "../pages/UsersCreateUpdate";
import AccountsCreateUpdate from "../pages/AccountsCreateUpdate";
import AccountTeam from "../pages/AccountTeam";
import ErrorPage from "../pages/ErrorPage";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  errorElement: <ErrorPage />,
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
      path: "/accounts/:action",
      element: <AccountsCreateUpdate />,
    },
    {
      path: "/accounts/:id/:action",
      element: <AccountsCreateUpdate />,
    },
    {
      path: "/accounts/:id/team",
      element: <AccountTeam />,
    },
    {
      path: "/team-logs",
      element: <TeamLogsPage />,
    },
  ],
};

export default MainRoutes;
