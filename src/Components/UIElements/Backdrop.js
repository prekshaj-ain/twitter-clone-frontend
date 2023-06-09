import React from "react";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-screen z-10 bg-black opacity-40"></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
