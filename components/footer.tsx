"use client";

import { ArrowUpRight } from "lucide-react";
import { useDictionary } from "./dictionary-provider";

export default function Footer() {
  const { dictionary } = useDictionary();
  const t = dictionary.footer;

  return (
    <footer data-bg="dark">
      {/* Contact CTA Section */}
      <div className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/city.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0F172A]/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-[7rem] py-16 sm:py-20 lg:py-32">
          <div className="max-w-6xl">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1] mb-4 sm:mb-6">
              {t.cta.title}
            </h2>
            <p className="text-white/60 text-base sm:text-lg lg:text-xl xl:text-2xl mb-10 sm:mb-12 lg:mb-16">
              {t.cta.subtitle}
            </p>

            {/* Contact Options - Horizontal Layout */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap lg:items-center gap-4 sm:gap-6 lg:gap-12">
              <a
                href="tel:+41415080707"
                className="group flex items-center gap-3 sm:gap-4 text-white hover:text-[#932A12] transition-colors"
              >
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl">{t.cta.links.call}</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>

              <span className="hidden lg:block w-px h-6 bg-white/20" />

              <a
                href="mailto:info@apex-property.ch"
                className="group flex items-center gap-3 sm:gap-4 text-white hover:text-[#932A12] transition-colors"
              >
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl">{t.cta.links.email}</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>

              <span className="hidden lg:block w-px h-6 bg-white/20" />

              <a
                href="#contact"
                className="group flex items-center gap-3 sm:gap-4 text-white hover:text-[#932A12] transition-colors"
              >
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl">{t.cta.links.form}</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Minimal */}
      <div className="bg-[#0F172A]">
        <div className="px-4 sm:px-6 lg:px-[7rem] py-10 sm:py-12 lg:py-16">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 lg:mb-16">
            {/* Logo & Tagline */}
            <div className="lg:max-w-sm">
              <span className="text-white text-2xl sm:text-3xl font-bold tracking-wide">
                APEX
              </span>
              <p className="text-white/40 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed">
                {t.tagline}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 lg:gap-20">
              <div>
                <p className="text-white/40 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">{t.location.label}</p>
                <p className="text-white text-sm sm:text-base">{t.location.address1}</p>
                <p className="text-white text-sm sm:text-base">{t.location.address2}</p>
              </div>

              <div>
                <p className="text-white/40 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">{t.contact.label}</p>
                <a href="mailto:info@apex-property.ch" className="text-white text-sm sm:text-base block hover:text-[#932A12] transition-colors">
                  info@apex-property.ch
                </a>
                <a href="tel:+41415080707" className="text-white text-sm sm:text-base block hover:text-[#932A12] transition-colors">
                  +41 41 508 07 07
                </a>
              </div>

              <div>
                <p className="text-white/40 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">{t.social.label}</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <a href="#" className="text-white hover:text-[#932A12] transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-[#932A12] transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-[#932A12] transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-white/30 text-xs sm:text-sm">
              © {new Date().getFullYear()} {t.copyright}
            </p>
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              <a href="#" className="text-white/30 text-xs sm:text-sm hover:text-white transition-colors">
                {t.links.privacy}
              </a>
              <a href="#" className="text-white/30 text-xs sm:text-sm hover:text-white transition-colors">
                {t.links.imprint}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
