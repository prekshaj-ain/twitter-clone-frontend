import React, { useState } from "react";

const Header = ({ feedTypes, onFeedTypeChange }) => {
  const [feedType, setFeedType] = useState(feedTypes[0]);

  const clickHandler = (type) => {
    setFeedType(type);
    onFeedTypeChange(type);
  };

  return (
    <div className="border-b-[1px] sticky top-0 backdrop-blur-2xl z-10">
      <div className="flex">
        {feedTypes.map((type) => (
          <div
            key={type}
            className="flex-grow flex justify-center hover:bg-gray-200 hover:cursor-pointer"
            onClick={() => clickHandler(type)}
          >
            <div
              className={`py-3 font-semibold text-gray-500 ${
                feedType === type && "!text-black border-b-4 border-blue-500"
              }`}
            >
              {type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
