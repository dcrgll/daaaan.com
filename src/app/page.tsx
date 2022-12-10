'use client'

export default function Page(): JSX.Element {
	return (
		<div className="h-screen w-screen flex  items-center flex-col px-6 sm:px-16 py-16 sm:max-w-lg mx-auto">
			<h1 className="text-4xl font-bold">
				Want a website? sweet, I can build it.
			</h1>
			<div className="mt-8">
				<p>
					I&apos;ve worked on a lot of stuff, from{' '}
					<a
						href="https://www.studentbeans.com"
						className="underline text-red-400"
					>
						web apps that bring in millions every year
					</a>
					,{' '}
					<a
						href="https://casdron.co.uk/"
						className="underline text-orange-400"
					>
						e-commerce sites that have stood the test of time
					</a>
					,{' '}
					<a
						href="https://creativefolks.co.uk"
						className="underline text-sky-400"
					>
						design agency things
					</a>
					,{' '}
					<a
						href="https://conjureruk.com"
						className="underline text-violet-400"
					>
						sites for bands touring the world
					</a>
					,{' '}
					<a
						href="https://www.foodmadegood.org"
						className="underline text-amber-400"
					>
						lots and lots of corporate <del>bullshit</del> stuff
					</a>
					,{' '}
					<a
						href="https://spotify-app.cargill.dev"
						className="underline text-green-400"
					>
						tools that help users find new music to enjoy{' '}
					</a>
					and{' '}
					<a href="https://www.cargill.dev" className="underline text-teal-400">
						silly lil things I like
					</a>
					.
				</p>
				<p className="mt-4">
					I&apos;m happy to build most things though I&apos;m more interesed in
					projects that helps artists get paid. If your project is for a
					corporation don&apos;t complain if I charge you more. If we&apos;re
					pals I&apos;ll charge you less.
				</p>
				<div>
					<h2 className="font-bold mt-8 text-2xl">FAQ</h2>
					<h3 className="underline mt-4">
						I want a website, how do I get one?
					</h3>
					<p>
						Easy! <br />{' '}
						<a
							href="mailto:dan@cargill.dev"
							className="underline text-blue-400"
						>
							Send me an email
						</a>{' '}
						and I&apos;ll get back to you asap.
					</p>
					<h3 className="underline mt-4">Why are you doing this?</h3>
					<p>
						I&apos;m going to be bored over christmas and want to{' '}
						<del>make money</del> help people.
					</p>
					<h3 className="underline mt-4">Why does this website look bad?</h3>
					<p>It doesn&apos;t.</p>
				</div>
			</div>
		</div>
	)
}
