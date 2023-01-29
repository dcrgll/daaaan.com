/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible')

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true
	}
}

module.exports = withPlausibleProxy()(nextConfig)
