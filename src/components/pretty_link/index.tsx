'use client'

import { default as NextLink } from 'next/link'
import { usePlausible } from 'next-plausible'

export default function PrettyLink({
	link
}: {
	link: { href: string; text: string; color: string }
}) {
	const plausible = usePlausible()

	const url = link.text === 'View Project' ? link.text : link.href

	return (
		<NextLink href={`/${link.href}`} legacyBehavior prefetch={false}>
			<a
				onClick={() => plausible(`Click: ${url}`)}
				className={`font-bold hover:underline ${link.color}`}
				rel="noopener noreferrer"
				target="_blank"
			>
				{link.text}
			</a>
		</NextLink>
	)
}
