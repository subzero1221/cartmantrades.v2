import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-red-600">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mb-8 text-gray-600">
          The page you’re looking for doesn’t exist or has been moved. Please
          check the URL or return to the homepage.
        </p>
        <Link
          href="/"
          className="px-6 py-3 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
           Go to Homepage
        </Link>
      </div>
    </div>
  );
}
