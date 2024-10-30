/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withVercelToolbar = require('@vercel/toolbar/plugins/next')()
// Instead of module.exports = nextConfig, do this:
module.exports = withVercelToolbar(nextConfig)
