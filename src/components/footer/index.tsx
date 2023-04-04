import PrettyLink from 'components/pretty_link'

export default function Footer() {
	return (
		<footer className="mx-auto mt-8 w-full sm:hidden">
			<div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
				<ul
					className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0"
					role="list"
				>
					{links.map((link, i) => {
						return (
							<li key={i} role="listitem">
								<PrettyLink
									link={{
										href: link.href,
										text: link.name,
										color: 'text-gray-800 dark:text-gray-50 font-medium'
									}}
								/>
							</li>
						)
					})}
				</ul>
				<span className="flex items-center space-x-1">
					<span>©</span>
					<span>2023</span>
					<span>Dan Cargill</span>
				</span>
			</div>
		</footer>
	)
}

const links = [
	{
		name: 'Home',
		href: ''
	},
	{
		name: 'Projects',
		href: 'projects'
	},
	{
		name: 'About',
		href: 'about'
	}
]
