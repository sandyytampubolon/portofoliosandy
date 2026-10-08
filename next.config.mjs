/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
    // Memperingatkan ESLint agar tidak menghentikan build jika ada error
    ignoreDuringBuilds: true,
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
  
