import Image from "next/image";
import React from "react";
import logo from "../../public/assets/images/newlogo.gif";

const SplashScreen = () => {
  return (
    <div className="h-screen bg-white w-full  flex justify-center align-middle">
      <Image
        className="h-[400px] w-[450px] absolute top-[180px] 2xl:top-[320px]"
        src={logo}
        alt="logo"
      />
      <div className=" animate-slide absolute w-1 2xl:h-[200px] 2xl:top-[435px]   h-[200px] top-[290px]  bg-black"></div>
      <p className=" animate-slidetext absolute 2xl:h-[200px] 2xl:top-[435px] 2xl:left-[1100px] 2xl:text-5xl text-2xl left-[800px] top-[350px] font-extrabold font-raleway text-black">
        Get Hired
      </p>
      <p className="animate-slidetext absolute 2xl:h-[200px] 2xl:top-[555px] 2xl:left-[1100px] left-[800px] top-[400px] 2xl:text-5xl text-2xl font-extrabold font-raleway text-black">
        Not Fired
      </p>
    </div>
  );
};

export default SplashScreen;
