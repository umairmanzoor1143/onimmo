import {
  ArrowUpRight,
  TrendingUp,
  Users,
  Camera,
  MessageSquare,
  Wallet,
  Check,
} from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";
import Link from "next/link";

interface SellBenefitsSectionProps {
  dictionary: Dictionary;
  locale: string;
}

export default function SellBenefitsSection({ dictionary, locale }: SellBenefitsSectionProps) {
  const t = dictionary.sellPage.benefits;

  // Icons mapped to the benefits
  const icons = [
    TrendingUp,
    Users,
    Camera,
    MessageSquare,
    Wallet,
  ];

  return (
    <section className="bg-[#F5F5F5] py-20 sm:py-28" data-bg="light">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <div>
            <p className="text-[#932A12] text-xs font-semibold tracking-widest uppercase mb-4">
              {t.label}
            </p>
            <h2 
              className="text-[#0F172A] text-3xl sm:text-4xl font-semibold leading-[1.15]"
              style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
            >
              {t.title}
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[#6B7280] text-lg leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>

        {/* Benefits List */}
        <div className="border-t border-[#E5E7EB] pt-12 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {t.items.map((item: string, index: number) => {
              const Icon = icons[index] || Check;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 py-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#932A12]" strokeWidth={1.5} />
                  </div>
                  <p className="text-[#0F172A] font-medium pt-2">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats + CTA Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Stats */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {t.stats.map((stat: { value: string; label: string }, index: number) => (
                <div key={index} className="text-center sm:text-left">
                  <p 
                    className="text-[#0F172A] text-4xl sm:text-5xl font-light mb-2 tabular-nums"
                    style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[#6B7280] text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center gap-2.5 bg-[#932A12] text-white px-7 py-4 rounded-full text-[15px] font-semibold hover:bg-[#7a2410] transition-all duration-300 shadow-lg"
            >
              <span>{t.cta}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
