import ContactLinks from 'components/contact_links'
import Content from 'components/content'
import Timeline from 'components/timeline'
import Title from 'components/title'

export default function Page(): JSX.Element {
	return (
		<>
			<Title>About</Title>

			<Content>
				<Timeline />
				<ContactLinks />
			</Content>
		</>
	)
}
