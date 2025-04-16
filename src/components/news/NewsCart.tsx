'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Date } from '../../../public/icons';

interface NewsCartProps {
	idx: number;
}

export const NewsCart = ({ idx }: NewsCartProps) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	return (
		<div
			className={`w-full rounded-[16px] bg-white overflow-hidden ${idx === 2 ? 'w950:hidden' : ''}`}
		>
			<div className='w-full h-[200px] rounded-b-[16px] w450:h-[230px] w650:h-[270px] relative overflow-hidden'>
				<Image
					src='/images/new-cart-image.jpg'
					alt='smartex-news-image'
					width={358}
					height={353}
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='w-full mt-6 px-4 pb-4 flex flex-col gap-3'>
				<p className='text-success bodyBold'>Блог</p>
				<h5 className='text-secondary h5 w550:text-[18px]!'>SMARTEX</h5>
				<div className='flex items-center gap-2'>
					<Date width='24px' height='24px'/>
					<p className='bodySmall text-secondary_text text-[13px] leading-[16px]'>1 месяц назад</p>
				</div>
				<p className={`bodyText text-secondary_text ${isExpanded ? "" : "line-clamp-2"}`}>
					Вы можете производить оплату с личного кабинета с помощью Mbank и ELQR :Оплата по QR-коду
					и Mbank через личный
				</p>
				<div className='justify-end mt-3 hidden w650:flex '>
					<button
						className='w-[40%] h-[20px] text-info bodyText underline underline-offset-4'
						onClick={() => setIsExpanded(!isExpanded)}
					>
						{isExpanded ? 'Свернуть' : 'Читать больше'}
					</button>
				</div>
			</div>
		</div>
	);
};
