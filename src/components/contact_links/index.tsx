import PropTypes from 'prop-types'

const contactLinks = [
	{
		href: 'mailto:dan@cargill.dev',
		text: 'Email',
		color: 'text-red-400'
	},
	{
		href: 'https://www.linkedin.com/in/dcrgll',
		text: 'LinkedIn',
		color: 'text-blue-400'
	},
	{
		href: 'https://github.com/dcrgll',
		text: 'Github',
		color: 'text-gray-400'
	},
	{
		href: 'https://discord.com/users/243843255928750090',
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
							<a
								href={link.href}
								className={`font-bold hover:underline ${link.color}`}
							>
								{link.text}
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

ContactLinks.propTypes = {}
