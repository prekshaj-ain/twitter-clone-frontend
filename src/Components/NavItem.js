import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <Link
      to={props.to}
      className=" py-2 px-2 w-fit text-lg flex items-center gap-3 rounded-full hover:bg-gray-200"
    >
      {props.children}
    </Link>
  );
};

export default NavItem;
