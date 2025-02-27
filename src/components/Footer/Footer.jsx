import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { socialLinks, contactInfo, supportLinks, destinations, mastersPrograms, blogs } from "./utils";

const Footer = () => {
  return (
    <footer className="bg-[#152347] text-white py-12 text-[10px]">
      <div className="container mx-auto px-6 lg:px-20 w-9/12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={contactInfo.logo} alt="Company Logo" className="w-36 mb-4 rounded-full bg-white" />
            <p className="text-gray-300 mb-4">Your trusted study abroad partner.</p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon, href }, index) => {
                const IconComponent = icon === "Facebook" ? Facebook :
                                     icon === "Twitter" ? Twitter :
                                     icon === "Instagram" ? Instagram :
                                     icon === "Linkedin" ? Linkedin : null;
                return (
                  IconComponent && (
                    <a key={index} href={href} className="hover:text-[#f8b62d]">
                      <IconComponent size={24} />
                    </a>
                  )
                );
              })}
            </div>
            <div className="mt-4">
              <p className="flex items-center space-x-2"><Phone size={18} /> <span>{contactInfo.phone}</span></p>
              <p className="flex items-center space-x-2 mt-2"><Mail size={18} /> <span>{contactInfo.email}</span></p>
            </div>
          </div>
          
          {[{ title: "Support", links: supportLinks }, { title: "Destinations", links: destinations }, { title: "Master's Programs", links: mastersPrograms }].map(({ title, links }, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map(({ text, href }, i) => (
                  <li key={i}><a href={href} className="hover:text-[#f8b62d]">{text}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-600 pt-8">
          <h3 className="text-lg font-semibold mb-6 underline">Study Abroad Important Blogs</h3>
          <div className="flex flex-col gap-3">
            {blogs.map(({ title, links }, idx) => (
              <div key={idx } className="">
                <span className="font-semibold mb-4 ">{title} : </span>
                <p className="flex gap-2 flex-wrap">
                  {links.map(({ text, href }, i) => (
                    <span key={i}><a href={href} className="hover:text-[#f8b62d]"> {text} |</a> </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-gray-400 mt-12 border-t border-gray-600 pt-4">
          <p>© 2025 ViaCerta Abroad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
