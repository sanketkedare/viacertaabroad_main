import React from "react";
import ExamHeroSection from "./ExamHeroSection";
import ExamPattern from "./ExamPattern";
import ExamPlanning from "./ExamPlanning";

const ExamCart = ({ examData }) => {
  return (
    <div className="">
      <ExamHeroSection examData={examData} />
      <ExamPattern examData={examData} />
      <ExamPlanning examData={examData} />
    </div>
  );
};

export default ExamCart;
