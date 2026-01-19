"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useDictionary } from "./dictionary-provider";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { dictionary, locale } = useDictionary();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    router.push(`/${newLocale}${pathWithoutLocale}`);
    router.refresh();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isActive = (path: string) => {
    if (path === `/${locale}`) {
      return pathname === path;
    }
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const navItems = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/selling`, label: t.nav.sales },
    { href: `/${locale}/purchasing`, label: t.nav.purchasing },
    { href: `/${locale}/property-management`, label: t.nav.propertyManagement },
    { href: `/${locale}/partners`, label: t.nav.partners },
    { href: `/${locale}/about`, label: t.nav.aboutUs },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-500"
        data-testid="header"
      >
        <div
          className={`max-w-[1600px] mx-auto flex items-center justify-between h-[72px] px-6 lg:px-8 rounded-full transition-all duration-500 ${isScrolled || isMenuOpen
            ? "bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            : "bg-white/10 backdrop-blur-md border border-white/10"
            }`}
        >
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={120} 
                height={120} 
                className={`transition-all duration-300 ${
                  isScrolled || isMenuOpen ? "" : "brightness-150"
                }`}
              />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] font-medium transition-colors duration-300 hover:text-[#932A12] ${isActive(item.href)
                  ? "text-[#932A12] brightness-150"
                  : isScrolled
                    ? "text-[#34435E]"
                    : "text-white/80"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-white/10 backdrop-blur-sm">
              <button
                onClick={() => switchLanguage("de")}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${locale === "de"
                  ? "bg-white text-[#0F172A] shadow-sm"
                  : isScrolled
                    ? "text-[#34435E] hover:text-[#0F172A]"
                    : "text-white/70 hover:text-white"
                  }`}
              >
                DE
              </button>
              <button
                onClick={() => switchLanguage("en")}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${locale === "en"
                  ? "bg-white text-[#0F172A] shadow-sm"
                  : isScrolled
                    ? "text-[#34435E] hover:text-[#0F172A]"
                    : "text-white/70 hover:text-white"
                  }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2.5 rounded-full transition-all duration-300 ${isScrolled || isMenuOpen
              ? "text-[#0F172A] hover:bg-gray-100"
              : "text-white hover:bg-white/10"
              }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Glass style */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute inset-x-4 top-28 bg-white/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/20 transition-all duration-500 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
        >
          <nav className="flex flex-col gap-4 mb-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl font-medium py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors ${isActive(item.href)
                  ? "text-[#932A12] bg-gray-50"
                  : "text-[#34435E]"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => {
                switchLanguage("de");
                setIsMenuOpen(false);
              }}
              className={`px-4 py-2 rounded-full text-base font-medium transition-all ${locale === "de"
                ? "bg-[#0F172A] text-white"
                : "bg-gray-100 text-[#34435E]"
                }`}
            >
              DE
            </button>
            <button
              onClick={() => {
                switchLanguage("en");
                setIsMenuOpen(false);
              }}
              className={`px-4 py-2 rounded-full text-base font-medium transition-all ${locale === "en"
                ? "bg-[#0F172A] text-white"
                : "bg-gray-100 text-[#34435E]"
                }`}
            >
              EN
            </button>
          </div>

          {/* CTA Button
          <button className="w-full bg-[#932A12] text-white px-6 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 hover:bg-[#6F1A07] transition-all shadow-lg shadow-[#932A12]/20">
            {t.cta.full}
            <ArrowUpRight className="w-5 h-5" />
          </button> */}
        </div>
      </div>
    </>
  );
}
