import Link from 'next/link'

export default function Marquee() {
	const Item = ({ item, href }: { item: string; href: string }) => {
		return (
			<Link href={href}>
				<span className="mx-4 hover:underline">{item}</span>
			</Link>
		)
	}

	const renderItems = () => {
		return [...Array(5)].map((_, i) => {
			return <Item key={i} item="Need a developer?" href="/hire-me" />
		})
	}

	return (
		<div className="fixed bottom-0 w-full">
			<div className="relative flex overflow-x-hidden bg-gradient-to-r from-[#DCFCE7] via-[#FCA5A5] to-[#FECACA]">
				<div className="animate-marquee whitespace-nowrap py-2">
					{renderItems()}
				</div>

				<div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2">
					{renderItems()}
				</div>
			</div>
		</div>
	)
}

Marquee.propTypes = {}
