import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { locales, defaultLocale } from "@/lib/i18n";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return matchLocale(languages, locales, defaultLocale);
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the path is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Exclude assets and api
  if (
    pathnameIsMissingLocale &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/assets") &&
    !pathname.startsWith("/favicon.ico") &&
    !pathname.startsWith("/logo.png") &&
    !pathname.startsWith("/fonts") &&
    !pathname.startsWith("/api")
  ) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|assets|logo.png|favicon.ico|api).*)",
  ],
};
