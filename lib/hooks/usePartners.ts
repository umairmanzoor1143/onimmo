"use client";

// ============================================
// Client-side hooks - DEPRECATED
// ============================================
// NOTE: This file is kept for backward compatibility only.
// All new code should use server-side API functions from /lib/api.ts
// 
// The server-side approach is faster because:
// 1. Data is fetched at build/request time - no client loading states
// 2. Next.js handles caching automatically with revalidate
// 3. Less JavaScript shipped to the client
// 4. Better SEO - content is pre-rendered
//
// Use /lib/api.ts for all new data fetching needs.
// ============================================

// Re-export utilities from api.ts for backward compatibility
export { 
  ONIMMO_COMPANY_ID, 
  getPartnerLogo, 
  getPartnerDisplayName 
} from "@/lib/api";
