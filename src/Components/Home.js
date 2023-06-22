import React from "react";
import { useSelector } from "react-redux";

import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import SidebarPublic from "./SidebarPublic";
import MainPublic from "./MainPublic";

const Home = () => {
  const isLoggedIn = useSelector((store) => store.Auth.isLoggedIn);
  return (
    <div className="flex basis-4/5">
      {isLoggedIn ? <MainContainer /> : <MainPublic />}
      {isLoggedIn ? <Sidebar /> : <SidebarPublic />}
    </div>
  );
};

export default Home;
