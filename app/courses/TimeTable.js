"use client"

import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export default function SessionInfo({ sessions }) {
    // Fallback in case no data is provided
    if (!sessions || sessions.length === 0) {
        return null;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sessions.map((session, index) => (
                <div 
                    key={index} 
                    className="bg-white/95 dark:bg-[#1E293B] shadow-xl rounded-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300"
                >
                    {/* Session Title (e.g., "Session 1") */}
                    <h2 className={`text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white mb-4 ${playfair.className}`}>
                        {session.title || `Session ${index + 1}`}
                    </h2>
                    
                    {/* Gold Accent Divider */}
                    <div className="w-16 h-1 bg-[#EAD09D] mb-8 rounded-full"></div>
                    
                    {/* Session Details */}
                    <div className={`space-y-6 ${lato.className}`}>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-widest uppercase text-[#EAD09D] mb-1">
                                Dates
                            </span>
                            <span className="text-lg font-medium text-slate-800 dark:text-gray-200">
                                {session.dates}
                            </span>
                        </div>
                        
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-widest uppercase text-[#EAD09D] mb-1">
                                Course
                            </span>
                            <span className="text-lg font-medium text-slate-800 dark:text-gray-200">
                                {session.course}
                            </span>
                        </div>
                        
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-widest uppercase text-[#EAD09D] mb-1">
                                Lecturer
                            </span>
                            <span className="text-lg font-medium text-slate-800 dark:text-gray-200">
                                {session.lecturer}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}