import React from "react";
import VerfiedIcon from "../assets/icons/verified.svg";
import Button from "./ui/Button";
import SearchIcon from "../assets/icons/search.svg";
import LocationIcon from "../assets/icons/location.svg";
import VacancyIcon from "../assets/icons/vacancy.svg";

const Home = () => {
  return (
    <div id="home" className="relative w-full mt-[85.6px] h-[600px] bg-home justify-center flex items-center">
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[25px]">
          <div className="flex gap-[12px]">
            <img src={VerfiedIcon} alt="verified" />
            <p className="text-dark-3   text-16-medium">
              Your Trusted Career Partner
            </p>
          </div>

          <div>
            <p className="text-dark-1 text-48-extrabold">
              Unlock Your Dream <span className="text-blue-1">Career</span>
            </p>
          </div>
          <div>
            <p className="w-1/2 text-dark-4   text-18-normal">
              Our platform is dedicated to empowering individuals, connecting
              talent with the right opportunities, and fostering professional
              growth
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[25px]">
          <div className="rounded-lg bg-light-1 w-[673px] px-[24px] py-[12px] flex items-center justify-evenly shadow-search">
            <div className="flex items-center gap-2 rounded-md">
              <img src={SearchIcon} alt="" />
              <input
                className="cursor-text  placeholder:text-light-5 text-16-normal"
                type="text"
                placeholder="Job title, Keyword..."
              />
              <div className="w-[32px] h-0 border border-[#D0D1D1] rotate-90" />
            </div>
            <div className="flex items-center gap-2 rounded-md">
              <img src={LocationIcon} alt="" />
              <input
                className="placeholder:text-light-5 text-16-normal cursor-text"
                type="text"
                placeholder="Enter location"
              />
            </div>
            <Button type="dark">Search Job</Button>
          </div>
          <div>
            <p className="text-dark-5   text-16-normal">
              <span className="text-dark-3 text-16-semibold">
                Popular Searches:{" "}
              </span>
              Designer, Developer, Programmer, Architect
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-[53px] right-52 py-4 w-[126px] bg-light-1 rounded-2xl flex flex-col justify-between items-center">
        <img src={VacancyIcon} alt="" />
        <p className="text-dark-3 text-24-bold tracking-[-0.02rem]">20K+</p>
        <p className="text-dark-3 text-14-medium text-center">Job Vacancy</p>
      </div>
    </div>
  );
};

export default Home;
