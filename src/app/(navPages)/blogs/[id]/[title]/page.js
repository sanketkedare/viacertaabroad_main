import BlogsContainer from "@/components/Blogs/BlogsContainer";
import blogs from "@/components/Blogs/_blogs.json";


const page = () => {
  return <BlogsContainer />;
};

export default page;



export async function generateMetadata({ params }) {
  // Access params directly (params.id and params.title in your case)
  const { id, title } = params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return {};
  
  const blogUrl = `https://viacertaabroad.com/blogs/${id}/${title}`;

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
