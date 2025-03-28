import BlogsContainer from "@/components/Blogs/BlogsContainer";
import blogs from "@/components/Blogs/_blogs.json";


const page = () => {
  return <BlogsContainer />;
};

export default page;



export async function generateMetadata({ params }) {
  const [id, ...titleParts] = params.id.split('/');
  const blog = blogs.find((b) => b.id === id);
  
  if (!blog) return {};
  
  const blogTitle = decodeURIComponent(titleParts.join('-')).replace(/-/g, " ").toLowerCase();
  const blogUrl = `https://viacertaabroad.com/blogs/${blog.id}/${blogTitle.split(' ').join('-').toLowerCase()}`;

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
      description: blog.meta,
      images: [blog.thumbnail],
    },
  };
}
