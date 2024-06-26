import React from 'react';
import { services } from "@/app/elements/services";
import Link from "next/link";
import { Image } from "@nextui-org/react";

const ServicesSection = () => {
    return (
        <div className={`relative w-full h-full mb-4 z-40 -top-20`}>
            <div className={`mx-auto container`}>
                <div className="max-w-[1080px] mx-auto grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {Object.values(services).map((service, index) => (
                        <div key={index} className={`rounded-md border border-primary-blue shadow-xl`}>
                            <div className={`h-80 bg-green-200`}>
                                <Image src={service.data.images[0]} alt={service.description} />
                            </div>
                            <div className={`m-4 mt-8 relative`}>
                                <div className={`p-2 shadow bg-gray-200 absolute -top-14`}>
                                    {service.icon}
                                </div>
                                <div className={`mb-6`}>
                                    <h1 className={`font-semibold text-xl mb-2`}>{service.name}</h1>
                                    <p className={`text-primary-blue`}>{service.description}</p>
                                </div>
                                <Link href={'/service'} className={`font-semibold text-primary-blue opacity-80 hover:opacity-100 transition-all ease-in-out`}>Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
