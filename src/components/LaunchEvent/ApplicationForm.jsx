import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; 
import { MdSend } from "react-icons/md";

const ApplicationForm = ({ setFormOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    contactNo: "",
    countryPreference: "",
    degree: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);

    try {
      const response = await fetch("https://campaign-backend-viacerta.onrender.com/user/new_user/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("🎉 Application submitted successfully!");
        setFormOpen(false);
      } else {
        alert("⚠️ Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("❌ An error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 px-4 bg-gray-900/70 backdrop-blur-md">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-800 text-white rounded-lg shadow-2xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg relative">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">📋 Apply Now</h2>
          <button 
            onClick={() => setFormOpen(false)} 
            className="text-white hover:text-red-400 text-xl transition"
            aria-label="Close form"
          >
            <FaTimes />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="tel"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="Contact Number"
            required
            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
          />

          <select
            name="countryPreference"
            value={formData.countryPreference}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select a country</option>
            <option value="UK">United Kingdom</option>
            <option value="Germany">Germany</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
            <option value="France">France</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select a degree</option>
            <option value="Bachelors">Bachelor’s</option>
            <option value="Masters">Master’s</option>
            <option value="PhD">Ph.D.</option>
            <option value="Not Decided">Not Decided</option>
          </select>

          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select a year</option>
            <option value="May 2025">May 2025</option>
            <option value="Sep 2025">September 2025</option>
            <option value="Year 2026">Year 2026</option>
          </select>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full flex items-center justify-center gap-2 bg-green-500 py-3 rounded-lg font-bold text-white hover:bg-green-600 transition"
          >
            <MdSend className="text-xl" /> Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
