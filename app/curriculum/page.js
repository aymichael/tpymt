"use client";

import { ArcherContainer, ArcherElement } from "react-archer";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function CurriculumPage() {
    return (
        <div className="w-full max-w-6xl mx-auto pt-8 px-4 md:px-8 pb-16">
            <h1 className={`text-4xl/16 font-bold text-[#0F172A] text-center mb-8 ${playfair.className}`}>Curriculum</h1>
            <div className="w-24 h-1 bg-[#EAD09D] mx-auto mb-16 rounded-full"></div>

            <p className="text-left text-lg text-slate-700 dark:text-gray-300 max-w-none mx-0 mb-16 leading-relaxed">
                The curriculum is structured to bridge foundational theory with practical application. The left-hand column displays the core theoretical courses offered in our programme, which serve as the essential building blocks. The arrows illustrate how this knowledge branches into your Future Learning Path, guiding you toward diverse academic disciplines and professional career trajectories.
            </p>

            {/* ArcherContainer with refined stroke color to match theme */}
            <ArcherContainer strokeColor="#EAD09D" strokeWidth={2}>
                <div className="grid grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-12">
                    
                    {/* Header Columns */}
                    <div className="bg-[#0F172A] px-8 py-4 rounded-lg text-white flex justify-center shadow-lg">
                        <h2 className="text-xl md:text-2xl font-medium tracking-wide">Theoretical Knowledge</h2>
                    </div>
                    <div className="bg-[#0F172A] px-8 py-4 rounded-lg text-white flex justify-center shadow-lg">
                        <h2 className="text-xl md:text-2xl font-medium tracking-wide">Future Learning Path</h2>
                    </div>

                    {/* Left Column 1 */}
                    <ArcherElement
                        id="left-1"
                        relations={[{ targetId: "right-1", targetAnchor: "left", sourceAnchor: "right", style: { strokeColor: "#EAD09D", strokeWidth: 2, strokeDasharray: "4 2" } }]}>
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#1E293B] dark:to-[#0F172A] border-l-4 border-l-[#EAD09D] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <p className="text-base md:text-lg font-medium text-[#0F172A] dark:text-white">Set Theory and Logic</p>
                            <p className="text-base md:text-lg font-medium text-[#0F172A] dark:text-white">Introduction to Discrete Mathematics</p>
                            <p className="text-base md:text-lg font-medium text-[#0F172A] dark:text-white">Cryptography</p>
                        </div>
                    </ArcherElement>

                    {/* Right Column 1 */}
                    <ArcherElement id="right-1">
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#1E293B] dark:to-[#0F172A] border-l-4 border-l-[#EAD09D] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">Mathematics</p>
                            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">Physics</p>
                            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">Mathematics / Science Research</p>
                            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">Mathematics / Science Education</p>
                        </div>
                    </ArcherElement>

                    {/* Left Column 2 */}
                    <ArcherElement
                        id="left-2"
                        relations={[
                            { targetId: "right-1", targetAnchor: "left", sourceAnchor: "right", style: { strokeColor: "#EAD09D", strokeWidth: 2, strokeDasharray: "4 2" } },
                            { targetId: "right-2", targetAnchor: "left", sourceAnchor: "right", style: { strokeColor: "#EAD09D", strokeWidth: 2, strokeDasharray: "4 2" } },
                            { targetId: "right-3", targetAnchor: "left", sourceAnchor: "right", style: { strokeColor: "#EAD09D", strokeWidth: 2, strokeDasharray: "4 2" } }
                        ]}>
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#1E293B] dark:to-[#0F172A] border-l-4 border-l-[#EAD09D] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <p className="text-base md:text-lg font-medium text-[#0F172A] dark:text-white">Linear Algebra with Applications</p>
                            <p className="text-base md:text-lg font-medium text-[#0F172A] dark:text-white">Calculus and Differential Equations</p>
                        </div>
                    </ArcherElement>

                    {/* Right Column 2 */}
                    <ArcherElement id="right-2">
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#1E293B] dark:to-[#0F172A] border-l-4 border-l-[#EAD09D] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">Statistics</p>
                            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">Quantitative Finance</p>
                            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">Actuary and Risk Management</p>
                            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">Natural Science</p>
                        </div>
                    </ArcherElement>

                    {/* Left Column 3 */}
                    <ArcherElement
                        id="left-3"
                        relations={[{ targetId: "right-3", targetAnchor: "left", sourceAnchor: "right", style: { strokeColor: "#EAD09D", strokeWidth: 2, strokeDasharray: "4 2" } }]}>
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#1E293B] dark:to-[#0F172A] border-l-4 border-l-[#EAD09D] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <p className="text-base md:text-lg font-medium text-[#0F172A] dark:text-white">Non-Euclidean Geometry</p>
                            <p className="text-base md:text-lg font-medium text-[#0F172A] dark:text-white">Abstract Algebra</p>
                            <p className="text-base md:text-lg font-medium text-[#0F172A] dark:text-white">Calculus and Differential Geometry</p>
                        </div>
                    </ArcherElement>

                    {/* Right Column 3 */}
                    <ArcherElement id="right-3">
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-[#1E293B] dark:to-[#0F172A] border-l-4 border-l-[#EAD09D] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">Computer Science</p>
                            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">Information Engineering</p>
                            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">Artificial Intelligence</p>
                            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">Software Engineering</p>
                            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300">Data Science</p>
                        </div>
                    </ArcherElement>
                </div>
            </ArcherContainer>
        </div>
    );
}