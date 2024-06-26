import React from "react";
import ImageCarousel from "@/app/components/ImageCarousel";
import Logo from "@/app/elements/assets/branding";

const HeroSection = () => (
    <section className="relative bg-gray-50 pb-36">
        <div className={`flex items-center justify-between py-20 mx-auto container sm:container md:container relative z-10`}>
            <div className="w-1/2">
                <h1 className="text-7xl font-black mb-4 mr-8">
                    Expert Refrigeration, Air Conditioning, and Ventilation Services
                </h1>
                <p className="text-lg md:text-xl mb-20 mr-10">
                    From water coolers to freezer rooms, we offer seamless installations and reliable maintenance.
                </p>
                <div className="flex w-1/2 gap-4">
                    <button
                        className="py-4 w-40 bg-primary-blue text-white font-semibold rounded shadow-md bg-opacity-80  hover:bg-opacity-100 duration-300">
                        Request Service
                    </button>
                    <button
                        className="py-4 w-40 border text-primary-blue border-primary-blue bg-white font-semibold rounded shadow-md hover:scale-105 transition duration-300">
                        About Us
                    </button>

                </div>

            </div>
            <div className="w-1/2 pl-24">
                <ImageCarousel/>
            </div>
        </div>

        <div className={`absolute -bottom-40 -left-40 opacity-5 z-0`}>
            <Logo size={900}/>
        </div>
    </section>
);

export default HeroSection;
