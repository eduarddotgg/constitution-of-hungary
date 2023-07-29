'use client';
import { Container } from '@/components/Container';
import { RiSearchLine } from 'react-icons/ri';
import { Slideshow } from '@/components/Slideshow';

export const HeroSection = () => {
	return (
		<div className="flex flex-col justify-center h-screen min-h-480">
			<Container>
				<div className={'flex flex-col justify-center gap-48 max-w-680 mx-auto'}>
					<Slideshow />
					<div>
						<form>
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
									<RiSearchLine size={24} />
								</button>
							</div>
						</form>
					</div>
				</div>
			</Container>
		</div>
	);
};
