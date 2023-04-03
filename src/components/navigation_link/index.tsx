import PropTypes from 'prop-types'
import Link from 'next/link'

export default function NavigationLink({
	children,
	href,
	active,
	external = false
}: {
	children: React.ReactNode
	href: string
	active?: boolean
	external?: boolean
}) {
	if (external) {
		return (
			<a href={href}>
				<span
					className={`px-[10px] py-[5px] ${
						active ? 'bg-gray-100 text-gray-800 ' : 'dark:text-gray-50'
					} rounded-md transition duration-300 hover:bg-gray-100  dark:hover:text-gray-800`}
				>
					{children}
				</span>
			</a>
		)
	}
	return (
		<Link href={href}>
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
