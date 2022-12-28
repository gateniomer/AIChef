// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   swcMinify: true,
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  // config
  basePath: isProd ? '/AIChef':undefined,
  assetPrefix: isProd ? 'https://gateniomer.github.io/AIChef/' : undefined,
})
