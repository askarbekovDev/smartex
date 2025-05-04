'use client';
import { ToggleButton } from '@/UI';
import Image from 'next/image';
import { useState } from 'react';
import { FAQ } from '../main-faq-modules';
import { smart2 } from '../main-faq-modules/constants';
import { IntroBlockTarif } from './bg';
import CategorySelectStyled from './components';

export const SmartexShops = () => {
	const [content, setContent] = useState<WhatWeDoBlockContType>('История компании');
	const [activeCategoryId, setActiveCategoryId] = useState<string>('Авто запчасти');
	const [state, setState] = useState('США');
	const activeItem = smart2.find((item) => item.title === activeCategoryId);
	return (
		<div className='py-10'>
			<div className='mb-10'>
				<IntroBlockTarif />
			</div>
			<div className='flex justify-between my-8 pt-[100px] w1050:pt-15 w1050:flex-col-reverse w850:pt-20'>
				<h2 className='sectionTitle w1050:pt-10'>Магазины SMARTEX</h2>
				<ToggleButton
					buttons={['История компании', 'Наша миссия', 'Зарубежные склады'] as const}
					setState={setContent}
				/>
			</div>
			<div className='w750:hidden'>
				<FAQ variant='orange' />
			</div>
			<div className='hidden w750:block w-full'>
				<CategorySelectStyled onClick={setActiveCategoryId} />
			</div>
			<div className='hidden w750:block'>
				<div className='grid mt-4 grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))] gap-4 rounded-[18px] w-full'>
					{activeItem?.options.map((item) => (
						<div
							key={item.id}
							className='h-[60px] flex items-center justify-center border border-border rounded-[10px] bg-white shadow-sm'
						>
							<Image
								src={item.images}
								alt='brand'
								width={100}
								height={40}
								className='object-contain max-w-full max-h-full'
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
