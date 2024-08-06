/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.cryptocompare.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "resources.cryptocompare.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
