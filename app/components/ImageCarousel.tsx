'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import showcase from '@/app/elements/showcase';
import { Image } from "@nextui-org/react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";

export default function ImageCarousel() {
    return (
        <div className="flex items-center gap-4 mx-auto">
            <button className="swiper-button-prev-custom bg-white text-gray-800 p-2 rounded-full shadow-md">
                <FaCaretLeft />
            </button>

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                modules={[Navigation]}
                loop={true}
                className="rounded-xl"
            >
                {Object.values(showcase).map((image, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <Image src={image.source} alt={image.name}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className="swiper-button-next-custom bg-white text-gray-800 p-2 rounded-full shadow-md">
                <FaCaretRight />
            </button>
        </div>
    );
}
