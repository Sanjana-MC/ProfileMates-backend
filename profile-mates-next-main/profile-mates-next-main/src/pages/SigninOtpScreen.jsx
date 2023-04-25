import { useRouter } from "next/router";
import React, { useState } from "react";
import { Link } from "react-scroll";

const SigninOtpScreen = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.replace("/WelcomeBack");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-container-blue to-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              OTP Verification
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="otp" className="sr-only">
                  OTP
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  autoComplete="off"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  required
                  autoFocus
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Enter OTP"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm"></div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SigninOtpScreen;
