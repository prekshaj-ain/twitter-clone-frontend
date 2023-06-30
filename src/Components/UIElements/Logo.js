import React from "react";
import LOGO from "../../Assets/twitter.svg";
const Logo = ({ logoStyle }) => {
  return <img src={LOGO} alt="Twitter" className={` ${logoStyle} w-8 h-8`} />;
};

export default Logo;
