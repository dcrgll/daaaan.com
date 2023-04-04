import Content from 'components/content'
import Title from 'components/title'

export default function Page(): JSX.Element {
	return (
		<>
			<Title>Want a website? sweet, I can build it.</Title>
			<Content>
				<p>
					I&apos;ve worked on a lot of stuff, from{' '}
					<a
						href="https://www.studentbeans.com"
						className="text-red-600 underline"
					>
						web apps that bring in millions every year
					</a>
					,{' '}
					<a
						href="https://casdron.co.uk/"
						className="text-orange-600 underline"
					>
						e-commerce sites that have stood the test of time
					</a>
					,{' '}
					<a
						href="https://creativefolks.co.uk"
						className="text-sky-600 underline"
					>
						design agency things
					</a>
					,{' '}
					<a
						href="https://conjureruk.com"
						className="text-violet-600 underline"
					>
						sites for bands touring the world
					</a>
					,{' '}
					<a
						href="https://www.foodmadegood.org"
						className="text-amber-600 underline"
					>
						lots and lots of corporate <del>bullshit</del> stuff
					</a>
					,{' '}
					<a
						href="https://spotify-app.cargill.dev"
						className="text-green-600 underline"
					>
						tools that help users find new music to enjoy{' '}
					</a>
					and{' '}
					<a href="https://www.cargill.dev" className="text-teal-600 underline">
						silly lil things I like
					</a>
					.
				</p>
				<p className="mt-4">
					I&apos;m happy to build most things though I&apos;m more interesed in
					projects that helps artists, musicians, small businesses and other
					people who are doing cool stuff.
				</p>
				<div>
					<h2 className="mt-8 text-2xl font-bold">FAQ</h2>
					<h3 className="mb-2 mt-4 underline">
						I want a website, how do I get one?
					</h3>
					<p>
						Easy! <br />{' '}
						<a
							href="mailto:dan@cargill.dev"
							className="text-blue-600 underline"
						>
							Send me an email
						</a>{' '}
						and I&apos;ll get back to you asap.
					</p>
					<h3 className="mb-2 mt-4 underline">Why are you doing this?</h3>
					<p>
						I want to <del>make money</del> help people.
					</p>
					<h3 className="mb-2 mt-4 underline">
						Why does this website look bad?
					</h3>
					<p>I promise I&apos;ll spend longer on yours.</p>
				</div>
			</Content>
		</>
	)
}
