"use client";

import Image from 'next/legacy/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Playfair_Display, Lato } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

const CoachCard = ({ photo, name, intro }) => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row bg-white/95 dark:bg-[#1E293B] shadow-xl rounded-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 gap-8">
            {/* FIX: Removed the shadow-md, rounded-lg, and background classes so the photo has no borders */}
            <div className="h-64 w-64 relative flex-shrink-0 mx-auto md:mx-0">
                <Image 
                    src={photo} 
                    alt={name} 
                    layout="fill" 
                    objectFit="contain" 
                />
            </div>
            <div className="flex flex-col flex-grow">
                <h2 className={`text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white mb-2 ${playfair.className}`}>
                    {name}
                </h2>
                <div className="w-16 h-1 bg-[#EAD09D] mb-6 rounded-full mx-auto md:mx-0"></div>
                <p className={`text-base md:text-lg text-slate-700 dark:text-gray-300 leading-relaxed text-justify ${lato.className}`}>
                    {intro}
                </p>
            </div>
        </div>
    );
};

export default function CoachesPage() {
    const coaches = [
        { photo: "/MCBREEN.jpg", name: "Prof. Michael MCBREEN", intro: "Prof. Michael MCBREEN received his bachelor's degree from McGill University in Canada and his PhD from Princeton University in the United States. He is currently an assistant professor in the Department of Mathematics at The Chinese University of Hong Kong. His research interests include representation theory, symplectic geometry and string theory." },
        { photo: "/CHANHiuNing.jpg", name: "Dr. CHAN Hiu Ning", intro: "Dr. CHAN Hiu Ning graduated from The University of Hong Kong with a bachelor's degree and then received her MPhil and PhD from The Chinese University of Hong Kong and The University of Hong Kong respectively. Her research interest is partial differential equations with numerical methods. Dr. CHAN is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong, and a lecturer of the Enrichment Programme for Young Mathematics Talents." },
        { photo: "/CHANKaiLeung.jpg", name: "Dr. CHAN Kai Leung", intro: "Dr. CHAN Kai Leung received his PhD from The Chinese University of Hong Kong with research interests in mirror symmetry in symplectic geometry and string theory. Dr. CHAN is currently a senior lecturer in the Department of Mathematics at The Chinese University of Hong Kong. He is the programme coordinator as well as a lecturer of the Enrichment Programme for Young Mathematics Talents. In addition, Dr. CHAN serves as a fellow of the Centre for Promoting Science Education of the Faculty of Science and Course Advisor of Diploma of Applied Education. Dr. CHAN is enthusiastic about teaching and received the 2021 and 2025 Faculty Exemplary Teaching Award." },
        { photo: "/CHENGManChuen.jpg", name: "Dr. CHENG Man Chuen", intro: "Dr. CHENG Man Chuen received his bachelor’s degree and MPhil from the Department of Mathematics, The Chinese University of Hong Kong, and obtained PhD from Stanford University. He later served as a postdoctoral fellow at Massachusetts Institute of Technology and University of British Columbia. His research interest is algebraic topology. Dr. CHENG is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong, and a lecturer of the Enrichment Programme for Young Mathematics Talents." },
        { photo: "/LIChunChe.jpg", name: "Dr. LI Chun Che", intro: "Dr. LI Chun Che received his PhD from the University of California at Los Angeles, and worked as a postdoctoral fellow at the University of California at Los Angeles and the Institute of Mathematics at Academia Sinica, Taiwan. His research interests are number theory and representation theory of automorphic forms. Dr. LI is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong, and a lecturer of the Enrichment Programme for Young Mathematics Talents." },
        { photo: "/LIUChunLung.jpg", name: "Dr. LIU Chun Lung", intro: 'Dr. LIU Chun Lung received his PhD from Michigan State University in the United States, and worked as a postdoctoral fellow at the University of Duisburg Essen in Germany. His research interests are algebraic geometry and algebraic cobordism. Dr. LIU is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong, and a lecturer of the Enrichment Programme for Young Mathematics Talents. Dr. LIU is good at introducing advanced mathematical theories in simple terms, and has been invited as a guest on the TVB program " Sidewalk Scientist" for many times to promote and popularize mathematics education.' },
        { photo: "/NGMingHo.jpg", name: "Dr. NG Ming Ho", intro: "Dr. NG Ming Ho received his BSc, MPhil and PhD from The University of Hong Kong. His main research interest lies in analytic number theory including automorphic forms and L-functions. Dr. NG is currently an assistant lecturer in the Department of Mathematics at The Chinese University of Hong Kong." },
        { photo: "/PANLi.jpg", name: "Dr. PAN Li", intro: "Dr. PAN Li graduated from Dalian University of Technology with a bachelor's degree in mathematics, and received her PhD from The University of Hong Kong. Her research interests are operations research and optimization theory. Dr. PAN is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong." },
        { photo: "/XIAOJingJing.jpg", name: "Dr. XIAO Jing Jing", intro: "Dr. XIAO Jingjing graduated from the School of Mathematics and Statistics of Wuhan University with a bachelor’s degree, and then received his PhD from the Department of Mathematics at The Chinese University of Hong Kong, with research interests in partial differential equations and hyperbolic conservation laws. Dr. XIAO is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong. Dr. XIAO is enthusiastic about teaching and received the 2018 Faculty Exemplary Teaching Award." }
    ];

    return (
        <div className="w-full max-w-screen-2xl mx-auto pt-8 px-2 md:px-4 pb-16">
            <h1 className={`text-4xl/16 font-bold text-[#0F172A] text-center mb-10 ${playfair.className}`}>
                Coaches
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
                    {coaches.map((coach, index) => (
                        <SwiperSlide key={index} className="!h-auto">
                            <div className="py-2 h-full">
                                <CoachCard {...coach} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}