import { setUser } from '@/Redux/authSlice';
import { storeCredentials } from '@/Utils/helpers';
import { Mail } from 'lucide-react';
import React, { useState } from 'react';
import { MdPassword } from 'react-icons/md';
import { useDispatch } from 'react-redux';

const Login = ({ setSignInOpen }) => {
  const dispatch = useDispatch();
  const [forgetPassword, setForgetPassword] = useState(false);// done
  const [resetPassword, setResetPassword] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);

  const [message, setMessage] = useState({ show: false, success: false, message: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [OTP, setOTP] = useState("");

  const genrateOtp = async() =>
  {
    const API = "/api/user/(password)/forgot-password."

    try 
    {
      const response = await fetch(API, { method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email})});

      const JSON = response.json();

      if(response.ok)
      {
        setMessage({
          show: true,
          success: true,
          message: "OTP Verified! Logged in Successfully.",
        });

      }
      else{
        setMessage({
          show: true,
          success: false,
          message: "Error while genrating OTP",
        });
      }
      
    } 
    
    catch (error) {
      console.log(error)
      
    }

  }

  const forgetPasswordHandler = () => {
    setForgetPassword(false);
    setResetPassword(true);
    setMessage({ show: false, success: false, message: "" });
  };

  const successfulLogin = async (data) => {
    setMessage({
      show: true,
      success: true,
      message: "Logged in Successfully!",
    });
    setTimeout(() => setSignInOpen(false), 1500);

    const userDataURL = "/api/user/getdata/";
    const decoded = await parseAndVerifyJwt(data?.token);
    const response = await fetch(`${userDataURL}${decoded?.email}`);
    const userData = await response.json();

    dispatch(setUser(userData?.user));
    storeCredentials(userData?.user);
  };

  const loginHandler = async () => {
    const LOGIN_URL = "/api/user/login";
    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        successfulLogin(data);
      } else if (response.status === 401) {
        setForgetPassword(true);
        setMessage({ show: true, success: false, message: "Wrong Password" });
      } else {
        setMessage({
          show: true,
          success: false,
          message: data.message,
        });
      }
    } catch (error) {
      setMessage({
        show: true,
        success: false,
        message: "Network error. Please try again.",
      });
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (otpRequested) {
      setOtpRequested(true);
      setMessage({
        show: true,
        success: true,
        message: "OTP Generated! Please check your email.",
      });
    } else if ( resetPassword) {
      await genrateOtp()
    } else {
      await loginHandler();
    }
  };

  return (
    <form
      onSubmit={submitData}
      className="lg:w-[80%] mb-4 bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="flex flex-col gap-4 py-2">
        {message.show && (
          <div
            className={`p-2 text-white rounded-md ${
              message.success ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {message.message}
          </div>
        )}

        <div className="flex items-center border rounded-md p-2">
          <Mail className="mr-2 text-gray-500" />
          <input
            required
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 p-2 outline-none"
          />
        </div>

        {!otpRequested && !resetPassword && (
          <div className="flex items-center border rounded-md p-2">
            <MdPassword className="mr-2 text-gray-500" />
            <input
              required
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 p-2 outline-none"
            />
          </div>
        )}

        {otpRequested && (
          <div className="flex items-center border rounded-md p-2">
            <input
              required
              type="number"
              placeholder="Enter OTP"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
              className="flex-1 p-2 outline-none"
            />
          </div>
        )}

        {forgetPassword && (
          <b
            className="italic text-[#2c21b6] cursor-pointer"
            onClick={forgetPasswordHandler}
          >
            Click here if forgot password
          </b>
        )}

        <button
          className="w-full bg-[#152347] text-white p-2 rounded-md cursor-pointer"
          type="submit"
        >
          {otpRequested ? "Verify OTP" : resetPassword ? "Generate OTP" : "Log in"}
        </button>
      </div>
    </form>
  );
};

export default Login;
