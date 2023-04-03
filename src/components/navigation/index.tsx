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
	},
	{
		href: '/projects',
		label: 'Projects'
	},
	{
		href: 'https://cv.cargill.dev',
		label: 'CV',
		external: true
	}
]

export default function Navigation() {
	let pathname = usePathname() || '/'

	return (
		<aside className="md:-mx-4 md:w-[150px] md:flex-shrink-0  md:px-0">
			<div className="flex items-center justify-between space-y-2 sm:top-40 md:sticky md:flex-col md:items-start md:space-y-8 lg:top-60">
				<nav className="sticky flex justify-center space-x-2 sm:mt-[6px] md:flex-col md:justify-start md:space-x-0 md:space-y-4">
					{navigationLinks.map(({ href, label, external }) => {
						return (
							<NavigationLink
								key={href}
								href={href}
								active={pathname === href}
								external={external}
							>
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
