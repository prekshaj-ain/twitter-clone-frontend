import React, { useRef, useState } from "react";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

import useAutosizeTextArea from "./Utils/Hooks/useAutosizeTextarea";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useSelector } from "react-redux";
import UserImageIcon from "./UIElements/UserImageIcon";

const WriteSection = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(true);
  const [file, setFile] = useState(null);
  let extraCharacter = useRef();
  const textareaRef = useRef(null);
  const profilePicture = useSelector(
    (store) => store.UserInfo.userInfo.profilePicture
  );

  const fileHandler = (e) => {
    const val = e.target?.files[0];
    console.log(val);
    const reader = new FileReader();
    if (val) {
      reader.readAsDataURL(val);
    }

    reader.onload = (readerEvent) => {
      setFile(readerEvent.target.result);
      setError(false);
    };
    e.target.value = null;
  };

  const clearFileHandler = () => {
    setFile(null);
    if (value.trim().length === 0) {
      setError(true);
    }
  };

  const changeHandler = (e) => {
    const val = e.target?.value;
    setValue(val);
    if (val.length === 0) {
      setError(true);
      extraCharacter.current = "";
    } else if (val.length > 250) {
      setError(true);
      extraCharacter.current = 250 - val.length;
    } else {
      setError(false);
      extraCharacter.current = "";
    }
  };

  const tweetHandler = () => {};
  useAutosizeTextArea(textareaRef, value);
  return (
    <div className="px-4 py-1 flex gap-3 ">
      <div className="basis-1/12 pt-1">
        <UserImageIcon ImageUrl={profilePicture} />
      </div>
      <div className="basis-11/12">
        <div className="w-full py-1 mt-2 max-h-full">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={changeHandler}
            placeholder="Write something"
            className="w-full h-12 max-h-96 text-lg border-none resize-none outline-none overscroll-auto tracking-tighter leading-tight"
          ></textarea>
          {/* ImagePreview */}
          <div className="mt-2 relative z-0 ">
            {file && (
              <ClearOutlinedIcon
                fontSize="small"
                sx={{ color: "white" }}
                className="p-1 bg-black rounded-full absolute top-2 left-2 cursor-pointer hover:opacity-70"
                onClick={clearFileHandler}
              />
            )}
            <img className="rounded-3xl" src={file} alt="" />
          </div>
          {/* action buttons */}
          <div className="flex w-full justify-between p-2 sticky bottom-0 bg-white">
            <div>
              <label htmlFor="file" className="hover:cursor-pointer">
                <ImageOutlinedIcon color="primary" fontSize="small" />
              </label>
              <input
                type="file"
                id="file"
                className="hidden"
                accept="image/*"
                onChange={fileHandler}
              />
            </div>
            <div className="flex items-center gap-5">
              {error && (
                <p className="font-bold text-xs text-red-500">
                  {extraCharacter.current}
                </p>
              )}
              <button
                className=" px-3 py-1 rounded-full bg-blue-500 text-white font-bold disabled:opacity-50"
                disabled={error}
                onClick={tweetHandler}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteSection;
