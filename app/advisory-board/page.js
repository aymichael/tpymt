import Image from "next/legacy/image";

const ProfileBox = ({ photoUrl, name, positions }) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-full">
            <div className="relative w-36 h-48 mx-auto mt-4 overflow-hidden rounded-lg">
                <Image
                    src={photoUrl}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-4 text-center">
                <h2 className="text-lg/8 md:text-xl/8 font-bold dark:text-gray-100">{name}</h2>
                {positions.map((position, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{position}</p>
                ))}
            </div>
        </div>
    );
};

export default function AdvisoryBoardPage() {
    return (
        <div>
            <h1 className="text-4xl/8 font-bold mb-4">Advisory Board</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <ProfileBox
                    photoUrl="/CHUNGTszShun.jpg"
                    name="Prof. CHUNG Tsz Shun Eric"
                    positions={["Professor", "Department of Mathematics, Faculty of Science, CUHK"]}
                />
                <ProfileBox
                    photoUrl="/JINBangTi.jpg"
                    name="Prof. JIN Bang Ti"
                    positions={["Professor (Global STEM Scholar)", "Department of Mathematics, Faculty of Science, CUHK"]}
                />
                <ProfileBox
                    photoUrl="/LEUNGNaiChung.jpg"
                    name=" Prof. Conan Nai Chung LEUNG"
                    positions={["Professor", "Department of Mathematics, Faculty of Science, CUHK"]}
                />
                <ProfileBox
                    photoUrl="/XINZhouPing.jpg"
                    name=" Prof. XIN Zhou Ping"
                    positions={["William M.W. Mong Professor of Mathematics", " Executive Director, The Institute of Mathematical Sciences, CUHK"]}
                />
                <ProfileBox
                    photoUrl="/YUJiuKang.jpg"
                    name="Prof. YU Jiu Kang"
                    positions={["Lee Hysan Professor of Mathematics", "Department of Mathematics, Faculty of Science, CUHK"]}
                />
                <ProfileBox
                    photoUrl="/ZOUJun.png"
                    name="Prof. ZOU Jun"
                    positions={["Choh-Ming Li Professor of Mathematics", "Chairman, Department of Mathematics, Faculty of Science, CUHK"]}
                />
            </div>
        </div>
    );
}