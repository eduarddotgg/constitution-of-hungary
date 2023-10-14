import { useEffect, useState } from "react";
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = [
	"Büszkék vagyunk arra, hogy Szent István királyunk ezer évvel ezelőtt szilárd alapokra helyezte a magyar államot, és hazánkat a keresztény Európa részévé tette.",
	"Büszkék vagyunk országunk megmaradásáért, szabadságáért és függetlenségéért küzd ő őseinkre.",
	"Büszkék vagyunk a magyar emberek nagyszer ű szellemi alkotásaira.",
	"Büszkék vagyunk arra, hogy népünk évszázadokon át harcokban védte Európát, tehetségével, szorgalmával gyarapította annak közös értékeit.",
	"Elismerjük a kereszténység nemzetmegtartó szerepét. Becsüljük országunk különböző vallási hagyományait.",
	// "Ígérjük, hogy megőrizzük az elmúlt évszázad viharaiban részekre szakadt nemzetünk szellemi és lelki egységét. A Magyarországon él ő nemzetiségeket és népcsoportokat a magyar nemzet részének tekintjük.",
	// "Vállaljuk, hogy örökségünket, a magyar kultúrát, egyedülálló nyelvünket, a Kárpát - medence ember alkotta és természet adta értékeit ápoljuk és megóvjuk. Felelősséget viselünk utódainkért, ezért anyagi, szellemi és természeti erőforrásaink gondos felhasználásával védelmezzük az utánunk jövők életfeltételeit.",
	"Hisszük, hogy nemzeti kultúránk gazdag hozzájárulás az európai egység sokszínűségéhez.",
	"Tiszteljük más népek szabadságát és kultúráját, együttm űködésre törekszünk a vilá g minden nemzetével.",
	"Valljuk, hogy az emberi lét alapja az emberi méltóság.",
	"Valljuk, hogy az egyéni szabadság csak másokkal együttműködve bontakozhat ki.",
	"Valljuk, hogy együttélésünk legfontosabb keretei a család és a nemzet, összetartozásunk alapvető értékei a hűség, a hit és a szeretet.",
	"Valljuk, hogy a közösség erejének és minden ember becsületének alapja a munka, az emberi szellem teljesítménye.",
	"Valljuk az elesettek és a szegények megsegítésének kötelességét.",
	"Valljuk, hogy a polgárnak és az államnak közös célja a jó élet, a biztonság, a rend, az igazság, a szabadság kiteljesítése.",
	"Valljuk, hogy valódi népuralom csak ott van, ahol az állam szolgálja polgárait, ügyeiket méltányosan, visszaélés és részrehajlás nélkül intézi.",
];
export const Slider = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(
			() => {
				setIndex((index: number) => index + 1)
			},
			12000, // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<div className="slider absolute left-0 bottom-0 w-full mb-120">
			<h1 className={'text-size-20 sm:text-size-28 md:text-size-36 lg:text-size-44 leading-28 sm:leading-36 md:leading-44 lg:leading-52 font-800'}>
					<TextTransition springConfig={presets.slow}>{TEXTS[index % TEXTS.length]}</TextTransition>
			</h1>
		</div>
	)
}
