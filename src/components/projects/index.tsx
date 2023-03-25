import Project from 'components/project'
import SubTitle from 'components/sub_title'
import Link from 'next/link'

export default async function Projects({
	limit,
	preview
}: {
	limit: number
	preview: boolean
}) {
	const response = await getData()
	const { data } = await response

	return (
		<div className="w-full">
			{preview ? (
				<div className="mt-16 flex space-x-4">
					<SubTitle>Projects</SubTitle>
					<Link
						href="/projects"
						className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
					>
						View all
						<span aria-hidden="true"> &rarr;</span>
					</Link>
				</div>
			) : null}
			<ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10">
				{data?.map((project: any, index: number) => {
					if (index >= limit) return null
					return <Project item={project} key={index} index={index} />
				})}
			</ul>
		</div>
	)
}

async function getData() {
	const res = await fetch(`${process.env.FETCH_URL}/api/projects/get_projects`)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	const response = await res.json()

	return response
}
