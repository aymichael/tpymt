import { Playfair_Display } from "next/font/google";
import Image from "next/image";

// Using Playfair Display to match the elegant navigation bar
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto pt-8 px-4">
      
      {/* Main Title: Scaled down further to ensure it fits on one line across more screen sizes */}
      <h1 className={`text-xl sm:text-2xl md:text-[1.75rem] lg:text-3xl ${playfair.className} font-semibold text-[#0F172A] text-center mt-8 md:mt-16 mb-8 select-none leading-tight tracking-wide`}>
        Training Programme for Young Mathematics Talent
      </h1>
      
      {/* Elegant Gold Divider */}
      <div className="w-24 h-1 bg-[#EAD09D] mb-12 md:mb-16 rounded-full"></div>

      {/* Body Text */}
      <p className="indent-8 text-base md:text-lg text-slate-700 leading-relaxed md:leading-loose mb-6 text-justify">
        Since 2023, The TUYF Charitable Trust has generously supported the Training Programme for Young Mathematics. It is a joint programme that has been co-organized by the Department of Mathematics at CUHK, CUHK Shenzhen Research Institute (SZRI) and the Office for Greater Bay Area Developments (GBAO) at CUHK.
      </p>
      
      <p className="indent-8 text-base md:text-lg text-slate-700 leading-relaxed md:leading-loose mb-16 md:mb-20 text-justify">
        This training programme provides a two-week intensive training to mathematically talented young high-school students who are interested in science and innovation in the Greater Bay Area (GBA). It aims to encourage more students to choose STEM-related subjects for further studies in universities. In the long run, this lays a foundation for cultivating and nurturing the next generation of innovation and technology talents, which thus maintains the sustainability of the development of science and technology in the Region and even the Country.
      </p>

      {/* Logos Section */}
      <div className="flex mt-auto md:flex-row flex-col items-center md:justify-between md:space-x-8 md:space-y-0 space-y-8 w-full opacity-90 pb-8">
          <Image
            src="/department.png"
            alt="Department of Mathematics, CUHK"
            width={323}
            height={100}
            className="h-14 md:h-16 w-auto object-contain"
          />
          <Image
            src="/research.png"
            alt="CUHK Shenzhen Research Institute"
            width={2221}
            height={710}
            className="h-14 md:h-16 w-auto object-contain"
          />
          <Image
            src="/GBAoffice.png"
            alt="Office for Greater Bay Area Developments, CUHK"
            width={3624}
            height={1027}
            className="h-14 md:h-16 w-auto object-contain"
          />
      </div>
    </div>
  );
}