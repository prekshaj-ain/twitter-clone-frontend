import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserImageIcon from "./UIElements/UserImageIcon";
import Cover from "./UIElements/Cover";

const UserProfile = () => {
  const { user } = useParams();
  const username = useSelector((store) => store.UserInfo.userInfo.username);
  let info;
  if (username == user) {
    info = useSelector((store) => store.UserInfo.userInfo);
  }
  console.log(info);
  useEffect(() => {
    if (username === user) {
    }
  }, [user, username]);
  console.log(user);
  return (
    <div className="max-w-xl w-full lg:basis-3/5">
      <div className="px-4 py-2 font-bold text-lg">{info.name}</div>
      <div>
        <div>
          <Cover />
          <section>
            {/* user image section */}
            <div className="flex justify-between mx-6 h-14 mb-4">
              <div className="relative -translate-y-[50%] border-white border-4 rounded-full w-fit h-fit">
                <UserImageIcon ImageUrl={info.profilePicture} size="big" />
              </div>
              <div className="my-2 h-fit py-2 px-6 rounded-3xl bg-black text-white font-bold text-sm cursor-pointer">
                Follow
              </div>
            </div>
            {/* user info section */}
            <div className="mx-6">
              <h3 className="font-bold text-lg leading-tight">{info.name}</h3>
              <h4 className="font-thin text-gray-600 text-sm leading-tight">
                @{info.username}
              </h4>
              <p className="py-3 text-sm">{info.bio}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
