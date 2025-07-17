
import Image from "next/legacy/image";

export default function CUHKPage() {
    return (
        <div>
            <h1 className="text-4xl/8 font-bold text-[#78176f] text-center mb-8">The Chinese University of Hong Kong</h1>

            {/* Introduction Section */}
            <section className="mb-8">
                <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4 text-[#78176f]">About CUHK</h2>
                <p className="indent-8 text-base md:text-lg/8">
                    Founded in 1963, The Chinese University of Hong Kong (CUHK), with a global vision “to combine tradition with modernity, and to bring together China and the West,” is a forward-looking comprehensive research university that aims to nurture students with both specialized knowledge and wisdom for life. CUHK undertakes a wide range of research programmes in different areas and strives to support all academic staff to undertake consultancy and collaborative projects with the industry.
                </p>
                <p className="indent-8 text-base md:text-lg/8 mt-4">
                    CUHK is an academic powerhouse in the fields of humanities, mathematics, computer science, economics and finance, medicine, law, media, geography, etc., and is the only university in Hong Kong with the Nobel Prize, Fields Medal, Turing Award, and Shannon Award winners. The University Grants Committee (UGC) provides preferential grant funding to the local tertiary institutions to conduct research in 28 selected Areas of Excellence (AoEs), out of which 11 are led by researchers from CUHK. CUHK also has excellent publications of cutting-edge research, both in discipline-specific journals and in more high profile publications such as Science, Nature, and The Lancet.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4 text-[#78176f]">CHUK Rankings and Figures</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2  gap-4">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center"><h3 className="text-xl/8 md:text-2xl/8 font-bold"><span className="text-6xl text-[#78176f]">4</span> Nobel Laureates</h3>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl/8 md:text-2xl/8 font-bold"><span className="text-6xl text-[#78176f]">8</span> Faculties</h3>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2 flex justify-center items-center gap-2">
                        
                        <h3 className="text-xl/8 md:text-2xl/8 font-bold max-w-prose hidden lg:block">
                            <span className="text-6xl text-[#78176f] font-bold">5</span> State Key Laboratories, established with the approval of the Ministry of Science and Technology of the People&apos;s Republic of China
                        </h3>
                        <h3 className="text-xl/8 md:text-2xl/8 font-bold max-w-prose block lg:hidden text-center">
                            <span className="text-6xl text-[#78176f] font-bold">5</span> State Key Laboratories*
                        </h3>
                    </div>
                </div>
                <p className="text-sm md:text-base mt-4">* established with the approval of the Ministry of Science and Technology of the People&apos;s Republic of China</p>
            </section>
            <section className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl/8 md:text-2xl/8 font-bold mb-2 text-ce">QS World University Rankings</h3>
                        <p className="text-gray-800">6th in Asia / 36th in the World</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl/8 md:text-2xl/8 font-bold mb-2">Times Higher Education World University Rankings</h3>
                        <p className="text-gray-800">10th in Asia / 44th in the World</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl/8 md:text-2xl/8 font-bold mb-2">Reuters Asia&apos;s Most Innovative University</h3>
                        <p className="text-gray-800">1st in Hong Kong (2016-2019)</p>
                    </div>
                    <div className="flex-col md:flex-row md:col-span-3 flex justify-center gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
                            <h3 className="text-xl/8 md:text-2xl/8 font-bold mb-2">U.S. World Patents Granted</h3>
                            <p className="text-gray-800">2nd in Hong Kong / 79th in the World</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
                            <h3 className="text-xl/8 md:text-2xl/8 font-bold mb-2">Shanghai Ranking&apos;s Academic Ranking of World Universities</h3>
                            <p className="text-gray-800">3rd in Hong Kong</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}