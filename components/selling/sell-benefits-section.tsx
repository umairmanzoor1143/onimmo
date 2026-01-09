"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { useDictionary } from "../dictionary-provider";

export default function SellBenefitsSection() {
  const { dictionary } = useDictionary();
  const t = dictionary.sellPage.benefits;

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32" data-bg="light">
      <div className="px-4 sm:px-6 lg:px-[7rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#932A12] text-sm sm:text-base font-medium tracking-wider uppercase mb-4">
              {t.label}
            </p>
            <h2 className="text-[#0F172A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {t.title}
            </h2>
            <p className="text-[#34435E] text-base sm:text-lg leading-relaxed mb-8">
              {t.description}
            </p>

            <ul className="space-y-4 mb-10">
              {t.items.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#932A12] flex-shrink-0 mt-0.5" />
                  <span className="text-[#34435E] text-sm sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center gap-2 bg-[#932A12] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wide hover:bg-[#6F1A07] transition-all group">
              {t.cta}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {t.stats.map((stat: { value: string; label: string }, index: number) => (
              <div
                key={index}
                className="bg-[#F5E6E3] p-6 sm:p-8 rounded-xl text-center hover:bg-[#EDD5D0] transition-colors duration-300"
              >
                <p className="text-[#932A12] text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-[#34435E] text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
