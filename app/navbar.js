"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { redirect, usePathname } from "next/navigation";
import { year } from "./data";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
    const currCourseURL = year.toString();
    const pages = ["About", "Programme", "Student Life", "Contact Us"];
    const subpages = [["Message from Management", "CUHK", "Organizers", "Advisory Board", "Coaches"], ["Curriculum", "This Year's Courses", "Past Courses", "Guest Lectures"]];
    const subpageURL = [["message", "cuhk", "organizers"], ["curriculum", `courses/${currCourseURL}`, "past-courses", "guest-lectures"], [], []];
    const [isOpen, setIsOpen] = useState(false);
    const [currentNav, setCurrentNav] = useState(-1);
    const [selectedNav, setSelectedNav] = useState(-1);
    const pathname = usePathname();
    return (
        <header className={`flex select-none w-full flex-col text-lg/8 md:shadow-md fixed md:items-center ${lato.className} z-20`} >
            <div className={`bg-[#fa9863] md:shadow-none ${isOpen ? "" : "shadow-md"} flex flex-col w-full md:px-0 px-2 items-center text-white`} onMouseLeave={() => setCurrentNav(-1)}>
                <div className="md:w-[48rem] lg:w-[64rem] flex flex-row items-center w-full justify-between h-16">
                    <div>
                        <Link href="/">
                            <span className="text-2xl font-bold">TPYMT</span>
                        </Link>
                    </div>
                    <div className="flex flex-row items-center h-full gap-2">
                        <nav className="flex-row items-center md:flex hidden text-nowrap h-full">
                            {pages.map((page, index) => (
                                <div
                                    key={index}
                                    className={`h-full flex items-center px-4  font-bold ${currentNav === index ? "bg-[#8ecae6]" : ""}`}
                                >
                                    {index < 2 ? <span className="hover:translate-y-[-3px] transition-all duration-200 ease-in-out"
                                        onMouseEnter={() => setCurrentNav(index)}>{page}</span> :
                                        <Link href={`/${page.toLowerCase().replace(" ", "-")}`} className="hover:translate-y-[-3px] transition-all duration-200 ease-in-out" onMouseEnter={() => setCurrentNav(index)}>
                                            {page}
                                        </Link>}
                                </div>
                            ))}
                        </nav>
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-8 h-8 mx-2 "
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className={clsx("w-full border border-white transition-all duration-300 ease-in-out",
                                isOpen ? "transform rotate-45" : "-translate-y-2")}></span>
                            <span className={clsx("w-full border border-white transition-all duration-300 ease-in-out",
                                isOpen ? "hidden" : "")}></span>
                            <span className={clsx("w-full border border-white transition-all duration-300 ease-in-out",
                                isOpen ? "transform -rotate-45" : "translate-y-2")}></span>
                        </button>
                    </div>

                </div>
                {currentNav >= 0 && currentNav < 2 ? <div className={` bg-[#8ecae6] w-full shadow-md h-16 md:flex hidden justify-center`}>
                    <nav className="flex flex-row md:w-[48rem] lg:w-[64rem] items-center py-2 justify-end gap-2">
                        {currentNav < 2 && subpages[currentNav].map((subpage, index) => (
                            <Link
                                key={index}
                                href={`/${subpageURL[currentNav][index]}`}
                                className="h-full flex items-center px-2 font-bold"
                            >
                                <span className="hover:translate-y-[-3px] transition-all duration-200 ease-in-out">{subpage}</span>
                            </Link>
                        ))}
                    </nav>
                </div> : null}
            </div>
            <div className={`w-full md:hidden ${isOpen ? "bg-black/40 h-screen" : ""}`}>
                <nav className={`flex bg-[#8ecae6]/95 text-white  flex-col items-start transition-all duration-500 ease-in-out ${isOpen ? "shadow-md scale-y-100" : "scale-y-0"} pt-2 origin-top`}>
                    {isOpen && pages.map((page, index) => (
                        <div
                            key={index}
                            className="w-full flex flex-col last:border-none border-b border-gray-300 cursor-pointer "
                        >
                            {index < 2 ? <div className="flex mx-4 my-2 flex-row justify-between items-center " onClick={() => setSelectedNav(index === selectedNav ? -1 : index)}>
                                {page}
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className={`transition-all duration-300 ease-in-out fill-white ${selectedNav === index ? "rotate-180" : ""}`}
                                ><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                            </div> :
                                <Link href={`/${page.toLowerCase().replace(" ", "-")}`} className="mx-4 my-2 flex flex-row justify-between items-center" onClick={() => { setIsOpen(false); setSelectedNav(-1); }}>
                                    {page}
                                </Link>}
                            <div className={`flex flex-col transition-all ease-in-out duration-300 origin-top gap-2 bg-[#e09a13] `}>
                                {selectedNav === index ? subpages[index].map((subpage, subindex) => (
                                    <Link
                                        key={subindex}
                                        href={`/${subpageURL[index][subindex]}`}
                                        className="w-full p-2 px-8 flex flex-row justify-between items-center last:border-none border-b border-gray-200"
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
            <div className={`w-full h-screen ${currentNav === -1 ? "hidden" : ""} bg-black/40`}></div>
        </header>
    );

};
