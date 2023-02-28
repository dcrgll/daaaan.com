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
				<PlausibleProvider domain="cargill.dev" />
			</head>
			<LayoutWrapper>{children}</LayoutWrapper>
		</html>
	)
}
