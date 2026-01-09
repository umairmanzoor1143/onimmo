"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useDictionary } from "./dictionary-provider";
import Link from "next/link";

export default function Header() {
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { dictionary, locale } = useDictionary();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    // Get the path without the current locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    // Navigate to the new locale path
    router.push(`/${newLocale}${pathWithoutLocale}`);
    router.refresh();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-bg]");
      const headerHeight = 80;

      let currentBg = "light";
      let closestTop = -Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top + 100 <= headerHeight && rect.bottom > headerHeight) {
          if (rect.top > closestTop) {
            closestTop = rect.top;
            currentBg = section.getAttribute("data-bg") || "light";
          }
        }
      });

      setIsDarkBg(currentBg === "dark");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const t = dictionary.header;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 transition-all duration-300 ${
          isDarkBg || isMenuOpen ? "bg-[#0F172A]/95 backdrop-blur-sm" : "bg-transparent"
        }`}
        data-testid="header"
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-6 lg:gap-14" data-testid="logo">
            <span
              className={`font-bold text-xl sm:text-2xl tracking-wide transition-colors duration-300 ${
                isDarkBg || isMenuOpen ? "text-white" : "text-[#0F172A]"
              }`}
            >
              {t.logo}
            </span>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12" data-testid="nav">
              <Link
                href="/selling"
                className={`text-base xl:text-lg font-medium hover:text-[#932A12] transition-colors ${
                  isDarkBg ? "text-white" : "text-[#0F172A]"
                }`}
              >
                {t.nav.selling}
              </Link>
              <a
                href="#"
                className={`text-base xl:text-lg font-medium hover:text-[#932A12] transition-colors ${
                  isDarkBg ? "text-white/70" : "text-[#34435E]"
                }`}
              >
                {t.nav.buying}
              </a>
              <a
                href="#"
                className={`text-base xl:text-lg font-medium hover:text-[#932A12] transition-colors ${
                  isDarkBg ? "text-white/70" : "text-[#34435E]"
                }`}
              >
                {t.nav.aboutUs}
              </a>
              <a
                href="#"
                className={`text-base xl:text-lg font-medium hover:text-[#932A12] transition-colors ${
                  isDarkBg ? "text-white/70" : "text-[#34435E]"
                }`}
              >
                {t.nav.contactUs}
              </a>
            </nav>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Language Switcher */}
            <div className="flex items-center gap-3" data-testid="lang-switcher">
              <button
                onClick={() => switchLanguage("de")}
                className={`text-base xl:text-lg font-medium transition-colors ${
                  locale === "de"
                    ? "text-[#932A12]"
                    : isDarkBg
                    ? "text-white/70 hover:text-white"
                    : "text-[#34435E] hover:text-[#0F172A]"
                }`}
              >
                DE
              </button>
              <button
                onClick={() => switchLanguage("en")}
                className={`text-base xl:text-lg font-medium transition-colors ${
                  locale === "en"
                    ? "text-[#932A12]"
                    : isDarkBg
                    ? "text-white/70 hover:text-white"
                    : "text-[#34435E] hover:text-[#0F172A]"
                }`}
              >
                EN
              </button>
            </div>

            <button
              className="bg-[#F5E6E3] text-[#932A12] px-6 xl:px-8 py-3 xl:py-4 rounded-full text-base xl:text-lg font-semibold flex items-center gap-2 xl:gap-3 hover:bg-[#EDD5D0] transition-all"
              data-testid="button-get-start"
            >
              <span className="hidden xl:inline">{t.cta.full}</span>
              <span className="xl:hidden">{t.cta.short}</span>
              <div className="w-6 h-6 xl:w-7 xl:h-7 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 xl:w-5 xl:h-5 text-[#932A12]" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isDarkBg || isMenuOpen ? "text-white" : "text-[#0F172A]"
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0F172A] transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-6 flex-1">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl sm:text-3xl font-medium hover:text-[#932A12] transition-colors"
            >
              {t.nav.selling}
            </a>
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-white/70 text-2xl sm:text-3xl font-medium hover:text-[#932A12] transition-colors"
            >
              {t.nav.buying}
            </a>
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-white/70 text-2xl sm:text-3xl font-medium hover:text-[#932A12] transition-colors"
            >
              {t.nav.aboutUs}
            </a>
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-white/70 text-2xl sm:text-3xl font-medium hover:text-[#932A12] transition-colors"
            >
              {t.nav.contactUs}
            </a>
          </nav>

          {/* Mobile Bottom */}
          <div className="space-y-6">
            {/* Language Switcher */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  switchLanguage("de");
                  setIsMenuOpen(false);
                }}
                className={`text-lg font-medium transition-colors ${
                  locale === "de" ? "text-[#932A12]" : "text-white/70"
                }`}
              >
                DE
              </button>
              <button
                onClick={() => {
                  switchLanguage("en");
                  setIsMenuOpen(false);
                }}
                className={`text-lg font-medium transition-colors ${
                  locale === "en" ? "text-[#932A12]" : "text-white/70"
                }`}
              >
                EN
              </button>
            </div>

            <button className="w-full bg-[#932A12] text-white px-6 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 hover:bg-[#6F1A07] transition-all">
              {t.cta.full}
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
