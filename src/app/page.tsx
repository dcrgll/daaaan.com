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
					</strong>
					.
				</p>

				<p className="mt-4">
					I&apos;m also building{' '}
					<PrettyLink
						link={{
							href: 'payday',
							text: 'Payday',
							color: 'text-red-600 dark:text-red-400'
						}}
					/>
					,{' '}
					<PrettyLink
						link={{
							href: 'ayybee',
							text: 'Ayybee',
							color: 'text-blue-700 dark:text-blue-400'
						}}
					/>{' '}
					and leaving a trail of half-completed projects behind me.
				</p>

				{/* @ts-expect-error Server Component */}
				<Projects preview />
				<ContactLinks />
			</Content>
		</>
	)
}
