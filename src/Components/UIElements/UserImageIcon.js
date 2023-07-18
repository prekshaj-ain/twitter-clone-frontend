import React from "react";

import IMAGE from "../../Assets/user.jpg";
const UserImageIcon = (props) => {
  if (props.ImageUrl === "") {
    return (
      <div
        className={`w-9 h-9 object-contain ${
          props.size === "big" && "!w-28 !h-28"
        }`}
      >
        <img
          className="w-full h-full rounded-full"
          src={IMAGE}
          alt="default user"
        />
      </div>
    );
  } else {
    return (
      <div
        className={`w-9 h-9 object-contain ${
          props.size === "big" && "!w-28 !h-28"
        }`}
      >
        <img
          className="w-full h-full rounded-full"
          src={props.ImageUrl}
          alt="user"
        />
      </div>
    );
  }
};

export default UserImageIcon;
