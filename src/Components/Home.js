import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import SidebarPublic from "./SidebarPublic";
import { getUserById } from "./Utils/Apicalls/userInfoApi";

const Home = () => {
  const isLoggedIn = useSelector((store) => store.Auth.isLoggedIn);
  const userId = useSelector((store) => store.Auth.userId);
  const success = useSelector((store) => store.UserInfo.success);
  const prevUserIdRef = useRef(userId);
  const dispatch = useDispatch();
  useEffect(() => {
    if (prevUserIdRef.current !== userId || !success) {
      console.log(userId);
      getUserById(dispatch, userId);
      prevUserIdRef.current = userId;
    }
  }, [userId, dispatch]);
  return (
    <div className="flex basis-4/5">
      <MainContainer />
      {isLoggedIn ? <Sidebar /> : <SidebarPublic />}
    </div>
  );
};

export default Home;
