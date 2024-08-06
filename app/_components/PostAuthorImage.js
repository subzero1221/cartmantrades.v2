"use client";

import Image from "next/image";

function PostAuthorImage({ user }) {
  return (
    <div>
      <Image
        src={
          user.photo === "default.jpg"
            ? "/default.jpg"
            : `https://drive.google.com/uc?export=view&id=${user.photo}`
        }
        alt={user?.name}
        className="object-cover w-12 h-12 rounded-full"
        width={500}
        height={500}
      />
    </div>
  );
}

export default PostAuthorImage;
