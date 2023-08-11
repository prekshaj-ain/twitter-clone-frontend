import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarPublic = () => {
  const location = useLocation();
  return (
    <div className="hidden lg:block lg:basis-2/5">
      <div className="sticky top-3 border-gray-200 border-[1px] m-5 p-5 rounded-xl flex flex-col">
        <h3 className="font-bold text-lg pb-4">New to Bluebird?</h3>
        <p className="text-lg text-gray-500">Don't miss what's happening</p>
        <p className="text-[.8rem] text-gray-500">
          People on BlueBird are first to know.
        </p>

        <Link
          to="/signup"
          state={{ background: location }}
          className="w-full p-1 border-[1px] border-gray-200 rounded-3xl text-center font-bold my-4 hover:bg-gray-100 "
        >
          Create account
        </Link>
        <Link
          to="/login"
          state={{ background: location }}
          className="w-full p-1 border-[1px] border-gray-200 rounded-3xl text-center font-bold hover:bg-gray-100"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default SidebarPublic;
