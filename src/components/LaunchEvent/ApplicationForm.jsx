import React, { useState } from "react";

const ApplicationForm = ({ setFormOpen }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    country: "",
    program: "",
    intake: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Application submitted successfully!");
        setFormOpen(false);
      } else {
        alert("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-blend-color-burn flex justify-center items-center z-50 px-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md sm:max-w-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">📋 Apply Now</h2>
          <button onClick={() => setFormOpen(false)} className="text-gray-500 hover:text-red-500 text-xl font-bold">✖</button>
        </div>

        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required className="w-full p-2 border rounded-md" />
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required className="w-full p-2 border rounded-md" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 border rounded-md" />
          <select name="country" value={formData.country} onChange={handleChange} required className="w-full p-2 border rounded-md">
            <option value="">Select a country</option>
            <option value="UK">United Kingdom</option>
            <option value="Germany">Germany</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
            <option value="France">France</option>
            <option value="Other">Other</option>
          </select>
          <select name="program" value={formData.program} onChange={handleChange} required className="w-full p-2 border rounded-md">
            <option value="">Select a program</option>
            <option value="Bachelors">Bachelor’s</option>
            <option value="Masters">Master’s</option>
            <option value="PhD">Ph.D.</option>
            <option value="Not Decided">Not Decided</option>
          </select>
          <select name="intake" value={formData.intake} onChange={handleChange} required className="w-full p-2 border rounded-md">
            <option value="">Select an intake</option>
            <option value="May 2025">May 2025</option>
            <option value="Sep 2025">September 2025</option>
            <option value="Year 2026">Year 2026</option>
          </select>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700 transition">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;