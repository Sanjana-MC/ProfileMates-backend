import Aos from "aos";

import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
import { useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Parallax
      className="  text-4xl items-center text-center px-5 relative h-[100vh] "
      bgImage="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
      bgImageAlt="the cat"
      strength={100}
    >
      <p
        data-aos="fade-up"
        className="mt-[200px] font-thin text-4xl text-white xl:text-5xl 2xl:mt-[300px] md:text-2xl"
      >
        PROFESSIONAL RESUME & PORTFOLIO FOR ANY JOBS
      </p>
      <div data-aos="fade-up" className="md:mt-16 mt-36 font-thin">
        <Link
          href="#_"
          className="relative inline-flex items-center bg-white bg-opacity-20 backdrop-blur-lg justify-center  md:px-12 px-20 md:py-3 py-5 overflow-hidden   transition duration-300 ease-out   rounded-full shadow-md group"
        >
          <span className="absolute inset-0  flex items-center justify-center w-full h-full text-container-blue duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute  flex items-center justify-center w-full h-full text-white text-3xl transition-all  duration-300 transform group-hover:translate-x-full ease">
            TRY OUR BUILDER
          </span>
          <span className="relative invisible">Button Text</span>
        </Link>
      </div>
    </Parallax>
  );
};

export default Hero;
