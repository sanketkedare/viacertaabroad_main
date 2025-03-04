import React from "react";
import Head from "next/head";

const successStories = [
  {
    name: "Nitin Chauhan",
    university: "University of Chester, UK",
    scholarship: "Fully Funded",
    description:
      "I am extremely grateful for the opportunity to pursue my Masters in Medicine (General) at the University of Chester. The fully funded scholarship has been life-changing, alleviating my financial burden & allowing me to focus on my studies & personal growth. Thanks to ViaCerta Abroad!",
  },
  {
    name: "Kunal K.",
    university: "University of Huddersfield, UK",
    scholarship: "£6000 Scholarship",
    description:
      "Securing a £6000 scholarship was a huge milestone. It made my dream of studying abroad achievable. I’m excited to be part of the 2024 batch, and truly thankful to ViaCerta Abroad for making this opportunity possible.",
  },
  {
    name: "Pankaj Patil",
    university: "ESSEC Business School, Paris, France",
    scholarship: "70% Scholarship",
    description:
      "My experience at ESSEC Business School has been amazing. With a 70% scholarship for my Masters in Data Science, I’ve been able to focus on my studies without financial worries. ViaCerta Abroad has been instrumental in securing this opportunity.",
  },
  {
    name: "Mhd. Mikail Shafique",
    university: "Stevens Institute of Technology, USA",
    scholarship: "50% Scholarship",
    description:
      "I feel incredibly fortunate to have received a 50% scholarship to study at Stevens Institute of Technology. This scholarship has eased my financial stress, and I’m grateful to ViaCerta Abroad for making this possible.",
  },
  {
    name: "Rohit Saini",
    university: "Paris, France",
    scholarship: "Fully Sponsored Course",
    description:
      "I was awarded a fully sponsored course in Paris, an incredible opportunity that opened doors for my academic & professional future. ViaCerta Abroad’s support made it all possible!",
  },
];

const SuccessStories = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Success Stories",
    "description": "Read inspiring success stories of students who received scholarships and studied abroad with ViaCerta Abroad.",
    "itemListElement": successStories.map((story, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": story.name,
      "description": story.description,
      "url": `https://yourwebsite.com/success-stories/${story.name.replace(/\s+/g, "-").toLowerCase()}`
    })),
  };

  return (
    <>
      <Head>
        <title>Success Stories | ViaCerta Abroad</title>
        <meta name="description" content="Read inspiring success stories of students who received scholarships and studied abroad with ViaCerta Abroad." />
        <meta name="keywords" content="study abroad, scholarships, student success, education, international universities" />
        <meta property="og:title" content="Success Stories | ViaCerta Abroad" />
        <meta property="og:description" content="Read inspiring success stories of students who received scholarships and studied abroad with ViaCerta Abroad." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/success-stories" />
        <meta property="og:image" content="https://yourwebsite.com/images/success-stories-banner.jpg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>

      <section className="py-16 px-6 bg-gray-100 text-[#152347]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="lg:text-4xl text-3xl font-extrabold tracking-wide">🎓 Success Stories</h1>
          <p className="mt-4 text-lg text-gray-600">
            Meet our students who achieved their study abroad dreams! 🚀
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <article
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h2 className="text-2xl font-semibold">{story.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{story.university}</p>
                <p className="mt-3 font-bold text-[#f8b62d]">{story.scholarship}</p>
                <p className="mt-3 text-gray-700">{story.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;
