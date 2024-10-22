import React from "react";

const TestimonialCard = ({comment, name, title, pfp}) => {
  return (
    <div className="w-[100%] bg-white rounded-xl px-[32px] pt-[40px] pb-[48px] flex flex-col gap-[32px]">
      <svg
        width="29"
        height="24"
        viewBox="0 0 29 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0756 0L7.08564 10.7016C8.74139 10.8066 10.105 11.5148 11.1763 12.8262C12.2964 14.0852 12.8564 15.6066 12.8564 17.3902C12.8564 19.2787 12.2477 20.8525 11.0302 22.1115C9.81276 23.3705 8.30311 24 6.50126 24C4.69941 24 3.16541 23.3705 1.89924 22.1115C0.633081 20.8525 0 19.1475 0 16.9967C0 15.8426 0.267842 14.5574 0.803526 13.141C1.33921 11.7246 2.19144 10.0459 3.3602 8.10492C4.57767 6.11147 6.13602 3.69836 8.03526 0.865572L8.5466 0H13.0756ZM29 0L22.937 10.7016C24.6415 10.8066 26.0294 11.5148 27.1008 12.8262C28.1721 14.0852 28.7078 15.6066 28.7078 17.3902C28.7078 19.2787 28.0991 20.8525 26.8816 22.1115C25.7128 23.3705 24.2275 24 22.4257 24C20.5751 24 19.0168 23.3705 17.7506 22.1115C16.5332 20.8525 15.9244 19.1475 15.9244 16.9967C15.9244 15.8426 16.1923 14.5574 16.728 13.141C17.2636 11.7246 18.1159 10.0459 19.2846 8.10492C20.4534 6.11147 21.9874 3.69836 23.8867 0.865572L24.471 0H29Z"
          fill="#D0D1D1"
        />
      </svg>

      <p className="  text-16-normal italic text-dark-3">{comment}</p>

      <div className="flex gap-2">
        <img src={pfp} alt="" />
        <div className="flex flex-col gap-1">
            <p className="  text-18-semibold text-dark-3">{name}</p>
            <p className="  text-14-normal text-light-5">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
