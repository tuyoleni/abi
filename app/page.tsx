import Navigation from "@/app/components/NavigationBar";

export default function Home() {
  return (
    <main className="w-full h-screen relative">
      <Navigation/>
        <div className={`mt-[140px] h-[500vh] bg-gray-50`}>
            the site section and pages
        </div>
    </main>
  );
}
