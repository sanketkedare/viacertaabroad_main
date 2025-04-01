"use client";
import FAQs from "@/components/About/FAQs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ServicesForm from "@/components/Services/ServicesForm";
import Testimonials from "@/components/Slider/Testimonials";
import ExamCart from "@/components/TestPrep/ExamCart";
import { test_prep } from "@/components/TestPrep/utils";
import store from "@/Redux/appStore";
import { X } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

const page = () => {
  const [formOpen, setFormOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFormOpen(true);
    }, 10000);
  }, []);

  const [error, setError] = useState(false);
  const [examData, setExamData] = useState(null);
  const { exam } = useParams();

  const getData = () => {
    const data = test_prep.find(
      (i) => i.name.toLowerCase() === exam.toLowerCase()
    );
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
      {formOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 lg:backdrop-blur-sm">
          <div className="w-[500px]">
            <X
              size={30}
              onClick={() => setFormOpen(false)}
              className="bg-white border rounded-full m-auto"
            />

            <ServicesForm />
          </div>
        </div>
      )}

      <Navbar />
      {error ? (
        <div className="flex justify-center items-center w-full h-[50vh] text-xl font-bold">
          Exam Not Found : {exam}
        </div>
      ) : examData ? (
        <>
          <ExamCart examData={examData} />
          <Testimonials />
          <FAQs faqArray={examData.faq}/>
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-[50vh] text-xl font-bold">
          Please Wait...
        </div>
      )}

      <Footer />
    </Provider>
  );
};

export default page;
