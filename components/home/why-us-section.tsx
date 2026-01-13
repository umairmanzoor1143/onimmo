import {
    TrendingUp,
    Handshake,
    Network,
    ClipboardList,
} from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";

interface WhyUsSectionProps {
    dictionary: Dictionary;
}

export default function WhyUsSection({ dictionary }: WhyUsSectionProps) {
    const features = [
        {
            icon: TrendingUp,
            title: "Market experience", // Needs key
            description:
                "With years of experience and a deep understanding of the local market, we provide unparalleled insights to guide your property decisions.", // Needs key
        },
        {
            icon: Handshake,
            title: "Personal, hands-on consulting", // Needs key
            description:
                "We offer dedicated, one-on-one guidance throughout the entire process, ensuring your needs are always our top priority.", // Needs key
        },
        {
            icon: Network,
            title: "Strong partner & financing network", // Needs key
            description:
                "Leverage our extensive network of trusted partners, from financing to legal, to ensure a seamless and successful transaction.", // Needs key
        },
        {
            icon: ClipboardList,
            title: "Transparent process & communication", // Needs key
            description:
                "We believe in clear, honest communication. You'll be kept informed at every step, providing you with confidence and peace of mind.", // Needs key
        },
    ];

    return (
        <section className="w-full bg-[#0F172A] -mt-25 pt-25 diagonal-clip" data-bg="dark">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-16 md:py-24">

                    {/* Left Column - Title & Image */}
                    <div className="flex flex-col">
                        {/* Section Header */}
                        <div className="mb-8">
                            <h2
                                className="text-white text-3xl md:text-4xl font-semibold tracking-tight mb-4"
                                style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                            >
                                Why choose us ?
                            </h2>
                            <p className="text-[#D1D1D1]/70 text-base max-w-md leading-relaxed">
                                Built specifically for real estate professionals and over time. Stay organized, and close more deals with less effort.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative flex-1 min-h-[300px] lg:min-h-[400px] overflow-hidden">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: "url('/assets/hero-building.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent" />
                        </div>
                    </div>

                    {/* Right Column - Features List */}
                    <div className="flex flex-col justify-center">
                        <div className="space-y-0">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="py-6 border-b border-[#34435E]/60 last:border-b-0 hover:bg-[#34435E]/10 transition-colors duration-200 px-2 -mx-2"
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Icon */}
                                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#34435E]/50 rounded">
                                                <Icon
                                                    className="w-5 h-5 text-[#D1D1D1]"
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <h3
                                                    className="text-white text-lg font-medium mb-2"
                                                    style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                                                >
                                                    {feature.title}
                                                </h3>
                                                <p className="text-[#D1D1D1]/60 text-sm leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
