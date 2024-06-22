import React, { useEffect } from "react";
import Login from "@components/Login";

const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = "Sign in to GitHub · GitHub";
  });

  return <Login />;
};

export default LoginPage;
