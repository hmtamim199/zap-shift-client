import React from "react";
import profastlogo from "../../../assets/logo.png";

const ProFastLogo = () => {
  return (
    <div className="flex items-end">
      <img className="mb-3" src={profastlogo} alt="" />
      <p className="font-extrabold text-3xl">Pro Fast</p>
    </div>
  );
};

export default ProFastLogo;
