/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
  },
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  experimental: {
    appDir: true,
  }
}
