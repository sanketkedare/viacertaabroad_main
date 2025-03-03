import React, { useState } from "react";
import { Mail, Phone, User } from "lucide-react";

const Form = ({ mode }) => {
  const [loginWithEmail, setLoginWithEmail] = useState(false);

  return (
    <div className="lg:w-[80%]  mb-4 bg-white p-6 rounded-xl shadow-lg">
      <div className="flex flex-col gap-4 py-2">
        {mode === "Sign Up" && (
          <>
            <div className="flex items-center border rounded-md p-2">
              <User className="mr-2 text-gray-500" />
              <input className="flex-1 p-2 outline-none" placeholder="Enter Your Name" />
            </div>
            <div className="flex items-center border rounded-md p-2">
              <Mail className="mr-2 text-gray-500" />
              <input className="flex-1 p-2 outline-none" placeholder="Enter Your Email" />
            </div>
          </>
        )}

        <div className="flex items-center border rounded-md p-2">
          {loginWithEmail ? <Mail className="mr-2 text-gray-500" /> : <Phone className="mr-2 text-gray-500" />}
          <input
            className="flex-1 p-2 outline-none"
            placeholder={loginWithEmail ? "Enter Email here" : "Enter Your Number"}
          />
        </div>
        
        <button className="w-full bg-[#152347] text-white p-2 rounded-md">Request OTP</button>
        {mode === "Sign In" && (
          <button
            className="w-full text-[#152347] border border-[#152347] p-2 rounded-md cursor-pointer"
            onClick={() => setLoginWithEmail((prev) => !prev)}
          >
            Log in using {loginWithEmail ? "Mobile" : "Email"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
