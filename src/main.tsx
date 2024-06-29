import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, BaseStyles } from "@primer/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Login";

const basename = (() => {
  if (import.meta.env.PROD) {
    if (import.meta.env.VITE_GITHUB_PAGES_REPO_NAME) {
      return `/${import.meta.env.VITE_GITHUB_PAGES_REPO_NAME}`;
    }
    return "/";
  }
})();

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <NotFound />,
    },
  ],
  {
    basename: basename,
  },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BaseStyles>
        <RouterProvider router={router} />
      </BaseStyles>
    </ThemeProvider>
  </React.StrictMode>,
);
