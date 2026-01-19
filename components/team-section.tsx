import { getEmployeeName, getEmployeeImage, getEmployeeRole, Employee } from "@/lib/partners";
import { Mail, Phone, Linkedin } from "lucide-react";

interface TeamSectionProps {
    employees: Employee[];
    title?: string;
    subtitle?: string;
    description?: string;
    variant?: "light" | "dark";
}

// Employee Card Component
function EmployeeCard({ 
    employee, 
    index,
    variant = "light"
}: { 
    employee: Employee;
    index: number;
    variant?: "light" | "dark";
}) {
    const name = getEmployeeName(employee);
    const image = getEmployeeImage(employee);
    const role = getEmployeeRole(employee);
    const employeeId = employee.id || employee._id;
    const profileUrl = `https://id.me-business.ch/card/${employeeId}`;

    const isDark = variant === "dark";

    return (
        <div className="group relative">
            {/* Clickable Card */}
            <a 
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                {/* Image */}
                <div className={`aspect-[3/4] w-full overflow-hidden rounded-xl ${isDark ? 'bg-[#1E293B]' : 'bg-[#F5F5F5]'}`}>
                    {image ? (
                        <img
                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            src={image}
                            alt={name}
                        />
                    ) : (
                        <div className="h-full w-full flex items-center justify-center">
                            <span className={`text-7xl font-light ${isDark ? 'text-white/20' : 'text-[#6B7280]/30'}`}>
                                {name.charAt(0)}
                            </span>
                        </div>
                    )}
                </div>
                
                {/* Info */}
                <div className="mt-4">
                    <div className="flex justify-between items-start">
                        <h3 
                            className={`text-base font-semibold group-hover:text-[#932A12] transition-colors ${isDark ? 'text-white' : 'text-[#0F172A]'}`}
                            style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                        >
                            {name}
                        </h3>
                        <span className={`text-xs ${isDark ? 'text-white/40' : 'text-[#6B7280]'}`}>
                            _{String(index + 1).padStart(2, '0')}
                        </span>
                    </div>
                    {role && (
                        <p className="text-[#932A12] text-sm mt-1">{role}</p>
                    )}
                </div>
            </a>
            
            {/* Contact Icons */}
            <div className="flex items-center gap-3 mt-3">
                {employee.email && (
                    <a 
                        href={`mailto:${employee.email}`}
                        className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#932A12] transition-colors ${isDark ? 'bg-white/10' : 'bg-[#F5F5F5] hover:text-white'}`}
                        title={employee.email}
                    >
                        <Mail className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-[#6B7280]'}`} />
                    </a>
                )}
                {employee.phone && (
                    <a 
                        href={`tel:${employee.phone}`}
                        className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#932A12] transition-colors ${isDark ? 'bg-white/10' : 'bg-[#F5F5F5] hover:text-white'}`}
                        title={employee.phone}
                    >
                        <Phone className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-[#6B7280]'}`} />
                    </a>
                )}
                {employee.linkedin && (
                    <a 
                        href={employee.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#0A66C2] transition-colors ${isDark ? 'bg-white/10' : 'bg-[#F5F5F5]'}`}
                        title="LinkedIn"
                    >
                        <Linkedin className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-[#6B7280]'}`} />
                    </a>
                )}
            </div>
        </div>
    );
}

export default function TeamSection({ 
    employees, 
    title = "Our Team",
    subtitle = "Our dream team",
    description = "Meet the dedicated professionals who make us your trusted partner.",
    variant = "light"
}: TeamSectionProps) {
    const isDark = variant === "dark";

    if (employees.length === 0) {
        return null;
    }

    return (
        <section className={`py-20 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                        <div>
                            <p className="text-[#932A12] text-xs font-semibold tracking-widest uppercase mb-4">
                                {title}
                            </p>
                            <h2 
                                className={`text-3xl font-semibold sm:text-4xl ${isDark ? 'text-white' : 'text-[#0F172A]'}`}
                                style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                            >
                                {subtitle}
                            </h2>
                        </div>
                        <p className={`max-w-md sm:text-right ${isDark ? 'text-[#D1D1D1]/60' : 'text-[#6B7280]'}`}>
                            {description}
                        </p>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {employees.map((employee, index) => (
                        <EmployeeCard 
                            key={employee.id || employee._id || index} 
                            employee={employee}
                            index={index}
                            variant={variant}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
