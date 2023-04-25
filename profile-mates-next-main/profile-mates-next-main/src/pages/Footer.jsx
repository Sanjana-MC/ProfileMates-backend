import React from "react";
import logo from "../../public/assets/images/logo.webp";
import Image from "next/image";
const Footer = () => {
  return (
    <div className=" h-auto w-full backdrop-filter  bg-gradient-to-b  from-white  via-container-blue     shadow-2xl ">
      <div className="grid items-start grid-cols-7 text-black font-semibold xl:text-2xl ">
        <div>
          <div className="relative w-40 h-70 mt-5  object-contain">
            <Image
              className="rounded-full border border-gray-100 shadow-sm"
              src={logo}
              alt="user image"
            />
          </div>
        </div>
        <div className="relative w-40 h-70 mt-5  object-contain">
          <Image
            loading="lazy"
            className="rounded-full border border-gray-100 shadow-sm"
            src={logo}
            alt="user image"
          />
        </div>

        <ul className="text-sm text-white font-medium">
          <li className="hover:scale-110 transition-all duration-500 ease-linear  "></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
