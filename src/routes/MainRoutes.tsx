import MainLayout from "../layouts/MainLayout";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <h1>Main Content</h1>,
    },
  ],
};

export default MainRoutes;
