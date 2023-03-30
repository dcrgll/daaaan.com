import PropTypes from 'prop-types'
import Link from 'next/link'

export default function NavigationLink({
	children,
	href,
	active,
	prefetch = true
}: {
	children: React.ReactNode
	href: string
	active?: boolean
	prefetch?: boolean
}) {
	return (
		<Link href={href} prefetch={prefetch}>
			<span
				className={`px-[10px] py-[5px] ${
					active ? 'bg-gray-100 text-gray-800 ' : 'dark:text-gray-50'
				} rounded-md transition duration-300 hover:bg-gray-100  dark:hover:text-gray-800`}
			>
				{children}
			</span>
		</Link>
	)
}

NavigationLink.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string.isRequired,
	active: PropTypes.bool
}
