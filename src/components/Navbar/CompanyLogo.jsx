import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CompanyLogo = ({ scrolled }) => {
  const path = usePathname();

  return (
    <Link href="/home">
      <div className="lg:w-[120px] w-[100px] p-4 flex ">
        <img
          className="object-contain cursor-pointer  rounded-full lg:mt-0 mt-0"
          src={` ${
            path === "/home"
              ? scrolled
                ? "/viaCerta-logo.png"
                : "/viacertaLogo-white.png"
              : "/viaCerta-logo.png"
          }`}
          alt="Logo"
        />
      </div>
    </Link>
  );
};

export default CompanyLogo;
