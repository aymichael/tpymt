import "./globals.css";
import Link from "next/link";
import Navbar from "./navbar";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400"]});

export const metadata = {
  title: "TPYMT",
  description: "Training Programme for Young Mathematics Talent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} min-h-screen w-full flex justify-center leading-8`}>
        <div className="flex flex-col w-full items-center">
          <Navbar />
          <main className="bg-center bg-contain bg-no-repeat mt-16 w-full h-full dark:bg-gray-700 flex items-center flex-col">
            <div className="sm:p-10 p-6 w-full md:w-[48rem] lg:w-[64rem] bg-white/90 dark:bg-gray-700/90 shadow-white dark:shadow-gray-700 shadow-2xl h-full text-lg/8 md:text-xl/8">
              {children}
            </div>
          </main>
          <footer className="w-full bg-gray-100 dark:bg-gray-600 p-8 text-left flex justify-center">
            <div className="flex w-full justify-between items-center md:w-[48rem] lg:w-[64rem]">
              <span className="text-xs">
                ©&nbsp;EPYMT
                <br />
                EPYMT, Department of Mathematics, The Chinese University of Hong Kong, Shatin, N.T., Hong Kong
                <br />
                Phone: (852) 3943 7962 / 3943 7989
                <br />
                Fax: (852) 2603 5154
                <br />
                Email: <Link href="mailto:epymt.math@cuhk.edu.hk" className="text-indigo-500 dark:text-indigo-300">epymt.math@cuhk.edu.hk</Link>
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
