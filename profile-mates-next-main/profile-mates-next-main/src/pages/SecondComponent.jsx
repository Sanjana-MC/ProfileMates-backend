import Image from "next/image";
import { Parallax } from "react-parallax";
import "aos/dist/aos.css";
import resume from "../../public/assets/images/resume.gif";
import Aos from "aos";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";

const SecondComponent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Parallax
      className="  text-4xl items-center text-center px-5 relative h-[100vh] "
      bgImage="https://img.freepik.com/free-photo/top-view-desk-with-office-supplies_23-2148110231.jpg?w=900&t=st=1680925192~exp=1680925792~hmac=049e88d3786c8e64df5658c2f886ab326e59041e93c6449d95bc625721eaef66"
      bgImageAlt="the cat"
      strength={200}
    >
      <div className="mt-10 xl:mt-10 md:text-2xl font-bold xl:text-4xl">
        <Typewriter
          options={{
            strings: ["WHY USE PROFILE MATE?"],
            autoStart: true,
            loop: true,
            skipAddStyles: false,
          }}
        />
      </div>
      <div className="flex flex-row mt-5">
        <div className="flex flex-col text-xl  text-black font-semibold xl:mt-[230px] ">
          <h1
            data-aos="fade-up"
            className="mt-[50px] pr-10 text-2xl text-start font-bold  xl:text-4xl md:text-lg"
          >
            PROFESSIONAL TEMPLATES
          </h1>
          <p
            data-aos="fade-up"
            className="text-lg justify-center text-start mt-5 font-semibold  xl:text-2xl "
          >
            Choose professional, elegant, creative, or modern resume templates.
            You can easily change colors and adapt the layout to any resume
            format you choose: functional, reverse-chronological, or
            combination.
          </p>
        </div>
        <Image
          data-aos="fade-left"
          className=" rounded-full shadow-2xl xl:mt-[70px] -mt:50px md:h-[300px] xl:h-[500px]"
          src={resume}
          height="50"
          width="500"
          alt="resume"
          loading="lazy"
        />
      </div>
    </Parallax>
  );
};

export default SecondComponent;
