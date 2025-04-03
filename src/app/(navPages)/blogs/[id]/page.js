import BlogsContainer from "@/components/Blogs/BlogsContainer";
import React from "react";
import blogs from "@/components/Blogs/_blogs.json";
import createUrl from "@/Utils/createUrl";

const page = () => {
  return <BlogsContainer />;
};

export default page;

export async function generateMetadata({ params }) {
  const { id } = params;
  const blog = blogs.find((b) => createUrl(b.title) === id);

  if (!blog) return {};

  const blogUrl = `https://viacertaabroad.com/blogs/${id}`;

  return {
    title: blog.title,
    description: blog.meta || blog.title,
    alternates: {
      canonical: blogUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.meta || blog.title,
      url: blogUrl,
      type: "article",
      images: [
        {
          url: blog.thumbnail,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.meta || blog.title,
      images: [blog.thumbnail],
    },
  };
}
