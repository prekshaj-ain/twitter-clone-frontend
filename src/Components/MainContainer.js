import React from "react";
import Header from "./Header";
import WriteSection from "./WriteSection";

function MainContainer() {
  return (
    <div className="max-w-xl basis-3/5">
      <Header />
      <WriteSection />
    </div>
  );
}

export default MainContainer;
