'use client'
import './styles.css'
import PlausibleProvider from 'next-plausible'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<PlausibleProvider
					domain="www.daaaan.com"
					customDomain="https://analytics.cargill.dev"
					selfHosted
				/>
			</head>
			<body>{children}</body>
		</html>
	)
}
