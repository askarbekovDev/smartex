import React, { FC } from 'react';

type StatisticsProps = {
	title: string;
	subTitle: string;
};

export const StatisticsWrapper: FC<StatisticsProps> = ({ title, subTitle }) => {
	return (
		<div className='w-fit h-fit border-1 border-border p-4 gap-[12px] rounded-[20px] whitespace-nowrap bg-white'>
			<h2 className='h2'>{title}</h2>
			<h4 className='bodyLarge'>{subTitle}</h4>
		</div>
	);
};
