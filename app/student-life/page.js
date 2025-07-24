'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/legacy/image';
import "@/app/student-life/navagation.css"
import { Sriracha } from 'next/font/google';
import { useEffect, useState } from 'react';

const sriracha = Sriracha({ subsets: ['latin'], weight: '400', });

export default function StudentLifePage() {
    // 0-15.jpg
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('/api/images')
        .then(response => response.json())
        .then(data => {setImages(data.images)})
        }, [])

    console.log(images);

    return (
        <div>
            <h1 className={`text-4xl/16 font-bold text-center mb-8 ${sriracha.className}`}>Student Life</h1>
            <div className="hidden md:block">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop
                    navigation
                    autoplay={{ delay: 5000 }}
                >
                    {
                        Array.from({ length: images.length / 2 }, (_, i) => (
                            <SwiperSlide key={i} className="flex justify-center items-center">
                                <div className="flex flex-col gap-4 justify-center items-center w-full">
                                    {images.slice(i * 2, i * 2 + 2).map((image, index) => (
                                        <div key={index} className="w-4/5 aspect-[16/9] relative odd:-translate-x-4 even:translate-x-4">
                                            <Image
                                                src={image}
                                                alt={`Student Life Image ${i * 2 + index}`}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-lg" />
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="block md:hidden">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                >
                    {
                        images.map((image, index) => (
                            <SwiperSlide key={index} className="flex justify-center items-center">
                                <div className="w-full aspect-[16/9] relative">
                                    <Image
                                        src={image}
                                        alt={`Student Life Image ${index}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg" />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}