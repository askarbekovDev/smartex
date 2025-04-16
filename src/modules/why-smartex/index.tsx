import { WhySmartexCard } from '@/components/why-smartex/why-smartext-card';
import { whySmartexContent } from '@/utils/constants';
import React from 'react';

export const WhySmartex = () => {
	return (
		<div className='container'>
			<div className='relative pt-[100px] w850:pt-[60px] w650:pt-[86px]'>
				<div className='max-w-1/2 w1050:max-w-full'>
					<h2 className='sectionTitle text-primary_text'>Почему Smartex?</h2>
				</div>
				<div className='pt-[58px] w1150:pt-[40px] w550:pt-[28px] grid grid-cols-5 w1150:grid-cols-3 w750:grid-cols-2 w550:grid-cols-1 gap-4 w1150:gap-6 w550:gap-10'>
					{whySmartexContent.map((el, index) => (
						<WhySmartexCard key={index} el={el} />
					))}
				</div>
			</div>
		</div>
	);
};
