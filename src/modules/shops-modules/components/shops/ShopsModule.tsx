'use client';
import { ScrollBar } from '@/UI/scroll-bar/ScrollBar';
import { SelectFaq } from '@/UI/select-faq';
import { ToggleButton } from '@/UI/ToglleButton';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { SHOPS_ITEMS } from '../../consts/shopsItem';
import CategorySelectStyled from '../category-select/CategorySelectStyled';
import { ShopsItemContent } from '../shops-item-content/ShopsItemContent';

export const SmartexShops = () => {
	const [state, setState] = useState('США');
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [scrollPercent, setScrollPercent] = useState(0);
	const scrollRef = useRef<HTMLDivElement>(null);

	const activeGood = activeIndex !== null ? SHOPS_ITEMS[activeIndex] : undefined;
	return (
		<div className='container'>
			<div className='py-10'>
				<div className='flex justify-between my-8 pt-[100px] w1050:pt-15 w1050:flex-col-reverse w850:pt-20'>
					<h2 className='sectionTitle w1050:pt-10'>Магазины SMARTEX</h2>
					<ToggleButton buttons={['США', 'Турция', 'Китай'] as const} setState={setState} />
				</div>
				<div className='flex w750:hidden justify-between gap-6'>
					<div
						ref={scrollRef}
						className='flex flex-col gap-4 w-full max-h-[500px] max-w-[317px] w750:max-w-full overflow-y-auto hide-native-scrollbar'
					>
						{SHOPS_ITEMS.map((question, index) => (
							<React.Fragment key={index}>
								<SelectFaq
									key={index}
									index={index}
									description={''}
									activeIndex={activeIndex}
									title={question.title}
									image={question.image}
									scrollRef={scrollRef}
									setScrollPercent={setScrollPercent}
									setActiveIndex={setActiveIndex}
									variant='orange'
								/>
							</React.Fragment>
						))}
					</div>
					{SHOPS_ITEMS.length > 7 ? <ScrollBar scrollPercent={scrollPercent} /> : ''}
					<div className='w-full'>
						{activeGood && <ShopsItemContent activeCategory={activeGood} />}
					</div>
				</div>
				<div className='hidden w750:block w-full'>
					<CategorySelectStyled
						setActiveIndex={setActiveIndex}
						activeIndex={activeIndex}
						image={activeGood?.image}
						title={activeGood?.title}
					/>
				</div>
				<div className='hidden w750:block'>
					<div className='grid mt-4 grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))] gap-4 rounded-[18px] w-full'>
						{activeGood?.options.map((item) => (
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
		</div>
	);
};
