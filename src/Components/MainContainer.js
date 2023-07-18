import React from "react";

import Header from "./Header";
import WriteSection from "./WriteSection";
import Tweets from "./Tweets";
import useFetchPost from "./Utils/Hooks/useFetchPost";

function MainContainer() {
  const { loading, error } = useFetchPost("/tweets");
  return (
    <div className="max-w-xl w-full lg:basis-3/5">
      <Header />
      <WriteSection />
      <Tweets />
    </div>
  );
}

export default MainContainer;
