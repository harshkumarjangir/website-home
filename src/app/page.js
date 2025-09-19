import Image from "next/image";
import AwardSection from "@/components/Home/AwardSection";
import HeaderMarquee from "@/components/Home/HeaderMarquee";
import HeroSection from "@/components/Home/HeroSection";
import StatsSection from "@/components/Home/StatsSection";
import ImpactBanner from "@/components/Home/ImpactBanner";
import CaseStudySection from "@/components/Home/CaseStudySection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import ServicesSection from "@/components/Home/ServicesSection";
import RoiSection from "@/components/Home/RoiSection";
import InnovationSection from "@/components/Home/InnovationSection";
import AIAdvisorySection from "@/components/Home/AIAdvisorySection";
import PartnershipSection from "@/components/Home/PartnershipSection";
import AccoladesSection from "@/components/Home/AccoladesSection";
import IndustriesSection from "@/components/Home/IndustriesSection";
import SolutionsSection from "@/components/Home/SolutionsSection";
import FaqSection from "@/components/Home/FaqSection";
import GlobalOffices from "@/components/Home/GlobalOffices";

export default function Home() {
  return (
    <>
      <HeaderMarquee />
      {/* Will be replaced with Navbar Component */}
      <div className="w-full relative h-16">
        <Image
          src="/assets/navbar.png"
          alt="Navbar Logo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <HeroSection />
      <AwardSection />
      <StatsSection />
      <ImpactBanner />
      <CaseStudySection />
      <TestimonialsSection />
      <ServicesSection />
      <RoiSection />
      <InnovationSection />
      <AIAdvisorySection />
      <PartnershipSection />
      <AccoladesSection />
      <IndustriesSection />
      <SolutionsSection />
      <FaqSection />
      <GlobalOffices />
    </>
  );
}
