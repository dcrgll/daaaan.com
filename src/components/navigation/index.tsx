'use client'
import NavigationLink from 'components/navigation_link'
import DarkModeToggle from 'components/dark_mode_toggle'
import { usePathname } from 'next/navigation'

const navigationLinks = [
	{
		href: '/',
		label: 'Home'
	},

	{
		href: '/about',
		label: 'About'
	}
]

export default function Navigation() {
	let pathname = usePathname() || '/'

	return (
		<aside className="md:-mx-4 md:w-[150px] md:flex-shrink-0  md:px-0">
			<div className="top-40 flex items-center justify-between space-y-2 md:flex-col md:items-start md:space-y-8 lg:sticky">
				<nav className="sticky flex justify-center space-x-2 sm:mt-[6px] md:flex-col md:justify-start md:space-y-4 md:space-x-0">
					{navigationLinks.map(({ href, label }) => {
						return (
							<NavigationLink href={href} active={pathname === href} key={href}>
								{label}
							</NavigationLink>
						)
					})}
				</nav>
				<DarkModeToggle />
			</div>
		</aside>
	)
}

Navigation.propTypes = {}
