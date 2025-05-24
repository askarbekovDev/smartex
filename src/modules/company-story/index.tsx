'use client';

import { WhatWeDoCard } from '@/components/WhatWeDoCard';
import { ToggleButton } from '@/UI/ToglleButton';
import {
	companyHystoryContent,
	ourMissionContent,
	overseasWarehousesContent,
} from '@/utils/constants/headerNav';
import { FC, useState } from 'react';
import { WhatWeDoBlockContType } from '../smartex-team/types';

export const CompanyStorySection: FC = () => {
	const [content, setContent] = useState<WhatWeDoBlockContType>('История компании');

	const contentToAppear =
		content === 'История компании'
			? companyHystoryContent
			: content === 'Наша миссия'
			? ourMissionContent
			: overseasWarehousesContent;

	return (
		<section className='container'>
			<div className='flex justify-between pt-[100px] w1050:pt-15 w1050:flex-col-reverse w850:pt-20'>
				<h2 className='sectionTitle w1050:pt-10'>{content}</h2>
				<ToggleButton
					buttons={['История компании', 'Наша миссия', 'Зарубежные склады'] as const}
					setState={setContent}
				/>
			</div>
			<div className='flex items-center justify-between w-full gap-6 pt-10 w850:gap-4 w750:flex-wrap w750:justify-center w850:pt-6'>
				{contentToAppear.map((el, idx) => (
					<WhatWeDoCard title={el.title} text={el.text} image={el.image} key={idx} />
				))}
			</div>
		</section>
	);
};
