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
		<body className="dark:bg-gray-800 antialiased max-w-4xl" style={mono.style}>
			<div className="mb-40 flex flex-col md:flex-row md:mx-4 mt-8 md:mt-20 lg:mt-60 lg:mx-auto px-4 md:px-20">
				<Navigation />
				<main className="flex flex-col w-f sm:max-w-md mt-20 lg:mt-0">
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
