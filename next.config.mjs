/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',

     
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '/**',

     
      },
    ],
  },
};

export default nextConfig;
