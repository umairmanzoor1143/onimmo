"use client";

import { ArrowRight } from "lucide-react";
import { useDictionary } from "./dictionary-provider";

export default function ServicesSection() {
  const { dictionary } = useDictionary();
  const t = dictionary.services;

  const services = [
    {
      title: t.sell.title,
      paragraphs: t.sell.paragraphs,
    },
    {
      title: t.buy.title,
      paragraphs: t.buy.paragraphs,
    },
    {
      title: t.valuate.title,
      paragraphs: t.valuate.paragraphs,
    },
  ];

  return (
    <section className="bg-[#0F172A] relative -mt-[100px] sm:-mt-[150px] lg:-mt-[200px] diagonal-clip py-10 sm:py-16 lg:py-20" data-bg="dark">
      <div className="pt-32 sm:pt-48 lg:pt-64 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-[7rem]">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-white/10 rounded-xl lg:rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0F172A] p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-between min-h-[280px] sm:min-h-[350px] lg:min-h-[450px] group cursor-pointer hover:bg-[#141E30] transition-colors duration-300"
            >
              <div>
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-8">
                  {service.title}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {service.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <button className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#932A12] group-hover:bg-[#932A12] transition-all duration-300 mt-6 sm:mt-0">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white/60 group-hover:text-white transition-colors" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
