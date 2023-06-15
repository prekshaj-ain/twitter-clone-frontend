import React from "react";
import MainPublic from "./MainPublic";
import SidebarPublic from "./SidebarPublic";

const ExplorePublic = () => {
  return (
    <div className="flex basis-4/5">
      <MainPublic />
      <SidebarPublic />
    </div>
  );
};

export default ExplorePublic;
