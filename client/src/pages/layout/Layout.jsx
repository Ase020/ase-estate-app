import { Outlet, Navigate } from "react-router-dom";

import { Navbar } from "../../components";
import "./layout.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Layout() {
  return (
    <div className="layout">
      <div className="navBar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;

  return (
    <div className="layout">
      <div className="navBar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
