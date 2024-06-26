import Navigation from "@/app/components/NavigationBar";
import HeroSection from "@/app/components/HeroSection";
import ServicesSection from "@/app/components/services/ServicesSection";

export default function Home() {
  return (
    <main className="w-full h-screen relative">
      <Navigation/>
        <div className={`mt-[140px]`}>
            <HeroSection/>
            <ServicesSection/>
        </div>
    </main>
  );
}
