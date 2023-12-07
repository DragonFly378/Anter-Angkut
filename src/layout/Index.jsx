import React from "react";
import { useLocation } from "react-router-dom";
import Topbar from "../components/Topbar/Index";
import Bottombar from "../components/Bottombar";

const Layout = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Topbar active={path} />
      {children}
      <Bottombar />
    </>
  );
};

export default Layout;
