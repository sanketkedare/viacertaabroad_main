import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const PopupComponent = ({ destination = 'Georgia', onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 lg:backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#F7FAFE] rounded-2xl shadow-lg p-8 max-w-2xl w-full"
      >
        <button onClick={()=>onClose(false)} className="absolute top-4 right-4 text-gray-500 cursor-pointer">
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center">
          <img src='/success.png' className=" w-40"></img>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">All Set! <span className="text-green-600">Application received!</span></h2>
          <p className="text-gray-600">Next stop: {destination}. Our team’s sliding into your inbox soon!</p>
        </div>
      </motion.div>
    </div>
  );
};

export default PopupComponent;