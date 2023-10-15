import React from "react"
// import { Search as SearchIcon } from 'astro-feather-icons'

export const Search = () => {

	const onSubmit = (value: any) => {
		console.log(value)
	}

	return (
		<form onSubmit={onSubmit} noValidate>
			<div className={'flex w-full relative'}>
				<input
					type="text"
					className={
						'text-size-16 border border-gray-100 focus:border-gray-900 h-72 w-full rounded-24 pl-24 pr-64 py-12 transition-all'
					}
				/>
				<button
					title={'Search'}
					className={
						'bg-gray-900 flex items-center justify-center text-white h-72 w-72 rounded-24 absolute top-0 right-0'
					}>
					{/*<SearchIcon/>*/}
				</button>
			</div>
		</form>
	)
}
