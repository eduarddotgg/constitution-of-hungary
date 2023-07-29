'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';

export const Slideshow = () => {
	const slides = [
		{
			id: 1,
			text: 'Büszkék vagyunk arra, hogy Szent István királyunk ezer évvel ezelőtt szilárd alapokra helyezte a magyar államot, és hazánkat a keresztény Európa részévé tette .',
		},
		{
			id: 2,
			text: 'Büszkék vagyunk országunk megmaradásáért, szabadságáért és függetlenségéért küzd ő őseinkre .',
		},
		{
			id: 3,
			text: 'Büszkék vagyunk a magyar emberek nagyszer ű szellemi alkotásaira .',
		},
		{
			id: 4,
			text: 'Büszkék vagyunk arra, hogy népünk évszázadokon át harcokban védte Európát, s tehetségével, szorgalmával gyarapította annak közös értékeit.',
		},
		{
			id: 5,
			text: 'Elismerjük a kereszténység nemzetmegtartó szerepét . Becsüljük országunk különböző vallási hagyományait .',
		},
		{
			id: 6,
			text: 'Ígérjük, hogy megőrizzük az elmúlt évszázad viharaiban részekre szakadt nemzetün k szellemi és lelki egységét . A Magyarországon él ő nemzetiségeket és népcsoportokat a magya r nemzet részének tekintjük .',
		},
		{
			id: 7,
			text: 'Vállaljuk, hogy örökségünket, a magyar kultúrát, egyedülálló nyelvünket, a Kárpát - medence ember alkotta és természet adta értékeit ápoljuk és megóvjuk . Felelősséget viselünk utódainkért, ezért anyagi, szellemi és természeti erőforrásaink gondos felhasználásával védelmezzük az utánunk jövők életfeltételeit.',
		},
		{
			id: 8,
			text: 'Hisszük, hogy nemzeti kultúránk gazdag hozzájárulás az európai egység sokszínűségéhez.',
		},
		{
			id: 9,
			text: 'Tiszteljük más népek szabadságát és kultúráját, együttm űködésre törekszünk a vilá g minden nemzetével.',
		},
		{
			id: 10,
			text: 'Valljuk, hogy az emberi lét alapja az emberi méltóság .',
		},
		{
			id: 11,
			text: 'Valljuk, hogy az egyéni szabadság csak másokkal együttműködve bontakozhat ki.',
		},
		{
			id: 12,
			text:
				'Valljuk, hogy együttélésünk legfontosabb keretei a család és a nemzet, összetartozásun k\n' +
				'alapvető értékei a hűség, a hit és a szeretet .',
		},
		{
			id: 13,
			text:
				'Valljuk, hogy a közösség erejének és minden ember becsületének alapja a munka, az\n' +
				'emberi szellem teljesítménye .',
		},
		{
			id: 14,
			text: 'Valljuk az elesettek és a szegények megsegítésének kötelességét.',
		},
		{
			id: 15,
			text:
				'Valljuk, hogy a polgárnak és az államnak közös célja a jó élet, a biztonság, a rend, a z\n' +
				'igazság, a szabadság kiteljesítése .',
		},
		{
			id: 16,
			text:
				'Valljuk, hogy valódi népuralom csak ott van, ahol az állam szolgálja polgárait, ügyeike t\n' +
				'méltányosan, visszaélés és részrehajlás nélkül intézi .',
		},
	];

	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={1}
			effect={'fade'}
			loop={true}
			autoHeight={true}
			noSwiping={true}
			speed={500}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[Autoplay, EffectFade]}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			className={'w-full'}>
			{slides.map((slide, index) => {
				return (
					<SwiperSlide key={index} className={'bg-white'}>
						<p className={'text-size-32 leading-40 font-700'}>{slide.text}</p>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
