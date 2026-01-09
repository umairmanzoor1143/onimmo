"use client";

import { useDictionary } from "./dictionary-provider";

export default function HeroSection() {
  const { dictionary } = useDictionary();
  const t = dictionary.hero;

  return (
    <section className="bg-white min-h-screen relative overflow-hidden" data-testid="hero" data-bg="light">
      <div
        className="container mt-10 nc-SectionHeroArchivePage flex flex-col relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:pl-[8rem]"
        data-nc-id="SectionHeroArchivePage"
      >
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 flex flex-col items-start space-y-6 lg:space-y-10 pb-14 lg:pb-54 xl:pb-70 xl:pr-14 lg:mr-10 xl:mr-0">
            <div className="max-w-4xl text-left px-0 sm:px-4 md:px-6 pt-24 sm:pt-28 md:pt-32 pb-0 relative z-10">
              <p className="text-[#932A12] text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wider uppercase mb-6 sm:mb-8 md:mb-10">
                {t.subtitle}
              </p>

              <h1 className="text-[#0F172A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1] mb-8 sm:mb-10 md:mb-14">
                {t.title}
              </h1>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-5">
                <button
                  className="bg-[#932A12] text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wide hover:bg-[#6F1A07] transition-all"
                  data-testid="button-valuate"
                >
                  {t.buttons.valuate}
                </button>
                <button
                  className="bg-[#F5E6E3] text-[#932A12] px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wide hover:bg-[#EDD5D0] transition-all"
                  data-testid="button-buy"
                >
                  {t.buttons.buy}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
