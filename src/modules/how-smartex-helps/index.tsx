import { HowSmartexHelpsCard } from '@/components/how-smartex-helps/HowSmartexHelpsCard';
import React from 'react';

const data = [
	{
		image: '/images/alien-first-step.jpg',
		title: 'Оформление заказа',
		description:
			'Выбираете товары в интернет-магазинах США, Европы или Турции и оформляете заказ, используя наш склад в качестве адреса доставки.',
	},
	{
		image: '/images/alien-second-step.jpg',
		title: 'Поступление на склад',
		description:
			'После оформления заказа посылка поступает на наш склад, где мы проверяем её, объединяем с другими заказами (если нужно) и готовим к отправке.',
	},
	{
		image: '/images/alien-third-step.jpg',
		title: 'Упаковка и отправка',
		description:
			'После проверки и объединения заказов мы бережно упаковываем посылку и отправляем её в Кыргызстан надёжной службой доставки.',
	},
	{
		image: '/images/alien-fourth-step.jpg',
		title: 'Доставка и получение',
		description:
			'Через 5–7 дней посылка прибудет в Бишкек. Вы можете забрать её в пункте выдачи или заказать доставку до двери.',
	},
];

export const HowSmartexHelps = () => {
	return (
		<div className='container'>
			<div className='relative pt-[100px] w850:pt-[60px] w650:pt-[86px]'>
				<div className='max-w-1/2 w1050:max-w-full'>
					<h2 className='sectionTitle text-primary-text'>Как SMARTEX помогает своим клиентам?</h2>
					<p className='bodyText text-secondary-text mt-3'>
						Наш сервис позволяет вам быстро и надежно доставлять посылки из США, Китая и Турции
						прямо в Кыргызстан. Мы делаем покупки за границей удобными и доступными для вас!
					</p>
				</div>
				<div className='pt-[56px] w1050:pt-10  w650:pt-[24px] grid grid-cols-4 w1050:grid-cols-2 w650:grid-cols-1 gap-6 w650:gap-10'>
					{data.map((el, index) => (
						<HowSmartexHelpsCard key={index} el={el} index={index} />
					))}
				</div>
			</div>
		</div>
	);
};
