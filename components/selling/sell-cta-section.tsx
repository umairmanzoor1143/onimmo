import { ArrowRight } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n";
import Link from "next/link";

interface SellCTASectionProps {
  dictionary: Dictionary;
  locale: Locale;
}

export default function SellCTASection({ dictionary, locale }: SellCTASectionProps) {
  const t = dictionary.sellPage.cta;

  return (
    <section className="bg-[#0F172A] py-16 sm:py-24 lg:py-32" data-bg="dark">
      <div className="px-4 sm:px-6 lg:px-[7rem]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {t.title}
          </h2>
          <p className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link
              href={`/${locale}/contact`}
              className=""
            >
 <button className="inline-flex items-center gap-2 bg-[#932A12] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wide hover:bg-[#6F1A07] transition-all group">
              {t.primaryButton}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
             <Link
              href={`/${locale}/contact`}
              className=""
            >
               <button className="inline-flex items-center gap-2 border border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wide hover:bg-white/10 transition-all">
              {t.secondaryButton}
            </button>
            </Link>
           
           
          </div>
        </div>
      </div>
    </section>
  );
}
