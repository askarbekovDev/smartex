import { ToggleButton } from '@/UI';
import React, { FC } from 'react';

export const WhatDoWeDoBlock: FC = () => {
	return (
		<div className='container'>
			<div className='flex justify-between pt-[100px]'>
				<span className='h2'>Что мы делаем?</span>
				<ToggleButton
					buttons={['История компании', 'Наша миссия', 'Зарубежные склады']}
					defaultWidth={165}
				/>
			</div>
		</div>
	);
};
