"use client";
import FAQs from "@/components/About/FAQs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Testimonials from "@/components/Slider/Testimonials";
import ExamCart from "@/components/TestPrep/ExamCart";
import { test_prep } from "@/components/TestPrep/utils";
import store from "@/Redux/appStore";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

const page = () => {
  const [error, setError] = useState(false);
  const [examData, setExamData] = useState(null);
  const { exam } = useParams();

  const getData = () => {
    const data = test_prep.find((i) => i.name.toLowerCase() === exam.toLowerCase() );
    return data;
  };

  useEffect(() => {
    if (exam) {
      const data = getData();
      if (data) {
        setExamData(data);
      } else {
        setError(true);
      }
    }
  }, [exam]);
  return (
    <Provider store={store}>
      <Navbar />
      {error ? (
        <div className="flex justify-center items-center w-full h-[50vh] text-xl font-bold">
          Exam Not Found : {exam}
        </div>
      ) : examData ? (
        <ExamCart examData={examData} />
      ) : (
        <div className="flex justify-center items-center w-full h-[50vh] text-xl font-bold">
          Please Wait...
        </div>
      )}

      <Testimonials />
      <FAQs />
      <Footer />
    </Provider>
  );
};

export default page;
