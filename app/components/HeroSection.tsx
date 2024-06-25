import React from "react";
import ImageCarousel from "@/app/components/ImageCarousel";

const HeroSection = () => (
    <section className="flex items-center justify-between py-20 mx-auto container">
        <div className="flex-1">
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
        <div className="flex-1">
            <ImageCarousel />
        </div>
    </section>
);

export default HeroSection;
