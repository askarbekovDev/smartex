import Image from 'next/image';
import React from 'react';
import { Date } from '../../public/icons';

interface NewsCartProps {
	idx: number;
}

export const NewsCart = ({ idx }: NewsCartProps) => {
	return (
		<div
			className={`w-full rounded-[16px] bg-white overflow-hidden ${idx === 2 ? 'w950:hidden' : ''}`}
		>
			<div className='w-full h-[200px] w650:h-[300px] relative overflow-hidden'>
				<Image
					src='/images/news-cart-image.svg'
					alt='smartex-news-image'
					fill
					className='object-cover'
					priority
				/>
			</div>
			<div className='w-full mt-6 px-4 pb-4 flex flex-col gap-3'>
				<p className='text-success bodyBold'>Блог</p>
				<h5 className='text-secondary h5'>SMARTEX</h5>
				<div className='flex items-center gap-2'>
					<Date />
					<p className='bodySmall text-secondary-text text-[13px] leading-[16px]'>1 месяц назад</p>
				</div>
				<p className='bodySmall text-secondary-text'>
					Вы можете производить оплату с личного кабинета с помощью Mbank и ELQR :Оплата по QR-коду
					и Mbank через личный
				</p>
			</div>
		</div>
	);
};
