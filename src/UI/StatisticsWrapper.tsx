import React, { FC } from 'react';

type StatisticsProps = {
	title: string;
	subTitle: string;
};

export const StatisticsWrapper: FC<StatisticsProps> = ({ title, subTitle }) => {
	return (
		<div className='w-fit h-fit border-1 border-border p-4 rounded-[20px] whitespace-nowrap bg-white 
                    w1150:rounded-[12px] w1150:p-2'>
			<h2 className='h2 pb-[12px] w1150:text-[28px]! w1150:leading-[30px]! w1150:pb-2'>{title}</h2>
			<h4 className='bodyLarge text-secondary-text w1150:text-[16px]!'>{subTitle}</h4>
		</div>
	);
};
