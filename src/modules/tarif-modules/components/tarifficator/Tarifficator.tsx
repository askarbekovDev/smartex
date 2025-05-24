'use client';

import { ProhibitedGoods } from '@/modules/prohibited-goods/components/prohibited-goods/ProhibitedGoods';
import { TariffBlockType } from '@/modules/smartex-team/types';
import { ToggleButton } from '@/UI/ToglleButton';
import { useState } from 'react';
import { ShippingCalculator } from '../shipping-calculator';
import { TarifSection } from '../tarif';
import { WeightCalculation } from '../weight-calculation';

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
