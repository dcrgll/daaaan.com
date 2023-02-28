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
				} max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl pointer-events-auto flex ring-1 ring-black ring-opacity-5 dark:bg-gradient-to-r from-[#DCFCE7] via-[#FCA5A5] to-[#FECACA]`}
			>
				<div className="flex-1 w-0 m-[2px] py-2 px-4 bg-white dark:bg-gray-800 rounded-lg">
					<div className="flex items-center">
						<div className="flex-1">
							<p className="text-sm text-gray-800 dark:text-gray-50">
								Looking to hire me?
							</p>
						</div>
						<div className="flex space-x-4">
							<Link href="/hire-me">
								<span className="bg-gray-100 dark:bg-teal-400 text-gray-800 hover:bg-gray-100 transition duration-300 rounded-md dark:text-gray-50 py-[2px] px-2">
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
