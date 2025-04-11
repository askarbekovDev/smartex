'use client';

import { Pagination, ToggleButton } from '@/UI';
import {
	employeesContent,
	smartexTeamContent,
	socialResponsibilityContent,
} from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { CornerSmoother } from '../../../public/icons';

type Content = 'Наша команда' | 'Сотрудники' | 'Социальная ответственность';

export const SmartexTeam: FC = () => {
	const [content, setContent] = useState<Content>('Наша команда');

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
		<div className='container'>
			<div className='flex justify-between pt-[100px] w1050:pt-15 w1050:flex-col-reverse w850:pt-20'>
				<h2 className='sectionTitle pr-2 whitespace-pre-line w1050:pt-10'>{sectionTitle}</h2>
				<ToggleButton
					buttons={['Наша команда', 'Сотрудники', 'Социальная ответственность'] as const}
					defaultWidth={145}
					setState={setContent}
				/>
			</div>
			<p className='bodyText pt-4 max-w-[558px] w-full'>{contentToAppear}</p>

			<div
				className='h-[700px] rounded-[15px] overflow-hidden flex items-center justify-center mt-17
			               w1050:h-[550px] w950:h-[500px] w850:h-[440px] w750:h-[380px] w650:h-[330px] w550:h-[290px] w450:h-[260px] w370:h-[240px]'
			>
				<Image
					alt='The Ship'
					src='/images/our-team.jpeg'
					width={1140}
					height={600}
					className='h-full w-full object-cover'
				/>
			</div>
			<div className='w-full relative'>
				<div
					className='absolute w-fit right-[-1px] bottom-[-1px] pt-4 px-4 pb-px rounded-t-[40px] bg-background
           left-1/2 -translate-x-1/2 w950:rounded-t-4xl w950:pt-3 w750:pt-2'
				>
					<Pagination />
					<div className='absolute left-[-17px] bottom-px w-[17px] h-[17px] rotate-180'>
						<CornerSmoother />
					</div>
					<div className='absolute bottom-px right-[-17px] w-[17px] h-[17px] rotate-270'>
						<CornerSmoother />
					</div>
				</div>
			</div>
		</div>
	);
};
