// Server-side API functions for fetching data
// These are used in Server Components for SSR

import { PartnerCompany, PartnerAbout, Employee, PartnerData, PARTNER_IDS } from "./partners";

const BACKEND_BASE_URL = "https://me.onra.ch/api";
const CONNECT_TOKEN = "27e8d2c1-1fc4-4eb3-9de0-b26d554b0eaa";

// ONIMMO Company ID - our main company
export const ONIMMO_COMPANY_ID = "675ffef89d27d2885962d1fe";

const headers = {
  "Content-Type": "application/json",
  "Connect-Token": CONNECT_TOKEN,
};

// Cache configuration for Next.js fetch
const cacheConfig = { 
  next: { revalidate: 3600 } // Revalidate every hour
};

// ============================================
// Server-side API Functions
// ============================================

// Fetch company basic info
export async function fetchCompany(companyId: string): Promise<PartnerCompany | null> {
  console.log(`Fetching company data for ID: ${companyId}`);
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/connect/company/${companyId}`, { 
      headers,
      ...cacheConfig
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching company:", error);
    return null;
  }
}

// Fetch company about info
export async function fetchCompanyAbout(companyId: string): Promise<PartnerAbout | null> {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/connect/company/about/${companyId}`, { 
      headers,
      ...cacheConfig
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching company about:", error);
    return null;
  }
}

// Fetch company employees
export async function fetchCompanyEmployees(companyId: string): Promise<Employee[]> {
  try {
    const res = await fetch(`${BACKEND_BASE_URL}/connect/companies/${companyId}/employees/`, { 
      headers,
      ...cacheConfig
    });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];
  }
}

// Fetch all partner companies (for listing page)
export async function fetchAllPartnerCompanies(): Promise<PartnerCompany[]> {
  const partnerIds = Object.values(PARTNER_IDS);
  const results = await Promise.all(partnerIds.map(id => fetchCompany(id)));
  return results.filter((c): c is PartnerCompany => c !== null);
}

// Fetch full partner details (for detail page)
export async function fetchPartnerDetails(companyId: string): Promise<PartnerData | null> {
  try {
    const [company, about, employees] = await Promise.all([
      fetchCompany(companyId),
      fetchCompanyAbout(companyId),
      fetchCompanyEmployees(companyId),
    ]);

    if (!company) return null;

    return { company, about, teams: [], employees };
  } catch (error) {
    console.error("Error fetching partner details:", error);
    return null;
  }
}

// Fetch ONIMMO company data
export async function fetchOnimmoCompany(): Promise<PartnerCompany | null> {
  return fetchCompany(ONIMMO_COMPANY_ID);
}

// Fetch ONIMMO employees
export async function fetchOnimmoEmployees(): Promise<Employee[]> {
  return fetchCompanyEmployees(ONIMMO_COMPANY_ID);
}

// ============================================
// Utility Functions
// ============================================

// Get partner logo/image for display
export function getPartnerLogo(company: PartnerCompany): string | undefined {
  return company.image || company.logo;
}

// Get partner name for display
export function getPartnerDisplayName(company: PartnerCompany): string {
  return company.company || company.name || "Partner";
}
