'use client'
import './styles.css'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
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
	)
}
