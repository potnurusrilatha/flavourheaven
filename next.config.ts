/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        pathname: '/images/category/*',
      },
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        pathname: '/images/media/meals/*',
      },
    ],
  },
}

module.exports = nextConfig