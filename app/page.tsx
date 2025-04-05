import CourseOverview from "@/components/CourseOverview";
import HeroSection from "@/components/HeroSection";
import HeroSectionTwo from "@/components/HeroSectionTwo";
import LinksSection from "@/components/LinksSection";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroSectionTwo />
      <CourseOverview />
      <Testimonials />
      <PricingSection />
      <LinksSection />

    </main>
  );
}
