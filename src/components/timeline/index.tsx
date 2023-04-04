'use client'

import { useState } from 'react'
import Link from 'next/link'
import PrettyLink from 'components/pretty_link'
import Divider from 'components/divider'

const Year = ({ children }: { children: React.ReactNode }) => {
	return (
		<h3 className="mb-4 text-lg tracking-tight text-gray-900 underline dark:text-gray-100 md:text-xl">
			{children}
		</h3>
	)
}

const Step = ({
	title,
	children
}: {
	title: string
	children: React.ReactNode
}) => {
	return (
		<li className="mb-4 ml-2">
			<div className="mb-2 flex items-center text-green-700 dark:text-green-300">
				<span className="sr-only">Check</span>
				<svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
					<g
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
						<path d="M22 4L12 14.01l-3-3" />
					</g>
				</svg>
				<p className="font-semibold text-gray-800 dark:text-gray-50">{title}</p>
			</div>
			<p className="ml-6 text-gray-700 dark:text-gray-50">{children}</p>
		</li>
	)
}

const FullTimeline = () => (
	<>
		<Divider />
		<Year>2017</Year>
		<ul>
			<Step title="Joined UON 📹">
				I spent most of my time making grapic & video content for web & social
				channels.
			</Step>

			<Step title="Started Freelancing 💻">
				I started building websites for local businesses and artist, became a
				WordPress fiend.
			</Step>
		</ul>
		<Divider />
		<Year>2016</Year>
		<ul>
			<Step title="Released a Black Metal Album ⚫️">
				Recorded and released an album with friends from university. Take a{' '}
				<a
					href="https://open.spotify.com/album/1wgvp84zCZWMqcYWqvaK5a?si=4x3depeWTxuQ4YEyONeORQ&dl_branch=1"
					className="underline"
				>
					listen
				</a>
				.
			</Step>
			<Step title="Joined Boomerang 🪃">
				A local video game rental comapany, with a national reach. I mainly
				worked on building their social media presence.
			</Step>
		</ul>
		<Divider />

		<Year>2014</Year>
		<ul>
			<Step title="Landed First Job @ Apple Retail 🍎">
				My first job out of University, sold phones, fixed things.
			</Step>

			<Step title="Graduated University 🎓">
				One of my most cherished accomplishments, had some great performances
				and experiences with many great musicians.
			</Step>
		</ul>

		<Divider />
		<Year>2011</Year>
		<ul>
			<Step title="Started University 🎓">
				Started my degree in Music Production @ The University of Northampton.
			</Step>

			<Step title="Finished A-Levels 📖">
				Completed my A-Level studies in Business, Public Services & Music.
			</Step>

			<Step title="Started Learning How To Build Websites 🕸">
				Taught myself all about the web and it&apos;s technologies using
				FreeCodeCamp, CodeAcademy and Youtube.
			</Step>
		</ul>
		<Divider />
		<Year>1999</Year>
		<ul>
			<Step title="First Computer 💾">
				Constant nights of Runescape and being disconnected due to phone calls.
			</Step>
		</ul>
		<Divider />

		<Year>1992</Year>
		<ul>
			<Step title="Born 👶🏼 🍼">I did it!</Step>
		</ul>
	</>
)

export default function Timeline() {
	const [isShowingFullTimeline, showFullTimeline] = useState(false)

	return (
		<>
			<Year>2023</Year>
			<ul>
				<Step title="Promoted to mid-level engineer 💪">
					Still working on some cool stuff at StudentBeans, looking forward to
					the challenges ahead.
				</Step>
			</ul>
			<Year>2022</Year>
			<ul>
				<Step title="Became a mentor">
					Started teaching my skills to others.
				</Step>
				<Step title="Joined StudentBeans  🔵">
					As a Junior Javascript Engineer!!
				</Step>
				<Step title="Started payday.so 🤘🏻">
					I couldn&apos;t find a nice finances app for creatives, so myself and
					a few friends{' '}
					<PrettyLink
						link={{
							text: 'are building it',
							href: 'payday',
							color: 'text-violet-500 dark:text-green-300'
						}}
					/>
					.
				</Step>
			</ul>
			<Divider />
			<Year>2020</Year>
			<ul>
				<Step title="Joined CREATIVEFOLKS 🟠">
					My first full-time role in webdev! I worked on a lot of stuff and you
					can check some of these projects out{' '}
					<Link href="/projects" className="underline">
						here
					</Link>
					.
				</Step>
				<Step title="Pandemic Redundancy 🟣">
					Bit of a bummer, though I spent all of my new-found free time honing
					my coding skills.
				</Step>

				<Step title="Got Really Good At Rocket League 🏎">I will beat you.</Step>
			</ul>
			<Divider />
			<Year>2019</Year>
			<ul>
				<Step title="Joined Willow 🟣">
					Joined Willow Comms as an IT Assistant, split my time between fixing
					machines and coding web apps & games for clients.
				</Step>
				<Step title="Started Learning Next.js ⚛️">
					It&apos;s still my favourite framework, a joy to use.
				</Step>
			</ul>
			{isShowingFullTimeline ? (
				<FullTimeline />
			) : (
				<button
					type="button"
					className="mx-auto my-4 flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100"
					onClick={() => showFullTimeline(true)}
				>
					See More
					<svg
						className="ml-1 h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
			)}
		</>
	)
}
