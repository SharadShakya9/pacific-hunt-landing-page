import React from "react";

const Button = ({ type, children }) => {
  switch (type) {
    case "light":
      return (
        <button className="border bg-transparent border-blue-1 rounded-lg px-[24px] py-[14px]">
          <p className="text-blue-1 text-16-medium cursor-pointer">{children}</p>
        </button>
      );

    case "dark":
      return (
        <button className="bg-blue-1 rounded-lg px-[24px] py-[14px]">
          <p className="text-light-1 text-16-medium cursor-pointer">{children}</p>
        </button>
      );
  }
};

export default Button;
