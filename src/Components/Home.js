import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import SidebarPublic from "./SidebarPublic";
import MainPublic from "./MainPublic";
import { getUserById } from "./Utils/Apicalls/userInfoApi";

const Home = () => {
  const isLoggedIn = useSelector((store) => store.Auth.isLoggedIn);
  const userId = useSelector((store) => store.Auth.userId);
  const success = useSelector((store) => store.UserInfo.success);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(userId);
    let mounted = true;
    if (isLoggedIn && mounted) {
      !success && getUserById(dispatch, userId);
    }
    return () => {
      mounted = false;
    };
  }, [userId]);
  return (
    <div className="flex basis-4/5">
      {isLoggedIn ? <MainContainer /> : <MainPublic />}
      {isLoggedIn ? <Sidebar /> : <SidebarPublic />}
    </div>
  );
};

export default Home;
