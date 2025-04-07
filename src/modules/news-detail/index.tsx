import { NewsCart } from '@/components/NewsCart';
import Image from 'next/image';
import React from 'react';
import { Date } from '../../../public/icons';

export const NewsDetail = () => {
	return (
		<div className='container'>
			<div className='py-[60px]'>
				<div className='mt-10 flex flex-col items-center'>
					<div className='w-full flex w950:flex-col-reverse justify-between items-center w950:items-start'>
						<h2 className='h2 w950:text-[28px]! w650:text-[24px]!'>Новости SMARTEX</h2>
					</div>
					<div className={`w-full mt-12 bg-white overflow-hidden`}>
						<div className='w-full h-[420px] w950:h-[380px] w650:h-[300px] relative overflow-hidden'>
							<Image
								src='/images/news-detail-image.svg'
								alt='smartex-news-image'
								fill
								className='object-cover'
								priority
							/>
						</div>
						<div className='w-full mt-6 px-4 pb-4 flex flex-col gap-3'>
							<p className='text-success bodyBold'>Блог</p>
							<div className='flex items-center gap-4 w650:flex-col w650:items-start'>
								<h5 className='text-primary-text h5'>SMARTEX</h5>
								<div className='flex items-center gap-2'>
									<Date />
									<p className='bodySmall text-secondary-text text-[13px] leading-[16px]'>
										1 месяц назад
									</p>
								</div>
							</div>
							<h6 className='h6 text-primary-text'>Новости новости новости?</h6>
							<p className={`bodyText text-secondary-text`}>
								Наш сервис позволяет вам быстро и надежно доставлять посылки из США, Китай и из
								Турции прямо в Кыргызстан.Step into a visual journey that encapsulates the essence
								of my lens. Each photograph in this portfolio is a narrative, a frozen moment in
								time, and a testament to the artistry and passion poured into every frame. Lorem
								Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
								been the industry's standard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into electronic typesetting,
								remaining essentially unchanged. It was popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
						</div>
					</div>
				</div>
				<div className='mt-25 flex flex-col items-center'>
					<div className='w-full flex w950:flex-col-reverse justify-between items-center w950:items-start'>
						<h2 className='h2 w950:text-[28px]! w650:text-[24px]!'>Похожие новости</h2>
					</div>
					<div className='grid grid-cols-3 w950:grid-cols-2 w650:grid-cols-1 mt-12 gap-6'>
						{[1, 2, 3].map((el, index) => (
							<NewsCart key={index} idx={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
