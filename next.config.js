/** @type {import('next').NextConfig} */
const nextConfig = {
  // @note: les 3 paramètres suivants génèrent une erreur lors
  // du build (dû aux routes dynamiques).
  // cf. https://github.com/vercel/next.js/issues/49059
  // output: 'export',
  // trailingSlash: true,
  // distDir: 'dist',
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    appDir: true
  },
}

module.exports = nextConfig
