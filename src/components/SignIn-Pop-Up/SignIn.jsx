import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { benefits, SIGN_IN, SIGN_UP } from "./utils";
import Form from "./Form";

const SignIn = ({ setSignInOpen }) => {
  const [mode, setMode] = useState(SIGN_IN);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 lg:backdrop-blur-sm"
      onClick={() => setSignInOpen(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#fff] p-6 rounded-2xl shadow-xl lg:w-2/3 w-full lg:min-h-2/3 min-h-screen relative flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer p-1"
          onClick={() => setSignInOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Left Section */}
        <div className="lg:w-1/2 p-4">
          <img src="/viaCerta-logo.png" className="w-[100px] lg:m-0 m-auto" alt="Logo" />
          {mode === SIGN_UP && (
            <div className="my-4">
              <p className="text-xl font-semibold text-center mb-2">Benefits of Signing Up</p>
              <ul className="list-disc pl-5 text-gray-700">
                {benefits.map((item, index) => (
                  <li key={index} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
          )}
          <img
            className="m-auto my-4 hidden lg:flex"
            src="https://ik.imagekit.io/upgrad1/abroad-images/home/images/loginframe.png?tr=w-450,q-70"
            width="450"
            height="301"
            alt="Login Illustration"
            title="Login"
            loading="lazy"
          />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:p-4">
          <p className="font-bold lg:text-2xl text-xl mb-4">
            {mode === SIGN_IN ? "SIGN IN" : "Create Your Account"}
          </p>
          <Form mode={mode} setSignInOpen={setSignInOpen}/>
          
          {/* Switch between Sign In & Sign Up */}
          <p className="lg:mt-4 text-gray-700">
            {mode === SIGN_UP ? "Already have an account?" : "Don’t have an account?"} {" "}
            <button
              onClick={() => setMode(mode === SIGN_IN ? SIGN_UP : SIGN_IN)}
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              {mode === SIGN_UP ? "Sign In" : "Sign Up"}
            </button>
          </p>

          {/* Terms & Conditions for Sign Up */}
          {mode === SIGN_UP && (
            <p className="text-sm text-gray-600 mt-2">
              By signing up, you agree to our {" "}
              <a href="/" className="text-blue-600 font-semibold hover:underline">
                Terms & Conditions
              </a>.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;
