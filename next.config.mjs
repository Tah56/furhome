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
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
  
     
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        pathname: '/**',
  
     
      },
    ],
  },
};

export default nextConfig;
