import SellHeroSection from "@/components/selling/sell-hero-section";
import SellProcessSection from "@/components/selling/sell-process-section";
import SellBenefitsSection from "@/components/selling/sell-benefits-section";
import SellCTASection from "@/components/selling/sell-cta-section";
import { getDictionary } from "@/lib/dictionaries";
import { Locale, isValidLocale, defaultLocale } from "@/lib/i18n";

export default async function SellPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dictionary = await getDictionary(locale);

  return (
    <div className="min-h-screen">
      <SellHeroSection dictionary={dictionary} locale={locale} />
      <SellProcessSection dictionary={dictionary} />
      <SellBenefitsSection dictionary={dictionary} locale={locale} />
      <SellCTASection dictionary={dictionary} locale={locale} />
    </div>
  );
}
