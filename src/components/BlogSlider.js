"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "/data/blogs";

const categories = [
  "All Blogs",
  "AI/ML",
  "Design & Development",
  "Digital Marketing",
  "Market Research",
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Blogs");
  const [visibleCount, setVisibleCount] = useState(8);

  // Filter blogs based on active category
  const filteredBlogs =
    activeCategory === "All Blogs"
      ? blogs
      : blogs.filter(
          (b) =>
            b.category.replace(/\s|\/|-/g, "").toLowerCase() ===
            activeCategory.replace(/\s|\/|-/g, "").toLowerCase()
        );

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 pb-20">
      <section className="max-w-[1400px] mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-medium text-center mb-8 bg-gradient-to-r from-[#5829C7] to-[#5829C7]/70 bg-clip-text text-transparent">
          Our Latest Blogs
        </h1>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-start gap-8 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(8); // Reset visible count when switching category
              }}
              className={`px-3 py-1.5 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeCategory === category
                  ? "water-gradient text-white bg-gradient-to-r from-[#5829c7] via-[#7f51d8] to-[#8c6be0]"
                  : "bg-white border border-gray-400 text-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        {filteredBlogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBlogs.slice(0, visibleCount).map((blog) => (
                <div
                  key={blog.slug}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="relative w-full h-48 md:h-56">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="p-4 flex flex-col flex-grow hover:bg-gray-50 transition rounded-lg"
                  >
                    <h3 className="font-semibold text-lg mb-1 hover:text-indigo-600 transition line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-gray-500 mb-2">
                      <span className="font-medium text-gray-700">
                        {blog.author}
                      </span>{" "}
                      • {blog.readingTime}
                    </p>

                    <span className="text-indigo-600 text-sm font-medium hover:underline mt-auto">
                      Read More →
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredBlogs.length && (
              <div className="flex justify-center mt-14">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-2 bg-[#5829C7] text-white rounded-full hover:bg-[#5829C7]/50 transition"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-600 mt-12">
            No blogs available for this category.
          </p>
        )}
      </section>
    </div>
  );
}
