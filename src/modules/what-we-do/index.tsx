import { ToggleButton, WhatWeDoCard } from '@/UI';
import Image from 'next/image';
import React, { FC } from 'react';

export const WhatWeDoBlock: FC = () => {
	const content = [
		{
			text: 'Наша компания является одним из самых надежных и доступных поставщиков логистических и складских услуг в Кыргызстане.',
			image: '/images/the-truck.png',
		},
		{
			text: 'Наша компания является одним из самых надежных и доступных поставщиков логистических и складских услуг в Кыргызстане.',
			image: '/images/the-train.png',
		},
		{
			text: 'Наша компания является одним из самых надежных и доступных поставщиков логистических и складских услуг в Кыргызстане.',
			image: '/images/container-ship.png',
		},
	];
	return (
		<div className='container'>
			<div className='flex justify-between pt-[100px] w1050:pt-15 w1050:flex-col-reverse w850:pt-20 bg-green-00'>
				<span className='h2 w1050:pt-10 w1050:text-[32px]! w850:text-[28px]! w850:leading-[30px]!'>Что мы делаем?</span>
				<ToggleButton
					buttons={['История компании', 'Наша миссия', 'Зарубежные склады']}
					defaultWidth={165}
				/>
			</div>
			<div className='flex items-center justify-between w-full gap-6 pt-10 w850:gap-4 w750:flex-wrap w750:justify-center w750:pt-6'>
				{content.map((el, idx) => (
					<WhatWeDoCard text={el.text} image={el.image} key={idx} />
				))}
			</div>
		</div>
	);
};
