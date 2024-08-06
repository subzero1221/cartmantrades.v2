"use client";

import Link from "next/link";
import Image from "next/image";
import { logOut } from "../_utils/actions";
import { HiPower } from "react-icons/hi2";
import { useUser } from "./UserContext";

export const revalidate = 0;

function MeIcon({ user, token }) {
  const { userToken, userData, updateUser } = useUser();

  const handleLogOut = async () => {
    await logOut();
    // Update context state
    updateUser("", {});
  };

  // Fetch userData based on the token

  return token?.name === "jwt" ? (
    <div className="flex items-center space-x-2">
      <Link href="/profile" className="flex items-center space-x-3">
        <div className="relative rounded-full">
          <Image
            src={
              user.photo === "default.jpg"
                ? "/default.jpg"
                : `https://drive.google.com/uc?export=view&id=${user.photo}`
            }
            alt={userData.name}
            width={80}
            height={80}
            className="object-cover rounded-e-full"
            quality={90}
          />
        </div>
        <span className="text-gray-800 ">{user.name}</span>
      </Link>
      <div className="flex items-center justify-center">
        <span className="flex items-center justify-center w-full h-full p-2 rounded-xl hover:bg-slate-300">
          <p className="flex items-center justify-center w-full">
            <button onClick={handleLogOut}>
              <HiPower />
            </button>
          </p>
        </span>
      </div>
    </div>
  ) : (
    <Link
      href="/login"
      className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
    >
      Enter App
    </Link>
  );
}

export default MeIcon;
