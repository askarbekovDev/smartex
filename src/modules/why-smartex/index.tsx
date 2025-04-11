import { WhySmartexCard } from '@/components/why-smartex/why-smartext-card';
import React from 'react';

const data = [
	{
		image: '/images/why-smartex-alien1.png',
		description:
			'Мы оперативно доставляем ваши посылки из Китая, Турции и США в Кыргызстан, соблюдая сроки и гарантируя сохранность груза.',
	},
	{
		image: '/images/why-smartex-alien2.png',
		description:
			'Мы предлагаем конкурентоспособные цены на международную доставку, помогая вам экономить без потери качества услуг.',
	},
	{
		image: '/images/why-smartex-alien3.png',
		description:
			'Отслеживайте посылку на каждом этапе пути. Полная прозрачность доставки позволяет вам быть уверенными в безопасности вашего груза.',
	},
	{
		image: '/images/why-smartex-alien4.png',
		description:
			'Простой и понятный калькулятор тарифов, удобные пункты выдачи и гибкие условия доставки делают сотрудничество с нами комфортным.',
	},
    {
		image: '/images/why-smartex-alien5.png',
		description:
			'Наша служба поддержки всегда на связи и готова ответить на любые ваши вопросы в любое время суток.',
	},
];

export const WhySmartex = () => {
	return (
		<div className='container'>
			<div className='relative pt-[100px] w850:pt-[60px] w650:pt-[86px]'>
				<div className='max-w-1/2 w1050:max-w-full'>
					<h2 className='h2 text-primary-text w850:text-[28px]! w850:leading-[30px]! w550:text-[24px]! w550:leading-[26px]!'>
                        Почему Smartex?
					</h2>
				</div>
				<div className='pt-[58px] w1150:pt-[40px] w550:pt-[28px] grid grid-cols-5 w1150:grid-cols-3 w750:grid-cols-2 w550:grid-cols-1 gap-4 w1150:gap-6 w550:gap-10'>
					{data.map((el, index) => (
						<WhySmartexCard key={index} el={el}/>
					))}
				</div>
			</div>
		</div>
	);
};
