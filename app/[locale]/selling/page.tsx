import SellHeroSection from "@/components/selling/sell-hero-section";
import SellProcessSection from "@/components/selling/sell-process-section";
import SellBenefitsSection from "@/components/selling/sell-benefits-section";
import SellCTASection from "@/components/selling/sell-cta-section";
import FAQSection from "@/components/faq-section";

export default function SellPage() {
  return (
    <div className="min-h-screen">
      <SellHeroSection />
      <SellProcessSection />
      <SellBenefitsSection />
      <SellCTASection />
      <FAQSection />
    </div>
  );
}
