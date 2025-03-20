import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";


const OptionsMobile = ({ setSignInOpen, scrolled }) => 
{
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuToggler = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <div className="lg:hidden block " onClick={mobileMenuToggler}>
        {mobileMenuOpen ? (
          <MobileMenu
            mobileMenuToggler={mobileMenuToggler}
            setSignInOpen={setSignInOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        ) : (
          <FaBars
            className={`fixed z-30 top-6 right-4 ${
              scrolled ? "bg-[#152347] text-white" : "bg-white text-[#152347]"
            } p-2 rounded-full text-5xl cursor-pointer transition-colors`}
          />
        )}
      </div>
    </>
  );
};

export default OptionsMobile;
