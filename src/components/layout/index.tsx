import Footer from 'components/footer'
import Navigation from 'components/navigation'
import PropTypes from 'prop-types'
import { Space_Mono } from 'next/font/google'

const mono = Space_Mono({
	subsets: ['latin'],
	weight: ['400', '700']
})

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<body
			className="max-w-4xl antialiased dark:bg-brand 2xl:mx-auto"
			style={mono.style}
		>
			<div className="mb-4 mt-8 flex flex-col px-4 md:mx-4 md:flex-row md:px-20 lg:mx-auto lg:mt-20">
				<Navigation />
				<main className="mt-20 flex w-full flex-col sm:max-w-md lg:mt-0">
					{children}
				</main>
				<Footer />
			</div>
		</body>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}
