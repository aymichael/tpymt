import Image from 'next/image';

const ProfileBox = ({ photoUrl, name, position }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm w-full transform transition duration-300 hover:scale-105">
      <div className="relative w-36 h-36 mx-auto mt-4 overflow-hidden rounded-lg">
        <Image
          src={photoUrl}
          alt={name}
          fill
          objectFit="cover"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  );
};

export default function AdvisoryBoardPage() {
    return (
        <div>
            <ProfileBox
                photoUrl="/CHUNGTszShun.jpg"
                name="Dr. John Doe"
                position="Chairman, Advisory Board"
            />
        </div>
    );
}