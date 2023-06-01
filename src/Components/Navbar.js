import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

import Logo from "./Logo";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="basis-1/5 border-r-2 h-screen flex flex-col py-2 px-8">
      <NavItem to="/">
        <Logo />
      </NavItem>
      <NavItem to="/">
        <HomeIcon />
        <span>Home</span>
      </NavItem>
      <NavItem to="/explore">
        <TagIcon />
        <span>Explore</span>
      </NavItem>
      <NavItem to="/messages">
        <PersonIcon />
        <span>Messages</span>
      </NavItem>
      <NavItem to={`/preksha`}>
        <EmailIcon />
        <span>Profile</span>
      </NavItem>
      <Link></Link>
    </div>
  );
};

export default Navbar;
