/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.rawg.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
      },
    ],
  },
};

export default nextConfig;
