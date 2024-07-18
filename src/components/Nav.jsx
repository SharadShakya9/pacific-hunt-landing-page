import React from "react";
import Logo from "../assets/images/pacifichuntlogo.svg";
import Button from "./ui/Button";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";

const Nav = () => {
  return (
    <div className="w-full fixed top-0 z-50 bg-white flex justify-center shadow-nav">
      <nav className="w-[90%] flex justify-between py-[16px]">
        <div>
          <img src={Logo} alt="main-logo" />
        </div>
        <div className="flex items-center gap-[32px]">
          <nav>
            <article className="flex gap-[32px]">
              <HashLink to="#home" className="text-16-medium text-dark-3">
                <label htmlFor="hero">
                  <input
                    type="radio"
                    id="hero"
                    className="hidden peer"
                  />
                  <p className="peer-hover:scale-125 peer-hover:text-blue-3 peer-checked:text-blue-1 peer-checked:border-b-blue-1 peer-checked:border-[5px] active:border active:border-black">
                    Home
                  </p>
                </label>
              </HashLink>

              <HashLink to="#jobs" className="text-16-medium text-dark-3">
                <label htmlFor="job">
                  <input
                    type="radio"
                    id="job"
                    className="hidden peer"
                  />
                  <p className="peer-hover:scale-125 peer-hover:text-blue-3 peer-checked:border-blue-1 peer-checked:border-b-[5px]">
                    Jobs
                  </p>
                </label>
              </HashLink>

              <HashLink to="#companies" className="text-16-medium text-dark-3">
                <label htmlFor="company">
                  <input
                    type="radio"
                    id="company"
                    className="hidden peer"
                  />
                  <p className="peer-hover:scale-125 peer-hover:text-blue-3 peer-checked:border-b-blue-1 peer-checked:border-[5px]">
                    Companies
                  </p>
                </label>
              </HashLink>

              <HashLink to="#about" className="text-16-medium text-dark-3">
                <label htmlFor="aboutus">
                  <input
                    type="radio"
                    id="aboutus"
                    className="hidden peer"
                  />
                  <p className="peer-hover:scale-125 peer-hover:text-blue-3 peer-checked:border-b-blue-1 peer-checked:border-[5px]">
                    About
                  </p>
                </label>
              </HashLink>
            </article>
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
