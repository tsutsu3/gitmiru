import React, { useEffect } from "react";
import AppHeader from "@components/AppHeader";

const DashboardPage: React.FC = () => {
  useEffect(() => {
    document.title = "GitHub";
  });

  return (
    <>
      <AppHeader />
    </>
  );
};

export default DashboardPage;
