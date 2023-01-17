import React from "react";
import "./index.css";
import { additionalData } from "../../assets/additionalData";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="header_navigationBlock">
      {additionalData.navigationsLink.map((item) => (
        <NavLink
          to={item.toWhere}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navigation;
