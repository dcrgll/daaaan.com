'use client'
import './styles.css'
import PlausibleProvider from 'next-plausible'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<PlausibleProvider domain="www.daaaan.com">
			<html lang="en">
				<head>
					<script
						defer
						type="text/javascript"
						src="https://api.pirsch.io/pirsch.js"
						id="pirschjs"
						data-code="TWMlHnQ7OrMA6T7wUJ0Q8XQzMRkfwn8R"
					/>
					<script
						defer
						type="text/javascript"
						src="https://api.pirsch.io/pirsch-events.js"
						id="pirscheventsjs"
						data-code="TWMlHnQ7OrMA6T7wUJ0Q8XQzMRkfwn8R"
					/>
				</head>
				<body>{children}</body>
			</html>
		</PlausibleProvider>
	)
}
