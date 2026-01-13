import Link from "next/link";
import { Building2, Key, Settings, Users } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n";

interface ServicesSectionProps {
  dictionary: Dictionary;
  locale: Locale;
}

export default function ServicesSection({ dictionary, locale }: ServicesSectionProps) {
  const t = dictionary.services;

  const services = [
    {
      icon: Building2,
      // @ts-ignore
      title: t.sell.title,
      // @ts-ignore
      description: t.sell.paragraphs[0], // Using first paragraph as summary
      href: "/selling",
    },
    {
      icon: Key,
      // @ts-ignore
      title: t.buy.title,
      // @ts-ignore
      description: t.buy.paragraphs[0],
      href: "/purchasing",
    },
    {
      icon: Settings,
      // @ts-ignore
      title: dictionary.header.nav.propertyManagement,
      // @ts-ignore
      description: "Ongoing management & administration", // Needs translation key
      href: "/property-management",
    },
    {
      icon: Users,
      // @ts-ignore
      title: dictionary.header.nav.partners,
      // @ts-ignore
      description: "Our professional network", // Needs translation key
      href: "/partners",
    },
  ];

  return (
    <section className="w-full py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2
            className="text-white text-2xl md:text-3xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
          >
            {/* Hardcoded "Our Services" needs key */}
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={`/${locale}${service.href}`}
                className="group block bg-[#34435E] p-6 md:p-7 border border-[#34435E] hover:border-[#4A5568] transition-colors duration-200"
              >
                {/* Icon */}
                <div className="mb-5">
                  <Icon
                    className="w-6 h-6 text-[#D1D1D1]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-white text-base md:text-lg font-medium mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#D1D1D1] text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
