import React from "react";

const Compose = () => {
  const content = (
    <div className="fixed w-full max-w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-10 sm:p-16 rounded-3xl">
      Compose
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
