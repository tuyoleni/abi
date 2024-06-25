import React from "react";
import ImageCarousel from "@/app/components/ImageCarousel";
import Logo from "@/app/elements/assets/branding";

const HeroSection = () => (
    <section className="bg-gray-50">
        <div className={`flex items-center justify-between py-20 mx-auto container sm:container md:container `}>
            <div className="w-1/2">
                <h1 className="text-7xl font-black mb-4 mr-8">
                    Expert Refrigeration, Air Conditioning, and Ventilation Services
                </h1>
                <p className="text-lg md:text-xl mb-20 mr-10">
                    From water coolers to freezer rooms, we offer seamless installations and reliable maintenance.
                </p>
                <button
                    className="p-4 bg-primary-blue text-white font-semibold rounded shadow-md hover:bg-blue-600 transition duration-300">
                    Get in Touch
                </button>
            </div>
            <div className="w-1/2 pl-24">
                <ImageCarousel/>
            </div>

        </div>

        <div className={`absolute bottom-0 -left-40 opacity-5`}>
            <Logo size={900}/>
        </div>
    </section>
);

export default HeroSection;
