import React from "react";
import UserProfile from "./UserProfile";
import UserSuggestions from "./UserSuggestions";

const Profile = () => {
  return (
    <div className="flex basis-4/5">
      <UserProfile />
      <UserSuggestions />
    </div>
  );
};

export default Profile;
