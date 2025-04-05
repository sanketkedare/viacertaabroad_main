import React from "react";
import { IoStarSharp } from "react-icons/io5";

const KeyBenifits = ({ obj }) => {
  return (
    <div className="py-10 grid lg:grid-cols-4 items-center w-10/12 m-auto">
      <div className="col-span-3 ">
        <p className="lg:text-3xl p-3 font-bold">{obj.heading}</p>
        <div className="p-5 bg-[#F4A26121] w-4/5 ">
          <div className="flex flex-col gap-3">
            {obj.items.map((i) => (
              <div className="flex gap-3 items-center">
                <span className="rounded-full bg-white p-2 shadow-2xl text-[#E00004]">
                  <IoStarSharp />
                </span>

                <p>{i}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ml-0 w-4/5 h-full overflow-hidden">
        <img
          src="https://img.freepik.com/premium-photo/female-doctor-with-stethoscope-around-her-neck_947814-97221.jpg?w=360"
          alt="mbbs"
          loading="lazy"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};

export default KeyBenifits;
