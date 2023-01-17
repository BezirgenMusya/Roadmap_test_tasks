import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div style={{ background: "red" }} className="header_navigationBlock">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activeLink" : null)}
      >
        Check React Hook From
      </NavLink>

      <NavLink
        to="/formik"
        className={({ isActive }) => (isActive ? "activeLink" : null)}
      >
        Check Formik
      </NavLink>
    </div>
  );
};

export default Navigation;
