import React from "react";
import { ThemeProvider, BaseStyles } from "@primer/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "@pages/NotFound";
import LoginPage from "@pages/Login";
import DashboardPage from "@pages/Dashboard";
import PrivateRoute from "@components/PrivateRoute";
import PublicRoute from "@components/PublicRoute";
import { basename } from "@constants/app";

import { AuthProvider } from "@context/auth-context";

const router = createBrowserRouter(
  [
    {
      path: "/login",
      element: <PublicRoute />,
      children: [{ path: "/login", element: <LoginPage /> }],
      errorElement: <NotFound />,
    },
    {
      path: "/",
      element: <PrivateRoute />,
      children: [{ path: "/", element: <DashboardPage /> }],
      errorElement: <NotFound />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: basename,
  },
);

const App: React.FC = () => (
  <AuthProvider>
    <ThemeProvider>
      <BaseStyles>
        <RouterProvider router={router} />
      </BaseStyles>
    </ThemeProvider>
  </AuthProvider>
);

export default App;
