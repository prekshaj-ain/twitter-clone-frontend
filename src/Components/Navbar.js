import React from "react";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";

import Logo from "./UIElements/Logo";
import NavItem from "./NavItem";
import useLogout from "./Utils/Hooks/useLogout";

const Navbar = () => {
  const isLoggedIn = useSelector((store) => store.Auth.isLoggedIn);
  const username = useSelector((store) => store.UserInfo.userInfo.username);
  const navigate = useNavigate();
  const logout = useLogout();
  const handleLogout = async () => {
    await logout();
    navigate("/tweets");
  };
  return (
    <div className="basis-1/5 border-r-gray-200 border-r-[1px] h-screen flex flex-col py-2 px-8 sticky top-0">
      <div>
        <Logo />
      </div>

      {isLoggedIn && (
        <NavItem to="/home">
          <HomeIcon />
          <span>Home</span>
        </NavItem>
      )}
      {!isLoggedIn && (
        <NavItem to="/tweets">
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
      {isLoggedIn && (
        <button
          className=" py-2 px-2 my-10 text-lg rounded-full text-white bg-black hover:bg-gray-700 hover:shadow-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
