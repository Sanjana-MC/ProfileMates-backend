import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import successfull from "../../public/assets/images/successfull.json";
const SetupPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.replace("/TemplatePage");
  }, 3000);

  return (
    <div className="bg-gradient-to-bl from-container-blue to-black h-screen w-full flex items-center justify-center">
      <div className="">
        <Player
          src={successfull}
          className="player"
          loop
          autoplay
          style={{ height: "600px", width: "600px" }}
        />
        <h1 className="text-[50px] text-white ">
          <span className="text-white animate-ping duration-1000 transition-all">
            Youre All{" "}
          </span>
          <span className="text-green-700 animate-pulse">Set Up</span>
        </h1>
      </div>
    </div>
  );
};

export default SetupPage;
