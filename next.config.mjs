/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io'
      }
    ]
  }
};

export default nextConfig;

// import { defineConfig } from 'next';

// const nextConfig = {
//   images: {
//     domains: ['utfs.io'],
//   },
// };

// export default nextConfig;
// import pkg from 'next';
// const { defineConfig } = pkg;
// const nextConfig = {
//   images: {
//     domains: ['utfs.io'],

//   },
// };

// export default (nextConfig);
