"use client";

import HeroSlider from "@/app/home/components/HeroSlider";
import AboutSection from "@/app/home/components/AboutSection";
import CategorySection from "@/app/home/components/CategorySection";
import FeaturedProducts from "@/app/home/components/FeaturedProducts";
import WhyChooseUs from "@/app/home/components/WhyChooseUs";
import DistributionSection from "@/app/home/components/DistributionSection";
import ConsultationCTA from "@/app/home/components/ConsultationCTA";
import ProjectsGallery from "@/app/home/components/ProjectsGallery";
import CustomerLogos from "@/app/home/components/CustomerLogos";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <CategorySection />
      <FeaturedProducts />
      <WhyChooseUs />
      <DistributionSection />
      <ConsultationCTA />
      <ProjectsGallery />
      <CustomerLogos />
    </main>
  );
}
