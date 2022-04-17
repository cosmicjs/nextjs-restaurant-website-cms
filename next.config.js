/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
        formats: ['image/avif', 'image/webp'],
        domains: [ 'imgix.cosmicjs.com' ],
        loader: 'imgix',
    },
}

module.exports = nextConfig
