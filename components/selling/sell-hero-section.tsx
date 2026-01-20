import { Dictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface SellHeroSectionProps {
  dictionary: Dictionary;
  locale: Locale;
}

export default function SellHeroSection({ dictionary, locale }: SellHeroSectionProps) {
  const t = dictionary.sellPage.hero;

  return (
    <section
      className="relative w-full min-h-[100vh] overflow-hidden"
      data-testid="sell-hero"
      data-bg="dark"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/hero-building.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlay - Matching Home Page style */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            105deg,
            rgba(15, 23, 42, 0.95) 0%,
            rgba(15, 23, 42, 0.85) 40%,
            rgba(15, 23, 42, 0.6) 60%,
            rgba(15, 23, 42, 0.3) 80%,
            transparent 100%
          )`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full min-h-[90vh] flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-32">
        <div className="max-w-[760px]">
          {/* Main Heading */}
          <h1
            className="text-white leading-[1.1] tracking-[-0.02em] mb-6"
            style={{
              fontFamily: "var(--font-frutiger), var(--font-display), sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 700,
            }}
          >
            {t.title}
          </h1>

          {/* Subtitle / Description */}
          <p
            className="text-white/80 max-w-[600px] mb-10 leading-[1.6]"
            style={{
              fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
              fontWeight: 400,
            }}
          >
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
            {/* Primary CTA */}
            <Link
             href={`/${locale}/contact`}
              className="group inline-flex justify-center items-center gap-2.5 bg-[#932A12] text-white px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-[#7a2410] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <span>{t.cta}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex justify-center items-center gap-2.5 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-[16px] font-semibold border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              <span>{t.secondaryCta}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Trust Note */}
          <div className="flex items-center gap-2 text-white/60 text-sm sm:text-base">
            <CheckCircle2 className="w-5 h-5 text-[#932A12]" />
            <p>{t.trustNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
