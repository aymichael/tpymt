"use client";

import Link from "next/link";
import { year } from "@/app/data";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function CourseList() {
    // Dynamically generate the list of years
    const years = Array.from({ length: year - 2023 + 1 }, (_, i) => year - i);
    
    return (
        <div className="w-full max-w-6xl mx-auto pt-8 px-4 md:px-8 pb-16">
            
            {/* Elegant Main Title */}
            <h1 className={`text-4xl/16 font-bold text-[#0F172A] text-center mb-8 ${playfair.className}`}>
                Previous Years
            </h1>
            
            {/* Signature Gold Divider */}
            <div className="w-24 h-1 bg-[#EAD09D] mx-auto mb-16 rounded-full"></div>

            {/* Interactive Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {years.map((y) => (
                    <Link
                        key={y}
                        href={`/courses/${y}`}
                        className="group block bg-white/95 dark:bg-[#1E293B] p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 dark:border-gray-700 hover:border-[#EAD09D] dark:hover:border-[#EAD09D] hover:-translate-y-2"
                    >
                        {/* Subtitle tag above the year */}
                        <span className="text-sm font-bold tracking-widest uppercase text-[#EAD09D] mb-3 block">
                            Year
                        </span>
                        
                        {/* The Year Text */}
                        <div className={`text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white group-hover:text-[#EAD09D] transition-colors duration-300 ${playfair.className}`}>
                            {y}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}