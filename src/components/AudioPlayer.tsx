import React, { useState } from 'react'
import ReactPlayer from 'react-player'


type Props = {
	slug: string
	headings: any
}

export const AudioPlayer = ({ slug, headings }: Props) => {
	const [playing, setPlaying] = useState(false)
	const [currentFile, setCurrentFile] = useState(0)

	const scrollToElement = (targetElement: string) => {
		const element = document.getElementById(targetElement);
		const offset = 72;

		if (element) {
			const elementPosition = element.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: elementPosition - offset,
				behavior: 'smooth',
			});
		}
	};

	const onPlay = () => {
		if (playing) {
			setPlaying(!playing)
		} else {
			setPlaying(!playing)
		}
	}

	const onEnded = () => {
		if (currentFile < headings.length - 1) {
			setCurrentFile(currentFile + 1)
			scrollToElement(headings[currentFile + 1].slug)
		} else {
			setPlaying(false)
		}
	}

	return (
		<div className={'fixed left-0 bottom-0 w-full py-48 z-0'}>
			<div className={'container mx-auto px-24'}>
				<button onClick={onPlay}
								title={"lejátszás"}
								className={"bg-gray-900 hover:bg-btnRed flex items-center justify-center text-white h-72 w-72 rounded-24"}>
					{!playing ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
														stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
					>
						<polygon points="5 3 19 12 5 21 5 3"></polygon>
					</svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
													stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
					>
						<rect x="6" y="4" width="4" height="16"></rect>
						<rect x="14" y="4" width="4" height="16"></rect>
					</svg>)

					}
				</button>
				<ReactPlayer url={`/audio/${slug}-${currentFile}.mp3`} playing={playing} onEnded={onEnded} width={0}
										 height={0}/>
			</div>
		</div>
	)
}
