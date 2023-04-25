import React, { useEffect } from "react";
import resume from "../../public/assets/images/resume-template.png";

import { Parallax } from "react-parallax";
import Image from "next/image";
import "aos/dist/aos.css";
import Aos from "aos";

const ThirdComponent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Parallax
      className="  text-4xl items-center text-center relative h-[100vh] px-5"
      bgImage="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
      bgImageAlt="the cat"
      strength={800}
    >
      <div className="flex flex-row mt-48 xl:mt-40 justify-center align-middle">
        <Image
          data-aos="slide-right"
          className=" shadow-lg"
          height={500}
          src={resume}
          alt="resume"
          loading="lazy"
        />
        <div className="flex flex-col text-xl justify-center align-middle  ml-10">
          <h1
            data-aos="fade-up"
            className="mt-[50px] pr-10 text-xl md:text-2xl text-start font-bold  xl:text-4xl"
          >
            EDIT YOUR RESUME AS YOU LIKE
          </h1>
          <p
            data-aos="slide-up"
            className="text-lg justify-center text-start mt-10  xl:text-2xl "
          >
            Choose font types, sizes, and spacing. You can bold, italicize, and
            underline your text. You dont need to use MS Word resume templates:
            we take care of the formatting, and give you access to the best
            resume designs youll be noticed with.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default ThirdComponent;
