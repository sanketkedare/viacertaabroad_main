import React from "react";

const WhyViaCerta = () => {
  const data = [
    {
      title: "Personalized University Shortlisting",
      info: "We match you with the best universities based on your goals, budget, and career aspirations.",
      image:
        "https://img.freepik.com/premium-photo/online-application-form-modish-registration_31965-178347.jpg?semt=ais_hybrid",
    },
    {
      title: "Hassle-Free Applications & Visa Support",
      info: "From paperwork to approvals, we handle the tough part so you can focus on your future.",
      image:
        "https://thumbs.dreamstime.com/b/close-up-woman-travel-agent-gives-passports-plane-tickets-to-man-travelling-concept-271429934.jpg",
    },
    {
      title: "Job & Settlement Guidance",
      info: "We don’t stop at admission; we help you with part-time jobs, internships, and career planning abroad.",
      image:
        "https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/67d95d623adaeb001d5524ad.jpg",
    },
  ];
  return (
    <div className="my-10 py-10 ">
      <p className="lg:text-[50px] text-2xl font-bold mt-10 text-center">
        Why Choose{" "}
        <span className="bg-gradient-to-r from-[#14247C] to-[#E00012] text-transparent bg-clip-text">
          ViaCerta Abroad?
        </span>
      </p>
      <p className="py-4 lg:text-2xl text-center">
        Your study abroad success, our priority.
      </p>
      <div className="w-9/12 m-auto grid lg:grid-cols-3 gap-8">
        {data.map((i) => (
          <div className="shadow-xl bg-[#FFE4E705] rounded-sm">
            <div className="h-[200px] overflow-hidden ">
              <img src={i.image} className="h-full w-full object-cover" />
            </div>
            <div className="p-3 pb-5 flex flex-col gap-3">
              <p className="text-2xl text-[#1E1E8C] font-bold">{i.title}</p>
              <p>{i.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyViaCerta;
