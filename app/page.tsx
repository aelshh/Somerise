import BgGradient from "@/components/home/BgGradient";
import CtaSection from "@/components/home/CtaSection";
import DemoSection from "@/components/home/DemoSection";

import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
     
      <HeroSection />
      <DemoSection />
      <HowItWorksSection />
      <PricingSection />
      <CtaSection />
    </div>
  );
}
