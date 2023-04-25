import Image from "next/image";
import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../../public/assets/images/newlogo.jpg";
import signup from "../../public/assets/images/signup.jpeg";
import signupMan from "../../public/assets/images/signup_man.png";
import login from "../../public/assets/images/login.gif";
import React, { useState } from "react";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import axios from "axios";
import { signInWithGoogle } from "@/Firebase";

const Navbar = () => {
  const [uName, setName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [personalEmail, setEmail] = useState("");
  const [userIdEmail, setUserIdEmail] = useState("");
  const router = useRouter();

  const [nav, setNav] = useState(false);
  const [navi, setNavi] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleNavi = () => {
    setNavi(!navi);
  };

  function signUp() {
    axios
      .post("https://nutty-buckle-wasp.cyclic.app/user/signup", {
        email: personalEmail,
        password: userPassword,
        name: uName,
      })
      .then((response) => {
        // localStorage.setItem("name", response.data);

        toast.success("Success! Redirecting", {
          position: toast.POSITION.TOP_CENTER,
        });

        localStorage.setItem("userid", JSON.stringify(response.data.id));
        router.push("/SIgnupOtpScreen");
      })
      .catch((err) => {
        toast.error("Error" + err, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  }

  function signIn() {
    // axios
    //   .post("http://localhost:3000/user/login/verify", {
    //     email: personalEmail,
    //     password: userPassword,
    //   })
    //   .then((response) => {
    //     setPost(response.data);
    //     toast.success("Success! Redirecting", {
    //       position: toast.POSITION.TOP_CENTER,
    //     });
    //     router.replace("/WelcomeBack");
    //   })
    //   .catch((err) => {
    //     toast.error("Error" + err, {
    //       position: toast.POSITION.TOP_CENTER,
    //     });
    //   });
    router.push("/SigninOtpScreen");
  }
  return (
    <div
      data-aos="fade-right"
      className=" bg-gradient-to-r from-container-blue to-blue-600  w-full  h-[80px] fixed shadow-2xl drop-shadow-2xl text-white font-bold z-[200] "
    >
      <ToastContainer />
      <div className=" flex justify-between items-center w-full px-5">
        <div className="relative flex flex-row w-16 h-16 mt-2  object-fill">
          <Image
            className="rounded-full border border-gray-100 shadow-sm"
            src={logo}
            alt="user image"
          />
          <h1 className="mt-5 ml-5">PROFILE</h1>
          <h1 className="mt-5 ml-2">MATES </h1>
        </div>
        <div className="mt-5 ">
          <ul className="hidden md:flex flex-row">
            <Link href="/">
              <li className=" ml-10 text-sm uppercase  hover:rounded-full hover:bg-slate-100 hover:w-auto hover:text-black hover:text-lg hover:px-2">
                Home
              </li>
            </Link>
            <Link href="/#aboutus">
              <li className=" ml-10 text-sm uppercase  hover:rounded-full hover:bg-slate-100 hover:w-auto hover:text-black hover:text-lg hover:px-2">
                About us
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={handleNavi}
                className=" ml-10 text-sm uppercase  hover:rounded-full hover:bg-slate-100 hover:w-auto hover:text-black hover:text-lg hover:px-2"
              >
                Login
              </li>
            </Link>
            <Link onClick={handleNav} href="/">
              <li className=" ml-10 text-sm uppercase  hover:rounded-full hover:bg-slate-100 hover:w-auto hover:text-black hover:text-lg hover:px-2">
                Sign-up
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {/* signup */}
      <div
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-black/90 flex items-center justify-center"
        }
      >
        <div onClick={handleNav} className=" absolute top-0 right-0 pr-2">
          <AiFillCloseCircle size={50} />
        </div>
        <div
          className={
            "fixed flex flex-row  h-[500px] w-[1000px] rounded-2xl shadow-2xl shadow-white/20 "
          }
        >
          <Image
            className="relative"
            width={500}
            height={500}
            src={signup}
            alt="signup"
          ></Image>
          <Image
            className="absolute inset-x-0 bottom-0 left-40"
            width={200}
            height={200}
            src={signupMan}
            alt="signup"
          ></Image>

          <div className="w-full  text-black">
            <div className="bg-white bg-opacity-50 w-full h-full rounded drop-shadow-lg text-white">
              <h1 className="text-center text-4xl  ">SIGN UP</h1>
              <div className="text-white px-5 mt-5">
                <h1 className="mt-5">NAME</h1>
                <input
                  type="text"
                  value={uName}
                  placeholder="Enter your Name "
                  onChange={(e) => setName(e.target.value)}
                  className=" border-white bg-white bg-opacity-50 w-full h-10  drop-shadow-lg "
                />
                <h1 className="mt-5">Email</h1>
                <input
                  type="text"
                  placeholder="Enter your Password "
                  value={personalEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" border-white bg-white bg-opacity-50 w-full h-10  drop-shadow-lg "
                />

                <h1 className="mt-5">PASSWORD</h1>
                <input
                  type="password"
                  placeholder="Enter your Password "
                  value={userPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" border-white bg-white bg-opacity-50 w-full h-10  drop-shadow-lg "
                />

                <div className="flex items-center mt-5">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree with the
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
                <button onClick={signUp}>
                  <a
                    href="#_"
                    className="inline-flex items-center w-full px-10 py-3 mt-10 ml-36 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
                  >
                    SIGN UP
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* login */}
      <div
        className={
          !navi
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-black/90 flex items-center justify-center "
        }
      >
        <div onClick={handleNavi} className=" absolute top-0 right-0 pr-2">
          <AiFillCloseCircle size={50} />
        </div>

        <div
          className={
            "fixed flex flex-row  h-[500px] w-[1000px]  shadow-2xl shadow-white/20 "
          }
        >
          <Image
            className="relative"
            width={500}
            height={500}
            src={login}
            alt="login"
            loading="lazy"
          />

          <div className="w-full  text-black">
            <div className="bg-white bg-opacity-50 w-full h-full rounded drop-shadow-lg text-white">
              <h1 className="text-center text-4xl  ">LOGIN</h1>
              <div className="text-white px-5 mt-20">
                <h1 className="mt-5">EMAIL OR PHONE-NO</h1>
                <input
                  type="text"
                  value={personalEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Phone-No or Email"
                  className=" border-white bg-white bg-opacity-50 w-full h-10  drop-shadow-lg "
                />
                <h1 className="mt-5">PASSWORD</h1>
                <input
                  type="text"
                  value={userPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password "
                  className=" border-white bg-white bg-opacity-50 w-full h-10  drop-shadow-lg "
                />
                <button
                  onClick={signIn}
                  className="inline-flex items-center w-full px-10 py-3 mt-10 ml-36 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
                >
                  Lets Go
                  <svg
                    className="w-4 h-4 ml-2"
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
                </button>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                  <div className="absolute px-5 text-black bg-white">Or</div>
                </div>
                <div className="flex mt-4 gap-x-2 hover:bg-black ">
                  <button
                    onClick={signInWithGoogle}
                    type="button"
                    className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                  >
                    <svg
                      xmlns="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                  </button>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                  Dont have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-purple-600 hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
