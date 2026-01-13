import { getDictionary } from "@/lib/dictionaries";
import { Locale, defaultLocale, isValidLocale } from "@/lib/i18n";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default async function ContactPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale: localeParam } = await params;
    const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
    const dictionary = await getDictionary(locale);
    const t = dictionary.contactPage;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#0F172A]">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-[#932A12] text-sm font-medium tracking-widest uppercase mb-4">
                        Contact
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

            {/* Main Content */}
            <section className="py-16 sm:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Left Column - Contact Info */}
                        <div className="lg:col-span-4 space-y-12">
                            {/* Direct Contact */}
                            <div>
                                <h2 className="text-xs font-semibold tracking-widest uppercase text-[#6B7280] mb-6">
                                    Direct Contact
                                </h2>
                                <div className="space-y-6">
                                    {/* Phone */}
                                    <a 
                                        href={`tel:${t.options.call.number}`}
                                        className="group flex items-start gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#932A12] transition-colors">
                                            <Phone className="w-4 h-4 text-[#6B7280] group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-[#0F172A] font-medium group-hover:text-[#932A12] transition-colors">
                                                {t.options.call.number}
                                            </p>
                                            <p className="text-[#6B7280] text-sm mt-0.5">
                                                {t.options.call.hours}
                                            </p>
                                        </div>
                                    </a>

                                    {/* Email */}
                                    <a 
                                        href={`mailto:${t.options.email.address}`}
                                        className="group flex items-start gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#932A12] transition-colors">
                                            <Mail className="w-4 h-4 text-[#6B7280] group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-[#0F172A] font-medium group-hover:text-[#932A12] transition-colors break-all">
                                                {t.options.email.address}
                                            </p>
                                            <p className="text-[#6B7280] text-sm mt-0.5">
                                                {t.options.email.note}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <h2 className="text-xs font-semibold tracking-widest uppercase text-[#6B7280] mb-6">
                                    Location
                                </h2>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-[#6B7280]" />
                                    </div>
                                    <div>
                                        <p className="text-[#0F172A] font-medium">
                                            {t.options.visit.address}
                                        </p>
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.options.visit.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-sm text-[#932A12] hover:text-[#7a2410] transition-colors mt-2"
                                        >
                                            View on map
                                            <ArrowUpRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Divider Line */}
                            <div className="hidden lg:block w-full h-px bg-[#E5E7EB]" />

                            {/* Response Promise */}
                            <div className="hidden lg:block">
                                <p className="text-[#6B7280] text-sm leading-relaxed">
                                    {t.final.text}
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="lg:col-span-8">
                            <div className="bg-[#F5F5F5] rounded-[24px] p-6 sm:p-10">
                                <div className="mb-8">
                                    <h2 
                                        className="text-2xl font-semibold text-[#0F172A] mb-2"
                                        style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                                    >
                                        {t.form.title}
                                    </h2>
                                    <p className="text-[#6B7280] text-sm">
                                        {t.form.privacy}
                                    </p>
                                </div>

                                <ContactForm dictionary={dictionary} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[350px] w-full bg-[#F5F5F5] relative border-t border-[#E5E7EB]">
                <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(t.options.visit.address)}&zoom=15`}
                    className="absolute inset-0 w-full h-full grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                />
            </section>
        </div>
    );
}
