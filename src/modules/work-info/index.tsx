import { WorkStepCard } from '@/components/work/WorkStepCard';
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

export const WorkInfo = () => {
	return (
		<div className='container'>
			<div className='relative py-[100px]'>
				<div className='max-w-1/2'>
					<h2 className='h2 text-primary-text w850:text-[28px]! w850:leading-[30px]! w550:text-[24px]! w550:leading-[26px]!'>
						Как SMARTEX помогает своим клиентам?
					</h2>
					<p className='bodyText text-secondary-text mt-3'>
						Наш сервис позволяет вам быстро и надежно доставлять посылки из США, Китая и Турции
						прямо в Кыргызстан. Мы делаем покупки за границей удобными и доступными для вас!
					</p>
				</div>
				<div className='pt-[56px] grid grid-cols-4 w1050:grid-cols-2 w550:grid-cols-1 gap-6'>
					{data.map((el, index) => (
						<WorkStepCard key={index} el={el} index={index} />
					))}
				</div>
				<div className='w-full border-[1px] mt-[56px] border-border border-dashed'></div>
			</div>
		</div>
	);
};

// import { WorkStepCard } from '@/components/work/WorkStepCard';
// import React from 'react';

// const data = [
// 	{
// 		image: '/images/alien-first-step.jpg',
// 		title: 'Оформление заказа',
// 		description:
// 			'Выбираете товары в интернет-магазинах США, Европы или Турции и оформляете заказ, используя наш склад в качестве адреса доставки.',
// 	},
// 	{
// 		image: '/images/alien-second-step.jpg',
// 		title: 'Поступление на склад',
// 		description:
// 			'После оформления заказа посылка поступает на наш склад, где мы проверяем её, объединяем с другими заказами (если нужно) и готовим к отправке.',
// 	},
// 	{
// 		image: '/images/alien-third-step.jpg',
// 		title: 'Упаковка и отправка',
// 		description:
// 			'После проверки и объединения заказов мы бережно упаковываем посылку и отправляем её в Кыргызстан надёжной службой доставки.',
// 	},
// 	{
// 		image: '/images/alien-fourth-step.jpg',
// 		title: 'Доставка и получение',
// 		description:
// 			'Через 5–7 дней посылка прибудет в Бишкек. Вы можете забрать её в пункте выдачи или заказать доставку до двери.',
// 	},
// ];

// export const WorkInfo = () => {
// 	return (
// 		<div className='container'>
// 			<div className='relative py-[100px]'>
// 				<div className='max-w-1/2'>
// 					<h2 className='h2 text-primary-text w850:text-[28px]! w850:leading-[30px]! w550:text-[24px]! w550:leading-[26px]!'>
// 						Как SMARTEX помогает своим клиентам?
// 					</h2>
// 					<p className='bodyText text-secondary-text mt-3'>
// 						Наш сервис позволяет вам быстро и надежно доставлять посылки из США, Китая и Турции
// 						прямо в Кыргызстан. Мы делаем покупки за границей удобными и доступными для вас!
// 					</p>
// 				</div>
// 				<div className='pt-[56px] grid grid-cols-4 w1050:grid-cols-2 gap-6'>
// 					{data.map((el, index) => (
// 						<WorkStepCard key={index} el={el} index={index} />
// 					))}
// 				</div>
// 				<div className='w-full border-[1px] mt-[56px] border-border border-dashed'></div>
// 				<div className='pt-[56px] grid grid-cols-4 w1050:grid-cols-2 gap-6'>
// 					{data.map((el, index) => (
// 						<div className='w-full flex flex-col flex-1 min-h-[118px] mt-[113px] border-border border-[1px] rounded-[16px] text-center px-5 py-6'>
// 							<h6 className='h6 text-primary-text'>{el.title}</h6>
// 							<p className='bodyText text-secondary-text mt-3 flex-grow'>{el.description}</p>{' '}
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

