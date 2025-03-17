"use client";

import React, { useState } from "react";
import { FaGlobe, FaGraduationCap } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const ApplicationForm = () => {
  const URL = "/api/enquiry_form";

  const [message, setMessage] = useState({ show: false, success: false, message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, mobile } = formData;
    if (!name.trim() || !email.trim() || !mobile.trim()) {
      setMessage({ show: true, success: false, message: "All fields are required." });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage({ show: true, success: true, message: "Form submitted successfully!" });
        setFormData({ name: "", email: "", mobile: "" });
      } else {
        setMessage({ show: true, success: false, message: data.message || "Something went wrong." });
      }
    } catch (error) {
      setMessage({ show: true, success: false, message: "Network error. Please try again." });
    }
    setLoading(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{scale : 1.05}}
      className="lg:w-[400px] bg-white  rounded-xl border-t-8 border-[#f8b62d] shadow-lg p-5 z-30 m-auto"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 lg:text-lg font-semibold">
          <FaGraduationCap className="text-[#2c31b6]" />
          <span className="text-[#2c31b6]">250+ </span>courses
        </div>
        <div className="flex items-center gap-2 lg:text-lg font-semibold">
          <FaGlobe className="text-[#2c31b6]" />
          <span className="text-[#2c31b6]">30 </span>countries
        </div>
      </div>

      <h2 className="lg:text-2xl font-bold mb-4">International Degree Now in Your Budget</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {['name', 'email', 'mobile'].map((field, index) => (
          <motion.input
            key={field}
            type={field === 'mobile' ? 'tel' : field}
            name={field}
            placeholder={`Enter ${field === 'mobile' ? 'Phone Number' : `Full ${field}`}`}
            value={formData[field]}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          />
        ))}

        {message.show && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center text-sm ${message.success ? "text-green-500" : "text-red-500"}`}
          >
            {message.message}
          </motion.p>
        )}

        <motion.button
          type="submit"
          className="w-full flex justify-center items-center gap-3 bg-[#152347] hover:bg-[#31343b] text-white lg:text-lg font-semibold py-3 rounded-md transition"
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Submitting..." : "Book Your Free Counseling"} <IoIosArrowForward />
        </motion.button>

        <p className="text-[10px] text-gray-500 text-center mt-2">
          By submitting this form, you agree to the
          <a href="#" className="text-blue-500 underline"> Terms of Use</a> and
          <a href="#" className="text-blue-500 underline"> Privacy Policy</a>.
        </p>
      </form>
    </motion.div>
  );
};

export default ApplicationForm;
