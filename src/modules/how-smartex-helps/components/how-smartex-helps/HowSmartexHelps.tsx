import React from 'react';
import { HowSmartexHelpsCard, SMARTEX_HELPS } from '../..';

export const HowSmartexHelps = () => {
	return (
		<div className='container'>
			<div className='relative pt-[100px] w850:pt-[60px] w650:pt-[86px]'>
				<div className='max-w-1/2 w1050:max-w-full'>
					<h2 className='sectionTitle text-primary_text'>Как SMARTEX помогает своим клиентам?</h2>
					<p className='bodyText text-secondary_text mt-3'>
						Наш сервис позволяет вам быстро и надежно доставлять посылки из США, Китая и Турции
						прямо в Кыргызстан. Мы делаем покупки за границей удобными и доступными для вас!
					</p>
				</div>
				<div className='pt-[56px] w1050:pt-10  w650:pt-[24px] grid grid-cols-4 w1050:grid-cols-2 w650:grid-cols-1 gap-6 w650:gap-10'>
					{SMARTEX_HELPS.map((el, index) => (
						<HowSmartexHelpsCard key={index} el={el} index={index} />
					))}
				</div>
			</div>
		</div>
	);
};
