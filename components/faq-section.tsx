"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useDictionary } from "./dictionary-provider";

export default function FAQSection() {
  const { dictionary } = useDictionary();
  const t = dictionary.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32" data-bg="light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-[#932A12] text-sm sm:text-base lg:text-lg font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            {t.label}
          </p>
          <h2 className="text-[#0F172A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            {t.title}
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-2 sm:space-y-4">
          {t.questions.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 transition-all duration-300 ${
                openIndex === index ? "pb-4 sm:pb-6" : "pb-0"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-4 sm:py-5 lg:py-6 flex items-center justify-between text-left group"
              >
                <span
                  className={`text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold pr-4 sm:pr-6 lg:pr-8 transition-colors ${
                    openIndex === index
                      ? "text-[#932A12]"
                      : "text-[#0F172A] group-hover:text-[#932A12]"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    openIndex === index
                      ? "bg-[#932A12] text-white"
                      : "bg-[#F5E6E3] text-[#932A12]"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#34435E] text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed pr-10 sm:pr-12 lg:pr-16">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <p className="text-[#34435E] text-sm sm:text-base lg:text-lg xl:text-xl mb-4 sm:mb-5 lg:mb-6">
            {t.cta.text}
          </p>
          <button className="bg-[#932A12] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wide hover:bg-[#6F1A07] transition-all">
            {t.cta.button}
          </button>
        </div>
      </div>
    </section>
  );
}
