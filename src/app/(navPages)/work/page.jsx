import React from "react";
import Work from "../../../components/Work/Work";

const workPage = () => {
  return <Work />;
};

export default workPage;


// Meta Tags here
export async function generateMetadata() {


  const URL = `https://viacertaabroad.com/work`;

  return {
    // title: blog.title,
    // description: blog.meta || blog.title,
    alternates: {
      canonical: URL,
    },
    // openGraph: {
    //   title: blog.title,
    //   description: blog.meta || blog.title,
    //   url: blogUrl,
    //   type: "article",
    //   images: [
    //     {
    //       url: blog.thumbnail,
    //       width: 1200,
    //       height: 630,
    //       alt: blog.title,
    //     },
    //   ],
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: blog.title,
    //   description: blog.meta || blog.title,
    //   images: [blog.thumbnail],
    // },
  };
}

