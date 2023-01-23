'use client'
import './styles.css'
import PlausibleProvider from 'next-plausible'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<PlausibleProvider domain="daaaan.com">
			<html lang="en">
				<body>{children}</body>
			</html>
		</PlausibleProvider>
	)
}
