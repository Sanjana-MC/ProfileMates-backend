import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
const HowTo = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className=" font-raleway  relative h-[100vh] px-10 bg-gradient-to-b from-white  via-container-blue to-white">
      <div className="flex-row flex text-center font-bold   font-raleway text-white uppercase ">
        <h1 data-aos="fade-up" className="flex text-2xl mt-52 mr-36">
          How to make a digital portfolio
        </h1>
        <p data-aos="fade-up" className="flex text-2xl justify-center mt-52 ">
          PROFILE MATE IS THE EASIEST AND THE QUICKEST WAY TO BUILD A BEAUTIFUL
          ONLINE PORTFOLIO.
        </p>
      </div>
      <div data-aos="flip-up" className="grid grid-cols-3 gap-3 mt-[200px]">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-xl">Design</h1>
          <p className="text-lg text-white">
            Change settings Adjust the customization settings according to your
            needs and enable download.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-xl">Change settings</h1>
          <p className="text-lg text-white">
            Adjust the customization settings according to your need.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-xl">Publish/share</h1>
          <p className="text-lg text-white">
            After you publish your eportfolio you can share it online via
            email,social and embed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
