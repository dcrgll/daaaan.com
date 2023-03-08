'use client'

import { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import Link from 'next/link'

export default function Notification() {
	useEffect(() => {
		toast.custom(t => (
			<div
				className={`${
					t.visible ? 'animate-enter' : 'animate-leave'
				} pointer-events-auto flex w-full max-w-md rounded-xl bg-white from-[#DCFCE7] via-[#FCA5A5] to-[#FECACA] shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:bg-gradient-to-r`}
			>
				<div className="m-[2px] w-0 flex-1 rounded-lg bg-white py-2 px-4 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="flex-1">
							<p className="text-sm text-gray-800 dark:text-gray-50">
								Looking to hire me?
							</p>
						</div>
						<div className="flex space-x-4">
							<Link href="/hire-me">
								<span className="rounded-md bg-gray-100 py-[2px] px-2 text-gray-800 transition duration-300 hover:bg-gray-100 dark:bg-teal-400 dark:text-gray-50">
									Hire me
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		))
	})

	return (
		<Toaster
			position="bottom-right"
			toastOptions={{
				duration: Infinity
			}}
		/>
	)
}

Notification.propTypes = {}
