import React from "react";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

const Tweets = () => {
  const posts = useSelector((store) => store.Posts.posts);
  if (posts.length > 0) {
    return (
      <div>
        {posts?.map((post) => (
          <div key={post._id} className=" border-b-[.5px]">
            <Tweet post={post} />
          </div>
        ))}
      </div>
    );
  }
};

export default Tweets;
