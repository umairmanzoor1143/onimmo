import FinalCtaSection from "@/components/home/final-cta-section";
import { getDictionary } from "@/lib/dictionaries";
import { PartnerCompany, getCompanyName } from "@/lib/partners";
import { fetchAllPartnerCompanies, getPartnerLogo } from "@/lib/api";
import { Locale, isValidLocale, defaultLocale } from "@/lib/i18n";
import { ArrowRight, Building2, MapPin } from "lucide-react";
import Link from "next/link";

// Partner Logo Card Component
function PartnerLogoCard({ 
  company, 
  locale, 
}: { 
  company: PartnerCompany; 
  locale: string;
}) {
  const companyName = getCompanyName(company);
  const companyId = company.id || company._id;
  const logo = getPartnerLogo(company);

  return (
    <Link 
      href={`/${locale}/partners/${companyId}`}
      className="group block"
    >
      <div className="relative bg-[#FAFAFA] hover:bg-white rounded-xl p-6 border border-transparent hover:border-[#E5E7EB] transition-all duration-300 h-full">
        {/* Logo Container */}
        <div className="flex items-center justify-center h-20 mb-6">
          {logo ? (
            <img
              src={logo}
              alt={companyName}
              className="max-h-full max-w-[160px] object-contain"
            />
          ) : (
            <div className="w-16 h-16 rounded-lg bg-[#E5E7EB] flex items-center justify-center">
              <Building2 className="w-8 h-8 text-[#9CA3AF]" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 
            className="text-base font-semibold text-[#0F172A] mb-2"
            style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
          >
            {companyName}
          </h3>
          
          {company.address?.city && (
            <div className="flex items-center justify-center text-xs text-[#6B7280]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {company.address.city}
              </span>
            </div>
          )}
        </div>

        {/* Arrow indicator */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowRight className="w-4 h-4 text-[#932A12]" />
        </div>
      </div>
    </Link>
  );
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dictionary = await getDictionary(locale);
  const t = dictionary.partnersPage;

  // Server-side fetch - data is ready on first render
  const partners = await fetchAllPartnerCompanies();

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#0F172A]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-[#932A12]/20 text-[#932A12] text-xs font-semibold tracking-widest uppercase rounded-full mb-6">
              {t.hero.badge}
            </span>
            <h1 
              className="text-4xl font-semibold sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
            >
              {t.hero.title}
            </h1>
            <p className="text-[#D1D1D1]/70 leading-relaxed text-lg max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#932A12]/10 text-[#932A12] text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              {t.partners.badge}
            </span>
            <h2 
              className="text-3xl font-semibold sm:text-4xl text-[#0F172A] mb-4"
              style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
            >
              {t.partners.title}
            </h2>
            <p className="text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
              {t.partners.subtitle}
            </p>
          </div>

          {/* Partners Grid */}
          {partners.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((company, index) => (
                <PartnerLogoCard 
                  key={company.id || company._id || index} 
                  company={company} 
                  locale={locale}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-gray-300" />
              </div>
              <p className="text-[#6B7280] text-lg">{t.noPartners}</p>
            </div>
          )}
        </div>
      </section>

      <FinalCtaSection dictionary={dictionary} locale={locale} />
    </main>
  );
}
