import ContactLinks from 'components/contact_links'
import Content from 'components/content'
import Title from 'components/title'
import Projects from 'components/projects'
import PrettyLink from 'components/pretty_link'

export default function Page(): JSX.Element {
	return (
		<>
			<Title>Dan Cargill</Title>
			<Content>
				<p>
					Hey, I&apos;m{' '}
					<span className="text-indigo-600 dark:text-indigo-300">
						<strong>Dan</strong>
					</span>
					. I&apos;m a <strong>software developer</strong> currently playing the
					internet at{' '}
					<strong>
						<PrettyLink
							link={{
								href: 'studentbeans',
								text: 'StudentBeans',
								color: 'text-violet-700 dark:text-violet-400'
							}}
						/>
					</strong>{' '}
					and building {''}
					<PrettyLink
						link={{
							href: 'payday',
							text: 'Payday',
							color: 'text-red-600 dark:text-red-400'
						}}
					/>
					.
				</p>

				<p className="mt-4">
					When not knee deep in javascript, I can be found{' '}
					<PrettyLink
						link={{
							href: 'soundcloud',
							text: 'writing music',
							color: 'text-blue-600 dark:text-blue-400'
						}}
					/>{' '}
					and{' '}
					<PrettyLink
						link={{
							href: 'instagram',
							text: 'travelling',
							color: 'text-green-600 dark:text-green-400'
						}}
					/>
					.
				</p>

				{/* @ts-expect-error Server Component */}
				<Projects preview />
				<ContactLinks />
			</Content>
		</>
	)
}
