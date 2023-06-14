import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <NavLink
      to={props.to}
      className=" py-2 px-2 w-fit text-lg flex items-center gap-3 rounded-full hover:bg-gray-200"
    >
      {({ isActive }) => (
        <span className={isActive ? "font-bold" : ""}>{props.children}</span>
      )}
    </NavLink>
  );
};

export default NavItem;
