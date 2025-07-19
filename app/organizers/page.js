
import Image from "next/image";

export default function OrganizersPage() {
    return (
        <div>
            <h1 className="text-4xl/16 font-bold mb-4">Organizer</h1>
            <div className="mb-4 flex md:flex-row flex-col justify-between items-center">
                <h2 className="text-xl/8 md:text-2xl/8 font-bold underline md:text-left text-center">Department of Mathematics, Faculty of Science, CUHK</h2>
                <Image
                    src="/department.png"
                    alt="Department of Mathematics, CUHK"
                    width={323}
                    height={100}
                    className="h-16 w-auto object-contain"
                />
            </div>
            <p className="mb-2 indent-8 text-base md:text-lg/8">
                Science education is the propellent to civilization and socioeconomic development. The Faculty of Science has six major teaching units, namely School of Life Sciences, Department of Chemistry, Department of Mathematics, Department of Physics, Department of Statistics, and Earth System Science Programme. Their Faculty members include a Nobel laureate, a Fields medallist, and Academicians of the Chinese Academies of Sciences and Engineering and world- class scholars, who are committed to the pursuit of excellence in teaching and research. The graduates are highly received by the local and international communities with many recognized as outstanding researchers, educators, and professionals in all sectors, both in Hong Kong and overseas. The missions of the Faculty of Science are to educate and inspire the next generation of scientific innovators and leaders; and to expand the frontier of human knowledge. Among all departments, the Department of Mathematics was established in the same year as CUHK, and has experienced 60 years of development in collaboration with the University.
            </p>
            <p className="mb-2 indent-8 text-base md:text-lg/8">
                The Department of Mathematics has a world-class scientific research team that has achieved breakthroughs in different frontier research fields such as algebra, mathematical analysis, geometry, topology, partial differential equations, and computational science, and many of them have been honored with highly prestigious international awards and fellowships which become a recognition of their outstanding research results.
            </p>
            <p className="mb-6 indent-8 text-base md:text-lg/8">
                The Department of Mathematics also focuses on the inheritance of knowledge. Over the years, many graduates have devoted themselves to scientific research in world-class universities and research institutes, including the Fields Medalist, Chinese mathematician Professor YAU Shing Tung. In addition, with the assistance of Professor YAU, the Department established the Institute of Mathematical Sciences in 1993 to further strengthen the training of mathematics talents.
            </p>
            <h1 className="text-4xl/16 font-bold mb-4">Co-Organizers</h1>
            <div className="mb-4 flex md:flex-row flex-col justify-between items-center">
                <h2 className="text-xl/8 md:text-2xl/8 font-bold underline md:text-left text-center">CUHK ShenZhen Research Institute (SZRI)</h2>
                <Image
                    src="/research.png"
                    alt="CUHK Shenzhen Research Institute"
                    width={2221}
                    height={710}
                    className="h-16 w-auto object-contain"
                />
            </div>
            <p className="mb-4 indent-8 text-base md:text-lg/8">
                With a great support of the Shenzhen Municipal Government, CUHK Shenzhen Research Institute (SZRI), the first wholly owned industry-university-institute base of CUHK in the Mainland, was established in May 2007. Being one of the important platforms for the strategic development of CUHK in the Mainland, SZRI has been expanding the University’s developments in Shenzhen, the Guangdong- Hong Kong Macao Greater Bay Area (GBA) and other cities of mainland China over the years, through providing comprehensive support in academic and research advancement, talents cultivation, technology transfer, global connection, as well as innovation and development.
            </p>
            <div className="mb-4 flex md:flex-row flex-col justify-between items-center">
                <h2 className="text-xl/8 md:text-2xl/8 font-bold underline md:text-left text-center">Office for Greater Bay Area Developments (GBAO), CUHK</h2>
                <Image
                    src="/GBAoffice.png"
                    alt="Office for Greater Bay Area Developments, CUHK"
                    width={3624}
                    height={1027}
                    className="h-16 w-auto object-contain"
                />
            </div>
            <p className="mb-2 indent-8 text-base md:text-lg/8">
                With a great support of the Shenzhen Municipal Government, CUHK Shenzhen Research Institute (SZRI), the first wholly owned industry-university-institute base of CUHK in the Mainland, was established in May 2007. Being one of the important platforms for the strategic development of CUHK in the Mainland, SZRI has been expanding the University’s developments in Shenzhen, the Guangdong- Hong Kong Macao Greater Bay Area (GBA) and other cities of mainland China over the years, through providing comprehensive support in academic and research advancement, talents cultivation, technology transfer, global connection, as well as innovation and development.
            </p>
        </div>
    );
}