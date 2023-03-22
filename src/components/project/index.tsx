import Image from 'next/image'
import PrettyLink from 'components/pretty_link'

export default function Project({
	item
}: {
	item: {
		id: number
		name: string
		category: string
		href: string
		imageSrc: string
		imageAlt: string
	}
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
			<p className="mb-2 text-sm text-gray-500">{item.category}</p>
			<div className="aspect-w-4 aspect-h-3 image-frame overflow-hidden rounded-lg bg-gray-50 transition dark:bg-gray-900">
				<Image
					src={item.imageSrc}
					alt={item.imageAlt}
					className="object-cover object-center"
					width={1360}
					height={1020}
				/>
				<div className="flex items-end p-4" aria-hidden="true">
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
