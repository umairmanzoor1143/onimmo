import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { locales, type Locale, isValidLocale, defaultLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { DictionaryProvider } from "@/components/dictionary-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const frutiger = localFont({
  src: [
    {
      path: "../../public/fonts/Frutiger.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Frutiger_bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-frutiger",
});

export const metadata: Metadata = {
  title: "APEX - Real Estate",
  description: "Buy, sell or have your property valued in Central Switzerland and Zurich",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={`${frutiger.variable} antialiased`}>
        <DictionaryProvider dictionary={dictionary} locale={locale}>
           <Header />
          {children}
          <Footer />
        </DictionaryProvider>
      </body>
    </html>
  );
}
