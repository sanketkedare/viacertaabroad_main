"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import store from "@/Redux/appStore";
import React from "react";
import { Provider } from "react-redux";

const article = {
  title: "The Future of Artificial Intelligence in Everyday Life",
  author: "Jane Doe",
  imageUrl:
    "https://ik.imagekit.io/upgrad1/abroad-images/articles/post/letter-of-recommendation-for-masters/images/Letter_of_Recommendation_for_Masters_Sample_Tips_to_Write5EAEWR.png?tr=f-jpg,pr-true,q-70,w-780",
  intro:
    "Artificial Intelligence (AI) is rapidly transforming our daily lives. From virtual assistants to self-driving cars, AI is becoming an integral part of modern society. But what does the future hold?",
  content:
    "In recent years, AI has made significant advancements in fields like healthcare, finance, and transportation. With machine learning algorithms improving every day, we can expect smarter automation, personalized experiences, and even more ethical considerations around AI governance.\n\nOne of the most exciting developments is in the field of natural language processing (NLP). AI-powered chatbots and virtual assistants are becoming more human-like, capable of understanding context and emotions.\n\nHowever, AI also presents challenges. Ethical concerns, job displacement, and data privacy are key issues that must be addressed as AI continues to evolve.\n\nOverall, AI is here to stay, and its impact on our daily lives will only grow. The key lies in using it responsibly and ensuring that technological advancements benefit society as a whole.",
};

const currentUrl = typeof window !== "undefined" ? window.location.href : "";

const Page = () => {
    console.log(currentUrl)
  return (
    <Provider store={store}>
      <Navbar />
      <div className="min-h-screen w-11/12 md:w-9/12 mx-auto py-16">
        {/* Article Section */}
        <article className="bg-white shadow-lg rounded-lg p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">{article.title}</h1>
          <p className="text-gray-600 italic mt-2">By {article.author}</p>

          {/* Article Image */}
          <div className="mt-6">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Article Intro */}
          <p className="text-lg font-semibold text-gray-700 mt-6">
            {article.intro}
          </p>

          {/* Article Content */}
          <div className="text-gray-700 leading-relaxed mt-4 whitespace-pre-line">
            {article.content}
          </div>
        </article>
      </div>
      <Footer />
    </Provider>
  );
};

export default Page;
