import React, { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import socket from "../socket";
import UserImageIcon from "./UIElements/UserImageIcon";
import { renderHighlightedText } from "../constants";

const Tweet = ({ post }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [likes, setLikes] = useState(post.likes);
  const { name, username, profilePicture } = post?.author;
  const userId = useSelector((store) => store.Auth.userId);
  const currentUserLikes = likes.filter((like) => like.user === userId);
  const handleToggleLike = (tweetId) => {
    // Emit a toggleLike event to the server
    socket.emit("toggleLike", { tweetId, userId, modelType: "Tweet" });
  };
  const showTweet = () => {
    navigate(`/${username}/${post._id}`);
  };
  useEffect(() => {
    // take events for server
    socket.on("likeUpdated", (tweet) => {
      if (post._id == tweet._id) {
        setLikes(tweet.likes);
      }
    });
    return () => {
      socket.off("likeUpdated");
    };
  }, []);

  return (
    <div
      className="flex gap-3 py-3 px-3 hover:bg-gray-100 cursor-pointer"
      onClick={showTweet}
    >
      <div className="basis-1/12">
        <UserImageIcon ImageUrl={profilePicture} />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <p className="flex gap-1 items-center leading-none">
            <Link
              to={`/user/${username}`}
              onClick={(e) => e.stopPropagation()}
              className="font-bold hover:underline decoration-1"
            >
              {name}
            </Link>
            <span className="font-thin">@{username}</span>
            <span className="w-0 h-0 border border-gray-500"></span>
            <ReactTimeAgo
              className="font-thin text-sm"
              date={post?.createdAt}
              locale="en-US"
              timeStyle="twitter"
            />
          </p>
          <div className="whitespace-pre">
            {renderHighlightedText(post.content)}
          </div>
          {post.image !== "" && (
            <img
              src={post.image}
              alt="Tweet image"
              className="rounded-3xl mt-3"
            />
          )}
        </div>
        <div className="flex">
          <div className=" w-28">
            <div className="flex items-baseline gap-2 hover:!text-blue-500 w-fit cursor-pointer">
              <Link to={`/${username}/${post.id}`}>
                <ChatBubbleOutlineIcon className="!w-4 !h-4" />
              </Link>
              <span className="text-xs leading-3">{post.comments.length}</span>
            </div>
          </div>
          <div className=" w-28">
            <div className="flex items-baseline gap-2 hover:!text-red-500 w-fit cursor-pointer">
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleLike(post._id);
                }}
              >
                {currentUserLikes.length !== 0 ? (
                  <FavoriteIcon className="!w-4 !h-4 !text-red-500" />
                ) : (
                  <FavoriteBorderIcon className="!w-4 !h-4" />
                )}
              </span>
              <span className="text-xs leading-3">{likes.length}</span>
            </div>
          </div>
          <div className=" w-28">
            <div className="flex items-baseline gap-2 hover:!text-green-500 w-fit cursor-pointer">
              <span>
                <RepeatIcon className="!w-4 !h-4" />
              </span>
              <span className="text-xs leading-3">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
