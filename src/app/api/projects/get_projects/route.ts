import { NextResponse } from 'next/server'
const contentful = require('contentful')
import { getPlaiceholder } from 'plaiceholder'

export async function GET() {
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

	return await NextResponse.json({ data })
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
