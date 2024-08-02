import React, { useState } from "react";
import Logo from "../assets/images/pacifichuntlogo.svg";
import Button from "./ui/Button";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";
import styled from "styled-components";

const NavItem = styled.div`
  position: relative;
  font-weight: ${(props) => (props.isactive ? "600" : "400")};
  color: ${(props) => (props.isactive ? "#01A3E0" : "#3c3d3d")};
  cursor: pointer;

  &:hover {
    color: #01a3e0;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0%;
    bottom: -2px;
    width: ${(props) => (props.isactive ? "50%" : "0")};
    height: 3px;
    background-color: #01a3e0;
    transition: width 0.3s, height 0.3s;
  }
`;

const Nav = () => {
  const [active, setActive] = useState("Home");

  const handleNavClick = (section) => {
    setActive(section);
  };

  return (
    <div className="w-full fixed top-0 z-50 bg-white flex justify-center shadow-nav">
      <nav className="w-[90%] flex justify-between py-[16px]">
        <div>
          <img src={Logo} alt="main-logo" />
        </div>
        <div className="flex items-center gap-[32px]">
          <nav className="flex gap-[32px]">
            <HashLink to="#home" className="text-16-medium text-dark-3">
              <NavItem
                isactive={active === "Home"}
                onClick={() => handleNavClick("Home")}
                className="hover:scale-125 hover:text-blue-1 "
              >
                Home
              </NavItem>
            </HashLink>

            <HashLink to="#jobs" className="text-16-medium text-dark-3">
              <NavItem
                isactive={active === "Jobs"}
                onClick={() => handleNavClick("Jobs")}
                className="hover:scale-125 hover:text-blue-1 "
              >
                Jobs
              </NavItem>
            </HashLink>

            <HashLink to="#companies" className="text-16-medium text-dark-3">
              <NavItem
                isactive={active === "Companies"}
                onClick={() => handleNavClick("Companies")}
                className="hover:scale-125 hover:text-blue-1 "
              >
                Companies
              </NavItem>
            </HashLink>

            <HashLink to="#about" className="text-16-medium text-dark-3">
              <NavItem
                isactive={active === "About"}
                onClick={() => handleNavClick("About")}
                className="hover:scale-125 hover:text-blue-1 "
              >
                About
              </NavItem>
            </HashLink>
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
