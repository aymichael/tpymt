"use client";

import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export default function CourseTemplate({ year, sessions }) {
    return (
        <div className="w-full max-w-6xl mx-auto pt-8 px-4 md:px-8 pb-16">
            
            {/* Elegant Main Title with dynamic year */}
            <h1 className={`text-4xl/16 font-bold text-[#0F172A] text-center mb-8 ${playfair.className}`}>
                Training Programme for Young Mathematics Talents {year}
            </h1>
            
            {/* Signature Gold Divider */}
            <div className="w-24 h-1 bg-[#EAD09D] mx-auto mb-12 rounded-full"></div>

            {/* Session Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sessions.map((session, index) => (
                    <div 
                        key={index} 
                        className="bg-white/95 dark:bg-[#1E293B] shadow-xl rounded-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                    >
                        {/* Session Title */}
                        <h2 className={`text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white mb-4 ${playfair.className}`}>
                            {session.title || `Session ${index + 1}`}
                        </h2>
                        
                        {/* Inner Card Divider */}
                        <div className="w-16 h-1 bg-[#EAD09D] mb-8 rounded-full"></div>
                        
                        <div className={`space-y-8 flex-grow ${lato.className}`}>
                            {/* Dates Section */}
                            <div className="flex flex-col">
                                <span className="text-sm font-bold tracking-widest uppercase text-[#EAD09D] mb-1">
                                    Dates
                                </span>
                                <span className="text-lg font-medium text-slate-800 dark:text-gray-200">
                                    {session.dates}
                                </span>
                            </div>
                            
                            {/* Nested map to render multiple courses per session */}
                            <div className="space-y-6">
                                {session.courses.map((course, idx) => (
                                    <div key={idx} className="flex flex-col p-4 bg-gray-50 dark:bg-[#0F172A] rounded-lg border border-gray-100 dark:border-gray-800">
                                        <span className="text-sm font-bold tracking-widest uppercase text-[#EAD09D] mb-1">
                                            Course {idx + 1}
                                        </span>
                                        <span className="text-lg font-medium text-slate-800 dark:text-gray-200 mb-2">
                                            {course.name}
                                        </span>
                                        <span className="text-sm font-bold tracking-widest uppercase text-[#EAD09D] mb-1">
                                            Lecturer
                                        </span>
                                        <span className="text-base text-slate-700 dark:text-gray-300">
                                            {course.lecturer}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}