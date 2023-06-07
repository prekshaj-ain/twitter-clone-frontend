import React, { useState } from "react";

const Header = (type) => {
  const [feedType, setFeedType] = useState("For you");
  const clickHandler = (type) => {
    setFeedType(type);
  };
  return (
    <div className="border-b-[1px]">
      <h4 className="p-2 font-bold">Home</h4>
      <div className="flex">
        <div
          className="basis-1/2 flex justify-center hover:bg-gray-200 hover:cursor-pointer "
          onClick={() => clickHandler("For you")}
        >
          <div
            className={`py-3 font-semibold text-gray-500 ${
              feedType === "For you" && "!text-black border-b-4 border-blue-500"
            }`}
          >
            For you
          </div>
        </div>
        <div
          className="basis-1/2 flex justify-center hover:bg-gray-200 hover:cursor-pointer"
          onClick={() => clickHandler("Following")}
        >
          <div
            className={`py-3 font-semibold text-gray-500 ${
              feedType === "Following" &&
              "!text-black border-b-4 border-blue-500"
            }`}
          >
            Following
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
