/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Aktifkan ESLint untuk mendeteksi real error
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
    ],
  },
};

export default nextConfig;
