import React, { useState } from "react";
import { X } from "lucide-react";
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap } from "react-icons/fa";
import axios from "axios";

const Form = ({ setFormOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    examStatus: "12th Exam",
    country: "Russia",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const countries = [
    { name: "Russia", flag: "https://flagpedia.net/data/flags/h80/ru.png" },
    { name: "Kazakhstan", flag: "https://flagpedia.net/data/flags/h80/kz.png" },
    { name: "Kyrgyzstan", flag: "https://flagpedia.net/data/flags/h80/kg.png" },
    {
      name: "Philippines",
      flag: "https://flagpedia.net/data/flags/h80/ph.png",
    },
    { name: "Uzbekistan", flag: "https://flagpedia.net/data/flags/h80/uz.png" },
    { name: "Georgia", flag: "https://flagpedia.net/data/flags/h80/ge.png" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (countryName) => {
    setFormData({ ...formData, country: countryName });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (!formData.name || !formData.email || !formData.number) {
        setMessage("❌ Please fill in all required fields.");
        setLoading(false);
        return;
      }

      const response = await axios.post("/api/campaign/mbbs", formData);

      if (response.status === 200) {
        setMessage("✅ Application submitted successfully!");
        setTimeout(() => setFormOpen(false), 2000);
      } else {
        setMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("❌ Failed to submit. Please check your internet connection.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-9/12 space-y-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-3xl font-extrabold text-[#152347]">
            Apply for Scholarship
          </h2>
          <X
            className="cursor-pointer text-gray-500 hover:text-[#152347]"
            size={28}
            onClick={() => setFormOpen(false)}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center border border-gray-300 rounded-xl p-3">
            <FaUser className="text-[#152347] mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full focus:outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-xl p-3">
            <FaEnvelope className="text-[#152347] mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full focus:outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-xl p-3">
            <FaPhone className="text-[#152347] mr-3" />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              className="w-full focus:outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-xl p-3">
            <FaGraduationCap className="text-[#152347] mr-3" />
            <select
              name="examStatus"
              value={formData.examStatus}
              onChange={handleChange}
              className="w-full focus:outline-none"
            >
              <option value="12th Exam">12th Exam</option>
              <option value="NEET Dropper">NEET Dropper</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-evenly border border-gray-300 rounded-xl p-3">
            {countries.map((country) => (
              <button
                key={country.name}
                type="button"
                className={`flex items-center gap-2 p-2 rounded-xl transition-all duration-200 ${
                  formData.country === country.name
                    ? "bg-[#152347] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleCountrySelect(country.name)}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-5 h-5"
                />
                {country.name}
              </button>
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#152347] text-white rounded-xl hover:bg-[#1c2b57] transition duration-200 font-bold"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          {message && (
            <div
              className={`mt-5 text-center text-lg ${
                message.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
