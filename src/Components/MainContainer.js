import React from "react";

import Header from "./Header";
import WriteSection from "./WriteSection";
import Tweets from "./Tweets";

function MainContainer() {
  return (
    <div className="max-w-xl w-full lg:basis-3/5">
      <Header />
      <WriteSection />
      <Tweets url="/tweets" />
    </div>
  );
}

export default MainContainer;
