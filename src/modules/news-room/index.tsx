'use client';

import { NewsCard } from '@/components/NewsCard';
import { Pagination } from '@/UI/Pagination';
import { ToggleButton } from '@/UI/ToglleButton';
import { useEffect } from 'react';

export const NewsRoom = () => {
	// Пример из useEffect или сервера
	useEffect(() => {
		fetch('/api/news')
			.then((res) => res.json())
			.then((data) => {
				console.log('News:', data);
			});
	}, []);

	return (
		<div className='container'>
			<div className='pt-[100px] w850:pt-[60px] w650:pt-[86px]'>
				<div className='mt-10 flex flex-col items-center'>
					<div className='w-full flex w950:flex-col-reverse justify-between items-center w950:items-start'>
						<h2 className='sectionTitle text-primary_text'>Новости SMARTEX</h2>
						<div className='w950:pb-10'>
							<ToggleButton buttons={['Все', 'Последние новости']} />
						</div>
					</div>
					<div className='grid grid-cols-3 w950:grid-cols-2 w650:grid-cols-1 mt-12 w950:mt-6 gap-6'>
						{[1, 2, 3, 4, 5, 6].map((el, index) => (
							<NewsCard key={index} idx={index} />
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
