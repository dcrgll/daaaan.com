import ContactLinks from 'components/contact_links'
import Content from 'components/content'
import Title from 'components/title'

export default function Page(): JSX.Element {
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
						<a
							href="https://studentbeans.com"
							className="text-teal-400 hover:underline"
						>
							StudentBeans
						</a>
					</strong>
					.
				</p>

				<p className="mt-4">
					I&apos;m also building{' '}
					<a
						href="https://www.payday.so"
						className="font-bold text-red-400 hover:underline"
					>
						Payday
					</a>
					,{' '}
					<a
						href="https://www.ayybee.xyz"
						className="font-bold text-orange-400 hover:underline"
					>
						Ayybee
					</a>{' '}
					and leaving a trail of half-completed projects behind me.
				</p>
				<ContactLinks />
			</Content>
		</>
	)
}
