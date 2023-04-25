import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
const Facts = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="aboutus"
      className="   relative h-[100vh] bg-gradient-to-b px-10 from-white   to-white"
    >
      <h1 data-aos="fade-up" className="flex text-4xl ">
        Some facts about PortFolioMaker
      </h1>

      <div data-aos="flip-up" className="grid grid-cols-3 gap-3 mt-[350px]">
        <div className="flex flex-col">
          <h1 className="text-black font-bold text-xl">Mobile Friendly</h1>
          <p className="text-lg text-black">
            Change settings Adjust the customization settings according to your
            needs and enable download.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-black font-bold text-xl">Easy Editing</h1>
          <p className="text-lg text-black">
            Adjust the customization settings according to your need.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-black font-bold text-xl">Easy sharing</h1>
          <p className="text-lg text-black">
            After you publish your eportfolio you can share it online via
            email,social and embed.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-black font-bold text-xl">Professional Look </h1>
          <p className="text-lg text-black">
            After you publish your eportfolio you can share it online via
            email,social and embed.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-black font-bold text-xl">Easy access</h1>
          <p className="text-lg text-black">
            After you publish your eportfolio you can share it online via
            email,social and embed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
