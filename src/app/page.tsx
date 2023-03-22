import ContactLinks from 'components/contact_links'
import Content from 'components/content'
import Title from 'components/title'
import { usePlausible } from 'next-plausible'
import Link from 'next/link'

export default function Page(): JSX.Element {
	const plausible = usePlausible()
	return (
		<>
			<Title>Dan Cargill</Title>
			<Content>
				<p>
					Hey, I&apos;m{' '}
					<span className="text-violet-400">
						<strong>Dan</strong>
					</span>
					. I&apos;m a <strong>software developer</strong> currently playing the
					internet at{' '}
					<strong>
						<Link
							href="/studentbeans"
							className="text-teal-400 hover:underline"
						>
							StudentBeans
						</Link>
					</strong>
					.
				</p>

				<p className="mt-4">
					I&apos;m also building{' '}
					<Link
						href="/payday"
						className="font-bold text-red-400 hover:underline plausible-event-name=Payday"
						rel="noopener noreferrer"
						target="_blank"
					>
						Payday
					</Link>
					,{' '}
					<Link
						href="/ayybee"
						className="font-bold text-orange-400 hover:underline plausible-event-name=Ayybee"
						rel="noopener noreferrer"
						target="_blank"
					>
						Ayybee
					</Link>{' '}
					and leaving a trail of half-completed projects behind me.
				</p>
				<ContactLinks />
			</Content>
		</>
	)
}
