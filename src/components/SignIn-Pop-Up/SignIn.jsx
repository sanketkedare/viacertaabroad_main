import Form from "./Form";
import { benefits, SIGN_IN, SIGN_UP } from "./utils";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useState } from "react";

const SignIn = ({ signInOpen, setSignInOpen }) => {
  const [mode, setMode] = useState(SIGN_IN);

  return (
    <>
      {signInOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 lg:backdrop-blur-sm"
          onClick={() => setSignInOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[#fff]  shadow-xl lg:w-2/3 w-full lg:min-h-3/4 min-h-screen relative flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-gray-500 hover:text-black cursor-pointer p-1"
              onClick={() => setSignInOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Left Section */}
            <div className="lg:w-1/2 text-black relative overflow-hidden">
              {/* {mode === SIGN_UP && (
                <div className="my-4">
                  <p className="text-xl font-semibold text-center mb-2">
                    Benefits of Signing Up
                  </p>
                  <ul className="list-disc pl-5 text-gray-700">
                    {benefits.map((item, index) => (
                      <li key={index} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}
              <div className="absolute w-full h-full bottom-0">
                <img
                  className="hidden object-center lg:flex h-full w-full"
                  src="/signin.png"
                  alt="Login Illustration"
                  title="Login"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0">
                <img
                  className="hidden object-center lg:flex w-full"
                  src="/frame/image1.png"
                  alt="Login Illustration"
                  title="Login"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 flex text-black   flex-col justify-center items-center lg:p-4">
              <img
                src="/viaCerta-logo.png"
                className="w-[100px] m-auto"
                alt="Logo"
              />
              <p className="font-bold lg:text-2xl text-xl ">
                {mode === SIGN_IN ? (
                  <p>
                    Welcome Back To{" "}
                    <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
                      ViaCerta
                    </span>
                  </p>
                ) : (
                  <p>
                    Create Your{" "}<span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
                       Account
                    </span>
                  </p>
                )}
              </p>
              <Form mode={mode} setSignInOpen={setSignInOpen} />

              {/* Switch between Sign In & Sign Up */}
              <p className="lg:mt-4 text-gray-700">
                {mode === SIGN_UP
                  ? "Already have an account?"
                  : "Don’t have an account?"}{" "}
                <button
                  onClick={() => setMode(mode === SIGN_IN ? SIGN_UP : SIGN_IN)}
                  className="text-blue-600 font-semibold hover:underline ml-1 my-4"
                >
                  {mode === SIGN_UP ? "Sign In" : "Sign Up"}
                </button>
              </p>

              {/* Terms & Conditions for Sign Up */}
              {mode === SIGN_UP && (
                <p className="text-sm text-gray-600 mt-2">
                  By signing up, you agree to our{" "}
                  <a
                    href="/"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Terms & Conditions
                  </a>
                  .
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SignIn;
