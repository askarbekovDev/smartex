import { NewsCart } from '@/components/news/NewsCart';
import { Pagination, ToggleButton } from '@/UI';
import React from 'react';

export const NewsRoom = () => {
	return (
		<div className='container'>
			<div className='pt-[100px] w850:pt-[60px] w650:pt-[86px]'>
				<div className='mt-10 flex flex-col items-center'>
					<div className='w-full flex w950:flex-col-reverse justify-between items-center w950:items-start'>
						<h2 className='sectionTitle text-primary_text'>Новости SMARTEX</h2>
						<div className='w950:pb-10'>
							<ToggleButton buttons={['Все', 'Последние новости']} defaultWidth={59} />
						</div>
					</div>
					<div className='grid grid-cols-3 w950:grid-cols-2 w650:grid-cols-1 mt-12 w950:mt-6 gap-6'>
						{[1, 2, 3, 4, 5, 6].map((el, index) => (
							<NewsCart key={index} idx={index} />
						))}
					</div>
					<div className='mt-10'>
						<Pagination />
					</div>
				</div>
			</div>
		</div>
	);
};
