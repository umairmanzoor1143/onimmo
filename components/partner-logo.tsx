"use client";

import { useState } from "react";

interface PartnerLogoProps {
    name: string;
    logo: string;
}

export function PartnerLogo({ name, logo }: PartnerLogoProps) {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <span className="text-[#6B7280] text-sm font-medium whitespace-nowrap">
                {name}
            </span>
        );
    }

    return (
        <img
            src={logo}
            alt={name}
            className="max-h-10 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
            onError={() => setHasError(true)}
        />
    );
}
