'use client';

import { NewsCard } from '@/components/NewsCard';
import { useGetNewsQuery } from '../news-room/api/newsApi';

export const NewsBlock = () => {
	const { data, isLoading, error } = useGetNewsQuery();

	if (isLoading) {
		return <div className='m-auto text-center mt-[100px]'>Загрузка ...</div>;
	}

	console.log(error, 'error');

	return (
		<div className='container'>
			<div className='py-[100px]'>
				<h2 className='h2 text-primary-text w850:text-[28px]! w850:leading-[30px]! w550:text-[24px]! w550:leading-[26px]!'>
					Новости SMARTEX
				</h2>
				<div className='grid grid-cols-3 w950:grid-cols-2 w650:grid-cols-1 mt-12 w950:mt-6 gap-6'>
					{data?.newsItems.map((el, index) => (
						<NewsCard key={index} item={el} />
					))}
				</div>
			</div>
		</div>
	);
};
