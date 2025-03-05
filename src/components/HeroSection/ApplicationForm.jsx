"use client";
import React, {useState } from "react";
import { FaGlobe, FaGraduationCap } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const ApplicationForm = () => {
  const URL = "/api/enquiry_form"; // request POST

  const [message, setMessage] = useState({ show: false, success: false, message: "" });  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!name.trim() || !email.trim() || !mobile.trim()) {
      setMessage({ show: true, success: false, message: "All fields are required." });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({ show: true, success: false, message: "Invalid email address." });
      return false;
    }
    if (!/^[0-9]{10}$/.test(mobile)) {
      setMessage({ show: true, success: false, message: "Invalid mobile number." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, mobile })
      });
      const data = await response.json();
      if (response.ok) {
        setMessage({ show: true, success: true, message: "Form submitted successfully!" });
        setName("");
        setEmail("");
        setMobile("");
      } else {
        setMessage({ show: true, success: false, message: data.message || "Something went wrong." });
      }
    } catch (error) {
      setMessage({ show: true, success: false, message: "Network error. Please try again." });
    }
    setLoading(false);
  };

  return (
    <div className="lg:w-[400px] lg:h-[90%] lg:mt-5 bg-white rounded-xl border-t-8 border-[#f8b62d] shadow-lg p-5 z-30">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 lg:text-lg font-semibold">
          <FaGraduationCap className="text-[#2c31b6]" />
          <span className="text-[#2c31b6]">250+ </span>courses
        </div>
        <div className="flex items-center gap-2 lg:text-lg font-semibold">
          <FaGlobe className="text-[#2c31b6]" />
          <span className="text-[#2c31b6]">9 </span>countries
        </div>
      </div>

      {/* Form Title */}
      <h2 className="lg:text-2xl font-bold mb-4">International Degree Now in Your Budget</h2>

      {/* Form Fields */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <div className="flex border border-gray-300 rounded-md mt-1">
            <span className="flex items-center w-20 px-3 text-sm bg-gray-100 border-r">🇮🇳 +91</span>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>

        {message.show && (
          <p className={`text-center text-sm ${message.success ? "text-green-500" : "text-red-500"}`}>
            {message.message}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#152347] hover:bg-[#31343b] text-white lg:text-lg font-semibold py-3 rounded-md transition flex justify-center items-center gap-2"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Book Your Free Counseling"} <IoIosArrowForward />
        </button>

        {/* Terms and Privacy */}
        <p className="text-[10px] m-auto text-gray-500 text-center mt-2 flex flex-wrap gap-2">
          By submitting this form, you agree to the <a href="#" className="text-blue-500 underline">Terms of Use</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a>
        </p>
      </form>
    </div>
  );
};

export default ApplicationForm;