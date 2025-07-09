import { Forum } from "next/font/google";
import Link from "next/link";

const lobster = Forum({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className={`text-6xl/20 ${lobster.className} font-bold italic text-center my-24 select-none`}>
        Training Programme for Young Mathematics Talent
      </h1>
      <p>
        We extend our heartfelt gratitude to the following organizations for their generous support of the Training Programme for Young Mathematics Talent(TYPMT):
      </p>
      <ul className="list-none list-outside my-4">
        <li><b>Organizer: </b>Department of Mathematics, CUHK</li>
        <li><b>Co-organizer: </b>CUHK Shenzhen Research Institute and Office for Greater Bay Area Developments, CUHK </li>
        <li><b>Sponsor: </b>The TUYF Charitable Trust</li>
        <li><b>Supporting Units: </b>Faculty of Science, CUHK and SZVUP</li>
      </ul>
      <div className="flex flex-col items-center"> 
      <Link href="application" className="mt-8 text-4xl/8 font-bold text-blue-500">Apply Now!</Link>
      </div>
    </div>
  );
}
