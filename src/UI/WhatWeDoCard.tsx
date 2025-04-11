import React, { FC } from 'react';
import { AlienCardEmoji } from '../../public/icons';
import Image from 'next/image';

type WhatWeDoCardProps = {
	title: string;
	text: string;
	image: string;
};

export const WhatWeDoCard: FC<WhatWeDoCardProps> = ({ title, text, image }) => {
	return (
		<div
			className='relative max-w-[364px] w-full h-[364px] bg-white overflow-hidden border-1 border-border rounded-2xl
    w1350:h-[354px] w1150:h-[344px] w1050:h-[334px] w950:h-[287px] w750:h-[310px] w750:w-[48%] w650:h-[290px] w550:w-full w550:h-[360px]'
		>
			<div className='p-5 pb-3 w950:p-3 w950:pb-1 w550:p-5 w550:pb-2'>
				<AlienCardEmoji />
			</div>
			<div className='bodyText px-4 w1150:text-[15px]! w950:text-[14px]! w950:px-2.5 w550:px-5 w550:text-[16px]!'>
				<p className='bodyBold pb-1'>{title}</p>
				{text}
			</div>
			<div className='absolute bottom-0'>
				<Image
					className='w-full h-full object-cover'
					alt='Card img'
					src={image}
					width={364}
					height={254}
				/>
			</div>
		</div>
	);
};
