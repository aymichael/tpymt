import Image from "next/image";

function Arrow() {
    return (
        <div className="h-0 w-0 border-x-8 md:border-r-0 border-y-0 md:border-y-8 border-x-transparent border-y-green-500 md:border-y-transparent md:border-x-green-500 border-t-16 md:border-l-16  self-center"></div>
    )
}


export default function ApplicationPage() {
    return (
        <div>
            <h1 className="text-4xl/16 text-center font-bold mb-8">Application Information</h1>
            <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4">Requirements</h2>
            <ul className="list-disc list-inside mb-8">
                <li className="text-base md:text-lg/8">From Middle School and High School students.</li>
                <li className="text-base md:text-lg/8">Interested in science and innovation, healthy, with outstanding academic performance and innovation potential</li>
                <li className="text-base md:text-lg/8">Interested in mathematics and intend to engage in mathematical research, or other cutting-edge scientific or technological research with mathematics as the underlying logic, and are able to demonstrate mathematics potential</li>
            </ul>
            <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4">Application Materials</h2>
            <ul className="list-disc list-inside mb-8">
                <li className="text-base md:text-lg/8">Application form</li>
                <li className="text-base md:text-lg/8">Latest transcripts</li>
                <li className="text-base md:text-lg/8">Certificates/Awards</li>
                <li className="text-base md:text-lg/8">Recommendation letter(s) written by the mathematics/science teacher (if any)</li>
            </ul>
            <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4">Application Procedures</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="bg-green-200 dark:bg-green-700 p-2 rounded-lg shadow-md text-center flex items-center justify-center">
                    <h3 className="text-lg/8 md:text-xl/8">Submission of Application</h3>
                </div>
                <Arrow />
                <div className="bg-blue-200 dark:bg-blue-700 p-2 rounded-lg shadow-md text-center flex items-center justify-center">
                    <h3 className="text-lg/8 md:text-xl/8">Online Examination</h3>
                </div>
                <Arrow />
                <div className="bg-purple-200 dark:bg-purple-700 p-2 rounded-lg shadow-md text-center flex items-center justify-center">
                    <h3 className="text-lg/8 md:text-xl/8">Admission Assessment</h3>
                </div>
                <Arrow />
                <div className="bg-yellow-200 dark:bg-yellow-700 p-2 rounded-lg shadow-md text-center flex items-center justify-center">
                    <h3 className="text-lg/8 md:text-xl/8">Admission Result</h3>
                </div>
            </div>
            <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4">Course Venue(s)</h2>
            <p className="text-base md:text-lg/8 mb-8">CUHK Shenzhen Research Institute</p>
            <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4"> Certificate of Attendance</h2>
            <p className="text-base md:text-lg/8 mb-8">Upon completion of the programme, a certificate of attendance will be issued by the Department of Mathematics, Faculty of Science, CUHK.</p>

            <h2 className="text-xl/8 md:text-2xl/8 font-bold mb-4 md:mb-0">Enquiry</h2>
            <div className="flex md:flex-row flex-col justify-between md:items-end gap-2 md:gap-0">
                <div>
                    <p className="text-base md:text-lg/8">Telephone: (86) 755-8692 0032</p>
                    <p className="text-base md:text-lg/8">Mobile/WeChat: (86) 180 2538 2810</p>
                    <p className="text-base md:text-lg/8">Email Address: gbao@cuhk.edu.cn</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-base md:text-lg/8">
                        Scan the QR Code for application
                    </p><div className="h-24 w-24 relative self-center">
                        <Image src="/QRcode.jpg" alt="Application QRcode" layout="fill" objectFit="cover"/>
                    </div>
                </div>
            </div>

        </div>
    );
}