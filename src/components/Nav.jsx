import React from "react";
import Logo from "../assets/images/pacifichuntlogo.svg";
import Button from "./ui/Button";

const Nav = () => {
  return (
    <div>
      <nav className="w-full flex justify-around py-[16px]">
        <div>
          <img src={Logo} alt="main-logo" />
        </div>
        <div className="flex items-center gap-[32px]">
          <nav className="flex gap-[32px]">
            <a href="" className="text-16-medium text-dark-3 font-beVietnamPro">Home</a>
            <a href="" className="text-16-medium text-dark-3 font-beVietnamPro">Jobs</a>
            <a href="" className="text-16-medium text-dark-3 font-beVietnamPro">Companies</a>
            <a href="" className="text-16-medium text-dark-3 font-beVietnamPro">About us</a>
          </nav>

          <div className="flex gap-[16px]">
            <Button type="light">Sign Up</Button>
            <Button type="dark">Post a Job</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
