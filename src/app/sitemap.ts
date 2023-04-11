export default function sitemap() {
	const routes = ['', '/about', '/projects', '/hire-me'].map(route => ({
		url: `https://cargill.dev${route}`,
		lastModified: new Date().toISOString().split('T')[0]
	}))

	return [...routes]
}
