export const toDarkMode = () => {
	updateTheme('dark')
}

export const toLightMode = () => {
	updateTheme('light')
}

export const toSystemMode = () => {
	updateTheme('system')
}

export const updateTheme = (theme: string) => {
	if (!('theme' in localStorage)) {
		localStorage.theme = 'system'
	}

	localStorage.theme = theme
	handleTheme()
}

export const handleTheme = () => {
	switch (window.localStorage.getItem('theme')) {
		case 'system':
			if (window.matchMedia('(prefers-color-scheme: dark').matches) {
				document.documentElement.classList.add('dark')
			} else {
				document.documentElement.classList.remove('dark')
			}
			break
		case 'dark':
			document.documentElement.classList.add('dark')
			break
		case 'light':
			document.documentElement.classList.remove('dark')
			break
	}
}
