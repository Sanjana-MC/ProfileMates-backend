import React, { useState } from "react";
import axios from "axios";

const AddMoreDetails = (props) => {
  const [isDone, setdone] = useState(false);
  const [references, setReferences] = useState([{ name: "", contact: "" }]);
  const [indexx, setIndex] = useState(0);
  const handleInputReferencesChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...references];
    list[index][name] = value;
    setReferences(list);
    console.log(references);
  };

  const handleAddClick = () => {
    setReferences([...references, { name: "", contact: "" }]);
    setIndex((currindex) => currindex + 1);
  };

  const handleRemoveClick = (index) => {
    const list = [...references];
    list.splice(index, 1);
    setReferences(list);
    setIndex((currindex) => currindex - 1);
  };

  //  const handleSubmit = (event) => {
  //    event.preventDefault();
  //    axios
  //      .post("/api/references", references)
  //      .then((response) => {
  //        console.log(response.data);
  //      })
  //      .catch((error) => {
  //        console.log(error);
  //      });
  //  };
  const [education, setEducation] = useState({
    Primary: {
      Institution_name: "",
      Year_of_pass: "",
      Score: "",
    },
    Higher: {
      Institution_name: "",
      Year_of_pass: "",
      Score: "",
    },
    UG: {
      Institution_name: "",
      Year_of_pass: "",
      Score: "",
    },
    PG: {
      Institution_name: "",
      Year_of_pass: "",
      Score: "",
    },
  });
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("/api/education", education)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [eduLevel, field] = name.split(".");
    setEducation((prevState) => ({
      ...prevState,
      [eduLevel]: {
        ...prevState[eduLevel],
        [field]: value,
      },
    }));
    console.log(education);
  };
  const sendDataToParent = (data, done) => {
    props.onDataReceived(data, done);
  };
  const handleData = () => {
    setdone(true);
    sendDataToParent(education, true);
  };
  return (
    <form>
      <div className="flex flex-row ">
        <div className="flex flex-col ">
          <div className="flex flex-row mt-2">
            <div className="flex text-white  text-md font-sans ml-5  flex-col  font-extrabold">
              <label htmlFor="fname " className="text-white">
                Education:
              </label>
              <label>
                Primary Institution Name:
                <input
                  className="w-40 text-black   rounded-xl py-1 ml-[15px] caret-black focus:caret-red-500 "
                  type="text"
                  name="Primary.Institution_name"
                  value={education.Primary.Institution_name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Primary Year of Pass:
                <input
                  className="w-40 text-black   rounded-xl py-1 ml-[15px] caret-black focus:caret-red-500 "
                  type="text"
                  name="Primary.Year_of_pass"
                  value={education.Primary.Year_of_pass}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Primary Score:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[90px] caret-black focus:caret-red-500 "
                  type="text"
                  name="Primary.Score"
                  value={education.Primary.Score}
                  onChange={handleInputChange}
                />
              </label>
              <label className="mt-10">
                Higher Institution Name:
                <input
                  className="w-40 text-black   rounded-xl py-1 ml-[15px] caret-black focus:caret-red-500 "
                  type="text"
                  name="Higher.Institution_name"
                  value={education.Higher.Institution_name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Higher Year of Pass:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[50px] caret-black focus:caret-red-500 "
                  type="text"
                  name="Higher.Year_of_pass"
                  value={education.Higher.Year_of_pass}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Higher Score:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[90px] caret-black focus:caret-red-500 "
                  type="text"
                  name="Higher.Score"
                  value={education.Higher.Score}
                  onChange={handleInputChange}
                />
              </label>
              <label className="mt-10">
                UG Institution Name:
                <input
                  className="w-40 mt-4 text-black  rounded-xl py-1 ml-[50px] caret-black focus:caret-red-500 "
                  type="text"
                  name="UG.Institution_name"
                  value={education.UG.Institution_name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                UG Year of Pass:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[50px] caret-black focus:caret-red-500 "
                  type="text"
                  name="UG.Year_of_pass"
                  value={education.UG.Year_of_pass}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                UG Score:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[90px] caret-black focus:caret-red-500 "
                  type="text"
                  name="UG.Score"
                  value={education.UG.Score}
                  onChange={handleInputChange}
                />
              </label>
              <label className="mt-10">
                PG Institution Name:
                <input
                  className="w-40 mt-4 text-black  rounded-xl py-1 ml-[50px] caret-black focus:caret-red-500 "
                  type="text"
                  name="PG.Institution_name"
                  value={education.PG.Institution_name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                PG Year of Pass:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[50px] caret-black focus:caret-red-500 "
                  type="text"
                  name="PG.Year_of_pass"
                  value={education.PG.Year_of_pass}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                PG Score:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[90px] caret-black focus:caret-red-500 "
                  type="text"
                  name="PG.Score"
                  value={education.PG.Score}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="flex mt-5 flex-col ml-20 gap-4 font-extrabold">
              <label htmlFor="fname" className="text-white">
                Languages Known:
              </label>
              <input
                className="w-80 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="fname"
                name="fname"
              />
              <input
                className="w-80 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="fname"
                name="fname"
              />
              <input
                className="w-80 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="fname"
                name="fname"
              />
              <input
                className="w-80 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="fname"
                name="fname"
              />
              <div className="flex flex-col  text-white text-md font-sans   font-extrabold mt-5">
                <label htmlFor="fname">References:</label>
                {references.map((reference, index) => {
                  return (
                    <div key={index} className="mt-1">
                      <label>Name:</label>
                      <input
                        className="w-36 text-black rounded-xl py-2 ml-5 mr-5 caret-black focus:caret-red-500"
                        type="text"
                        name="name"
                        value={reference.name}
                        onChange={(event) =>
                          handleInputReferencesChange(event, index)
                        }
                        required
                      />

                      <label>Contact:</label>
                      <input
                        className="w-36 text-black rounded-xl py-2 ml-5 caret-black focus:caret-red-500"
                        type="text"
                        name="contact"
                        value={reference.contact}
                        onChange={(event) =>
                          handleInputReferencesChange(event, index)
                        }
                        required
                      />
                    </div>
                  );
                })}
                <div className="flex-row ml-20">
                  {indexx < 3 && (
                    <button onClick={handleAddClick}>
                      <a
                        href="#_"
                        className="inline-flex items-center w-full px-10 py-3 mt-10  text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
                      >
                        Add
                      </a>
                    </button>
                  )}

                  <button className="ml-10" onClick={handleRemoveClick}>
                    <a
                      href="#_"
                      className="inline-flex items-center w-full px-10 py-3 mt-10 ml-16 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
                    >
                      Remove
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {!isDone ? (
            <button
              className="absolute bottom-2 right-[500px]"
              onClick={handleData}
            >
              <a
                href="#_"
                className="inline-flex  ml-36 items-center w-full px-10 py-3 mt-10  text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
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
        </div>
      </div>
    </form>
  );
};

export default AddMoreDetails;
