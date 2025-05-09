'use client';

import { SelectFaq } from '@/UI/select-faq';
import React, { useRef, useState } from 'react';
import { PROHIBITED_GOODS } from '../../consts/prohibitedGoods';
import { ScrollBar } from '@/UI/scroll-bar/ScrollBar';
import clsx from 'clsx';
import { ProhibitedGoodContent } from '../prohibited-good-content/ProhibitedGoodContent';
import { ProhibitedGoodMobileContent } from '../prohibited-good-mobile-content/ProhibitedGoodMobileContent';

export const ProhibitedGoods = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [scrollPercent, setScrollPercent] = useState(0);
	const scrollRef = useRef<HTMLDivElement>(null);

	const activeGood = activeIndex !== null ? PROHIBITED_GOODS[activeIndex] : undefined;

	return (
		<div className='pt-[140px] w1150:pt-[120px] w850:pt-[100px] w650:pt-15'>
			<h2 className='sectionTitle text-primary_text'>Запрещенные товары</h2>
			<div className='min-h-[400px] w-full mt-10'>
				<div className='flex w750:block justify-between gap-6'>
					<div
						ref={scrollRef}
						className={clsx(
							'flex flex-col gap-4 w-full max-h-[500px] max-w-[317px] w750:max-w-full overflow-y-auto hide-native-scrollbar'
						)}
					>
						{PROHIBITED_GOODS.map((question, index) => (
							<>
								<SelectFaq
									key={index}
									index={index}
									description={''}
									activeIndex={activeIndex}
									title={question.question}
									scrollRef={scrollRef}
									setScrollPercent={setScrollPercent}
									setActiveIndex={setActiveIndex}
									variant='red'
								/>
								{activeIndex === index && (
									<ProhibitedGoodMobileContent
										title={question.question}
										subtitles={question.subtitles}
									/>
								)}
							</>
						))}
					</div>
					{PROHIBITED_GOODS.length > 7 ? <ScrollBar scrollPercent={scrollPercent} /> : ''}
					<div className='w-full'>
						{activeGood && <ProhibitedGoodContent activeGood={activeGood} />}
					</div>
				</div>
			</div>
		</div>
	);
};
