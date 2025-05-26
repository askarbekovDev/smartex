'use client';
import { New } from '@/modules/news-room/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Date } from '../../public/icons';

type NewsCardProps = {
	item: New;
};

export const NewsCard = ({ item }: NewsCardProps) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const handleExpand = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		e.stopPropagation();
		setIsExpanded(!isExpanded);
	};

	return (
		<Link
			href={'/news/1'}
			className={`w-full rounded-[16px] bg-white overflow-hidden ${
				item.id === 2 ? 'w950:hidden' : ''
			}`}
		>
			<div className='w-full h-[200px] rounded-b-[16px] w450:h-[230px] w650:h-[270px] relative overflow-hidden'>
				<Image
					src='/images/new-cart-image.jpg'
					// src={item.img}
					alt='smartex-news-image'
					width={358}
					height={353}
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='w-full mt-6 px-4 pb-4 flex flex-col gap-3'>
				<p className='text-success bodyBold'>Блог</p>
				<h5 className='h5 text-secondary text-base w550:text-[18px]! line-clamp-2'>{item.title}</h5>
				<div className='flex items-center gap-2'>
					<Date width='24px' height='24px' />
					<p className='bodySmall text-secondary_text text-[13px] leading-[16px]'>{item.date}</p>
				</div>
				<p className={`bodyText text-secondary_text ${isExpanded ? '' : 'line-clamp-2'}`}>
					{item.text}
				</p>
				<div className='justify-end mt-3 hidden w650:flex '>
					<button
						className='w-[40%] h-[20px] text-info bodyText underline underline-offset-4'
						onClick={(e) => handleExpand(e)}
					>
						{isExpanded ? 'Свернуть' : 'Читать больше'}
					</button>
				</div>
			</div>
		</Link>
	);
};
