/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true
	}
}

module.exports = withPlausibleProxy({
	domain: 'www.daaaan.com',
	customDomain: 'https://analytics.cargill.dev'
})(nextConfig)
