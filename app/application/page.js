"use client";

import React from "react";
import Image from "next/image";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

const SectionCard = ({ title, children }) => (
    <div className="bg-white/95 dark:bg-[#1E293B] shadow-xl rounded-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 mb-8 overflow-hidden">
        <h2 className={`text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white mb-6 ${playfair.className}`}>
            {title}
        </h2>
        <div className="w-16 h-1 bg-[#EAD09D] mb-8 rounded-full"></div>
        {children}
    </div>
);

export default function ApplicationPage() {
    const procedures = ["Submission of Application", "Online Examination", "Admission Assessment", "Admission Result"];

    return (
        <div className="w-full max-w-6xl mx-auto pt-8 px-4 md:px-8 pb-16">
            <h1 className={`text-4xl/16 font-bold text-[#0F172A] text-center mb-8 ${playfair.className}`}>Application Information</h1>

            <SectionCard title="Requirements">
                <ul className="list-disc list-inside space-y-4 text-slate-700 dark:text-gray-300 leading-relaxed">
                    <li className="text-base md:text-lg">Middle School and High School students.</li>
                    <li className="text-base md:text-lg">Interested in science and innovation, healthy, with outstanding academic performance and innovation potential.</li>
                    <li className="text-base md:text-lg">Interested in mathematics and intend to engage in mathematical research, or other cutting-edge scientific or technological research with mathematics as the underlying logic, and are able to demonstrate mathematics potential.</li>
                </ul>
            </SectionCard>

            <SectionCard title="Application Materials">
                <ul className="list-disc list-inside space-y-4 text-slate-700 dark:text-gray-300 leading-relaxed">
                    <li className="text-base md:text-lg">Application form</li>
                    <li className="text-base md:text-lg">Latest transcripts</li>
                    <li className="text-base md:text-lg">Certificates/Awards</li>
                    <li className="text-base md:text-lg">Recommendation letter(s) written by the mathematics/science teacher (if any)</li>
                </ul>
            </SectionCard>

            <SectionCard title="Application Procedures">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 w-full">
                    {procedures.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-[#0F172A] text-[#EAD09D] w-full flex-1 p-4 lg:p-6 rounded-lg shadow-md text-center font-semibold border-b-4 border-[#EAD09D] flex items-center justify-center min-h-[100px]">
                                {step}
                            </div>
                            {index < procedures.length - 1 && (
                                <div className="text-[#EAD09D] text-2xl lg:text-3xl font-bold flex-shrink-0">
                                    <span className="md:hidden">↓</span>
                                    <span className="hidden md:block">→</span>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </SectionCard>

            <div className="flex flex-col">
                <SectionCard title="Course Venue">
                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">CUHK Shenzhen Research Institute</p>
                </SectionCard>
                <SectionCard title="Certificate of Attendance">
                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">Upon completion of the programme, a certificate of attendance will be issued by the Department of Mathematics, Faculty of Science, CUHK.</p>
                </SectionCard>
            </div>

            <SectionCard title="Enquiry">
                {/* UPDATED: Changed md:items-end to md:items-start to pull text to the top */}
                <div className="flex md:flex-row flex-col justify-between md:items-start gap-8">
                    <div className="space-y-4 text-slate-700 dark:text-gray-300">
                        <p className="text-base md:text-lg">Telephone: (86) 755-8692 0032</p>
                        <p className="text-base md:text-lg">Mobile/WeChat: (86) 180 2538 2810</p>
                        <p className="text-base md:text-lg">Email Address: gbao@cuhk.edu.cn</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="mb-4 text-[#0F172A] dark:text-white font-medium text-base md:text-lg">Scan the QR Code for application</p>
                        <div className="h-32 w-32 relative border-4 border-[#EAD09D] rounded-lg overflow-hidden">
                            <Image src="/QRcode.jpg" alt="Application QRcode" layout="fill" objectFit="cover"/>
                        </div>
                    </div>
                </div>
            </SectionCard>
        </div>
    );
}