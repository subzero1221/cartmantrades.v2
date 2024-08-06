import Image from "next/image";

function ProfileInfo({ user }) {
  return (
    <div className="flex items-center p-6 space-x-4 bg-gray-100 rounded-full">
      <Image
        src={
          user.photo === "default.jpg"
            ? "/default.jpg"
            : `https://drive.google.com/uc?export=view&id=${user.photo} `
        }
        alt="Profile Photo"
        className="object-cover border-2 border-gray-300 rounded-full "
        width={200}
        height={200}
        quality={90}
      />
      <div>
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;
