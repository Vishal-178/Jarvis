import { ArrowUpRight } from "lucide-react";
import { blogs } from "./blog";
import Image from "next/image";
import Link from "next/link";

const BlogSection = ({ number }: { number: number }) => {
  return (
    <section className="max-w-6xl mx-auto my-20">
      <h2 className="text-4xl font-bold text-center mb-6 text-black">Our Blogs</h2>
      <p className="text-lg text-center text-[#757575] mb-10">
      {`Our blog provides insightful information about unlisted shares, offering a deeper understanding of how these assets work, their potential benefits, and the risks involved. Whether you're new to unlisted shares or looking to expand your knowledge, we cover topics such as investment strategies, valuation methods, market trends, and regulatory aspects. Stay updated with expert tips and guides to navigate the unlisted share market effectively.`}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
      {blogs.slice(0, number).map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      </div>
    </section>
  );
};

export default BlogSection;const BlogCard = ({ blog }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition bg-white p-4 hover:cursor-pointer">
      {/* Image Container with Fixed Size & Smooth Hover Effect */}
      <div className="flex justify-center items-center overflow-hidden rounded-md">
        <Image
          className="rounded-md w-[360px] h-[240px] object-cover transform transition-transform duration-300 hover:scale-105"
          src={blog.image}
          alt={blog.title}
          width={360}
          height={240}
        />
      </div>

      {/* Content Section */}
      <div className="mt-4">
      <Link href={blog.link} className="flex items-start justify-between group">
        <h3 className="text-lg font-semibold no-underline">{blog.title}</h3>
        <ArrowUpRight className="w-8 h-8 transition-transform duration-300 group-hover:rotate-45" />
      </Link>


        <p className="text-gray-600 text-sm mt-1">{blog.description}</p>
      </div>
    </div>
  );
};