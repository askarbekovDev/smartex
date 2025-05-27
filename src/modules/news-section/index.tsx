'use client';

import { NewsCard } from '@/components/NewsCard';
import { useGetNewsQuery } from '../news-room/api/newsApi';

export const NewsSection = () => {
	const { data, isLoading } = useGetNewsQuery();

	if (isLoading) {
		return <div className='m-auto text-center mt-[100px]'>Загрузка ...</div>;
	}

	return (
		<section className='container'>
			<div className='pt-[140px] w1150:pt-[120px] w850:pt-[100px] w650:pt-15'>
				<h2 className='sectionTitle text-primary_text'>Новости SMARTEX</h2>
				<div className='grid grid-cols-3 w950:grid-cols-2 w650:grid-cols-1 mt-12 w950:mt-6 gap-6'>
					{data?.newsItems.map((el, index) => (
						<NewsCard key={index} item={el} />
					))}
				</div>
			</div>
		</section>
	);
};
