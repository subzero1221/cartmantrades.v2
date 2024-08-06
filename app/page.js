import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold text-center text-gray-800">
        Dive into crypto - Your adventure in digital finance begins here.
      </h1>
      <img src="/icon.png" alt="Placeholder" className="h-64 w-76" />
      <p className="max-w-3xl mt-4 text-lg text-center text-gray-600">
        At Cartman Trades, we are dedicated to simplifying the world of
        cryptocurrency. Our platform offers cutting-edge insights, tools, and
        resources to help you navigate the digital finance landscape. Whether
        you&apos;re a seasoned trader or a newcomer, join us to unlock the
        future of finance with confidence.
      </p>
      <Link
        href="/cryptos"
        className="flex items-center justify-center px-4 py-2 mt-5 text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1"
      >
        Start exploring
      </Link>
    </div>
  );
}
