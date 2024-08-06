"use client";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Error({ error }) {
  toast.error(error.message);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-red-600">Error</h1>
        <p className="mt-4 text-center text-gray-700">
          {error.message || "Something went wrong. Please try again later."}
        </p>
        <div className="mt-6 text-center">
          <Link href="/">
            <p className="text-blue-500 hover:underline">Go back to Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
