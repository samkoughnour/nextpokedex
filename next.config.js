/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/pokemon',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['raw.githubusercontent.com']
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
