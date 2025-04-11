'use client';

import { ToggleButton, WhatWeDoCard } from '@/UI';
import {
	companyHystoryContent,
	ourMissionContent,
	overseasWarehousesContent,
} from '@/utils/constants';
import React, { FC, useState } from 'react';

type Content = 'История компании' | 'Наша миссия' | 'Зарубежные склады';

export const WhatWeDoBlock: FC = () => {
	const [content, setContent] = useState<Content>('История компании');

	const contentToAppear =
		content === 'История компании'
			? companyHystoryContent
			: content === 'Наша миссия'
			? ourMissionContent
			: overseasWarehousesContent;

	return (
		<div className='container'>
			<div className='flex justify-between pt-[100px] w1050:pt-15 w1050:flex-col-reverse w850:pt-20'>
				<span className='h2 w1050:pt-10 w1050:text-[32px]! w850:text-[28px]! w850:leading-[30px]! w550:text-[24px]!'>
					{content}
				</span>
				<ToggleButton
					buttons={['История компании', 'Наша миссия', 'Зарубежные склады'] as const}
					defaultWidth={165}
					setState={setContent}
				/>
			</div>
			<div className='flex items-center justify-between w-full gap-6 pt-10 w850:gap-4 w750:flex-wrap w750:justify-center w850:pt-6'>
				{contentToAppear.map((el, idx) => (
					<WhatWeDoCard title={el.title} text={el.text} image={el.image} key={idx} />
				))}
			</div>
		</div>
	);
};
