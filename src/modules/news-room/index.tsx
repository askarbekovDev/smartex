import { NewsCart } from '@/components/NewsCart';
import { ToggleButton } from '@/components/ToglleButton';
import React from 'react';

export const NewsRoom = () => {
	return (
		<div className='container'>
			<div className='py-[60px]'>
				<ToggleButton buttons={['Все', 'Последние новости']} defaultWidth={59}/>
				<div className='mt-10'>
					<h2 className='h2 w950:text-[28px]! w650:text-[24px]!'>Новости SMARTEX</h2>
					<div className='grid grid-cols-3 w950:grid-cols-2 w650:grid-cols-1 mt-12 gap-6'>
						{[1, 2, 3, 4, 5, 6].map((el, index) => (
							<NewsCart key={index} idx={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
