import React from "react";
import VerfiedIcon from "../assets/icons/verified.svg";

const Home = () => {
  return (
    <div className="relative w-full h-[600px] bg-home px-[100px] flex items-center">
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[25px]">
          <div className="flex gap-[12px]">
            <img src={VerfiedIcon} alt="verified" />
            <p className="text-dark-3 font-beVietnamPro text-16-medium">
              Your Trusted Career Partner
            </p>
          </div>

          <div>
            <p className="text-dark-1 font-beVietnamPro text-48-extrabold">
              Unlock Your Dream <span className="text-blue-1">Career</span>
            </p>
          </div>
          <div>
            <p className="w-1/2 text-dark-4 font-beVietnamPro text-18-normal">
              Our platform is dedicated to empowering individuals, connecting
              talent with the right opportunities, and fostering professional
              growth
            </p>
          </div>
        </div>

        <div>
          <div>Search Box</div>
          <div>
            <p className="text-dark-5 font-beVietnamPro text-16-normal">
              <span className="text-dark-3 text-16-semibold">Popular Searches: </span>Designer, Developer, Programmer,
              Architect
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
