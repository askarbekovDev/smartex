'use client';
import { SelectFaq } from '@/UI/select-faq';
import Image from 'next/image';
import { useState } from 'react';
import FaqIcon from '../../../public/icons/faq-icon.svg';
import { smart } from './constants';

export const FAQ = ({ variant }: { variant: 'red' | 'orange' | 'green' }) => {
	const [activeId, setActiveId] = useState<number | null>(1);

	const activeItem = smart.find((item) => item.id === activeId);
	return (
		<section className='w-full'>
			<div className='flex w-full '>
				<div className='flex flex-col gap-4 w-full'>
					{smart.map((item) => (
						<SelectFaq
							key={item.id}
							variant={variant}
							title={item.title}
							image={item.image}
							description={item.description}
							isActive={activeId === item.id}
							onClick={() => setActiveId(activeId === item.id ? null : item.id)}
						/>
					))}
				</div>
				<div className='w-[10px] h-full bg-red-500'></div>
				<div className='w-full max-w-[558px] h-fit border w750:hidden border-gray-300 rounded-lg flex justify-between p-4 shadow-sm items-start gap-4'>
					{activeItem ? (
						<p className='text-sm text-gray-600 leading-relaxed'>{activeItem?.description}</p>
					) : (
						<p>Что за вопрос вас инетересуют</p>
					)}
					{variant === 'green' && (
						<Image src={FaqIcon} alt='FaqIcon' className='w-6 h-6 mt-1 shrink-0' />
					)}
				</div>
			</div>
		</section>
	);
};
