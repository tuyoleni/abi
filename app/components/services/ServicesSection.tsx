'use client'
import React from 'react';
import { services } from "@/app/elements/services";
import Link from "next/link";
import { motion } from 'framer-motion';
import ServicesGrid from "@/app/components/services/ServiceGrid";

const ServicesSection = () => {
    return (
        <div
            className={`relative w-full h-full mb-4 bg-gray-50 py-20`}>
            <div className={`mx-auto container`}>
                <div
                    className="max-w-[1080px] mx-auto grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {Object.values(services).map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false }}
                            className={`rounded-md border border-primary-blue shadow-md mb-10`}>
                            <div className={`h-80 w-full bg-green-200`}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={service.data.images[0]} alt={service.description}  className={`object-cover size-full`}/>
                            </div>
                            <div className={`m-4 mt-8 relative`}>
                                <div className={`p-2 shadow bg-gray-200 absolute -top-14`}>
                                    {service.icon}
                                </div>
                                <div className={`mb-6`}>
                                    <h1 className={`font-semibold text-xl mb-2`}>{service.name}</h1>
                                    <p className={`text-primary-blue`}>{service.description}</p>
                                </div>
                                <Link href={`/services/${service.name}`} className={`font-semibold text-primary-blue opacity-80 hover:opacity-100 transition-all ease-in-out`}>Read More</Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
               <ServicesGrid/>
            </div>
        </div>
    );
};

export default ServicesSection;
