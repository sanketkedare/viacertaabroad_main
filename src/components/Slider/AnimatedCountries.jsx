import React from 'react';

const FlagComponent = ({ flag, style }) => {
  return (
    <div
      className="absolute w-20 h-10 rounded-xl  cursor-pointer"
      style={style}
    >
      <div className="m-1 w-20 h-10 rounded-xl ">
        <img
          src={flag}
          alt="Country Flag"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};


const flags = [
  { src: "https://www.worldometers.info/img/flags/as-flag.gif", style: { top: '10%', left: '5%'} },
  { src: "https://www.worldometers.info/img/flags/au-flag.gif", style: { top: '20%', left: '5%' } },
  { src: "https://www.worldometers.info/img/flags/bd-flag.gif", style: { top: '30%', left: '5%' } },
  { src: "https://www.worldometers.info/img/flags/ca-flag.gif", style: { top: '40%', left: '5%' } },
  { src: "https://www.worldometers.info/img/flags/in-flag.gif", style: { top: '50%', left: '5%' } },
  { src: "https://www.worldometers.info/img/flags/nz-flag.gif", style: { top: '60%', left: '5%' } },
  { src: "https://www.worldometers.info/img/flags/us-flag.gif", style: { top: '70%', left: '5%' } },
  { src: "https://www.worldometers.info/img/flags/uk-flag.gif", style: { top: '80%', left: '5%' } },
];

const AnimatedCountries = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {flags.map((flag, index) => (
        <FlagComponent key={index} flag={flag.src} style={flag.style} />
      ))}
    </div>
  );
};

export default AnimatedCountries;
