import { NewsCart } from '@/components/news/NewsCart';
import React from 'react';

export const NewsBlock = () => {
	return (
		<div className='container'>
			<div className='py-[100px]'>
				<h2 className='h2 w850:text-[28px]! w850:leading-[30px]! w550:text-[24px]! w550:leading-[26px]!'>Новости SMARTEX</h2>
				<div className='grid grid-cols-3 w950:grid-cols-2 w650:grid-cols-1 mt-12 w950:mt-6 gap-6'>
					{[1, 2, 3].map((el, index) => (
						<NewsCart key={index} idx={index}/>
					))}
				</div>
			</div>
		</div>
	);
};
