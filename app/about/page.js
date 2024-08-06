export default function About() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl px-6 mx-auto">
        <h1 className="mb-8 text-4xl font-extrabold text-center text-gray-900">
          About CryptoMaster
        </h1>
        <p className="mb-8 text-lg text-gray-700">
          Welcome to CryptoMaster, your go-to source for real-time
          cryptocurrency data and analysis. Our platform is dedicated to
          providing you with accurate information and powerful tools to help you
          navigate the crypto market with confidence.
        </p>
        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Our Mission
          </h2>
          <p className="mb-4 text-gray-700">
            Our mission is to simplify cryptocurrency investment through
            innovative technology and user-centric design. We aim to make crypto
            accessible to everyone, regardless of experience level.
          </p>
        </div>
        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Our Vision
          </h2>
          <p className="mb-4 text-gray-700">
            We envision a world where cryptocurrency investment is
            straightforward and transparent, enabling users to make informed
            decisions and achieve their financial goals.
          </p>
        </div>
        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Core Values
          </h2>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Integrity</li>
            <li>Transparency</li>
            <li>User-Centricity</li>
          </ul>
        </div>
        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Meet the Team
          </h2>
          <p className="mb-4 text-gray-700">
            Our team of experts is passionate about blockchain technology and
            dedicated to delivering the best tools and resources for our users.
            [Brief team introductions here].
          </p>
        </div>
        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Our Journey
          </h2>
          <p className="mb-4 text-gray-700">
            Since our launch in 2020, CryptoMaster has grown rapidly, reaching
            over 1 million users worldwide. We’re committed to continual
            improvement and innovation.
          </p>
        </div>
        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Partnerships
          </h2>
          <p className="mb-4 text-gray-700">
            We are proud to collaborate with industry leaders like [Partner
            Name] to enhance our offerings and provide exclusive features.
          </p>
        </div>
        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Contact Us
          </h2>
          <p className="mb-4 text-gray-700">
            Have questions? Feel free to{" "}
            <a
              href="mailto:contact@cryptomaster.com"
              className="text-blue-500 hover:underline"
            >
              email us
            </a>{" "}
            or visit our{" "}
            <a href="/contact" className="text-blue-500 hover:underline">
              Contact Us
            </a>{" "}
            page.
          </p>
          <p className="text-gray-700">
            Stay connected and follow us on [Social Media Links].
          </p>
        </div>
      </div>
    </section>
  );
}
