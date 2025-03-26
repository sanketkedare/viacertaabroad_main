import React from "react";

const ExamPattern = ({ examData }) => {
    const dummy = "https://www.mim-essay.com/images/blogs/pexels-lilartsy-1925536.jpg"
  return (
    <div className="my-10 lg:w-9/12 w-11/12 m-auto flex flex-col gap-3 items-center mb-10">
      <h1 className="lg:text-[40px] text-2xl font-bold text-center">{examData.heading[0]}</h1>
      <h1 className="lg:text-[24px]">{examData.heading[1]}</h1>
      <div className="mt-5 flex flex-wrap lg:flex-nowrap justify-center  w-full gap-3">
        {examData.examPattern.map((i) => (
          <div className="min-h-[270px] shadow-xl rounded-xl lg:w-[350px] w-[150px]" key={i.name}>
            <div className="lg:h-[150px]  relative">
                <p className="absolute top-3 right-3 bg-[#E00012] text-[#fff] p-1 px-5 text-[10px] rounded-[4px]">{examData.name}</p>
                <img src={i.img ? i.img : dummy} className="h-full w-full object-cover"/>
            </div>
            <div className="p-3">
               <p className="lg:text-[22px] text-[#1E1E8C] font-bold">{i.name}</p> 
               <p >{i.des}</p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamPattern;
