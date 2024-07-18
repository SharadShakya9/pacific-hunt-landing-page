import React, { useState } from "react";
import { companies } from "../data";
import CompaniesCard from "./ui/CompaniesCard";

const FeaturedCompanies = () => {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  var company = seeMore ? companies : companies.slice(0, 6);
  return (
    <div id="companies" className="w-full py-[100px] bg-white flex justify-center items-center">
      <div className="w-[90%] flex flex-col gap-[25px]">
        <div className="w-full flex justify-between items-center">
          <h1 className="h1-semibold">Featured Companies</h1>
          <button
            className="px-[24px] py-[16px] flex items-center justify-center gap-2 cursor-pointer rounded-md border border-light-4"
            onClick={handleSeeMore}
          >
            <p className="  text-blue-1 text-16-medium">
              {seeMore ? "See Less" : "See More"}
            </p>
            <svg
              width="20"
              height="16"
              className={
                seeMore
                  ? "animate-rotate-icon origin-center"
                  : "animate-rotate-icon-back origin-center"
              }
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.624985 8C0.624985 8.29837 0.743511 8.58451 0.954491 8.79549C1.16547 9.00647 1.45162 9.125 1.74998 9.125H15.5312L10.7031 13.9531C10.5982 14.0576 10.515 14.1818 10.4582 14.3186C10.4015 14.4553 10.3722 14.6019 10.3722 14.75C10.3722 14.8981 10.4015 15.0447 10.4582 15.1814C10.515 15.3182 10.5982 15.4424 10.7031 15.5469C10.9154 15.7564 11.2017 15.8739 11.5 15.8739C11.7983 15.8739 12.0846 15.7564 12.2969 15.5469L19.0469 8.79687C19.1517 8.69236 19.235 8.56816 19.2917 8.43142C19.3485 8.29467 19.3777 8.14806 19.3777 8C19.3777 7.85193 19.3485 7.70532 19.2917 7.56858C19.235 7.43183 19.1517 7.30764 19.0469 7.20312L12.2969 0.453123C12.0855 0.241779 11.7989 0.123047 11.5 0.123047C11.352 0.123047 11.2054 0.152196 11.0687 0.208831C10.932 0.265466 10.8078 0.348476 10.7031 0.453123C10.5985 0.557771 10.5155 0.682005 10.4588 0.818733C10.4022 0.955461 10.373 1.10201 10.373 1.25C10.373 1.39799 10.4022 1.54454 10.4588 1.68126C10.5155 1.81799 10.5985 1.94223 10.7031 2.04687L15.5312 6.875H1.74998C1.45162 6.875 1.16547 6.99353 0.954491 7.2045C0.743511 7.41548 0.624985 7.70163 0.624985 8Z"
                fill="#01A3E0"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-x-8 gap-y-5">
          {company.map((item) => (
              <CompaniesCard
                key={item.key}
                name={item.name}
                logo={item.logo}
                address={item.address}
                jobs={item.jobsavailable}
                desc={item.description}
              />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompanies;
