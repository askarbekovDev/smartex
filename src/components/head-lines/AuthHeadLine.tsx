import React from 'react';
import { AuthHeadLinePropsType } from './head-line.types';

export const AuthHeadLine = ({ title, firstSubtitle, secondSubtitle }: AuthHeadLinePropsType) => {
	return (
		<div className='text-center w750:mt-5'>
			<h3 className='h3 text-primary_text'>{title}</h3>
			{firstSubtitle && <p className='bodyText text-primary_text mt-[16px]'>{firstSubtitle}</p>}
			{secondSubtitle && <p className='bodyText text-primary_text'>{secondSubtitle}</p>}
		</div>
	);
};
