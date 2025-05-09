'use client';
import { SelectFaq } from '@/UI/select-faq';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import FaqIcon from '../../../public/icons/faq-icon.svg';
import { smart } from './constants';

export const FAQ = ({ variant }: { variant: 'red' | 'orange' | 'green' }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(0);
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

	const activeItem = smart.find((item) => item.id === activeIndex);

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
					{smart.map((item, index) => {
						return (
							<SelectFaq
								key={item.id}
								variant={variant}
								index={index}
								title={item.title}
								image={item.image}
								isActive={activeIndex === item.id}
								scrollPercent={scrollPercent}
								setActiveIndex={setActiveIndex}
							/>
						);
					})}
				</div>
				<div
					className={clsx(
						'w-full max-w-[558px] ',
						variant === 'green' && 'ml-4',
						' h-fit border w750:hidden border-gray-300 rounded-lg flex justify-between p-4 shadow-sm items-start gap-4'
					)}
				>
					{activeItem ? (
						<p className='text-sm text-gray-600 leading-relaxed'>{activeItem?.description}</p>
					) : (
						<p>Вас что то интересует ?</p>
					)}
					{variant === 'green' && (
						<Image src={FaqIcon} alt='FaqIcon' className='w-6 h-6 mt-1 shrink-0' />
					)}
				</div>
			</div>
		</section>
	);
};
