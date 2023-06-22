import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <NavLink
      to={props.to}
      className=" py-2 px-2 w-fit text-lg rounded-full hover:bg-gray-200"
    >
      {({ isActive }) => (
        <span
          className={
            isActive
              ? "font-bold flex items-center gap-3"
              : "flex items-center gap-3"
          }
        >
          {props.children}
        </span>
      )}
    </NavLink>
  );
};

export default NavItem;
