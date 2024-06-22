import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, BaseStyles } from "@primer/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BaseStyles>
        <RouterProvider router={router} />
      </BaseStyles>
    </ThemeProvider>
  </React.StrictMode>,
);
