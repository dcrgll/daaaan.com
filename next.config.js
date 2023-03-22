/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible')

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true
	},
	async redirects() {
		return [
			{
				source: '/studentbeans',
				destination: 'https://studentbeans.com',
				permanent: true
			},
			{
				source: '/payday',
				destination: 'https://www.payday.so',
				permanent: true
			},
			{
				source: '/ayybee',
				destination: 'https://www.ayybee.xyz',
				permanent: true
			},
			{
				source: '/discord',
				destination: 'https://discord.com/users/243843255928750090',
				permanent: true
			},
			{
				source: '/github',
				destination: 'https://github.com/dcrgll',
				permanent: true
			},
			{
				source: '/linkedin',
				destination: 'https://www.linkedin.com/in/dcrgll',
				permanent: true
			},
			{
				source: '/email',
				destination: 'mailto:dan@cargill.dev',
				permanent: true
			},
			{
				source: '/casdron',
				destination: 'https://casdron.co.uk',
				permanent: false
			},
			{
				source: '/one-planet-plate',
				destination: 'https://www.oneplanetplate.org',
				permanent: false
			}
		]
	}
}

module.exports = withPlausibleProxy()(nextConfig)
