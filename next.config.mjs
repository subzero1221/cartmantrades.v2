/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.cryptocompare.com",
      "resources.cryptocompare.com",
      "drive.google.com",
    ], // Add your allowed image domains here
  },
};

export default nextConfig;
