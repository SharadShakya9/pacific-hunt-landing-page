import React from "react";
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
  return (
    <div className="w-[32%] mb-5 flex flex-col p-[12px] justify-center gap-4 rounded-xl border border-light-4 hover:border-blue-1 hover:shadow-card group">
      <div className="w-full flex justify-between">
        <img src={logo} alt={logo} />
        <Button type="light">Apply Now</Button>
      </div>

      <p className="text-dark-3 font-beVietnamPro text-18-semibold">
        Deep Learning Center
      </p>

      <div className="flex gap-2">
        <div className="flex">
          <img src={AddressIcon} alt="" />
          <p className="text-dark-5 font-beVietnamPro text-14-extralight">
            {address}
          </p>
        </div>
        <div className="flex gap-1">
          <img src={ExpiryIcon} alt="" />
          <p className="text-dark-5 font-beVietnamPro text-14-extralight">
            Expires in {expiryDays} Days
          </p>
        </div>
      </div>

      <div className="flex gap-4 items-center text-center">
        <span>{type[0]}</span>
        <div className="w-[6px] h-[6px] bg-light-5 rounded-full" />
        <span>{type[1]}</span>
        <div className="w-[6px] h-[6px] bg-light-5 rounded-full" />
        <span>{type[2]}</span>
      </div>
    </div>
  );
};

export default OpeningsCard;
