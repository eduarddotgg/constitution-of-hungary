import React from "react";
import { useEffect, useState } from "react";

export const Slider = ({texts}: any) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(
			() => {
				setIndex((prevIndex) => (prevIndex + 1) % texts.length);
			},
			16000
		);
		return () => clearTimeout(intervalId);
	}, [texts]);

	return (
		<div className="slider absolute left-0 bottom-0 w-full mb-120">
			{texts.map((text: string, i: number) => {
				return (
					<h1
						key={i}
						className={`${i === index ? 'opacity-100': 'opacity-0'} text-size-20 sm:text-size-28 md:text-size-36 lg:text-size-44 leading-28 sm:leading-36 md:leading-44 lg:leading-52 font-800 w-full absolute bottom-0 transition-all`}>
						{text}
					</h1>
				)
			})}
		</div>
	)
}
