import PropTypes from 'prop-types'
export default function Title({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="w-full text-left text-4xl font-bold dark:text-gray-50">
			{children}
		</h1>
	)
}

Title.propTypes = {}
