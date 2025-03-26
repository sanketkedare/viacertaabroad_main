import BlogsContainer from "@/components/Blogs/BlogsContainer";
import blogs from "@/components/Blogs/_blogs.json";


const page = () => {
  return <BlogsContainer />;
};

export default page;

export async function generateMetadata({ params }) {
  const blogTitle = decodeURIComponent(params.id).replace(/-/g, " ").split('-').join(' ').toLowerCase();
  const blog = blogs.find((b) => b.title.toLowerCase() === blogTitle);
  console.log(blogTitle)

  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.meta || "Read the latest blog on ViaCerta Abroad.",
    alternates: {
      canonical: `https://viacertaabroad.com/blogs/${blogTitle.split(' ').join('-').toLowerCase()}`,
    },
  };
}