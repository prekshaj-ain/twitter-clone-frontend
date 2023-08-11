import React, { useState } from "react";
import { useSelector } from "react-redux";

import Header from "./UIElements/Header";
import WriteSection from "./WriteSection";
import Tweets from "./Tweets";
import useFetchPost from "./Utils/Hooks/useFetchPost";

function MainContainer() {
  const isLoggedIn = useSelector((store) => store.Auth.isLoggedIn);
  const { loading, error } = useFetchPost("/tweets");
  const feedTypes = ["For you", "Following"];
  const [selectedFeedType, setSelectedFeedType] = useState(feedTypes[0]);

  const handleFeedTypeChange = (type) => {
    setSelectedFeedType(type);
    // Do whatever you want with the selected feed type here
    // For example, you can trigger a new API call with the selected feed type
  };
  return (
    <div className="max-w-xl w-full lg:basis-3/5 border-r-[1px]">
      {isLoggedIn && (
        <>
          <Header
            feedTypes={feedTypes}
            onFeedTypeChange={handleFeedTypeChange}
          />
          <WriteSection />
        </>
      )}
      <Tweets />
    </div>
  );
}

export default MainContainer;
