import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./UIElements/Backdrop";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const content = (
    <div className="fixed max-w-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-7 rounded-3xl">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-semibold">Create Your Account</h2>
        <div className="flex flex-col gap-3">
          <input
            name="name"
            className="border border-gray-300 rounded-sm p-2 outline-none focus:border-blue-500"
            placeholder="Name"
          />
          <input
            name="email"
            className="border border-gray-300 rounded-sm p-2 outline-none focus:border-blue-500"
            placeholder="Email"
          />
        </div>
        <button onClick={() => navigate(-1)}>Close</button>
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

export default Signup;
