"use client";

import { useEffect, useRef, useState } from "react";
import { useDictionary } from "./dictionary-provider";

export default function ExpertiseSection() {
  const { dictionary } = useDictionary();
  const t = dictionary.expertise;

  const sections = [
    {
      id: 1,
      theme: "light",
      title: t.section1.title,
      paragraphs: t.section1.paragraphs,
      buttonText: t.section1.button,
    },
    {
      id: 2,
      theme: "dark",
      title: t.section2.title,
      paragraphs: t.section2.paragraphs,
      buttonText: t.section2.button,
    },
    {
      id: 3,
      theme: "gray",
      title: t.section3.title,
      paragraphs: t.section3.paragraphs,
      buttonText: t.section3.button,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const scrolled = -rect.top;
      const totalScrollable = containerHeight - viewportHeight;
      const scrollProgress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // Determine which section to show (divide into 3 parts)
      const sectionIndex = Math.min(2, Math.floor(scrollProgress * 3));
      setActiveIndex(sectionIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentSection = sections[activeIndex];

  const getBgColor = (theme: string) => {
    switch (theme) {
      case "dark":
        return "bg-[#0F172A]";
      case "gray":
        return "bg-[#F1F5F9]";
      default:
        return "bg-white";
    }
  };

  const getTitleColor = (theme: string) => {
    return theme === "dark" ? "text-white" : "text-[#932A12]";
  };

  const getTextColor = (theme: string) => {
    return theme === "dark" ? "text-white/80" : "text-[#34435E]";
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh]"
      data-bg={currentSection.theme === "dark" ? "dark" : "light"}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`absolute inset-0 flex items-center transition-all duration-700 ease-out ${getBgColor(section.theme)} ${
              index === activeIndex
                ? "opacity-100 translate-y-0"
                : index < activeIndex
                ? "opacity-0 -translate-y-full"
                : "opacity-0 translate-y-full"
            }`}
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pr-12 sm:pr-16 lg:pr-20">
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8 lg:mb-10 ${getTitleColor(section.theme)}`}
              >
                {section.title}
              </h2>

              <div className="space-y-4 sm:space-y-5 lg:space-y-6 mb-8 sm:mb-10 lg:mb-12">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className={`text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed ${getTextColor(section.theme)}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <button
                className="bg-[#932A12] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-wide hover:bg-[#6F1A07] transition-all"
              >
                {section.buttonText}
              </button>
            </div>
          </div>
        ))}

        {/* Progress indicators */}
        <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#932A12] scale-125 sm:scale-150"
                  : currentSection.theme === "dark"
                  ? "bg-white/30"
                  : "bg-[#0F172A]/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
