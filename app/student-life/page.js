'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/legacy/image';
import { Playfair_Display } from "next/font/google";
import { useEffect, useState } from 'react';

// Import core Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function StudentLifePage() {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        fetch('/api/images')
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.images)) {
                    const validImages = data.images.map(img => {
                        return typeof img === 'string' ? img : (img.url || img.src || img.path || ""); 
                    }).filter(url => {
                        return url.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null;
                    }).map(url => {
                        let cleanUrl = url.trim();
                        if (!cleanUrl.startsWith('/')) {
                            cleanUrl = '/' + cleanUrl;
                        }
                        // Even without spaces, encoding is a safe fallback for web URLs
                        return encodeURI(cleanUrl);
                    });

                    setImages(validImages);
                }
            })
            .catch(error => console.error("Failed to load images:", error));
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto pt-8 px-4 md:px-8 pb-16">
            
            <h1 className={`text-4xl/16 font-bold text-[#0F172A] text-center mb-8 ${playfair.className}`}>Student Life</h1>
            <div className="w-24 h-1 bg-[#EAD09D] mx-auto mb-12 rounded-full"></div>

            <div className="relative w-full
                [&_.swiper-button-next]:text-[#0F172A] [&_.swiper-button-prev]:text-[#0F172A]
                dark:[&_.swiper-button-next]:text-white dark:[&_.swiper-button-prev]:text-white
                [&_.swiper-button-next]:bg-white/90 [&_.swiper-button-prev]:bg-white/90
                dark:[&_.swiper-button-next]:bg-gray-800/90 dark:[&_.swiper-button-prev]:bg-gray-800/90
                [&_.swiper-button-next]:w-12 [&_.swiper-button-next]:h-12 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:shadow-lg
                [&_.swiper-button-prev]:w-12 [&_.swiper-button-prev]:h-12 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:shadow-lg
                [&_.swiper-button-next:after]:text-xl [&_.swiper-button-prev:after]:text-xl
                hover:[&_.swiper-button-next]:text-[#EAD09D] hover:[&_.swiper-button-prev]:text-[#EAD09D]
                [&_.swiper-button-next]:transition-colors [&_.swiper-button-prev]:transition-colors
                
                [&_.swiper-pagination-bullet-active]:bg-[#EAD09D] [&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet-active]:rounded-full [&_.swiper-pagination-bullet-active]:transition-all
                [&_.swiper-pagination-bullet]:bg-gray-400 [&_.swiper-pagination-bullet]:opacity-50
                [&_.swiper-pagination]:bottom-0
            ">
                {images.length > 0 ? (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        className="!px-4 md:!px-16 !pb-16" 
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index} className="flex justify-center items-center">
                                <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 group bg-gray-50 dark:bg-gray-900">
                                    <Image
                                        src={image}
                                        alt={`Student Life Image ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        // FIX 1: Bypass Next.js image optimizer in case the images are CMYK or too large
                                        unoptimized={true} 
                                        // FIX 2: Force the first 4 images to load immediately to stop Swiper clone bugs
                                        priority={index < 4} 
                                        className="rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="w-full aspect-[16/9] flex items-center justify-center bg-gray-50 dark:bg-[#1E293B] rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl">
                        <p className="text-slate-500 dark:text-gray-400 font-medium tracking-wide">Loading gallery...</p>
                    </div>
                )}
            </div>
            
        </div>
    );
}