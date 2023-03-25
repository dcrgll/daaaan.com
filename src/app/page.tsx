import ContactLinks from 'components/contact_links'
import Content from 'components/content'
import Title from 'components/title'
import Projects from 'components/projects'
import PrettyLink from 'components/pretty_link'
import SubTitle from 'components/sub_title'

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
						<PrettyLink
							link={{
								href: 'studentbeans',
								text: 'StudentBeans',
								color: 'text-teal-400'
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
							color: 'text-red-400'
						}}
					/>
					,{' '}
					<PrettyLink
						link={{
							href: 'ayybee',
							text: 'Ayybee',
							color: 'text-orange-400'
						}}
					/>{' '}
					and leaving a trail of half-completed projects behind me.
				</p>

				{/* @ts-expect-error Server Component */}
				<Projects limit={3} preview />
				<ContactLinks />
			</Content>
		</>
	)
}
