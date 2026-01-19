// Partner API types and utilities

export interface PartnerCompany {
  _id?: string;
  id?: string;
  company?: string;
  name?: string;
  logo?: string;
  image?: string;
  email?: string;
  phone?: string;
  website?: string;
  weblinks?: {
    website?: string;
    bookingLink?: string;
    vrTour?: string;
    weblinksItems?: Array<{ code: string; url: string }>;
  };
  address?: {
    street?: string;
    streetNumber?: string;
    city?: string;
    zip?: string | number;
    state?: string;
    country?: string;
    coordinate?: {
      longitude?: number;
      latitude?: number;
    };
  };
  openingHours?: {
    message?: string;
    items?: unknown[];
  };
  description?: string;
  [key: string]: unknown;
}

export interface PartnerAbout {
  description?: string;
  mission?: string;
  vision?: string;
  values?: string[];
  founded?: string;
  [key: string]: unknown;
}

export interface TeamMember {
  _id: string;
  name: string;
  role?: string;
  title?: string;
  department?: string;
  [key: string]: unknown;
}

export interface Employee {
  _id?: string;
  id?: string;
  firstName?: string;
  firstname?: string;
  lastName?: string;
  name?: string;
  role?: string;
  title?: string;
  position?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  image?: string;
  portrait?: string;
  department?: string;
  bio?: string;
  linkedin?: string;
  sloganDE?: string;
  sloganEN?: string;
  visibility?: string;
  [key: string]: unknown;
}

export interface PartnerData {
  company: PartnerCompany;
  about: PartnerAbout | null;
  teams: TeamMember[] | { data: TeamMember[] };
  employees: Employee[] | { data: Employee[] };
}

// Known partners configuration
export const PARTNER_IDS = {
  FIRST_PARTNER: "6969ffbe589910b6b2d0a6ef",
  SECOND_PARTNER: "696a6650589910b6b2d0a8b9",
} as const;

// Helper to get employees array from response
export function getEmployeesArray(employees: Employee[] | { data: Employee[] } | null | undefined): Employee[] {
  if (!employees) return [];
  if (Array.isArray(employees)) return employees;
  if (employees?.data && Array.isArray(employees.data)) return employees.data;
  return [];
}

// Helper to get teams array from response
export function getTeamsArray(teams: TeamMember[] | { data: TeamMember[] } | null | undefined): TeamMember[] {
  if (!teams) return [];
  if (Array.isArray(teams)) return teams;
  if (teams?.data && Array.isArray(teams.data)) return teams.data;
  return [];
}

// Get employee display name
export function getEmployeeName(employee: Employee): string {
  // API returns firstname + name (lastname)
  const firstName = employee.firstname || employee.firstName || "";
  const lastName = employee.name || employee.lastName || "";
  
  if (firstName || lastName) {
    return `${firstName} ${lastName}`.trim();
  }
  return "Team Member";
}

// Get employee image
export function getEmployeeImage(employee: Employee): string | undefined {
  return employee.avatar || employee.image || employee.portrait;
}

// Get employee role/position
export function getEmployeeRole(employee: Employee): string {
  return employee.role || employee.title || employee.position || "";
}

// Get company name from response
export function getCompanyName(company: PartnerCompany): string {
  return company.company || company.name || "Partner";
}

// Get company website from response
export function getCompanyWebsite(company: PartnerCompany): string | undefined {
  return company.weblinks?.website || company.website;
}
