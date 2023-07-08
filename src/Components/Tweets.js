import React from "react";
import useFetchPost from "./Utils/Hooks/useFetchPost";
import Tweet from "./Tweet";

const Tweets = ({ url }) => {
  const { posts, loading, error } = useFetchPost(url);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <Tweet post={post} />
        </div>
      ))}
    </div>
  );
};

export default Tweets;
