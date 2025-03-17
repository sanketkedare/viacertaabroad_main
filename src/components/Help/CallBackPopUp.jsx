import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const CallBackPopup = ({ setCallbackOpen }) => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = () => {
    if (!/^[0-9]{10}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("Your request has been submitted successfully!");
    setTimeout(() => setCallbackOpen(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50 lg:backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Content */}
        <motion.div
          className="p-6 rounded-lg shadow-lg max-w-md w-full relative bg-[#fff]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <motion.button
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
            onClick={() => setCallbackOpen(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoMdClose size={24} />
          </motion.button>

          {/* Popup Content */}
          <h2 className="text-xl font-semibold mb-2">Request a Call Back</h2>
          <p className="text-gray-600 text-sm mb-4">
            Let us help guide you towards your career path.
          </p>

          {/* Phone Input */}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-2">
            <span className="bg-gray-200 px-3 py-2">+91</span>
            <input
              type="number"
              placeholder="Enter Your Mobile"
              className="w-full p-2 focus:outline-none"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4">
            Non-biased career guidance. Counseling based on your skills and
            preference. We will call between <b>9 AM - 9 PM</b>.
          </p>

          {/* Submit Button */}
          <motion.button
            className="w-full bg-[#152347] text-white py-2 rounded-md transition"
            onClick={handleSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Call Back
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CallBackPopup;