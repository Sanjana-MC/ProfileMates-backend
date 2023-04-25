import React from "react";

const TemplatePortFolio = () => {
  return (
    <div className="flex flex-row gap-4 ">
      <div className="flex flex-col flex-wrap">
        <div className="h-[300px] w-[500px] drop-shadow-2xl shadow-2xl flex justify-center mb-5 items-center hover:scale-105 hover:bg-gradient-to-r from-container-blue to-purple-600 bg-gray-50 rounded-3xl">
          hello
        </div>
        <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className=" flex justify-center items-center relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Download
          </span>
        </button>
      </div>

      <div className="flex flex-col flex-wrap">
        <div className="h-[300px] drop-shadow-2xl shadow-2xl w-[500px] flex justify-center mb-5 items-center hover:scale-105 hover:bg-gradient-to-r from-container-blue to-purple-600  bg-gray-50 rounded-3xl">
          hello
        </div>
        <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="flex justify-center items-center relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Download
          </span>
        </button>
      </div>
    </div>
  );
};

export default TemplatePortFolio;
