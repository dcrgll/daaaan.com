import Footer from 'components/footer'
import Navigation from 'components/navigation'
import PropTypes from 'prop-types'
import { Space_Mono } from 'next/font/google'

import Notification from 'components/notification'
import Marquee from 'components/marquee'

const mono = Space_Mono({
	subsets: ['latin'],
	weight: ['400', '700']
})

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<body className="max-w-4xl antialiased dark:bg-gray-800" style={mono.style}>
			<div className="mb-40 mt-8 flex flex-col px-4 md:mx-4 md:mt-20 md:flex-row md:px-20 lg:mx-auto lg:mt-60">
				<Navigation />
				<main className="w-f mt-20 flex flex-col sm:max-w-md lg:mt-0">
					{children}
					<Footer />
				</main>
			</div>
			<Marquee />
		</body>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}
