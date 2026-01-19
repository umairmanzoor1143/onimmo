import FinalCtaSection from "@/components/home/final-cta-section";
import TeamSection from "@/components/team-section";
import { getDictionary } from "@/lib/dictionaries";
import { fetchOnimmoEmployees } from "@/lib/api";
import { Check } from "lucide-react";
import { Locale, isValidLocale, defaultLocale } from "@/lib/i18n";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: PageProps) {
    const { locale: localeParam } = await params;
    const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
    const dictionary = await getDictionary(locale);
    const t = dictionary.aboutPage;
    
    // Server-side fetch ONIMMO employees for team section - no loading state needed
    const employees = await fetchOnimmoEmployees();

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#0F172A]">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-[#D1D1D1]/60 text-sm font-medium tracking-widest uppercase mb-4">
                        About
                    </p>
                    <h1 
                        className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 max-w-3xl leading-[1.1]"
                        style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                    >
                        {t.hero.title}
                    </h1>
                    <p className="text-lg text-[#D1D1D1]/70 max-w-xl">
                        {t.hero.subtitle}
                    </p>
                </div>
            </section>

            {/* Who we are */}
            <section className="py-20 sm:py-28">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                                src="/assets/hero-building.png"
                                alt="About ONIMMO"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <p className="text-[#932A12] text-xs font-semibold tracking-widest uppercase mb-4">
                                {t.whoWeAre.title}
                            </p>
                            <p className="text-[#6B7280] text-lg leading-relaxed mb-10">
                                {t.whoWeAre.description}
                            </p>

                            {/* How we work */}
                            <div className="border-t border-[#E5E7EB] pt-8">
                                <h3 
                                    className="text-sm font-semibold text-[#0F172A] mb-6"
                                    style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                                >
                                    {t.howWeWork.title}
                                </h3>
                                <ul className="space-y-4">
                                    {t.howWeWork.items.map((item: string, index: number) => (
                                        <li key={index} className="flex items-start gap-3 text-[#6B7280]">
                                            <Check className="w-5 h-5 text-[#932A12] flex-shrink-0 mt-0.5" strokeWidth={2} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Experience & Stats - Clean Horizontal Layout */}
            <section className="py-20 sm:py-28 bg-background">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
                        <div>
                            <p className="text-[#932A12] text-xs font-semibold tracking-widest uppercase mb-4">
                                Track Record
                            </p>
                            <h2 
                                className="text-2xl sm:text-3xl font-semibold text-white max-w-md"
                                style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                            >
                                {t.experience.title}
                            </h2>
                        </div>
                        <p className="text-[#D1D1D1]/60 max-w-md lg:text-right">
                            Our numbers reflect our commitment to quality and client satisfaction over the years.
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 border-t border-[#34435E] pt-12">
                        {t.experience.stats.map((stat: { value: string; label: string }, index: number) => (
                            <div 
                                key={index} 
                                className={`${index > 0 ? 'sm:border-l sm:border-[#34435E] sm:pl-8' : ''}`}
                            >
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span
                                        className="text-white text-5xl sm:text-6xl lg:text-7xl font-light tabular-nums"
                                        style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                                    >
                                        {stat.value}
                                    </span>
                                </div>
                                <p className="text-[#D1D1D1]/60 text-sm">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <TeamSection 
                employees={employees}
                title="Our Team"
                subtitle="Our dream team"
                description="Meet the dedicated professionals who make ONIMMO your trusted partner in real estate."
                variant="light"
            />
            <FinalCtaSection dictionary={dictionary} locale={locale} />
        </div>
    );
}
