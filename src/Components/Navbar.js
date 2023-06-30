import React from "react";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

import Logo from "./UIElements/Logo";
import NavItem from "./NavItem";

const Navbar = () => {
  const isLoggedIn = useSelector((store) => store.Auth.isLoggedIn);
  const username = useSelector((store) => store.UserInfo.userInfo.username);
  return (
    <div className="basis-1/5 border-r-gray-200 border-r-[1px] h-screen flex flex-col py-2 px-8">
      <NavItem to="/">
        <Logo />
      </NavItem>
      {isLoggedIn && (
        <NavItem to="/home">
          <HomeIcon />
          <span>Home</span>
        </NavItem>
      )}
      {!isLoggedIn && (
        <NavItem to="/">
          <TagIcon />
          <span>Explore</span>
        </NavItem>
      )}
      {isLoggedIn && (
        <NavItem to="/explore">
          <TagIcon />
          <span>Explore</span>
        </NavItem>
      )}
      {isLoggedIn && (
        <NavItem to="/messages">
          <EmailIcon />
          <span>Messages</span>
        </NavItem>
      )}
      {isLoggedIn && (
        <NavItem to={`/user/${username}`}>
          <PersonIcon />
          <span>Profile</span>
        </NavItem>
      )}
    </div>
  );
};

export default Navbar;
