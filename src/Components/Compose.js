import React from "react";
import ReactDOM from "react-dom";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

import Backdrop from "./UIElements/Backdrop";
import { useNavigate } from "react-router-dom";
import WriteSection from "./WriteSection";

const Compose = () => {
  const navigate = useNavigate();
  const content = (
    <div className="fixed w-full max-w-[600px] top-10  left-1/2 -translate-x-1/2 bg-white z-50 rounded-3xl">
      <div className="overflow-auto max-h-80 mt-10">
        <ClearOutlinedIcon
          fontSize="small"
          sx={{ color: "white" }}
          className="p-1 bg-black rounded-full absolute top-3 left-3 cursor-pointer hover:opacity-70"
          onClick={() => navigate(-1)}
        />
        <WriteSection />
      </div>
    </div>
  );
  return (
    <>
      <Backdrop />
      {ReactDOM.createPortal(content, document.getElementById("modal-hook"))}
    </>
  );
};

export default Compose;
