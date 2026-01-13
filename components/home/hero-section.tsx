import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Dictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n";

interface HeroSectionProps {
  dictionary: Dictionary;
  locale: Locale;
}

export default function HeroSection({ dictionary, locale }: HeroSectionProps) {
  const t = dictionary.hero;

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      data-testid="hero"
      data-bg="dark"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/hero-building.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlay - Left to Right fade using theme dark navy */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            105deg,
            rgba(15, 23, 42, 0.95) 0%,
            rgba(15, 23, 42, 0.85) 30%,
            rgba(15, 23, 42, 0.5) 55%,
            rgba(15, 23, 42, 0.2) 70%,
            transparent 85%
          )`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-32">
        <div className="max-w-[700px]">
          {/* Main Heading */}
          <h1
            className="text-white leading-[1.1] tracking-[-0.02em] mb-6"
            style={{
              fontFamily: "var(--font-frutiger), var(--font-display), sans-serif",
              fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
              fontWeight: 700,
            }}
          >
            {t.subtitle}
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/80 max-w-[520px] mb-10 leading-[1.7]"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
              fontWeight: 400,
            }}
          >
            {t.title}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Sell a Property - Primary white button */}
            <Link
              href={`/${locale}/selling`}
              className="group inline-flex items-center gap-2.5 bg-white text-[#0F172A] px-7 py-4 rounded-full text-[15px] font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              <span>{t.buttons.valuate}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Buy a Property - Outline button */}
            <Link
              href={`/${locale}/purchasing`}
              className="group inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white px-7 py-4 rounded-full text-[15px] font-semibold border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              <span>{t.buttons.buy}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Contact Us - Accent button */}
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-2 bg-[#932A12] text-white px-7 py-4 rounded-full text-[15px] font-semibold hover:bg-[#7a2410] transition-all duration-300 shadow-lg"
            >
              <span>{dictionary.header.nav.contact}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
