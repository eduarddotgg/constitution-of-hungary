import React from 'react'
import ReactPlayer from 'react-player'

type Props = {
	fileName: string
}

export const AudioPlayer = ({fileName}: Props) => {
	const [playing, setPlaying] = React.useState(false)

	return (
		<div className={'fixed left-0 bottom-0 w-full py-48 z-0'}>
			<div className={'container mx-auto px-24'}>
				<button onClick={() => setPlaying(!playing)}
								title={"lejátszás"}
								className={"bg-gray-900 flex items-center justify-center text-white h-72 w-72 rounded-24"}>
					{!playing ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
													 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
													 >
						<polygon points="5 3 19 12 5 21 5 3"></polygon>
					</svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
													stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
													>
						<rect x="6" y="4" width="4" height="16"></rect>
						<rect x="14" y="4" width="4" height="16"></rect>
					</svg>)

					}
				</button>
				<ReactPlayer url={`/audio/${fileName}.mp3`} playing={playing} style={{ height: 0, width: 0 }} width={0} height={0}/>
			</div>
		</div>
	)
}
