import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import free from "../../public/assets/images/free.png";
import { Parallax } from "react-parallax";
import "aos/dist/aos.css";
import Aos from "aos";
import Image from "next/image";
const ResumeComponent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Parallax
      className="  text-xl items-center text-center relative h-[100vh] text-white"
      bgImage="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
      bgImageAlt="the cat"
      strength={100}
    >
      <div
        className="mt-10 font-extrabold text-5xl xl:mt-`6"
        data-aos="fade-up"
      >
        <Typewriter
          options={{
            strings: ["WHY USE PROFILE MATE?"],
            autoStart: true,
            loop: true,
            skipAddStyles: false,
          }}
        />
      </div>
      <div className="flex  justify-center align-middle  flex-row mt-10 px-5">
        <div className="flex flex-col text-xl ">
          <h1
            data-aos="fade-up"
            className="mt-[200px]  text-4xl text-start font-extrabold"
          >
            FREE TO USE
          </h1>
          <p
            data-aos="fade-right"
            className="text-2xl justify-center pr-7 text-start mt-10  "
          >
            Choose professional, elegant, creative, or modern resume templates.
            You can easily change colors and adapt the layout to any resume
            format you choose: functional, reverse-chronological, or
            combination.
          </p>
        </div>
        <Image
          data-aos="zoom-in-up"
          className=" rounded-3xl  shadow-lg"
          src={free}
          alt="free"
          loading="lazy"
        />
      </div>
    </Parallax>
  );
};
export default ResumeComponent;
