import React, { useState } from "react";
import Form from "./Form";

const ApplyNow = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setFormOpen(true)}
        className="bg-[#2c21b6] m-auto z-30 p-2 px-4 rounded-xl text-white font-bold text-xl cursor-pointer hover:bg-[#152347]"
      >
        🔥Apply Now 🔥
      </button>
      {formOpen && <Form setFormOpen={setFormOpen}/>}
    </>
  );
};

export default ApplyNow;
