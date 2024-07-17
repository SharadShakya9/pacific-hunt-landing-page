import React from "react";
import AddressIcon from "../../assets/icons/address.svg";

const CompaniesCard = ({ name, logo, address, jobs, desc }) => {
  return (
    <div>
      <div className="w-[full] flex p-[20px] flex-col justify-center gap-6 rounded-xl border border-light-4 hover:border-blue-1 hover:shadow-card group">
        <div className="w-full flex justify-between">
          <div className="w-[48px] h-[48px] border rounded-full border-light-4 flex justify-center items-center">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex justify-center bg-light-3 border border-blue-1 px-[16px] py-[12px] rounded-[30px]">
            <p className="  text-16-normal text-blue-4">
              {jobs} jobs available
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="  text-18-semibold text-dark-3">{name}</p>
          <div className="flex">
            <img src={AddressIcon} alt="" />
            <p className="text-dark-5   text-14-extralight">{address}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {desc.map((item, index) => (
            <div key={index} className="text-16-normal text-dark-3 border border-light-4 rounded-[30px] px-[16px] py-[12px]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesCard;
