'use client';
import { SelectFaq } from '@/UI/select-faq';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import FaqIcon from '../../../public/icons/faq-icon.svg';
import { smart, smart2 } from './constants';

export const FAQ = ({ variant }: { variant: 'red' | 'orange' | 'green' }) => {
	const [activeCategoryId, setActiveCategoryId] = useState<number | null>(1);
	const [activeId, setActiveId] = useState<number | null>(1);
	const [scrollPercent, setScrollPercent] = useState(0);
	const scrollRef = useRef<HTMLDivElement>(null);
	const handleScroll = () => {
		const el = scrollRef.current;
		if (!el) return;

		const scrollTop = el.scrollTop;
		const scrollHeight = el.scrollHeight - el.clientHeight;
		const percent = (scrollTop / scrollHeight) * 100;

		setScrollPercent(percent);
	};

	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;
		el.addEventListener('scroll', handleScroll);
		return () => el.removeEventListener('scroll', handleScroll);
	}, []);

	const activeItem = smart.find((item) => item.id === activeId);
	const activeCategory = smart2.find((item) => item.id === activeCategoryId);

	return (
		<section className='w-full'>
			<div className='flex w-full '>
				<div
					ref={scrollRef}
					className={clsx(
						'flex flex-col gap-4 w-full max-h-[500px]',
						variant !== 'green' && 'overflow-y-auto ',
						' hide-native-scrollbar ',
						'w750:overflow-hidden'
					)}
				>
					{(variant === 'orange' ? smart2 : smart).map((item) => (
						<SelectFaq
							key={item.id}
							variant={variant}
							title={item.title}
							image={item.image}
							description={item?.description}
							isActive={activeId === item.id}
							onClick={() => {
								setActiveId((prev) => (prev === item.id ? null : item.id));
								setActiveCategoryId((prev) => (prev === item.id ? null : item.id));
							}}
						/>
					))}
				</div>
				{/*  */}
				{variant !== 'green' && (
					<div className='w-[40px] w750:hidden h-[500px] bg-gray-200 ml-2 mr-2 relative rounded-full overflow-hidden'>
						<div
							className='absolute left-[3.5px]  w-[12px] bg-orange-500 rounded-full transition-all duration-200'
							style={{
								height: '120px',
								top: `min(calc(${scrollPercent}% + 5px), calc(100% - 120px - 5px))`,
							}}
						/>
					</div>
				)}
				{/*  */}
				<div
					className={clsx(
						'w-full max-w-[558px] ',
						variant === 'orange' ? 'hidden' : '',
						' h-fit border w750:hidden border-gray-300 rounded-lg flex justify-between p-4 shadow-sm items-start gap-4'
					)}
				>
					{activeItem && (
						<p className='text-sm text-gray-600 leading-relaxed'>{activeItem?.description}</p>
					)}
					{variant === 'green' && (
						<Image src={FaqIcon} alt='FaqIcon' className='w-6 h-6 mt-1 shrink-0' />
					)}
				</div>
				{/*  */}
				{variant === 'orange' && (
					<div className='w-full max-w-[650px] w750:hidden border border-border p-4 rounded-[18px]'>
						<div className='grid grid-cols-4 gap-x-[12px] gap-y-[16px]'>
							{activeCategory?.options?.map((brand) => (
								<div
									key={brand.id}
									className='w-full max-w-[170px] h-[60px] border border-border p-1 flex items-center justify-center rounded-[10px]'
								>
									<Image
										src={brand.images}
										alt={brand.titles}
										width={170}
										height={45}
										className='object-contain max-w-full max-h-full'
									/>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};
