"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection({ title, description, faqs = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);

  const toggleQuestion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const visibleFaqs = faqs.slice(0, visibleCount);

  return (
    <section className="px-6 py-12 md:px-12 lg:px-24 font-primary">
      {/* Headings */}
      <div className="text-center capitalize">
        <h2 className="text-[26px] md:text-[40px] text-[#131313] font-semibold">
          {title || "Frequently Asked Questions"}
        </h2>
        {description && (
          <p className="mt-2 text-gray-600 leading-relaxed font-secondary">
            {description}
          </p>
        )}
      </div>

      {/* Questions */}
      <div className="max-w-[1200px] mx-auto mt-12 border-t border-[#131313]">
        {visibleFaqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#131313] transition-colors duration-300"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className={`w-full flex justify-between items-center bg-transparent text-left text-[20px] font-medium tracking-wide py-6 pr-5 text-[#5829c7] transition-colors duration-300 ${
                activeIndex === index ? "text-[#5829c7]" : ""
              }`}
            >
              {faq.question}
              <ChevronDown
                className={`w-6 h-6 text-[#5829c7] transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <p
              className={`overflow-hidden text-[#000] leading-relaxed text-base transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-[200px] pb-6 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < faqs.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="px-6 py-3 border border-[#5829c7] text-[#5829c7] font-medium text-lg rounded-full hover:bg-[#5829c7] hover:text-white transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
