"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { redirect, usePathname } from "next/navigation";
import { year } from "./data";
import { Lato, Playfair_Display } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Navbar() {
    const currCourseURL = year.toString();
    
    // UPDATED: Moved "About" to the third position
    const pages = ["Programme", "Application", "About", "Contact Us"];
    
    // UPDATED: Added "Introduction" to Programme, mapped the arrays to match the new 'pages' order
    const subpages = [
        ["Introduction", "Curriculum", "This Year's Courses", "Past Courses", "Student Life"], // Programme
        [], // Application
        ["Message from Management", "Organizers", "Advisory Board", "Coaches"], // About
        []  // Contact Us
    ];
    
    const subpageURL = [
        ["introduction", "curriculum", `courses/${currCourseURL}`, "courses", "student-life"], // Programme
        [], // Application
        ["message", "organizers", "advisory-board", "coaches"], // About
        []  // Contact Us
    ];
    
    const [isOpen, setIsOpen] = useState(false);
    const [currentNav, setCurrentNav] = useState(-1);
    const [selectedNav, setSelectedNav] = useState(-1);
    const pathname = usePathname();
    
    return (
        <header className={`flex select-none w-full flex-col text-lg/8 md:text-xl/8 fixed md:items-center ${lato.className} z-20`} >
            <div className={`bg-gradient-to-r from-[#080d17]/95 via-[#162238]/95 to-[#080d17]/95 backdrop-blur-md border-b border-[#EAD09D]/30 ${isOpen ? "" : "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"} flex flex-col w-full md:px-0 px-2 items-center text-white transition-all duration-300`} onMouseLeave={() => setCurrentNav(-1)}>
                <div className="md:w-[48rem] lg:w-[64rem] flex md:flex-col flex-row items-center w-full justify-between md:justify-center md:py-4 md:h-auto h-16 md:gap-3">
                    
                    {/* The Title Line WITH Custom SVG Logo */}
                    <div className="flex w-full md:justify-center items-center gap-3 md:gap-4 px-2">
                        {/* Custom Geometric Math Emblem */}
                        <Link href="/" aria-label="Home">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#EAD09D" strokeWidth="3" />
                                <polygon points="50,15 80,68 20,68" fill="none" stroke="#EAD09D" strokeWidth="2.5" strokeLinejoin="round" />
                                <circle cx="50" cy="50" r="16" fill="none" stroke="#EAD09D" strokeWidth="2" />
                                <path d="M 50,5 L 50,95 M 5,50 L 95,50" stroke="#EAD09D" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6"/>
                                <circle cx="50" cy="50" r="3" fill="#EAD09D" />
                            </svg>
                        </Link>

                        <div className="flex flex-col">
                            <Link href="/" className={`md:block hidden ${playfair.className} lg:text-3xl md:text-2xl text-xl tracking-wider font-medium text-white hover:text-gray-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-colors duration-300`}>
                                Training Programme for Young Mathematics Talent
                            </Link>
                            <Link href="/" className={`md:hidden block ${playfair.className} text-2xl/8 tracking-widest font-medium text-white hover:text-gray-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-colors duration-300`}>
                                TPYMT
                            </Link>
                        </div>
                    </div>

                    {/* The Main Tabs */}
                    <div className="flex flex-row items-center md:w-full md:justify-start h-full md:h-10 gap-2">
                        <nav className="flex-row items-center md:flex hidden text-nowrap h-full">
                            {pages.map((page, index) => (
                                <div
                                    key={index}
                                    className={`h-full flex items-center px-6 font-medium tracking-wide transition-all duration-300 border-b-2 ${currentNav === index ? "bg-white/5 border-[#EAD09D]" : "border-transparent hover:bg-white/5"}`}
                                >
                                    {/* UPDATED: Dynamic check for subpages instead of hardcoded index < 2 */}
                                    {subpages[index].length > 0 ? (
                                        <span className="cursor-pointer drop-shadow-md" onMouseEnter={() => setCurrentNav(index)}>
                                            {page}
                                        </span>
                                    ) : (
                                        <Link href={`/${page.toLowerCase().replace(" ", "-")}`} className="drop-shadow-md" onMouseEnter={() => setCurrentNav(index)}>
                                            {page}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-8 h-8 mx-2 "
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className={clsx("w-full border-b-[1.5px] border-[#EAD09D] transition-all duration-300 ease-in-out",
                                isOpen ? "transform rotate-45 translate-y-[1.5px]" : "-translate-y-1.5")}></span>
                            <span className={clsx("w-full border-b-[1.5px] border-[#EAD09D] transition-all duration-300 ease-in-out",
                                isOpen ? "hidden" : "")}></span>
                            <span className={clsx("w-full border-b-[1.5px] border-[#EAD09D] transition-all duration-300 ease-in-out",
                                isOpen ? "transform -rotate-45 -translate-y-[1.5px]" : "translate-y-1.5")}></span>
                        </button>
                    </div>

                </div>
                
                {/* The Sub-Tabs Container */}
                {/* UPDATED: Dynamic check for subpages length */}
                {currentNav >= 0 && subpages[currentNav].length > 0 ? (
                    <div className={`bg-gradient-to-r from-[#080d17]/95 via-[#162238]/95 to-[#080d17]/95 backdrop-blur-md w-full shadow-lg h-14 md:flex hidden justify-center border-b border-[#EAD09D]/20`}>
                        <nav className="flex flex-row md:w-[48rem] lg:w-[64rem] items-center py-2 justify-start px-4 gap-4">
                            {subpages[currentNav].map((subpage, index) => (
                                <Link
                                    key={index}
                                    href={`/${subpageURL[currentNav][index]}`}
                                    className="h-full flex items-center px-4 text-[0.95rem] font-light text-gray-300 hover:text-[#EAD09D] transition-colors duration-300"
                                >
                                    <span>{subpage}</span>
                                </Link>
                            ))}
                        </nav>
                    </div> 
                ) : null}
            </div>
            
            <div className={`w-full md:hidden ${isOpen ? "bg-black/60 h-screen backdrop-blur-sm" : ""}`}>
                <nav className={`flex bg-[#0F172A]/95 backdrop-blur-md text-gray-100 flex-col items-start transition-all duration-500 ease-in-out border-b border-[#EAD09D]/30 ${isOpen ? "shadow-2xl scale-y-100" : "scale-y-0"} origin-top`}>
                    {isOpen && pages.map((page, index) => (
                        <div
                            key={index}
                            className="w-full flex flex-col last:border-none border-b border-white/10 cursor-pointer "
                        >
                            {/* UPDATED: Dynamic check for subpages instead of hardcoded index < 2 */}
                            {subpages[index].length > 0 ? (
                                <div className="flex mx-6 my-3 flex-row justify-between items-center font-medium tracking-wide" onClick={() => setSelectedNav(index === selectedNav ? -1 : index)}>
                                    {page}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className={`transition-transform duration-300 ease-in-out fill-[#EAD09D] ${selectedNav === index ? "rotate-180" : ""}`}
                                    ><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                                </div> 
                            ) : (
                                <Link href={`/${page.toLowerCase().replace(" ", "-")}`} className="mx-6 my-3 flex flex-row justify-between items-center font-medium tracking-wide" onClick={() => { setIsOpen(false); setSelectedNav(-1); }}>
                                    {page}
                                </Link>
                            )}
                            <div className={`flex flex-col transition-all ease-in-out duration-300 origin-top bg-[#080d17]/80 `}>
                                {selectedNav === index ? subpages[index].map((subpage, subindex) => (
                                    <Link
                                        key={subindex}
                                        href={`/${subpageURL[index][subindex]}`}
                                        className="w-full py-2.5 px-10 flex flex-row justify-between items-center last:border-none border-b border-white/5 font-light text-sm text-gray-300 hover:text-[#EAD09D]"
                                        onClick={() => { setIsOpen(false); setSelectedNav(-1); }}
                                    >
                                        {subpage}
                                    </Link>
                                )) : null}
                            </div>
                        </div>
                    ))}
                </nav>
                <div className="w-full h-full" onClick={() => { setIsOpen(false); setSelectedNav(-1); }}></div>
            </div>
            <div className={`w-full h-screen ${currentNav === -1 ? "hidden" : ""} bg-black/40 backdrop-blur-[2px]`}></div>
        </header>
    );
}