"use client";

import { ArcherContainer, ArcherElement } from "react-archer";

export default function CurriculumPage() {
    return (
        <div className="">
            <h1 className="text-4xl/8 font-bold mb-8 text-gray-900 dark:text-white">Curriculum</h1>

            <ArcherContainer>
                <div className="grid grid-cols-2 gap-x-24 lg:gap-x-32 gap-y-4">
                    <div className="bg-yellow-500 dark:bg-yellow-800 px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white flex justify-center">
                        <h2 className="text-xl/8 md:text-2xl/8 font-bold md:text-nowrap">Theoretical Knowledge</h2>
                    </div>
                    <div className="bg-lime-600 dark:bg-green-800 px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white flex justify-center">
                        <h2 className="text-xl/8 md:text-2xl/8 font-bold md:text-nowrap">Future Learning Path</h2>
                    </div>
                    <ArcherElement
                        id="left-1"
                        relations={[
                            {
                                targetId: "right-1",
                                targetAnchor: "left",
                                sourceAnchor: "right",
                                style: { strokeColor: "orange", strokeWidth: 2 },
                            }
                        ]}>
                        <div className="bg-amber-200 dark:bg-amber-800 px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white flex flex-col justify-center">
                            <p className="text-base md:text-lg/8">Set Theory and Logic</p>
                            <p className="text-base md:text-lg/8">Introduction to Discrete Mathematics</p>
                            <p className="text-base md:text-lg/8">Real-world Application of Number Theory: Cryptography</p>
                        </div>
                    </ArcherElement>
                    <ArcherElement
                        id="right-1"
                    >
                        <div className="bg-lime-100 dark:bg-lime-700 px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white flex flex-col justify-center">
                            <p className="text-base md:text-lg/8">Mathematics</p>
                            <p className="text-base md:text-lg/8">Physics</p>
                            <p className="text-base md:text-lg/8">Mathematics / Science Research</p>
                            <p className="text-base md:text-lg/8">Mathematics / Science Education</p>
                        </div>
                    </ArcherElement>
                    <ArcherElement
                        id="left-2"
                        relations={[
                            {
                                targetId: "right-1",
                                targetAnchor: "left",
                                sourceAnchor: "right",
                                style: { strokeColor: "orange", strokeWidth: 2 },
                            },
                            {
                                targetId: "right-2",
                                targetAnchor: "left",
                                sourceAnchor: "right",
                                style: { strokeColor: "green", strokeWidth: 2 },
                            },
                            {
                                targetId: "right-3",
                                targetAnchor: "left",
                                sourceAnchor: "right",
                                style: { strokeColor: "blue", strokeWidth: 2 },
                            }
                        ]}
                    >
                        <div className="bg-amber-100 dark:bg-amber-700 px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white flex flex-col justify-center">
                            <p className="text-base md:text-lg/8">Linear Algebra with Applications</p>
                            <p className="text-base md:text-lg/8">Calculus and Differential Equations</p>
                        </div>
                    </ArcherElement>
                    <ArcherElement
                        id="right-2"
                    >
                        <div className="bg-lime-200 dark:bg-lime-800 px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white flex flex-col justify-center">
                            <p className="text-base md:text-lg/8">Statistics</p>
                            <p className="text-base md:text-lg/8">Quantitative Finance</p>
                            <p className="text-base md:text-lg/8">Actuary and Risk Management</p>
                            <p className="text-base md:text-lg/8">Natural Science</p>
                        </div>
                    </ArcherElement>
                    <ArcherElement
                        id="left-3"
                        relations={[
                            {
                                targetId: "right-3",
                                targetAnchor: "left",
                                sourceAnchor: "right",
                                style: { strokeColor: "blue", strokeWidth: 2 },
                            },
                        ]}
                    >
                        <div className="bg-amber-200 dark:bg-amber-800 px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white flex flex-col justify-center">
                            <p className="text-base md:text-lg/8">First Journey into Non-Euclidean Geometry</p>
                            <p className="text-base md:text-lg/8">Introduction to Abstract Algebra</p>
                            <p className="text-base md:text-lg/8">Calculus and Differential Geometry</p>
                        </div>
                    </ArcherElement>
                    <ArcherElement
                        id="right-3"
                    >
                        <div className="bg-lime-100 dark:bg-lime-700 px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white flex flex-col justify-center">
                            <p className="text-base md:text-lg/8">Computer Science</p>
                            <p className="text-base md:text-lg/8">Information Engineering</p>
                            <p className="text-base md:text-lg/8">Artificial Intelligence</p>
                            <p className="text-base md:text-lg/8">Software Engineering</p>
                            <p className="text-base md:text-lg/8">Data Science</p>
                        </div>
                    </ArcherElement>
                </div>
            </ArcherContainer>
        </div >
    );
}