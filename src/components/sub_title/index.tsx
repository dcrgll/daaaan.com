export default function SubTitle({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="w-full text-left text-2xl font-bold dark:text-gray-50">
			{children}
		</h2>
	)
}
