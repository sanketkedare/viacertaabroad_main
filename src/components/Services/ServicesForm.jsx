import React, { useState } from "react";
import { motion } from "framer-motion";
import PopupComponent from "./PopUp";

const ServicesForm = () => {
  const URL = "/api/enquiry_form";
  const [success, setSuccess] = useState(false);

  const [message, setMessage] = useState({
    show: false,
    success: false,
    message: "",
  });
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "mobile") {
      if (value.length > 10) {
        setMessage({
          show: true,
          success: false,
          message: "Only 10-digit mobile numbers are allowed.",
        });
        return;
      }
      if (!/^[0-9]*$/.test(value)) {
        return; // Prevents non-numeric input
      }
    }
  
    setFormData({ ...formData, [name]: value });
  };
  

  const validateForm = () => {
    const { name, email, mobile } = formData;
    if (!name.trim() || !email.trim() || !mobile.trim()) {
      setMessage({
        show: true,
        success: false,
        message: "All fields are required.",
      });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({
        show: true,
        success: false,
        message: "Invalid email address.",
      });
      return false;
    }
    if (!/^[0-9]{10}$/.test(mobile)) {
      setMessage({
        show: true,
        success: false,
        message: "Invalid mobile number.",
      });
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

      console.log(data)

      if (response.ok) {
        setSuccess(true);
        setMessage({
          show: true,
          success: true,
          message: "Form submitted successfully!",
        });
        setFormData({ name: "", email: "", mobile: "" });
      } else {
        setMessage({
          show: true,
          success: false,
          message: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setMessage({
        show: true,
        success: false,
        message: "Network error. Please try again.",
      });
    }
    setLoading(false);
  };

  return (
    <>
      {success && <PopupComponent onClose={setSuccess} />}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className=" lg:col-span-1 bg-white rounded-xl shadow-lg z-30 m-auto w-full lg:min-h-[400px]"
      >
        <div className="rounded-xl  w-full text-center bg-[#A6A6FF3D] font-bold">
          <p className="p-5 text-[#1E1E8C]">
            Drop your details & let's connect!
          </p>
        </div>

        <div className="lg:py-5 h-full w-full justify-center ">
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            {["name", "email", "mobile"].map((field, index) => (
              <div className="px-5" key={field}>
                <label htmlFor={field} className="font-bold block mb-1">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <motion.input
                  id={field}
                  type={field}
                  name={field}
                  placeholder={`Enter  Full ${field}`}
                 value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                />
              </div>
            ))}

            {message.show && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center text-sm ${
                  message.success ? "text-green-500" : "text-red-500"
                } mt-3`}
              >
                {message.message}
              </motion.p>
            )}

            <div className="flex justify-center mt-5">
              <motion.button
                type="submit"
                className="w-[200px] mb-3 flex justify-center items-center gap-3 bg-[#E00012] text-white lg:text-lg font-semibold py-2 rounded-md  transition"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? "Submitting..." : "Apply Now"}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default ServicesForm;
