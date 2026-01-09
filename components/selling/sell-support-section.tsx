"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDictionary } from "../dictionary-provider";

interface SupportItem {
  title: string;
  subtitle: string;
  paragraphs: string[];
  image: string;
}

function SupportCard({
  item,
  index,
}: {
  item: SupportItem;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className="min-h-[80vh] flex items-center py-16 sm:py-24"
    >
      <div
        className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
          isEven ? "" : "lg:grid-flow-dense"
        }`}
      >
        {/* Text Content */}
        <motion.div
          style={{ y }}
          className={`space-y-6 ${isEven ? "lg:pr-8" : "lg:pl-8 lg:col-start-2"}`}
        >
          <div className="space-y-2">
            <motion.h3
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[#932A12] text-2xl sm:text-3xl lg:text-4xl font-bold"
            >
              {item.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[#0F172A] text-lg sm:text-xl lg:text-2xl font-medium"
            >
              {item.subtitle}
            </motion.p>
          </div>

          <div className="space-y-4">
            {item.paragraphs.map((paragraph, pIndex) => (
              <motion.p
                key={pIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + pIndex * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-[#34435E] text-sm sm:text-base lg:text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          style={{ y: imageY }}
          className={`relative overflow-hidden rounded-2xl ${
            isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="aspect-[4/3] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#932A12]/20 to-transparent z-10" />
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SellSupportSection() {
  const { dictionary } = useDictionary();
  const t = dictionary.sellPage.support;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  const supportItems: SupportItem[] = [
    {
      title: t.valuation.title,
      subtitle: t.valuation.subtitle,
      paragraphs: t.valuation.paragraphs,
      image: "/assets/valuation.jpg",
    },
    {
      title: t.marketing.title,
      subtitle: t.marketing.subtitle,
      paragraphs: t.marketing.paragraphs,
      image: "/assets/marketing.jpg",
    },
    {
      title: t.viewings.title,
      subtitle: t.viewings.subtitle,
      paragraphs: t.viewings.paragraphs,
      image: "/assets/viewings.jpg",
    },
  ];

  return (
    <section ref={containerRef} className="bg-white relative" data-bg="light">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <motion.div
          style={{ width: progressWidth }}
          className="h-full bg-[#932A12]"
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-[7rem] py-16 sm:py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-[#932A12] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            {t.title}
          </h2>
        </motion.div>

        {/* Support Items */}
        <div className="space-y-8 lg:space-y-0">
          {supportItems.map((item, index) => (
            <SupportCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Side Progress Dots */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-40">
        {supportItems.map((_, index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full border-2 border-[#932A12] transition-all duration-300"
            whileInView={{ backgroundColor: "#932A12" }}
            viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
          />
        ))}
      </div>
    </section>
  );
}
