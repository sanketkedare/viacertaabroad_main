import React, { useCallback, useEffect, useState } from "react";
import dummyExams from "./dummyExams.json";

const Exams = () => {
  const allExams = dummyExams;
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const examsPerPage = 12;

  const examsArray = [
    "ALL",
    "IELTS",
    "GRE",
    "GMAT",
    "TOEFL",
    "PTE",
    "SAT",
    "ACT",
    "DUOLINGO",
  ];

  const filterExams = useCallback(
    (e) => (e === "ALL" ? allExams : allExams.filter((i) => i.category === e)),
    []
  );

  useEffect(() => {
    setExams(filterExams(selectedExam));
    setCurrentPage(1); // Reset to page 1 when a new exam type is selected
  }, [selectedExam]);

  // Pagination Logic
  const indexOfLastExam = currentPage * examsPerPage;
  const indexOfFirstExam = indexOfLastExam - examsPerPage;
  const currentExams = exams.slice(indexOfFirstExam, indexOfLastExam);
  const totalPages = Math.ceil(exams.length / examsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex justify-center items-center text-white bg-gradient-to-l from-[#2c21b6]  via-[#152347] to-[#2c21b6] h-[100px] text-2xl font-bold">
        Admission Exams for International Universities
      </header>

      <main className="w-9/12 m-auto py-5">
        {/* Exam Selection Section */}
        <section>
          <b>Select an Exam</b>
          <div className="flex justify-between gap-2 items-center p-4 ">
            {examsArray.map((exam) => (
              <button
                key={exam}
                className={`p-2 px-4 text-sm border border-[#152347] rounded-2xl w-[150px] transition-colors duration-200 cursor-pointer ${
                  selectedExam === exam
                    ? "bg-[#2c21b6] text-white"
                    : " hover:bg-[#152347] hover:text-white"
                }`}
                onClick={() => setSelectedExam(exam)}
              >
                {exam}
              </button>
            ))}
          </div>
        </section>

        {/* Display Selected Exam Information */}
        <section className="max-h-[600px]  p-2 mt-4 rounded-xl">
          <div className="grid grid-cols-4 justify-between">
            {currentExams.map((i, index) => (
              <div
                key={index}
                className="w-[250px] h-[150px] m-auto border mb-5 p-5 flex justify-center items-center text-center font-bold cursor-pointer rounded-2xl hover:bg-[#152347] hover:text-white"
              >
                {i.name}
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center gap-2 mt-4 w-full">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`p-2 w-10  rounded-full cursor-pointer font-bold shadow ${
                  currentPage === number
                    ? "bg-[#f8b62d] text-black"
                    : "bg-white text-black "
                }`}
              >
                {number}
              </button>
            ))}
          </div>
        </section>

        {/* Informative Message for Students */}
        <section className="py-10 flex flex-col gap-5 text-justify">
          <h2 className="text-3xl font-bold">
            <span className="text-[#2c21b6]">ViaCerta Abroad</span> Exams
          </h2>
          <p>
            As more students aspire to study abroad, numerous countries are
            welcoming international students. To pursue their dreams, students
            must meet specific academic standards set by universities.
          </p>
          <p>
            The excitement of moving abroad for education is thrilling, but the
            process involves rigorous preparation. At the core of this process
            are entrance exams that assess language proficiency and
            subject-specific knowledge. While some exams are program-specific,
            taking one of the English language proficiency tests is essential
            for most courses.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Exams;
