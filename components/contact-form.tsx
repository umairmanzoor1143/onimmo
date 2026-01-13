"use client";

import { useState } from "react";
import { Dictionary } from "@/lib/dictionaries";
import { Check, AlertCircle, ArrowRight } from "lucide-react";

interface ContactFormProps {
    dictionary: Dictionary;
}

export function ContactForm({ dictionary }: ContactFormProps) {
    const t = dictionary.contactPage.form;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setError(null);

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("error");
            setError("Please fill in all required fields.");
            return;
        }

        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setStatus("success");
            setFormData({ name: "", email: "", phone: "", subject: "general", message: "" });
        } catch (err) {
            setStatus("error");
            setError("Something went wrong. Please try again.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 bg-[#932A12] rounded-full flex items-center justify-center mb-6">
                    <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 
                    className="text-xl font-semibold text-[#0F172A] mb-2"
                    style={{ fontFamily: "var(--font-frutiger), var(--font-display), sans-serif" }}
                >
                    {t.success}
                </h3>
                <p className="text-[#6B7280] mb-8">{dictionary.contactPage.final.text}</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-sm font-medium text-[#932A12] hover:text-[#7a2410] transition-colors underline underline-offset-4"
                >
                    Send another message
                </button>
            </div>
        );
    }

    const inputStyles = "w-full px-0 py-3 bg-transparent border-0 border-b border-[#E5E7EB] focus:border-[#932A12] focus:ring-0 outline-none transition-colors text-[#0F172A] placeholder:text-[#9CA3AF]";
    const labelStyles = "text-xs font-medium tracking-wide uppercase text-[#6B7280] mb-2 block";

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className={labelStyles}>
                        {t.labels.name} <span className="text-[#932A12]">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputStyles}
                        required
                        disabled={status === "submitting"}
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className={labelStyles}>
                        {t.labels.email} <span className="text-[#932A12]">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputStyles}
                        required
                        disabled={status === "submitting"}
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className={labelStyles}>
                        {t.labels.phone}
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputStyles}
                        disabled={status === "submitting"}
                    />
                </div>

                {/* Subject */}
                <div>
                    <label htmlFor="subject" className={labelStyles}>
                        {t.labels.subject}
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`${inputStyles} cursor-pointer`}
                        disabled={status === "submitting"}
                    >
                        <option value="selling">{t.subjects.selling}</option>
                        <option value="buying">{t.subjects.buying}</option>
                        <option value="management">{t.subjects.management}</option>
                        <option value="partnership">{t.subjects.partnership}</option>
                        <option value="general">{t.subjects.general}</option>
                    </select>
                </div>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className={labelStyles}>
                    {t.labels.message} <span className="text-[#932A12]">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputStyles} resize-none`}
                    required
                    disabled={status === "submitting"}
                />
            </div>

            {status === "error" && (
                <div className="flex items-center gap-2 text-[#932A12] text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <p>{error}</p>
                </div>
            )}

            {/* Submit */}
            <div className="flex items-center justify-between pt-4">
                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center gap-2.5 px-7 py-4 bg-[#932A12] text-white rounded-full text-[15px] font-semibold hover:bg-[#7a2410] disabled:bg-[#D1D1D1] disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
                >
                    {status === "submitting" ? (
                        <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <span>{t.labels.submit}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                    )}
                </button>
                <p className="hidden sm:block text-[#6B7280] text-xs max-w-[200px] text-right">
                    {t.privacy}
                </p>
            </div>
        </form>
    );
}
