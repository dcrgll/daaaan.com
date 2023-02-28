import PropTypes from 'prop-types'
export default function Title({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="text-4xl font-bold text-left w-full dark:text-gray-50">
			{children}
		</h1>
	)
}

Title.propTypes = {}
