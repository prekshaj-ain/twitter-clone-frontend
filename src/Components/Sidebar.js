import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden lg:block basis-2/5">
      <div className="bg-slate-100 m-5 p-3 rounded-full sticky top-4">
        <h3 className="font-bold text-xl">What's trending</h3>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
