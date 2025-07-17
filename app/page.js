import { Forum } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const lobster = Forum({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className={`text-4xl/16 md:text-6xl/20 ${lobster.className} font-bold italic text-center md:my-24 my-12 select-none`}>
        Training Programme for Young Mathematics Talent
      </h1>
      <p className="indent-8 text-base md:text-lg/8">
        Since 2023, The TUYF Charitable Trust has generously supported the Training Programme for Young Mathematics. It is a joint programme that has been co-organized by the Department of Mathematics at CUHK, CUHK Shenzhen Research Institute (SZRI) and the Office for Greater Bay Area Developments (GBAO) at CUHK.
      </p>
      <br />
      <p className="indent-8 text-base md:text-lg/8">
        This training programme provides a two-week intensive training to mathematically talented young high-school students who are interested in science and innovation in the Greater Bay Area (GBA). It aims to encourage more students to choose STEM-related subjects for further studies in universities. In the long run, this lays a foundation for cultivating and nurturing the next generation of innovation and technology talents, which thus maintains the sustainability of the development of science and technology in the Region and even the Country.
      </p>
      <div className="flex mt-auto md:flex-row flex-col items-center md:justify-between  md:space-x-4 md:space-y-0 space-y-2 w-full">
          <Image
            src="/department.png"
            alt="Department of Mathematics, CUHK"
            width={323}
            height={100}
            className="h-16 w-auto object-contain"
          />
          <Image
            src="/research.png"
            alt="CUHK Shenzhen Research Institute"
            width={2221}
            height={710}
            className="h-16 w-auto object-contain"
          />
          <Image
            src="/GBAoffice.png"
            alt="Office for Greater Bay Area Developments, CUHK"
            width={3624}
            height={1027}
            className="h-16 w-auto object-contain"
          />
      </div>
    </div>
  );
}
