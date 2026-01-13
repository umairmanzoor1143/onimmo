import FinalCtaSection from "@/components/home/final-cta-section";
import { getDictionary } from "@/lib/dictionaries";
import { Locale, defaultLocale, isValidLocale } from "@/lib/i18n";
import { ArrowUpRight, Check, Building2, Wallet, Users } from "lucide-react";
import Link from "next/link";

const members = [
    {
        name: 'Liam Brown',
        role: 'Founder - CEO',
        avatar: 'https://alt.tailus.io/images/team/member-one.webp',
        link: '#',
    },
    {
        name: 'Elijah Jones',
        role: 'Co-Founder - CTO',
        avatar: 'https://alt.tailus.io/images/team/member-two.webp',
        link: '#',
    },
    {
        name: 'Isabella Garcia',
        role: 'Sales Manager',
        avatar: 'https://alt.tailus.io/images/team/member-three.webp',
        link: '#',
    },
    {
        name: 'Henry Lee',
        role: 'UX Engeneer',
        avatar: 'https://alt.tailus.io/images/team/member-four.webp',
        link: '#',
    },
    {
        name: 'Ava Williams',
        role: 'Interaction Designer',
        avatar: 'https://alt.tailus.io/images/team/member-five.webp',
        link: '#',
    },
    {
        name: 'Olivia Miller',
        role: 'Visual Designer',
        avatar: 'https://alt.tailus.io/images/team/member-six.webp',
        link: '#',
    },
]

 function TeamSection() {
    return (
        <section className="bg-white pb-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <p className="text-[#932A12] text-xs font-semibold tracking-widest uppercase mb-4">
                            Our Team
                        </p>
                        <h2 
                            className="text-3xl font-semibold sm:text-4xl text-[#0F172A]"
                            style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                        >
                            Our dream team
                        </h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p className="text-[#6B7280] leading-relaxed">During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <img className="h-96 w-full rounded-[24px] object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem]" src={member.avatar} alt="team member" width="826" height="1239" />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-[#0F172A] text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-[#6B7280] text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-[#6B7280] inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link href={member.link} className="text-[#932A12] inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default async function AboutPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale: localeParam } = await params;
    const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
    const dictionary = await getDictionary(locale);
    const t = dictionary.aboutPage;

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
            <TeamSection />
            <FinalCtaSection  dictionary={dictionary} locale={locale}/>
        </div>
    );
}
