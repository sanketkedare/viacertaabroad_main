import React, { useEffect, useState } from "react";
import { Mail, Phone, User } from "lucide-react";
import { SIGN_IN, SIGN_UP } from "./utils";
import { useDispatch } from "react-redux";

const Form = ({ mode, setSignInOpen }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    show: false,
    success: false,
    message: "",
  });
  const [otpRequested, setOtpRequested] = useState(false);
  const [loginWithEmail, setLoginWithEmail] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState(null);


  const authHandler = async() =>
  {
    const REGISTER_URL = "/api/user/signup" // POST
    const GET_USER_URL = "/api/user/getdata/[:data]"  // Get email or mobile

    if(mode = SIGN_IN)
    {

      // Fetch data from DB
      // Update Redux
    }
    else
    {
      // Send Data to DB
      // Update redux if Data added
      // If error , Send massage

    }

  }
  const validateInputs = () => {
    console.log(loginWithEmail, mobile, email);

    if (mode === SIGN_UP && name.length < 3) {
      setMessage({
        show: true,
        success: false,
        message: "Name must be at least 3 characters long.",
      });
      return false;
    }

    if (loginWithEmail) {
      if (!email.includes("@") || !email.includes(".")) {
        setMessage({
          show: true,
          success: false,
          message: "Enter a valid email address.",
        });
        return false;
      }
    } else {
      if (mobile.length !== 10 || isNaN(mobile)) {
        setMessage({
          show: true,
          success: false,
          message: "Enter a valid 10-digit mobile number.",
        });
        return false;
      }
    }

    return true;
  };

  const generateOTP = () => {
    const myOTP = Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
    setGeneratedOTP(myOTP);
    setOtpRequested(true);
    console.log("Generated OTP:", myOTP);
  };

  const submitData = async (e) => {
    e.preventDefault();

    if (otpRequested) {
      if (parseInt(OTP) === generatedOTP) {
        setMessage({
          show: true,
          success: true,
          message: "OTP Verified Successfully!",
        });
        await authHandler();
        setTimeout(() => setSignInOpen(false), 2000);
      } else {
        setMessage({
          show: true,
          success: false,
          message: "Invalid OTP. Please try again.",
        });
      }
      return;
    }

    if (!validateInputs()) return;

    generateOTP();
    setMessage({
      show: true,
      success: true,
      message: "OTP Sent Successfully!",
    });

  

    console.log(name, email, mobile);
  };

  useEffect(() => {
    setMessage({ show: false, success: false, message: "" });
  }, [mode, loginWithEmail]);

  return (
    <form className="lg:w-[80%] mb-4 bg-white p-6 rounded-xl shadow-lg">
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

        {otpRequested ? (
          <div className="flex items-center border rounded-md p-2">
            <input
              className="flex-1 p-2 outline-none"
              placeholder="Enter OTP"
              type="number"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
            />
          </div>
        ) : (
          <>
            {mode === SIGN_UP && (
              <>
                <div className="flex items-center border rounded-md p-2">
                  <User className="mr-2 text-gray-500" />
                  <input
                    className="flex-1 p-2 outline-none"
                    placeholder="Enter Your Name"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex items-center border rounded-md p-2">
                  <Mail className="mr-2 text-gray-500" />
                  <input
                    className="flex-1 p-2 outline-none"
                    placeholder="Enter Your Email"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </>
            )}

            <div className="flex items-center border rounded-md p-2">
              {loginWithEmail ? (
                <Mail className="mr-2 text-gray-500" />
              ) : (
                <Phone className="mr-2 text-gray-500" />
              )}
              <input
                className="flex-1 p-2 outline-none"
                placeholder={
                  loginWithEmail ? "Enter Email here" : "Enter Your Number"
                }
                value={loginWithEmail ? email : mobile}
                type={loginWithEmail ? "email" : "number"}
                onChange={(e) =>
                  loginWithEmail
                    ? setEmail(e.target.value)
                    : setMobile(e.target.value)
                }
              />
            </div>
          </>
        )}

        <button
          className="w-full bg-[#152347] text-white p-2 rounded-md"
          onClick={submitData}
          type="submit"
        >
          {otpRequested ? "Submit OTP" : "Request OTP"}
        </button>

        {mode === SIGN_IN && (
          <button
            className="w-full text-[#152347] border border-[#152347] p-2 rounded-md cursor-pointer"
            onClick={(event) => {
              event.preventDefault();
              setLoginWithEmail((prev) => !prev);
            }}
          >
            Log in using {loginWithEmail ? "Mobile" : "Email"}
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
