import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import WhyUsSection from "@/components/home/why-us-section";
import TrustSection from "@/components/home/trust-section";
import VideoSection from "@/components/home/video-section";
import FinalCtaSection from "@/components/home/final-cta-section";
import { getDictionary } from "@/lib/dictionaries";
import { Locale, isValidLocale, defaultLocale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dictionary = await getDictionary(locale);

  return (
    <div className="min-h-screen">
      <HeroSection dictionary={dictionary} locale={locale} />
      <ServicesSection dictionary={dictionary} locale={locale} />
      <VideoSection dictionary={dictionary} locale={locale} />
      <WhyUsSection dictionary={dictionary} />
      <TrustSection dictionary={dictionary} />
      <FinalCtaSection dictionary={dictionary} locale={locale} />
    </div>
  );
}
