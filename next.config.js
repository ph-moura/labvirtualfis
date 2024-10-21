/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  //output: 'standalone',
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // basePath: '/labvirtualfis',
  // assetPrefix: '/labvirtualfis',
}

module.exports = nextConfig
