import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import VideoSection from "@/components/video-section";
import ServicesSection from "@/components/services-section";
import ExpertiseSection from "@/components/expertise-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <ServicesSection />
      <ExpertiseSection />
      <FAQSection />
    </div>
  );
}
