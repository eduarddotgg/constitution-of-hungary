import { Container } from '@/components/Container';

export const Header = () => {
	return (
		<header className="flex items-center justify-center py-24 w-full fixed top-0 left-0">
			<Container>
				<div className={'flex items-center justify-between gap-24'}>
					<h1 className="text-size-16 font-700">Magyarország Alaptörvénye</h1>
					<a
						href="/"
						target={'_blank'}
						className={
							'bg-gray-900 text-white flex items-center justify-center h-72 w-72 rounded-24 p-12 font-700'
						}>
						PDF
					</a>
				</div>
			</Container>
		</header>
	);
};
