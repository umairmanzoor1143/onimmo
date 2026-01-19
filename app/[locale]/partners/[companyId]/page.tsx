import FinalCtaSection from "@/components/home/final-cta-section";
import TeamSection from "@/components/team-section";
import { getDictionary } from "@/lib/dictionaries";
import { getEmployeesArray, getCompanyName, getCompanyWebsite } from "@/lib/partners";
import { fetchPartnerDetails, getPartnerLogo } from "@/lib/api";
import { Locale, isValidLocale, defaultLocale } from "@/lib/i18n";
import { ArrowLeft, ArrowUpRight, Building2, Mail, Phone, Globe, MapPin, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ locale: string; companyId: string }>;
}

export default async function PartnerDetailPage({ params }: PageProps) {
  const { locale: localeParam, companyId } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dictionary = await getDictionary(locale);
  const t = dictionary.partnersPage;

  // Server-side data fetching - no loading state needed
  const partnerData = await fetchPartnerDetails(companyId);

  if (!partnerData) {
    notFound();
  }

  const { company, about } = partnerData;
  const employees = getEmployeesArray(partnerData.employees);
  const companyName = getCompanyName(company);
  const companyWebsite = getCompanyWebsite(company);
  const logo = getPartnerLogo(company);
  const bookingLink = company.weblinks?.weblinksItems?.find(item => item.code === "BOOK")?.url;

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#0F172A]">
        <div className="mx-auto max-w-6xl px-6">
          {/* Back Link */}
          <Link 
            href={`/${locale}/partners`}
            className="inline-flex items-center gap-2 text-[#D1D1D1]/60 hover:text-[#932A12] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t.detail.back}
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg flex items-center justify-center p-4">
                {logo ? (
                  <img
                    src={logo}
                    alt={companyName}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <Building2 className="w-16 h-16 text-[#932A12]/30" />
                )}
              </div>
            </div>

            {/* Company Info */}
            <div className="flex-grow">
              <h1 
                className="text-4xl font-semibold sm:text-5xl text-white mb-4 leading-[1.1]"
                style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
              >
                {companyName}
              </h1>
              
              {company.address && (
                <p className="text-[#D1D1D1]/70 flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-[#932A12]" />
                  {company.address.street} {company.address.streetNumber}, {company.address.zip} {company.address.city}
                  {company.address.state && `, ${company.address.state}`}
                </p>
              )}

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3 mt-6">
                {companyWebsite && (
                  <a
                    href={companyWebsite.startsWith("http") ? companyWebsite : `https://${companyWebsite}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#932A12] text-white rounded-full text-sm font-medium hover:bg-[#7a2310] transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    {t.detail.website}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
                {bookingLink && (
                  <a
                    href={bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#932A12] border border-[#932A12] rounded-full text-sm font-medium hover:bg-[#932A12]/5 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    {t.detail.bookAppointment}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left - About Content */}
            <div>
              <p className="text-[#932A12] text-xs font-semibold tracking-widest uppercase mb-4">
                {t.detail.about}
              </p>
              <h2 
                className="text-3xl font-semibold sm:text-4xl text-[#0F172A] mb-8 leading-tight"
                style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
              >
                {locale === "de" ? "Über das Unternehmen" : "About the Company"}
              </h2>
              
              {about?.description ? (
                <p className="text-[#6B7280] leading-relaxed text-lg mb-8">
                  {about.description}
                </p>
              ) : company.openingHours?.message ? (
                <p className="text-[#6B7280] leading-relaxed text-lg mb-8">
                  {company.openingHours.message}
                </p>
              ) : (
                <p className="text-[#6B7280] leading-relaxed text-lg mb-8">
                  {locale === "de" 
                    ? `${companyName} ist ein vertrauenswürdiger Partner in unserem Netzwerk.`
                    : `${companyName} is a trusted partner in our network.`
                  }
                </p>
              )}

             
            </div>

            {/* Right - Contact Info */}
            <div className="space-y-6">
              <h3 
                className="text-xs font-semibold tracking-widest uppercase text-[#6B7280] mb-6"
              >
                {t.detail.contact}
              </h3>
              
              {company.email && (
                <a 
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-4 group py-4 border-b border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#932A12] transition-colors">
                    <Mail className="w-5 h-5 text-[#6B7280] group-hover:text-white transition-colors" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs text-[#6B7280] mb-1">Email</p>
                    <p className="text-base font-medium text-[#0F172A] group-hover:text-[#932A12] transition-colors">{company.email}</p>
                  </div>
                </a>
              )}
              
              {company.phone && (
                <a 
                  href={`tel:${company.phone}`}
                  className="flex items-start gap-4 group py-4 border-b border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#932A12] transition-colors">
                    <Phone className="w-5 h-5 text-[#6B7280] group-hover:text-white transition-colors" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs text-[#6B7280] mb-1">{locale === "de" ? "Telefon" : "Phone"}</p>
                    <p className="text-base font-medium text-[#0F172A] group-hover:text-[#932A12] transition-colors">{company.phone}</p>
                  </div>
                </a>
              )}

              {company.address && (
                <div className="flex items-start gap-4 py-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#6B7280]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs text-[#6B7280] mb-1">{t.detail.location}</p>
                    <p className="text-base font-medium text-[#0F172A]">
                      {company.address.street} {company.address.streetNumber}<br />
                      {company.address.zip} {company.address.city}
                    </p>
                  </div>
                </div>
              )}

              {company.openingHours?.message && (
                <div className="flex items-start gap-4 py-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#6B7280]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs text-[#6B7280] mb-1">{t.detail.openingHours}</p>
                    <p className="text-base font-medium text-[#0F172A]">{company.openingHours.message}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection 
        employees={employees}
        title={t.detail.team}
        subtitle={locale === "de" ? "Lernen Sie das Team kennen" : "Meet the Team"}
        description={t.detail.teamSubtitle}
        variant="dark"
      />

      {/* Map Section */}
      {company.address && (
        <section className="h-[350px] w-full bg-[#F5F5F5] relative border-t border-[#E5E7EB]">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
              `${company.address.street || ''} ${company.address.streetNumber || ''}, ${company.address.zip || ''} ${company.address.city || ''}`
            )}&zoom=15`}
            className="absolute inset-0 w-full h-full grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${companyName} Location`}
          />
        </section>
      )}
      <FinalCtaSection dictionary={dictionary} locale={locale} />
    </main>
  );
}
