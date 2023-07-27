import React, { useState } from "react";
import Header from "./UIElements/Header";

const ProfilePosts = () => {
  const feedTypes = ["Tweets", "Replies", "likes"];
  const [selectedFeedType, setSelectedFeedType] = useState(feedTypes[0]);

  const handleFeedTypeChange = (type) => {
    setSelectedFeedType(type);
    // Do whatever you want with the selected feed type here
    // For example, you can trigger a new API call with the selected feed type
  };
  return (
    <div>
      <Header feedTypes={feedTypes} onFeedTypeChange={handleFeedTypeChange} />
    </div>
  );
};

export default ProfilePosts;
