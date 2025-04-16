import clsx from 'clsx';
import React, { FC } from 'react';

type StatisticsProps = {
	title: string;
	subTitle: string;
	textCenter?: boolean;
	wFull?: boolean;
};

export const StatisticsWrapper: FC<StatisticsProps> = ({ title, subTitle, textCenter, wFull }) => {
	return (
		<div
			className={clsx(
				`h-fit border-1 border-border p-4 rounded-[20px] whitespace-nowrap bg-white 
         w1150:rounded-[12px] w1150:p-2`,
				{ 'text-center': textCenter, 'w-full': wFull, 'w-fit': !wFull }
			)}
		>
			<h2
				className='h2 pb-[12px] w1150:text-[28px]! w1150:leading-[30px]! w1150:pb-2
                   w550:text-[24px]! w550:leading-[26px]! w550:pb-0'
			>
				{title}
			</h2>
			<h4 className='bodyLarge text-secondary_text w1150:text-[16px]!'>{subTitle}</h4>
		</div>
	);
};
