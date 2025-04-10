import { ToggleButton, WhatWeDoCard } from '@/UI';
import Image from 'next/image';
import React, { FC } from 'react';

export const WhatDoWeDoBlock: FC = () => {
	const content = [
		{
			text: 'Наша компания является одним из самых надежных и доступных поставщиков логистических и складских услуг в Кыргызстане.',
			image: 'images/the-truck.png',
		},
		{
			text: 'Наша компания является одним из самых надежных и доступных поставщиков логистических и складских услуг в Кыргызстане.',
			image: 'images/the-train.png',
		},
		{
			text: 'Наша компания является одним из самых надежных и доступных поставщиков логистических и складских услуг в Кыргызстане.',
			image: 'images/container-ship.png',
		},
	];
	return (
		<div className='container'>
			<div className='flex justify-between pt-[100px]'>
				<span className='h2'>Что мы делаем?</span>
				<ToggleButton
					buttons={['История компании', 'Наша миссия', 'Зарубежные склады']}
					defaultWidth={165}
				/>
			</div>
			<div>
				<WhatWeDoCard />
			</div>
		</div>
	);
};
