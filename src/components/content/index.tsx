import PropTypes from 'prop-types'
export default function Content({ children }: { children: React.ReactNode }) {
	return <div className="mt-8 flex flex-col dark:text-gray-50">{children}</div>
}

Content.propTypes = {
	children: PropTypes.node.isRequired
}
