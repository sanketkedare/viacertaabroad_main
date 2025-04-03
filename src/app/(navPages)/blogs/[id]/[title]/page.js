'use client'

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const { title } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (title) {
      router.replace(`/blogs/${title}`);
    }
  }, [title, router]);

  return null;
};

export default Page;
