import { HeroSection } from '@/components/HeroSection';
import { MainMenu } from '@/components/MainMenu';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<MainMenu />
			<div className={'main-bg'}>
				<img src={'/bg.png'} />
			</div>
		</main>
	);
}
