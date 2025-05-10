'use client';

import { ToggleButton } from '@/UI';
import React, { useState } from 'react';
import { TarifSection } from '../tarif';
import { ProhibitedGoods } from '@/modules';
import { WeightCalculation } from '../weight-calculation';
import { TariffBlockType } from '@/modules/smartex-team/types';
import { ShippingCalculator } from '../shipping-calculator';

export const Tarifficator = () => {
	const [content, setContent] = useState<TariffBlockType>('Тарифы');

	return (
		<section className='container'>
			<div className='pt-[60px] w650:pt-[80px]'>
				<div className='flex justify-between w1050:flex-col-reverse'>
					<h2 className='sectionTitle w1050:pt-10'>{content}</h2>
					<ToggleButton
						buttons={['Тарифы', 'Калькулятор', 'Рассчет веса'] as const}
						setState={setContent}
					/>
				</div>
				{content === 'Тарифы' && (
					<>
						<TarifSection />
						<ProhibitedGoods />
					</>
				)}
				{content === 'Калькулятор' && (
					<>
						<ShippingCalculator />
					</>
				)}
				{content === 'Рассчет веса' && (
					<>
						<WeightCalculation />
					</>
				)}
			</div>
		</section>
	);
};
