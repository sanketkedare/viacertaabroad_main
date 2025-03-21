import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import IconDropdown from "../Profile/IconDropdown";

const SignInButton = ({setSignInOpen}) => {
  const user = useSelector((state) => state.user.user);

  return (
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
  );
};

export default SignInButton;
