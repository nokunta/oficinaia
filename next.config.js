/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/oficinaia',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig


