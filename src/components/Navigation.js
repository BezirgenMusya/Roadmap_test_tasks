import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigationBlock">
      <NavLink to="/">Check React Hook From</NavLink>
      <NavLink to="/formik">Check Formik</NavLink>
    </div>
  );
};

export default Navigation;
