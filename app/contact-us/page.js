
import Link from "next/link";
import Image from "next/image";

function ContactCard({ departmentName, website, telephone, emails, addresses, photo }) {
    return (
        <div className="shadow-lg rounded-lg p-6 mx-auto ring-1 ring-gray-200 w-full">
            <h2 className="text-2xl font-bold mb-4">{departmentName}</h2>
            <div className="flex justify-between items-center gap-4">
                <div>
                    {/* Link to website */}
                    <p className="text-base md:text-lg/8">
                        <strong>Website: </strong>
                        <Link href={website} className="text-blue-600 hover:text-blue-800">
                            {website}
                        </Link>
                    </p>
                    <p className="text-base md:text-lg/8"><strong>Telephone: </strong> {telephone}</p>
                    <p className="text-base md:text-lg/8"><strong>Email: </strong>
                        {Array.isArray(emails) ? emails.map((email, index) => (
                            <span key={index}>
                                <Link href={`mailto:${email}`} className="text-blue-600 hover:text-blue-800">
                                    {email}
                                </Link>
                                {index < emails.length - 1 && '/ '}
                            </span>
                        ))
                            : <Link href={`mailto:${emails}`} className="text-blue-600 hover:text-blue-800">
                                {emails}
                            </Link>}
                    </p>
                    <p className="text-base md:text-lg/8"><strong>Address: </strong>
                        {Array.isArray(addresses) ? addresses.map((address, index) => (
                            <span key={index}>
                                {address}
                                {index < addresses.length - 1 && '/ '}
                            </span>
                        ))
                            : addresses}
                    </p>
                </div>
                <div className="w-1/3 overflow-hidden hidden md:flex items-center justify-center min-w-1/3">
                    <Image
                        src={photo}
                        width={0}
                        height={0}
                        alt={departmentName}
                        sizes="auto"
                        className="w-full object-contain bg-white"
                    />
                </div>
            </div>
        </div>
    );
};

export default function ContactUsPage() {
    return (
        <div>
            <h1 className="text-4xl/16 font-bold mb-8">Contact Us</h1>
            <div className="flex flex-col gap-4">
                <ContactCard
                    departmentName="Department of Mathematics, CUHK"
                    website="www.math.cuhk.edu.hk"
                    telephone="(852) 3943-7988"
                    emails="dept@math.cuhk.edu.hk"
                    addresses="Room 220, Lady Shaw Building, CUHK, Hong Kong"
                    photo="/department.png"
                />
                <ContactCard
                    departmentName="CUHK Shenzhen Research Institute"
                    website="www.cuhkri.org.cn"
                    telephone="(86) 755-86920000"
                    emails="cuhkszri@cuhkri.org.cn"
                    addresses="No. 10, 2nd Yuexing Road, Nanshan District, Shenzhen"
                    photo="/research.png"
                />
                <ContactCard
                    departmentName="Office for Greater Bay Area Developments, CUHK"
                    website="gbao.cuhk.edu.hk"
                    telephone="(86) 755-86920000/ (852) 3943 0344"
                    emails={["gbao@cuhkri.org.cn", "gbao@cuhk.edu.hk"]}
                    addresses={["No. 10, 2nd Yuexing Road, Nanshan District, Shenzhen", "Unit 3A, Inter-University Hall, CUHK, Hong Kong"]}
                    photo="/GBAoffice.png"
                />
            </div>
        </div>
    )

}


