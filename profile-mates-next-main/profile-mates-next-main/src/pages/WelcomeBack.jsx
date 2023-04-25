import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import hello from "../../public/assets/images/hello.json";
import fireworks1 from "../../public/assets/images/fireworks1.json";
import fireworks2 from "../../public/assets/images/fireworks2.json";
const WelcomeBack = () => {
  const router = useRouter();

  setTimeout(() => {
    router.replace("/TemplatePage");
  }, 4000);

  return (
    <div className="bg-gradient-to-bl from-container-blue to-white h-screen w-full flex items-center justify-center">
      <div className="flex flexx-row text-white text-[80px] justify-center items-center">
        <Player
          src={fireworks2}
          className="player"
          loop
          autoplay
          style={{ height: "500px", width: "500px" }}
        />
        <Player
          src={hello}
          className="player"
          loop
          autoplay
          style={{ height: "800px", width: "500px" }}
        />
        <h1 className="animate-bounce">Noel Veigas</h1>
        <Player
          src={fireworks1}
          className="player absolute  right-0 "
          loop
          autoplay
          style={{ height: "800px", width: "800px" }}
        />
      </div>
    </div>
  );
};

export default WelcomeBack;
