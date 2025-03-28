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
  
  console.log(`https://viacertaabroad.com/blogs/${blog.id}/${blogTitle.split(' ').join('-').toLowerCase()}`);
  
  return {
    title: blog.title,
    description: blog.meta || blog.title || "Read the latest blog on ViaCerta Abroad.",
    alternates: {
      canonical: `https://viacertaabroad.com/blogs/${blog.id}/${blogTitle.split(' ').join('-').toLowerCase()}`,
    },
  };
  
}