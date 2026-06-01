"use client";

import React from "react";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

// Reusable Section Card to match the rest of the site
const SectionCard = ({ title, children }) => (
    <div className="bg-white/95 dark:bg-[#1E293B] shadow-xl rounded-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 mb-8 overflow-hidden">
        {title && (
            <>
                <h2 className={`text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white mb-6 ${playfair.className}`}>
                    {title}
                </h2>
                <div className="w-16 h-1 bg-[#EAD09D] mb-8 rounded-full"></div>
            </>
        )}
        {children}
    </div>
);

export default function IntroductionPage() {
    const objectives = [
        "Accelerating students' interest in basic mathematics or STEM and raising their awareness, cognition, and understanding in the field.",
        "Cultivating mathematics talented students and establishing their connection with CUHK.",
        "Motivating students to enroll in mathematics or STEM-related subjects at university and cultivating future technological and innovative leaders."
    ];

    return (
        <div className="w-full max-w-6xl mx-auto pt-8 px-4 md:px-8 pb-16">
            
            {/* Main Title */}
            <h1 className={`text-4xl/16 font-bold text-[#0F172A] text-center mb-8 ${playfair.className}`}>Introduction</h1>

            {/* Overview Section */}
            <SectionCard title="Programme Overview">
                <p className={`text-base md:text-lg text-slate-700 dark:text-gray-300 leading-relaxed md:leading-loose text-justify ${lato.className}`}>
                    <span className="font-semibold text-[#0F172A] dark:text-white">“Innovation drives development, and technology nurtures the future”.</span> The foundation of scientific and technological innovation lies in education, while talents are the keys to its achievement. To solidify GBA&apos;s status as a talent hub of the kind, the Department of Mathematics, Faculty of Science, CUHK has launched the <span className="font-semibold text-[#0F172A] dark:text-white">&quot;Training Programme for Young Mathematics Talents&quot;</span>. Relying on CUHK&apos;s multi-faceted resources and years of project experience, the programme aims at training mathematical-talented young students to acquire scientific literacy and innovation ability through the University&apos;s advanced mathematics concepts and methods, so as to lay a foundation for cultivating the next generation of innovation leaders for the Region, and even the Country.
                </p>
            </SectionCard>

            {/* Objectives Section */}
            <SectionCard title="Programme Objectives">
                {/* UPDATED: Changed from a 3-column grid to a vertical flex column */}
                <div className="flex flex-col gap-6 mt-4">
                    {objectives.map((objective, index) => (
                        <div 
                            key={index} 
                            // UPDATED: Changed border-t to border-l, and inner layout to flex-row for wide screens
                            className="bg-[#0F172A] p-6 md:p-8 rounded-xl shadow-md border-l-4 border-[#EAD09D] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 hover:-translate-y-1 transition-transform duration-300"
                        >
                            {/* Large elegant number is now fixed-width on the left */}
                            <div className={`text-[#EAD09D] text-4xl md:text-5xl font-bold flex-shrink-0 ${playfair.className}`}>
                                0{index + 1}
                            </div>
                            {/* Objective Text spans the rest of the row */}
                            <p className={`text-gray-200 text-base md:text-lg leading-relaxed ${lato.className}`}>
                                {objective}
                            </p>
                        </div>
                    ))}
                </div>
            </SectionCard>

        </div>
    );
}