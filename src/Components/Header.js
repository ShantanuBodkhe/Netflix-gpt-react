import React from "react";
import NetflixLogo from "../Utils/NetflixLogo.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-4 bg-gradient-to-b from-black z-10">
      <img className="w-44"
      src={NetflixLogo} alt="logo" />
    </div>
  );
};

export default Header;