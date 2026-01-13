import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Dictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n";

interface FinalCtaSectionProps {
  dictionary: Dictionary;
  locale: Locale;
}

export default function FinalCtaSection({ dictionary, locale }: FinalCtaSectionProps) {

  return (
    <section
      className="relative w-full py-24 overflow-hidden bg-background"
      data-testid="final-cta"
    >
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
            {dictionary.finalCta.title}
          </h2>

          {/* CTA Button with strong contrast */}
          <Link
            href={`/${locale}/contact`}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0A2540] rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:gap-4 hover:shadow-2xl hover:shadow-white/20"
          >
            <span>{dictionary.finalCta.button}</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Bottom spacing for separation */}
      <div className="h-12" />
    </section>
  );
}
