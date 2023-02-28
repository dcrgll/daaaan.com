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
		<aside className="md:w-[150px] md:flex-shrink-0 md:-mx-4  md:px-0">
			<div className="lg:sticky top-40 flex md:flex-col space-y-2 md:space-y-8 justify-between items-center md:items-start">
				<nav className="flex md:flex-col sm:mt-[6px] sticky md:space-y-4 space-x-2 md:space-x-0 justify-center md:justify-start">
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
