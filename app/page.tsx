import BgGradient from "@/components/home/BgGradient";
import DemoSection from "@/components/home/DemoSection";

import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <HeroSection />
      <DemoSection />
      <HowItWorksSection />
    </div>
  );
}
