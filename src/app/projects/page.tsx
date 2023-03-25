import ContactLinks from 'components/contact_links'
import Content from 'components/content'
import Title from 'components/title'
import Projects from 'components/projects'
import PrettyLink from 'components/pretty_link'

export default async function Page() {
	return (
		<>
			<Title>Projects</Title>
			<Content>
				<p>
					Here&apos;s a small selection of the projects I&apos;ve worked on over
					the years.
					<br />
					<br />
					{'>'} I&apos;m currently available to{' '}
					<PrettyLink
						link={{
							href: 'hire-me',
							text: 'hire',
							color: 'underline text-gray-800 dark:text-gray-50'
						}}
					/>
					.
				</p>

				{/* @ts-expect-error Server Component */}
				<Projects limit={6} preview={false} />
				<ContactLinks />
			</Content>
		</>
	)
}
