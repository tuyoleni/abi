import HeroSection from "@/app/components/HeroSection";
import ServicesSection from "@/app/components/services/ServicesSection";

export default function Home() {
  return (
    <main className="w-full h-screen relative">
        <HeroSection/>
        <ServicesSection/>
    </main>
  );
}
