import { Container } from '@/components/Container';

export const MainMenu = () => {
	const link =
		'flex bg-gray-900 text-size-24 font-700 text-white hover:text-gray-700 p-24 rounded-24 transition-all';

	return (
		<div className="py-144 min-h-680">
			<Container>
				<nav className={'max-w-680 mx-auto'}>
					<ul className={'flex flex-col gap-24'}>
						<li>
							<a href="#" className={link}>
								Alapvetés
							</a>
						</li>
						<li>
							<a href="#" className={link}>
								Fejezet 1. Általános rendelkezések.
							</a>
						</li>
						<li>
							<a href="#" className={link}>
								Fejezet 2. Az Országgyűlés.
							</a>
						</li>
						<li>
							<a href="#" className={link}>
								Fejezet 3. A köztársasági elnök.
							</a>
						</li>
						<li>
							<a href="#" className={link}>
								Fejezet 3. A köztársasági elnök.
							</a>
						</li>
						<li>
							<a href="#" className={link}>
								Fejezet 3. A köztársasági elnök.
							</a>
						</li>
						<li>
							<a href="#" className={link}>
								Fejezet 3. A köztársasági elnök.
							</a>
						</li>
						<li>
							<a href="#" className={link}>
								Fejezet 3. A köztársasági elnök.
							</a>
						</li>
						<li>
							<a href="#" className={link}>
								Fejezet 3. A köztársasági elnök.
							</a>
						</li>
						<li>
							<a href="#" className={link}>
								Fejezet 3. A köztársasági elnök.
							</a>
						</li>
					</ul>
				</nav>
			</Container>
		</div>
	);
};
