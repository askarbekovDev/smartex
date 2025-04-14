import { NewsCart } from '@/components/news/NewsCart';
import React from 'react';

export const NewsBlock = () => {
	return (
		<div className='container'>
			<div className='pt-[140px] w1150:pt-[120px] w850:pt-[100px] w650:pt-15'>
				<h2 className='sectionTitle text-primary-text'>
					Новости SMARTEX
				</h2>
				<div className='grid grid-cols-3 w950:grid-cols-2 w650:grid-cols-1 mt-12 w950:mt-6 gap-6'>
					{[1, 2, 3].map((el, index) => (
						<NewsCart key={index} idx={index} />
					))}
				</div>
			</div>
		</div>
	);
};
