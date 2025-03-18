import React, { useEffect, useState } from "react";
import { Mail, Phone, User } from "lucide-react";
import { SIGN_IN, SIGN_UP } from "./utils";
import { useDispatch } from "react-redux";
import { setUser } from "@/Redux/authSlice";
import parseAndVerifyJwt from "@/Utils/jwtParser";
import { MdPassword } from "react-icons/md";
import { storeCredentials } from "@/Utils/helpers";

const Form = ({ mode, setSignInOpen }) => {
  const dispatch = useDispatch();
  const [forgetPassword, setForgetPassword] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  const [message, setMessage] = useState({
    show: false,
    success: false,
    message: "",
  });
  const [otpRequested, setOtpRequested] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [OTP, setOTP] = useState("");

  const forgetPasswordHandler = () => {
    setMessage({ show: false, success: false, message: "" });
    setForgetPassword(false);
    setResetPassword(true);
  };

  const authHandler = async () => {
    const VERIFY_OTP_URL = "/api/user/signup/verify";
    try {
      const response = await fetch(VERIFY_OTP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: OTP }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(setUser(data?.user));
        storeCredentials(data?.user);
        setMessage({
          show: true,
          success: true,
          message: "OTP Verified Successfully!",
        });
        setTimeout(() => setSignInOpen(false), 1500);
      } else {
        setMessage({
          show: true,
          success: false,
          message: data.message || "Invalid OTP. Please try again.",
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

  const logInHandler = async (data) => {
    setTimeout(() => setSignInOpen(false), 1500);
    setMessage({
      show: true,
      success: true,
      message: "Logged in Successfully!",
    });

    const userDataURL = "/api/user/getdata/";
    const decoded = await parseAndVerifyJwt(data?.token);
    const response = await fetch(`${userDataURL}${decoded?.email}`);
    const userData = await response.json();
    dispatch(setUser(userData?.user));
    storeCredentials(userData?.user);
  };

  const generateOTP = async () => {
    const REGISTER_URL =
      mode === SIGN_UP ? "/api/user/signup" : "/api/user/login";
    try {
      const response = await fetch(REGISTER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, mobile, password }),
      });
      const data = await response.json();

      if (response.ok) {
        if (mode === SIGN_IN) {
          logInHandler(data);
          return;
        }
        setOtpRequested(true);
        setMessage({
          show: true,
          success: true,
          message: "OTP Sent On Email Successfully!",
        });
      } else if (response.status === 401) {
        setForgetPassword(true);
        setMessage({ show: true, success: false, message: "Wrong Password" });
      } else {
        setMessage({
          show: true,
          success: false,
          message: data.message || "Failed to send OTP.",
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
      await authHandler();
    } else {
      await generateOTP();
    }
  };

  const clearData = () => {
    setName("");
    setEmail("");
    setMobile("");
    setPassword("");
    setMessage({ show: false, success: false, message: "" });
    setOtpRequested(false);
    setOTP("");
    setForgetPassword(false);
    setResetPassword(false);
  };

  useEffect(() => {
    clearData();
  }, [mode]);

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
        {mode === SIGN_UP && (
          <div className="flex items-center border rounded-md p-2">
            <User className="mr-2 text-gray-500" />
            <input
              required
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 p-2 outline-none"
            />
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

        {mode === SIGN_UP && (
          <div className="flex items-center border rounded-md p-2">
            <Phone className="mr-2 text-gray-500" />
            <input
              required
              type="text"
              placeholder="Enter Your Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="flex-1 p-2 outline-none"
            />
          </div>
        )}

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
          {mode === SIGN_IN
            ? "Sign in"
            : otpRequested
            ? "Verify OTP"
            : "Generate OTP"}
        </button>
      </div>
    </form>
  );
};

export default Form;
