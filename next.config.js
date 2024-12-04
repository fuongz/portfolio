/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

const withVercelToolbar = require('@vercel/toolbar/plugins/next')()
// Instead of module.exports = nextConfig, do this:
module.exports = withVercelToolbar(nextConfig)
