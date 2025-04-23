'use client';

import { ToggleButton } from '@/UI';
import React, { FC, useState } from 'react';
import { AllPickUpPoints } from './components';
import { OrderPickUpContentType } from './types';

export const OrderPickUp: FC = () => {
	const [content, setContent] = useState<OrderPickUpContentType>('Пункты выдачи');

	const sectionTitle =
		content === 'Пункты выдачи'
			? 'Пункты выдачи заказов'
			: content === 'Бесплатная доставка'
			? 'Бесплатная доставка по \nБишкеку'
			: 'Бесплатная доставка от \nSMARTEX';

	return (
		<section className='container'>
			<div className='flex justify-between pt-[100px] w1050:pt-15 w1050:flex-col-reverse w850:pt-20'>
				<h2 className='sectionTitle pr-2 whitespace-pre-line w1050:pt-10'>{sectionTitle}</h2>
				<ToggleButton
					buttons={['Пункты выдачи', 'Бесплатная доставка', 'Условия для доставки'] as const}
					defaultWidth={145}
					setState={setContent}
				/>
			</div>
			<div className='pt-17 w1150:pt-10 w850:pt-6'>
				<AllPickUpPoints content={content}/>
				{/* <OurTeam content={content} />
				<OurEmployees content={content} />
				<SocialResponsibility content={content} /> */}
			</div>
		</section>
	);
};
