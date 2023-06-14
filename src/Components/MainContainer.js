import React from "react";
import Header from "./Header";
import WriteSection from "./WriteSection";

function MainContainer() {
  return (
    <div className="max-w-xl w-full lg:basis-3/5">
      <Header />
      <WriteSection />
    </div>
  );
}

export default MainContainer;
