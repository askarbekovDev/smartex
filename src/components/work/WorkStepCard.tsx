import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface IElement {
	image: string;
	title: string;
	description: string;
}

interface WorkStepCardProps {
	index: number;
	el: IElement;
}

export const WorkStepCard = ({ el, index }: WorkStepCardProps) => {
	return (
		<div className='w-full flex flex-col h-full'>
			<div className='relative w-full h-[267px] w850:h-[300px] w1050:h-[450px]'>
				<Image src={el.image} alt='smartex-our-work-alien' fill className='absoloute w-full h-full object-cover' />
				<div className='absolute h-[100px] w1050:h-[150px] border-[1px] border-border border-dashed -bottom-[90px] w1050:-bottom-[123px] left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2'></div>
				<div className='absolute flex justify-center items-center w-[65px] h-[33px] rounded-[90px] font-roboto text-[12px] text-primary font-normal leading-[140%] bg-white border-[2px] border-success -bottom-[90px] left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 z-10'>
					Шаг {index + 1}
				</div>
				<div
					className={clsx(
						'absolute w-full w1050:w-full border-[1px] border-border border-dashed -bottom-[60px] left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2',
						{
							'w-full': index === 0,
							'left-[47%] w1050:left-1/2': index !== 0,
						}
					)}
				></div>
			</div>
			<div className='w-full flex flex-col flex-1 min-h-[118px] mt-[113px] border-border border-[1px] rounded-[16px] text-center px-5 py-6'>
				<h6 className='h6 text-primary-text'>{el.title}</h6>
				<p className='bodyText text-secondary-text mt-3 flex-grow'>{el.description}</p>{' '}
			</div>
		</div>
	);
};
