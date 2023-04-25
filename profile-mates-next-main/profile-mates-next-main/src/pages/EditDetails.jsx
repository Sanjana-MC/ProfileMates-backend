import React, { useState } from "react";
import addImg from "../../public/assets/images/add-details.jpg";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import EditDetails2 from "./EditDetails2";
import EditMoreDetails from "./EditMoreDetails";
import EditDetails1 from "./EditDetails1";
const EditDetails = (props) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.replace("/SetupPage");
  };
  const [page, setPage] = useState(0);
  const title = [
    "Enter your Details",
    "Enter your Details",
    "Enter your Details",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <EditDetails1 />;
    } else if (page === 1) {
      return <EditMoreDetails />;
    } else if (page === 2) {
      return <EditDetails2 />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-container-blue to-black h-screen w-full   ">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg flex items-center justify-center drop-shadow-lg md:h-[97vh]  mr-[100px] ml-10 relative top-2  rounded-xl ">
        <div className="flex flex-row">
          {page === 1 || page === title.length - 1 ? (
            <div className="text-white my-96">
              <AiOutlineArrowLeft
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
                size={35}
              />
            </div>
          ) : null}

          <div className="flex flex-col">{PageDisplay()}</div>
          <div className=" mt-28 ml-5 mr-5">
            <div className=" text-2xl text-white flex-col flex">
              <Typewriter
                options={{
                  strings: title[page],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: false,
                }}
              />

              <Image
                className="rounded-2xl  "
                src={addImg}
                alt="add details image"
                width={300}
                loading="lazy"
              />
            </div>
          </div>
          {page === 0 || page === 1 ? (
            <div className="text-white my-96">
              <AiOutlineArrowRight
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
                size={35}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default EditDetails;
