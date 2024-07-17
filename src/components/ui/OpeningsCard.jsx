import React, { useState } from "react";
import Button from "./Button";
import AddressIcon from "../../assets/icons/address.svg";
import ExpiryIcon from "../../assets/icons/expiry.svg";

const OpeningsCard = ({
  name,
  logo,
  address,
  expiryDays,
  type,
  salary,
  company,
}) => {
  const [bookmark, setBookmark] = useState(true);

  const handleBookmark = () => {
    setBookmark(!bookmark)
  }

  return (
    <div className="w-[full] mb-5 flex flex-col p-[18px] justify-center gap-4 rounded-xl border border-light-4 hover:border-blue-1 hover:shadow-card group">
      <div className="w-full flex justify-between">
        <img src={logo} alt={logo} />
        <Button type="light">Apply Now</Button>
      </div>

      <p className="text-dark-3   text-18-semibold">{name}</p>

      <div className="flex gap-2">
        <div className="flex">
          <img src={AddressIcon} alt="" />
          <p className="text-dark-5   text-14-extralight">
            {address}
          </p>
        </div>
        <div className="flex gap-1">
          <img src={ExpiryIcon} alt="" />
          <p className="text-dark-5   text-14-extralight">
            Expires in {expiryDays} Days
          </p>
        </div>
      </div>

      <div className="  text-dark-3 text-16-normal">
        <div className="flex gap-4 items-center text-center ">
          <span>{type[0]}</span>
          <div className="w-[6px] h-[6px] bg-light-5 rounded-full" />
          <span>{type[1]}</span>
          <div className="w-[6px] h-[6px] bg-light-5 rounded-full" />
          <span>{type[2]}</span>
        </div>
        <div>
          <p>Salary: {salary}</p>
        </div>
      </div>

      <div className="w-full border border-light-4" />

      <div className="flex justify-between items-center">
        <p>{company}</p>
        <div className="flex items-center cursor-pointer" onClick={handleBookmark}>
          {bookmark ? (
            <svg
              className="group"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=""
                d="M10.3939 19.0809L9.99999 18.912L9.60607 19.0809L1.66666 22.4835L1.66666 2.66667C1.66666 2.20091 1.82096 1.82658 2.15776 1.48977C2.49332 1.15422 2.86706 1 3.33332 1H16.6667C17.1327 1 17.507 1.15409 17.8436 1.48977C18.1792 1.82629 18.3333 2.20064 18.3333 2.66667V22.4835L10.3939 19.0809Z"
                stroke="#AFB0B1"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.06061 23.4026C1.40074 23.6854 0.666687 23.2014 0.666687 22.4835V2.66667C0.666687 1.93333 0.92802 1.30533 1.45069 0.782667C1.97246 0.260889 2.60002 0 3.33335 0H16.6667C17.4 0 18.028 0.260889 18.5507 0.782667C19.0725 1.30533 19.3334 1.93333 19.3334 2.66667V22.4835C19.3334 23.2014 18.5993 23.6854 17.9394 23.4026L10 20L2.06061 23.4026Z"
                fill="#0072AA"
              />
              <path
                d="M2.06061 23.4026C1.40074 23.6854 0.666687 23.2014 0.666687 22.4835V2.66667C0.666687 1.93333 0.92802 1.30533 1.45069 0.782667C1.97246 0.260889 2.60002 0 3.33335 0H16.6667C17.4 0 18.028 0.260889 18.5507 0.782667C19.0725 1.30533 19.3334 1.93333 19.3334 2.66667V22.4835C19.3334 23.2014 18.5993 23.6854 17.9394 23.4026L10 20L2.06061 23.4026Z"
                stroke="#AFB0B1"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default OpeningsCard;
