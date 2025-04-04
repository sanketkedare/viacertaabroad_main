import Link from "next/link";
import BlogForm from "./BlogForm";

const BlogFilters = () => {
  return (
    <div className="lg:sticky top-4 pb-10 lg:h-screen lg:w-full w-11/12 lg:m-0 m-auto ">
      <div className="flex flex-col gap-5">
        <div className=" w-full border border-[#0000003B] rounded-[10px] flex flex-col">
          <p className="bg-[#1E1E8C] text-white p-3 rounded-t-[10px] text-center font-bold">
            Important Quick Links
          </p>
          <Link href="/work">
            <p className="font-bold px-3 py-3 hover:text-[#E00002]">Work Page</p>
          </Link>
          <Link href="/study-abroad">
            <p className="font-bold px-3 py-3 hover:text-[#E00002]">Study Abroad Page</p>
          </Link>
          {/* <Link href="/mbbs">
            <p className="font-bold px-3 p-3 hover:text-[#E00002]">MBBS Page</p>
          </Link> */}
        </div>

        <BlogForm />
      </div>
    </div>
  );
};

export default BlogFilters;
