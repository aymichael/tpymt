"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Reusable card component
const OrganizerCard = ({ role, name, content, photo, imgWidth, imgHeight }) => {
    return (
        <div className="w-full h-full flex flex-col bg-white/95 dark:bg-[#1E293B] shadow-xl rounded-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
            
            {/* Top Section: Name (Left) and Logo (Right) */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-8 w-full mb-8 border-b border-gray-100 dark:border-gray-700 pb-8">
                
                {/* Left Side: Role, Name, and Divider */}
                <div className="flex flex-col flex-grow w-full md:w-2/3">
                    <span className="text-sm font-bold tracking-widest uppercase text-[#EAD09D] mb-3">{role}</span>
                    <h2 className={`text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white text-center md:text-left leading-snug ${playfair.className}`}>
                        {name}
                    </h2>
                    <div className="w-16 h-1 bg-[#EAD09D] mt-6 rounded-full mx-auto md:mx-0"></div>
                </div>
                
                {/* Right Side: Logos are now larger and border-free */}
                <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3 min-h-[120px]">
                    <Image 
                        src={photo} 
                        alt={name} 
                        width={imgWidth} 
                        height={imgHeight} 
                        className="max-h-28 md:max-h-36 w-auto object-contain" 
                    />
                </div>

            </div>

            {/* Bottom Section: Text spans the full width */}
            <div className="flex flex-col flex-grow space-y-5">
                {content.map((paragraph, index) => (
                    <p key={index} className="text-base md:text-lg text-slate-700 dark:text-gray-300 leading-relaxed text-justify">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default function OrganizersPage() {
    
    const organizers = [
        {
            role: "Organizer",
            name: "Department of Mathematics, Faculty of Science, CUHK",
            photo: "/department.png",
            imgWidth: 323,
            imgHeight: 100,
            content: [
                "Science education is the propellent to civilization and socioeconomic development. The Faculty of Science has six major teaching units, namely School of Life Sciences, Department of Chemistry, Department of Mathematics, Department of Physics, Department of Statistics, and Earth System Science Programme. Their Faculty members include a Nobel laureate, a Fields medallist, and Academicians of the Chinese Academies of Sciences and Engineering and world- class scholars, who are committed to the pursuit of excellence in teaching and research. The graduates are highly received by the local and international communities with many recognized as outstanding researchers, educators, and professionals in all sectors, both in Hong Kong and overseas. The missions of the Faculty of Science are to educate and inspire the next generation of scientific innovators and leaders; and to expand the frontier of human knowledge. Among all departments, the Department of Mathematics was established in the same year as CUHK, and has experienced 60 years of development in collaboration with the University.",
                "The Department of Mathematics has a world-class scientific research team that has achieved breakthroughs in different frontier research fields such as algebra, mathematical analysis, geometry, topology, partial differential equations, and computational science, and many of them have been honored with highly prestigious international awards and fellowships which become a recognition of their outstanding research results.",
                "The Department of Mathematics also focuses on the inheritance of knowledge. Over the years, many graduates have devoted themselves to scientific research in world-class universities and research institutes, including the Fields Medalist, Chinese mathematician Professor YAU Shing Tung. In addition, with the assistance of Professor YAU, the Department established the Institute of Mathematical Sciences in 1993 to further strengthen the training of mathematics talents."
            ]
        },
        {
            role: "Co-Organizer",
            name: "CUHK ShenZhen Research Institute (SZRI)",
            photo: "/research.png",
            imgWidth: 2221,
            imgHeight: 710,
            content: [
                "With a great support of the Shenzhen Municipal Government, CUHK Shenzhen Research Institute (SZRI), the first wholly owned industry-university-institute base of CUHK in the Mainland, was established in May 2007. Being one of the important platforms for the strategic development of CUHK in the Mainland, SZRI has been expanding the University’s developments in Shenzhen, the Guangdong- Hong Kong Macao Greater Bay Area (GBA) and other cities of mainland China over the years, through providing comprehensive support in academic and research advancement, talents cultivation, technology transfer, global connection, as well as innovation and development."
            ]
        },
        {
            role: "Co-Organizer",
            name: "Office for Greater Bay Area Developments (GBAO), CUHK",
            photo: "/GBAoffice.png",
            imgWidth: 3624,
            imgHeight: 1027,
            content: [
                "Established in August 2020, the Office for Greater Bay Area Developments (GBAO) of CUHK actively participates in the development of the Greater Bay Area (GBA) and facilitates the implementation of the University’s strategic plans and projects in GBA by providing support to university members in academic research, innovation and entrepreneurship, and other activities in GBA. In addition, GBAO will help strengthen communication and cooperation with municipal offices, business partners, industrial institutions, and alumni-related organizations."
            ]
        }
    ];

    return (
        <div className="w-full max-w-screen-2xl mx-auto pt-8 px-2 md:px-4 pb-16">
            
            <h1 className={`text-4xl/16 font-bold text-[#0F172A] text-center mb-8 ${playfair.className}`}>
                Organizer and Co-Organizers
            </h1>
            
            <div className="relative w-full 
                [&_.swiper-button-next]:text-[#EAD09D] [&_.swiper-button-prev]:text-[#EAD09D]
                [&_.swiper-button-next]:drop-shadow-md [&_.swiper-button-prev]:drop-shadow-md
                [&_.swiper-button-next]:z-50 [&_.swiper-button-prev]:z-50
                [&_.swiper-button-next]:scale-75 md:[&_.swiper-button-next]:scale-100
                [&_.swiper-button-prev]:scale-75 md:[&_.swiper-button-prev]:scale-100
                [&_.swiper-pagination-bullet-active]:bg-[#0F172A] dark:[&_.swiper-pagination-bullet-active]:bg-[#EAD09D]
                [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet:not(.swiper-pagination-bullet-active)]:bg-gray-300
            ">
                <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation={true}
                    spaceBetween={40}
                    className="mySwiper !pb-16 !px-6 md:!px-16"
                >
                    {organizers.map((org, index) => (
                        <SwiperSlide key={index} className="!h-auto">
                            <div className="py-2 h-full">
                                <OrganizerCard {...org} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
        </div>
    );
}