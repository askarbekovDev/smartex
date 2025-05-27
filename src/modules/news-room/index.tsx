'use client';

import { NewsCard } from '@/components/NewsCard';
import { Pagination } from '@/UI/Pagination';
import { ToggleButton } from '@/UI/ToglleButton';
import { useGetNewsQuery } from './api/newsApi';

export const NewsRoom = () => {
	const { data, isLoading, error } = useGetNewsQuery();

	if (isLoading) {
		return <div className='m-auto text-center mt-[100px]'>Загрузка ...</div>;
	}

	console.log(error, 'error roror');

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
						{data?.newsItems.map((el) => (
							<NewsCard key={el.id} item={el} />
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
