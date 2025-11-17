import React from "react";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import ProFastLogo from "../Pages/Shared/ProFastLogo/ProFastLogo";

const AuthLayout = () => {
  return (
    <div>
      <div className=" p-12 bg-base-200 ">
        <div>
          <ProFastLogo></ProFastLogo>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <img src={authImage} />
          </div>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
