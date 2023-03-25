import Image from 'next/image'
import PrettyLink from 'components/pretty_link'

export default function Project({
	item,
	index
}: {
	item: {
		id: number
		name: string
		tags: string[]
		href: string
		image: string
		altText: string
		blur: string
	}
	index: number
}) {
	return (
		<li className="group relative">
			<div className="mb-1 flex items-center justify-between space-x-8 text-base font-medium text-gray-800 dark:text-gray-50">
				<PrettyLink
					link={{
						href: item.href,
						text: item.name,
						color: 'text-gray-800 dark:text-gray-50'
					}}
				/>
			</div>

			<ul className="mb-2 flex space-x-2 text-sm text-gray-600 dark:text-gray-400">
				{item?.tags?.map((tag, i) => {
					return (
						<li key={tag}>
							{tag}
							{i === item.tags.length - 1 ? '' : ', '}
						</li>
					)
				})}
			</ul>
			<div className="aspect-w-4 aspect-h-3 image-frame overflow-hidden rounded-lg bg-gray-50 transition dark:bg-gray-900">
				<Image
					src={item.image}
					alt={item.altText}
					className="transition-300 object-cover object-center"
					width={1360}
					height={1020}
					placeholder="blur"
					blurDataURL={item.blur}
					priority={index === 0 ? true : false}
				/>

				<div className="flex items-end">
					<div className="text-gray-90 w-full rounded-md bg-opacity-75 py-2 px-4 text-center text-sm font-medium dark:text-gray-50">
						<PrettyLink
							link={{
								href: item.href,
								text: 'View Project',
								color: 'text-gray-800 dark:text-gray-50'
							}}
						/>
					</div>
				</div>
			</div>
		</li>
	)
}
