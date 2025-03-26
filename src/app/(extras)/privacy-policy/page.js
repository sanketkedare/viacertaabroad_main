import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-center items-center py-4 bg-[#2c31b6] gap-4 md:gap-10 px-4">
        <img
          className="h-16 md:h-24 rounded-xl border bg-white"
          src="/viaCerta-logo.png"
          alt="ViaCerta Abroad - Study Abroad Scholarships"
        />
        <div className="text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white">ViaCerta Abroad</h1>
          <small className="text-white italic md:text-base">
            Your Study Abroad Dream, We'll Make It Happen
          </small>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At ViaCerta Abroad, we respect your privacy and are committed to protecting your personal data.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <p>
          We collect personal information such as your name, email, phone number, and academic details to assist with study abroad opportunities.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <ul className="list-disc pl-6">
          <li>To provide visa assistance and university admissions guidance.</li>
          <li>To communicate updates and relevant offers.</li>
          <li>To enhance user experience and improve our services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Data Protection</h2>
        <p>
          We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Sharing</h2>
        <p>
          We do not sell or rent your data. However, we may share information with universities and official partners when required for application processing.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies and Tracking</h2>
        <p>
          Our website may use cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
        <p>
          You have the right to access, update, or request deletion of your personal data. Contact us for any privacy-related concerns.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p>
          If you have any questions regarding our privacy policy, please reach out to us at:
        </p>
        <p className="font-semibold">Email: info@viacertaabroad.com</p>
        <p className="font-semibold">Phone: +91 83768 95692</p>
      </main>
      
      <footer className="bg-gray-900 text-white text-center p-4 mt-auto">
        <p>&copy; {new Date().getFullYear()} ViaCerta Abroad. All rights reserved.</p>
        <p className="text-sm">Follow us on social media for updates.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
