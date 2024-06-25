import Navigation from "@/app/components/NavigationBar";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
  return (
    <main className="w-full h-screen relative">
      <Navigation/>
        <div className={`mt-[140px] bg-gray-50`}>
            <HeroSection/>
        </div>
    </main>
  );
}
