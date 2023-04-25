import React, { useState } from "react";

import { FaFileImage } from "react-icons/fa";
const AddMoreDetails2 = (props) => {
  const [isDone, setdone] = useState(false);
  const [inputFields, setInputFields] = useState([{ name: "", salary: "" }]);
  const [indexx, setIndex] = useState(0);
  const addFields = () => {
    let newField = { name: "", salary: "" };

    setInputFields([...inputFields, newField]);
    setIndex((currindex) => currindex + 1);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
    setIndex((currindex) => currindex - 1);
  };
  const sendDataToParent = (data, done) => {
    props.onDataReceived(data, done);
  };
  const handleData = () => {
    setdone(true);
    sendDataToParent("hi", true);
  };
  return (
    <div>
      <form>
        <div className="flex flex-row ">
          <div className="flex flex-col pt-12 ">
            <div className="flex flex-row mt-2">
              <div className="flex text-black text-md font-sans ml-10   flex-col  font-extrabold">
                <div className="flex flex-col text-white text-md font-sans mt-5 font-extrabold">
                  <label htmlFor="fname">Skills:</label>
                  <div className="flex flex-row mt-2 gap-5">
                    <input
                      className="w-72 rounded-xl  py-4  caret-black focus:caret-red-500 "
                      type="text"
                      id="fname"
                      name="fname"
                    />
                    <input
                      className="w-72 rounded-xl  py-4  caret-black focus:caret-red-500 "
                      type="text"
                      id="fname"
                      name="fname"
                    />
                  </div>
                  <div className="flex flex-row mt-2 gap-5">
                    <input
                      className="w-72 rounded-xl  py-4  caret-black focus:caret-red-500 "
                      type="text"
                      id="fname"
                      name="fname"
                    />
                    <input
                      className="w-72 rounded-xl  py-4  caret-black focus:caret-red-500 "
                      type="text"
                      id="fname"
                      name="fname"
                    />
                  </div>

                  <div className="flex flex-row mt-2 gap-5">
                    <input
                      className="w-72 rounded-xl  py-4  caret-black focus:caret-red-500 "
                      type="text"
                      id="fname"
                      name="fname"
                    />
                    <input
                      className="w-72 rounded-xl  py-4  caret-black focus:caret-red-500 "
                      type="text"
                      id="fname"
                      name="fname"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-10 text-white text-md font-sans   font-extrabold mt-4">
              <label htmlFor="fname">Projects:</label>
              <h1>*Mention your Projects(Photos optional)</h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 justify-start items-start">
                  {inputFields.map((input, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row gap-4 justify-center items-center"
                      >
                        <input
                          className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                          type="text"
                          id="fname"
                          name="fname"
                        />
                        <FaFileImage size={50} color="white" />
                      </div>
                    );
                  })}
                </div>
                <div className="flex-row ml-20">
                  {indexx < 3 && (
                    <button onClick={addFields}>
                      <a
                        href="#_"
                        className="inline-flex items-center w-full px-10 py-3 mt-10  text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
                      >
                        Add
                      </a>
                    </button>
                  )}

                  <button className="ml-10" onClick={removeInputFields}>
                    <a
                      href="#_"
                      className="inline-flex items-center w-full px-10 py-3 mt-10  text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
                    >
                      Remove
                    </a>
                  </button>
                </div>
                {/* <div className="flex flex-row gap-4 justify-center items-center">
                  <input
                    className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                    type="text"
                    id="fname"
                    name="fname"
                  />
                  <FaFileImage size={50} color="white" />
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-4 justify-center items-center">
                  <input
                    className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                    type="text"
                    id="fname"
                    name="fname"
                  />
                  <FaFileImage size={50} color="white" />
                </div>

                <div className="flex flex-row gap-4 justify-center items-center">
                  <input
                    className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                    type="text"
                    id="fname"
                    name="fname"
                  />
                  <FaFileImage size={50} color="white" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {!isDone ? (
          <button className="ml-10" onClick={handleData}>
            <a
              href="#_"
              className="inline-flex items-center ml-36 w-full px-10 py-3 mt-10  text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
            >
              Submit
            </a>
          </button>
        ) : (
          <p className="text-xl ml-10 text-white">
            Details Submitted move to next page...if you want to edit the
            details you can edit it later
          </p>
        )}
      </form>
    </div>
  );
};

export default AddMoreDetails2;
