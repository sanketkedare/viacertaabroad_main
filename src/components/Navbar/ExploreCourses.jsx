import React, { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { domains, mbaPrograms } from "./utils";
import ProgramCart from "./ProgramCart";

const ExploreCourses = () => {
  const [programs, setPrograms] = useState(mbaPrograms)
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCourrentCountry] = useState(null);

  useEffect(() => {
    filterCountries();
  }, []);

  const filterCountries = () => {
    const countryArray = Array.from(new Set(mbaPrograms.map((i) => i.country)));
    setCountries(countryArray);
  };

  const filterByCountry = () =>
  {
    setPrograms(
      mbaPrograms.filter((i) => i.country === currentCountry)
    )

  }
  useEffect(()=>{
    currentCountry === null ? setPrograms(mbaPrograms) : filterByCountry()
  },[currentCountry])

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 shadow-sm h-full flex flex-col px-4 p-2">
        <p className="text-[#152347] text-xl font-semibold pb-4">Domain</p>
        <div className="h-[68vh] overflow-y-scroll py-2 flex flex-col gap-4 p-2 rounded-xl">
          {domains.map((domain, index) => (
            <div
              key={domain}
              onClick={() => setCurrentDomainIndex(index)}
              className={`font-semibold ${
                currentDomainIndex === index
                  ? "text-[#2c31b6]"
                  : "text-gray-900"
              } cursor-pointer hover:text-[#2c31b6] flex justify-between my-2`}
            >
              <p>{domain}</p> <IoMdArrowDropright />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-3 rounded-xl shadow-md p-5 px-7 h-full">
        <p className="font-bold text-xl">{`${domains[currentDomainIndex]} (${programs.length}) `}</p>
        <ul className="mt-4">
          {countries.map((country, index) => (
            <button
              key={index}
              className={`p-2 mb-1 px-4 mr-2 rounded-2xl ${currentCountry === country ? "bg-[#2c31b6]" : "bg-[#152347]"}  text-[#ffff] cursor-pointer hover:bg-black`}
              onClick={(()=> setCourrentCountry(country))}
            >
              {country}
            </button>
          ))}
        </ul>
        <section className="h-[60vh] overflow-y-auto rounded-xl p-4 flex flex-wrap justify-between">
          {programs.map((program, index) => (
            <ProgramCart program={program} key={index} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ExploreCourses;
