import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import IconDropdown from "../Profile/IconDropdown";

const OptionsMobile = ({ setSignInOpen, scrolled }) => 
{
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuToggler = () => setMobileMenuOpen(!mobileMenuOpen);
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <div className="hidden lg:flex items-center gap-8">
        {!user && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSignInOpen(true)}
            className="text-white bg-[#E00012] font-bold p-2 rounded-md w-[120px]  transition"
          >
            Sign In
          </motion.button>
        )}
        {user && <IconDropdown />}
      </div>

      <div className="lg:hidden block " onClick={mobileMenuToggler}>
        {mobileMenuOpen ? (
          <MobileMenu
            mobileMenuToggler={mobileMenuToggler}
            setSignInOpen={setSignInOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        ) : (
          <FaBars
            className={`fixed top-6 right-4 ${
              scrolled ? "bg-[#152347] text-white" : "bg-white text-[#152347]"
            } p-2 rounded-full text-5xl cursor-pointer transition-colors`}
          />
        )}
      </div>
    </>
  );
};

export default OptionsMobile;
