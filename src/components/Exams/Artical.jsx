import { useParams } from "next/navigation";
import React from "react";

const Artical = () => {
  const { artical, examName } = useParams();
  console.log(artical, examName);

  const decodeUrl = (url) => url.split("-").join(" ");

  return (
    <div className="w-9/12 min-h-screen m-auto py-10">
      {/* Article Title */}
      <h1 className="text-4xl text-[#152347] font-bold mb-6">{decodeUrl(artical)}</h1>

      <div className="w-full h-[300px]">
        <img src="https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=600" className="object-contain h-full m-auto"/>
      </div>

      {/* Article Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p>
            Welcome to this comprehensive guide on {decodeUrl(artical)}. This article aims to provide detailed
            information and insights about the topic, covering its various aspects and providing valuable guidance.
          </p>
        </section>

        {/* Body */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Understanding the Basics</h2>
          <p>
            The {decodeUrl(artical)} is an essential aspect of the {decodeUrl(examName)} process. Understanding the basics 
            is crucial to achieving success in this domain. From preparation strategies to expert tips, 
            this article will cover everything you need to know.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Points to Remember</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Make a study plan that suits your learning style.</li>
            <li>Practice consistently and focus on weaker areas.</li>
            <li>Utilize resources such as books, online courses, and mock tests.</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
          <p>
            In conclusion, mastering {decodeUrl(artical)} requires dedication, strategy, and the right resources. 
            Stay consistent in your efforts, and success will surely follow.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Artical;
