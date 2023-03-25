import Project from 'components/project'
import SubTitle from 'components/sub_title'
import Link from 'next/link'

const contentful = require('contentful')
import { getPlaiceholder } from 'plaiceholder'


export default async function Projects({ preview }: { preview: boolean }) {
	const data = await getData()

	return (
		<div className="mb-8 w-full">
			<div className="mt-16 flex space-x-4">
				<SubTitle>Projects</SubTitle>
				<Link
					href="/projects"
					className="flex items-center justify-center whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-600 hover:underline dark:text-indigo-300 dark:hover:text-indigo-200"
				>
					View all
					<span> &rarr;</span>
				</Link>
			</div>

			<ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10">
				{data?.map((project: any, index: number) => {
					if (preview && !project.preview) return null
					return <Project item={project} key={index} index={index} />
				})}
			</ul>
		</div>
	)
}

async function getData() {
	const client = contentful.createClient({
		space: process.env.CONTENTFUL_SPACE_ID!,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
	})

	const data = await client
		.getEntries({
			order: '-sys.createdAt',
		})
		.then((projects: any) => {
			return modifyObjects(projects.items)
		})
		.catch((err: any) => console.log(err, 'err'))

	return await data
}

async function modifyObjects(list: []) {
	const modifiedList = list.map(async (item: any) => {
		const { base64, img } = await getPlaiceholder(
			'https://' + item.fields.image.fields.file.url
		)

		return {
			name: item.fields.name,
			href: item.fields.href,
			altText: item.fields.altText,
			image: 'https:' + item.fields.image.fields.file.url,
			blur: base64,
			tags: item.fields.categories,
			preview: item.fields.preview
		}
	})

	const resolvedList = await Promise.all(modifiedList)

	return resolvedList
}
