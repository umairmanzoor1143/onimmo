import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Dictionary } from "@/lib/dictionaries";
import { PartnerCompany } from "@/lib/partners";
import { getPartnerLogo, getPartnerDisplayName } from "@/lib/api";
import Link from "next/link";

interface TrustSectionProps {
    dictionary: Dictionary;
    locale: string;
    partners?: PartnerCompany[];
}

export default function TrustSection({ dictionary, locale, partners = [] }: TrustSectionProps) {
    const t = dictionary.trust;
    // Stats data derived from dictionary
    const stats = [
        {
            // @ts-ignore
            label: t.stats.experience.label,
            value: "15",
            suffix: "+",
            // @ts-ignore
            description: t.stats.experience.description
        },
        {
            // @ts-ignore
            label: t.stats.properties.label,
            value: "500",
            suffix: "+",
            // @ts-ignore
            description: t.stats.properties.description
        },
        {
            // @ts-ignore
            label: t.stats.clients.label,
            value: "300",
            suffix: "+",
            // @ts-ignore
            description: t.stats.clients.description
        },
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="mb-12 md:mb-16">
                    <h2
                        className="text-[#0F172A] text-2xl md:text-3xl font-semibold tracking-tight mb-2"
                        style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                    >
                        {t.title}
                    </h2>
                    <p className="text-[#6B7280] text-base md:text-lg">
                        {t.subtitle}
                    </p>
                </div>

                {/* Main Grid Layout */}
                <div className="flex flex-col gap-16 md:gap-24">
                    {/* Bento Grid Stats */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
                        {/* Left Column - Large Image */}
                        <div
                            className="relative w-full rounded-[32px] overflow-hidden"
                            style={{ height: "600px" }}
                        >
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: "url('/assets/hero-building.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>

                        {/* Right Column - 2x2 Grid that matches left height */}
                        <div
                            className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-5"
                            style={{ height: "600px" }}
                        >

                            {/* Stat Card 1 - Global Reach */}
                            <div className="bg-[#F5F5F5] rounded-[24px] p-6 md:p-8 flex flex-col justify-between">
                                <p className="text-[#6B7280] text-xs font-medium uppercase tracking-wider">
                                    {stats[0].label}
                                </p>
                                <div>
                                    <div className="flex items-baseline">
                                        <span
                                            className="text-[#0F172A] text-5xl md:text-6xl lg:text-7xl font-light"
                                            style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                                        >
                                            {stats[0].value}
                                        </span>
                                        <span className="text-[#84CC16] text-2xl md:text-3xl font-light ml-1">
                                            {stats[0].suffix}
                                        </span>
                                    </div>
                                    <p className="text-[#6B7280] text-sm mt-2">
                                        {stats[0].description}
                                    </p>
                                </div>
                            </div>

                            {/* Stat Card 2 - Local Expertise */}
                            <div className="bg-[#F5F5F5] rounded-[24px] p-6 md:p-8 flex flex-col justify-between">
                                <p className="text-[#6B7280] text-xs font-medium uppercase tracking-wider">
                                    {stats[1].label}
                                </p>
                                <div>
                                    <div className="flex items-baseline">
                                        <span
                                            className="text-[#0F172A] text-5xl md:text-6xl lg:text-7xl font-light"
                                            style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                                        >
                                            {stats[1].value}
                                        </span>
                                        <span className="text-[#84CC16] text-2xl md:text-3xl font-light ml-1">
                                            {stats[1].suffix}
                                        </span>
                                    </div>
                                    <p className="text-[#6B7280] text-sm mt-2">
                                        {stats[1].description}
                                    </p>
                                </div>
                            </div>

                            {/* Stat Card 3 - Our Impact */}
                            <div className="bg-[#F5F5F5] rounded-[24px] p-6 md:p-8 flex flex-col justify-between">
                                <p className="text-[#6B7280] text-xs font-medium uppercase tracking-wider">
                                    {stats[2].label}
                                </p>
                                <div>
                                    <div className="flex items-baseline">
                                        <span
                                            className="text-[#0F172A] text-5xl md:text-6xl lg:text-7xl font-light"
                                            style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                                        >
                                            {stats[2].value}
                                        </span>
                                        <span className="text-[#84CC16] text-2xl md:text-3xl font-light ml-1">
                                            {stats[2].suffix}
                                        </span>
                                    </div>
                                    <p className="text-[#6B7280] text-sm mt-2">
                                        {stats[2].description}
                                    </p>
                                </div>
                            </div>

                            {/* Image Card - Bottom Right */}
                            <div className="relative rounded-[24px] overflow-hidden">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: "url('/assets/hero-building.png')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                />
                            </div>

                        </div>
                    </div>

                    {/* Infinite Partner Slider */}
                    <div>
                        <p className="text-[#6B7280] text-sm font-medium uppercase tracking-wider mb-8 text-center">
                            {t.partners.title}
                        </p>
                        {partners.length > 0 ? (
                            <InfiniteSlider
                                gap={64}
                                duration={40}
                                durationOnHover={50}
                                className="py-4"
                            >
                                {/* Repeat partners to fill the slider */}
                                {[...partners, ...partners, ...partners, ...partners].map((company, index) => {
                                    const logo = getPartnerLogo(company);
                                    const name = getPartnerDisplayName(company);
                                    const companyId = company.id || company._id;
                                    
                                    return (
                                        <Link
                                            key={`${companyId}-${index}`}
                                            href={`/${locale}/partners/${companyId}`}
                                            className="h-16 w-40 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                                        >
                                            {logo ? (
                                                <img
                                                    src={logo}
                                                    alt={name}
                                                    className="max-h-full max-w-full object-contain"
                                                />
                                            ) : (
                                                <span className="text-[#6B7280] text-sm font-medium whitespace-nowrap">
                                                    {name}
                                                </span>
                                            )}
                                        </Link>
                                    );
                                })}
                            </InfiniteSlider>
                        ) : (
                            <p className="text-center text-[#6B7280] py-4">No partners available</p>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}
