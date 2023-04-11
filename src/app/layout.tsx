import './styles.css'
import PlausibleProvider from 'next-plausible'
import LayoutWrapper from 'components/layout'
import { handleTheme } from 'components/dark_mode_toggle/helpers'

export default function Layout({ children }: { children: React.ReactNode }) {
	if (typeof window !== 'undefined') {
		handleTheme()
	}

	return (
		<html lang="en">
			<head>
				<PlausibleProvider domain="cargill.dev" taggedEvents={true} />
			</head>
			<LayoutWrapper>{children}</LayoutWrapper>
		</html>
	)
}

export const metadata = {
	title: 'Dan Cargill Builds Things',
	keywords: ['Dan Cargill', 'React', 'JavaScript', 'Frontend', 'Developer'],
	description: "You're into websites, I'm good at websites.",
	creator: 'Dan Cargill',
	openGraph: {
		title: 'Dan Cargill Builds Things',
		description: "You're into websites, I'm good at websites.",
		url: 'https://cargill.dev',
		siteName: 'Dan Cargill Builds Things',
		images: [
			{
				url: 'https://cargill.dev/daaaan-og.png',
				width: 1920,
				height: 1080
			}
		]
	},
	twitter: {
		title: 'Dan Cargill Builds Things',
		description: "You're into websites, I'm good at websites.",
		creator: '@irnbrute_',
		creatorId: '85074832',
		card: 'summary_large_image',
		siteId: '85074832',
		images: ['https://cargill.dev/daaaan-og.png']
	},
	icons: {
		apple: '/apple-touch-icon.png',
		other: [
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				url: '/favicon-32x32.png'
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				url: '/favicon-16x16.png'
			}
		]
	},
	manifest: '/site.webmanifest'
}
