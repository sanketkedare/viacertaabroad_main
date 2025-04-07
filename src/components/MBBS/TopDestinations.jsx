import React from "react";
import { mbbsDestinations } from "./utils";
import Link from "next/link";
import createUrl from "@/Utils/createUrl";

const TopDestinations = () => {
  return (
    <div className="lg:w-10/12 m-auto lg:p-10 p-3">
      <p className="lg:text-[50px] text-3xl font-bold mt-10">
        Top{" "}
        <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
          MBBS
        </span>{" "}
        Destinations Here
      </p>
      <div className="p-4 grid lg:grid-cols-5 grid-cols-2 gap-5 w-full flex-wrap">
        {mbbsDestinations.map((i) => (
          <Link href={`/destinations/${createUrl(i.name)}`}>
            <div className=" border my-2 lg:p-4 p-2 flex gap-2 rounded-xl items-center">
              <img src={i.flag} className="lg:w-10 w-5" />
              <p> {i.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopDestinations;
