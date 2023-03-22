import Project from 'components/project'
import SubTitle from 'components/sub_title'
import Link from 'next/link'

export default function Projects({
	limit,
	preview
}: {
	limit: number
	preview: boolean
}) {
	return (
		<div className="w-full">
			{preview ? (
				<div className="mt-16 flex space-x-4">
					<SubTitle>Projects</SubTitle>
					<Link
						href="/projects"
						className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
					>
						View all
						<span aria-hidden="true"> &rarr;</span>
					</Link>
				</div>
			) : null}
			<ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10">
				{items.map((project, index) => {
					if (index >= limit) return null
					return <Project item={project} key={project.id} />
				})}
			</ul>
		</div>
	)
}

const items = [
	{
		id: 1,
		name: 'Payday',
		category: 'Next, Tailwind, Firebase',
		href: 'payday',
		imageSrc: '/images/projects/payday.png',
		imageAlt:
			'Payday is an app that helps you manage your money, set goals and save money.'
	},
	{
		id: 2,
		name: 'One Planet Plate',
		category: 'NextJS, Tailwind, Contentful',
		href: 'one-planet-plate',
		imageSrc: '/images/projects/one-planet-plate.png',
		imageAlt:
			'One Planet Plate is a worldwide restaurant campaign to address the inherent problems in our food system, and we’re calling on you to join the collective movement to vote with your fork.'
	},
	{
		id: 3,
		name: 'Casdron',
		category: 'React, Shopify',
		href: 'casdron',
		imageSrc: '/images/projects/casdron.png',
		imageAlt:
			'Lithofin is renowned in the industry for its scientifically advanced products that clean, protect and maintain stone and tiles in great condition. Casdron Enterprises Limited has been the sole distributor of Lithofin products in the UK and Ireland since 1988.'
	}
]
