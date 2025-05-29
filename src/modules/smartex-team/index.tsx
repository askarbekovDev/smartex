'use client';

import { ToggleButton } from '@/UI';
import {
	employeesContent,
	smartexTeamContent,
	socialResponsibilityContent,
} from '@/utils/constants';
import React, { FC, useState } from 'react';
import { OurEmployees, OurTeam, SocialResponsibility } from './components';

export const SmartexTeam: FC = () => {
	const [content, setContent] = useState<SmartexTeamContentType>('Наша команда');

	const sectionTitle =
		content === 'Наша команда'
			? 'Наша команда SMARTEX'
			: content === 'Сотрудники'
			? 'Команда SMARTEX'
			: 'Забота и поддержка с \n SMARTEX';

	const contentToAppear =
		content === 'Наша команда'
			? smartexTeamContent
			: content === 'Сотрудники'
			? employeesContent
			: socialResponsibilityContent;

	return (
		<section className='container'>
			<div className='flex justify-between pt-[100px] w1050:pt-15 w1050:flex-col-reverse w850:pt-20'>
				<h2 className='sectionTitle pr-2 whitespace-pre-line w1050:pt-10'>{sectionTitle}</h2>
				<ToggleButton
					buttons={['Наша команда', 'Сотрудники', 'Социальная ответственность'] as const}
					defaultWidth={145}
					setState={setContent}
				/>
			</div>
			</div>
			</div>
			<p className='bodyText pt-4 max-w-[558px] w-full'>{contentToAppear}</p>
			<div className='pt-17 w1150:pt-10 w850:pt-6'>
				<OurTeam content={content} />
				<OurEmployees content={content} />
				<SocialResponsibility content={content} />
			</div>
		</section>
	);
};
