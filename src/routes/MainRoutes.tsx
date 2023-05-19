import { lazy, Suspense } from "react";

const MainLayout = lazy(async () => await import("../layouts/MainLayout"));
const ProfilePage = lazy(async () => await import("../pages/Profile"));
const UsersPage = lazy(async () => await import("../pages/Users"));
const AccountsPage = lazy(async () => await import("../pages/Accounts"));
const TeamLogsPage = lazy(async () => await import("../pages/TeamLogs"));
const UsersCreateUpdate = lazy(
  async () => await import("../pages/UsersCreateUpdate")
);
const AccountsCreateUpdate = lazy(
  async () => await import("../pages/AccountsCreateUpdate")
);
const AccountTeam = lazy(async () => await import("../pages/AccountTeam"));
const ErrorPage = lazy(async () => await import("../pages/ErrorPage"));

const MainRoutes = {
  path: "/",
  element: (
    <Suspense fallback={<>Loading...</>}>
      <MainLayout />
    </Suspense>
  ),
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
