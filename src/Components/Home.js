import React from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="flex basis-4/5">
      <MainContainer />
      <Sidebar />
    </div>
  );
};

export default Home;
