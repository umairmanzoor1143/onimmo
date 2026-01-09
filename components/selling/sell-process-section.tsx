"use client";

import { useDictionary } from "../dictionary-provider";

export default function SellProcessSection() {
  const { dictionary } = useDictionary();
  const t = dictionary.sellPage.process;

  return (
    <section
      className="bg-[#0F172A] relative -mt-[100px] sm:-mt-[150px] lg:-mt-[200px] diagonal-clip py-10 sm:py-16 lg:py-20"
      data-bg="dark"
    >
      <div className="pt-32 sm:pt-48 lg:pt-64 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-[7rem]">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[#932A12] text-sm sm:text-base font-medium tracking-wider uppercase mb-4">
            {t.label}
          </p>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.steps.map((step: { number: string; title: string; description: string }, index: number) => (
            <div
              key={index}
              className="bg-[#141E30] p-6 sm:p-8 rounded-xl hover:bg-[#1a2740] transition-colors duration-300 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#932A12] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-lg sm:text-xl font-bold">
                  {step.number}
                </span>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
