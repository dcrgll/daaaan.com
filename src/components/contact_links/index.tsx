import Link from 'next/link'

const contactLinks = [
	{
		href: '/email',
		text: 'Email',
		color: 'text-red-400'
	},
	{
		href: '/linkedin',
		text: 'LinkedIn',
		color: 'text-blue-400'
	},
	{
		href: '/github',
		text: 'Github',
		color: 'text-gray-400'
	},
	{
		href: '/discord',
		text: 'Discord',
		color: 'text-purple-400'
	}
]

export default function ContactLinks() {
	return (
		<div className="mt-4 border-t-2 border-gray-100">
			<p className="mt-4">Get in touch</p>
			<ul className="mt-4 flex justify-between">
				{contactLinks.map(link => {
					return (
						<li key={link.text}>
							<Link
								href={link.href}
								className={`font-bold hover:underline ${link.color}`}
								rel="noopener noreferrer"
								target="_blank"
							>
								{link.text}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

ContactLinks.propTypes = {}
