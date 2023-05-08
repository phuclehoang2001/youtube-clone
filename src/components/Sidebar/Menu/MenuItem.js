import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
const MenuItem = ({ title, to, icon, activeIcon }) => {
  return (
    <NavLink className="menu_item" to={to}>
      <span className={"icon"}>{icon}</span>
      <span className={"active_icon"}>{activeIcon}</span>
      <span className={"title"}>{title}</span>
    </NavLink>
  );
};

export default MenuItem;
