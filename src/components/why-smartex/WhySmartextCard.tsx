import Image from 'next/image';
import React from 'react';
import { WhySmartexCardProps } from './why-smartext.types';

export const WhySmartexCard = ({ el }: WhySmartexCardProps) => {
	return (
		<div className='w-full flex flex-col h-full'>
			<div className='relative w-full h-[212px] w1150:h-[270px] w950:h-[220px] w750:h-[270px] w650:h-[250px] w550:h-[450px] w450:h-[374px]'>
				<Image
					src={el.image}
					alt='smartex-our-work-alien'
					fill
					className='w-full h-full object-cover'
				/>
				<div className='absolute h-[78px] w1150:h-[90px] w950:h-[73px] w750:h-[84px]  w550:h-[120px] w450:h-[113px] border-[1px] border-border border-dashed -bottom-[70px] w1150:-bottom-[75px] w950:-bottom-[67px] w750:-bottom-[74px]  w550:-bottom-[90px]  w450:-bottom-[88px] left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2'></div>
			</div>
			<div className='w-full flex flex-col flex-1 mt-[30px] border-border border-[1px] rounded-[16px] text-center px-[11px] py-4'>
				<p className='bodySmall leading-[18px]!  w550:text-[16px]! w550:leading-[20px]! text-primary-text flex-grow'>{el.description}</p>{' '}
			</div>
		</div>
	);
};
