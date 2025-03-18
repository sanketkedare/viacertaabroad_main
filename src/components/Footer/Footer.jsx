import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import {
  socialLinks,
  contactInfo,
  supportLinks,
  destinations,
  mastersPrograms,
} from "./utils";
import BlogsLog from "./BlogsLog";

const Footer = () => {
  return (
    <>
      <BlogsLog />
      <div className="h-[100px]"></div>

      <footer className="bg-[#152347] text-white py-12 text-[10px] ">
        <div className="container mx-auto px-6 lg:px-20 lg:w-9/12 lg:text-left text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <img
                src={contactInfo.logo}
                alt="Company Logo"
                className="w-36 mb-4 rounded-full bg-white"
              />
              <p className="text-gray-300 mb-4">
                Your trusted study abroad partner.
              </p>
              <div className="flex space-x-4 lg:justify-normal justify-center">
                {socialLinks.map(({ icon, href }, index) => {
                  const IconComponent =
                    icon === "Facebook"
                      ? Facebook
                      : icon === "Twitter"
                      ? Twitter
                      : icon === "Instagram"
                      ? Instagram
                      : icon === "Linkedin"
                      ? Linkedin
                      : null;
                  return (
                    IconComponent && (
                      <a
                        key={index}
                        href={href}
                        className="hover:text-[#f8b62d]"
                      >
                        <IconComponent size={24} />
                      </a>
                    )
                  );
                })}
              </div>
              <div className="mt-4">
                <p className="flex items-center justify-start space-x-2">
                  <Phone size={18} /> <span>{contactInfo.phone}</span>
                </p>
                <p className="flex items-center  justify-start space-x-2 mt-2">
                  <Mail size={18} /> <span>{contactInfo.email}</span>
                </p>
              </div>
            </div>

            {[
              { title: "Support", links: supportLinks },
              { title: "Destinations", links: destinations },
              { title: "Master's Programs", links: mastersPrograms },
            ].map(({ title, links }, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <ul className="space-y-2">
                  {links.map(({ text, href }, i) => (
                    <li key={i}>
                      <a href={href} className="hover:text-[#f8b62d]">
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center text-gray-400 mt-12 border-t border-gray-600 pt-4">
            <p>© 2025 ViaCerta Abroad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
