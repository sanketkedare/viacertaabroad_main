import Link from "next/link";
import React from "react";

const CompanyLogo = () => {
  return (
    <Link href="/" className="">
      <img
        className="cursor-pointer lg:h-[70px]"
        src="/viaCerta-logo.png"
        alt="Viacerta Logo"
        title="Viacerta logo"
        loading="lazy"
      />
    </Link>
  );
};

export default CompanyLogo;
