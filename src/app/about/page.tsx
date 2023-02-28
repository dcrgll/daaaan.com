import ContactLinks from 'components/contact_links'
import Content from 'components/content'
import Title from 'components/title'

export default function Page(): JSX.Element {
	return (
		<>
			<Title>About</Title>

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
				<ContactLinks />
			</Content>
		</>
	)
}
